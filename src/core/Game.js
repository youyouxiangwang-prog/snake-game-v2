/**
 * Game.js - Main Game Orchestrator with FSM
 * Based on SPEC.md Section 5 and 6
 * 
 * This is the main controller that coordinates all game systems.
 * States: BOOT, PRELOADER, MENU, PLAYING, PAUSED, GAME_OVER
 */

import * as THREE from 'three';
import { StateMachine, GameState } from './StateMachine.js';
import { GameLoop, GAME_LOOP_CONFIG } from './GameLoop.js';
import { SceneManager } from '../3d/SceneManager.js';
import { Particles } from '../3d/Particles.js';
import { Snake } from '../entities/Snake.js';
import { Food } from '../entities/Food.js';
import { Obstacle } from '../entities/Obstacle.js';
import { InputSystem } from '../systems/InputSystem.js';
import { CollisionSystem } from '../systems/CollisionSystem.js';
import { HUD } from '../ui/HUD.js';
import { Menu } from '../ui/Menu.js';

// Make THREE available globally
window.THREE = THREE;

// World Configuration (SPEC Section 2.1)
export const WORLD_CONFIG = {
    size: 100,
    cellSize: 1,
    gridSize: 100,
    startPosition: { x: 0, z: 0 },
    initialSnakeLength: 5
};

// Collision Bounds (SPEC Section 2.3)
export const COLLISION_CONFIG = {
    bounds: { minX: -48, maxX: 48, minZ: -48, maxZ: 48 },
    headRadius: 0.6,
    segmentRadius: 0.5,
    foodRadius: 0.4,
    eatDistance: 0.8
};

// Movement Configuration (SPEC Section 2.2)
export const MOVEMENT_CONFIG = {
    tickRate: 15, // Hz
    moveDistance: 1,
    moveInterval: 0.067, // seconds (15 Hz)
    segmentSpacing: 0.8,
    lerpFactor: 0.3,
    cameraLerp: 0.05
};

// Score Configuration (SPEC Section 2.6)
export const SCORE_CONFIG = {
    foodValue: 10,
    speedBonus: 2,
    obstacleBonus: 5,
    storageKey: 'snakeV3_highScore'
};

// Game Modes
export const GameMode = {
    CLASSIC: 'CLASSIC',
    TIME: 'TIME',
    OBSTACLE: 'OBSTACLE'
};

// Time mode config
export const TIME_MODE_CONFIG = {
    duration: 60 // seconds
};

export class Game {
    constructor() {
        console.log('[Game] Initializing Snake V3...');
        
        // State Machine
        this.stateMachine = new StateMachine();
        
        // Game state
        this.mode = GameMode.CLASSIC;
        this.score = 0;
        this.highScores = this.loadHighScores();
        this.timeLeft = TIME_MODE_CONFIG.duration;
        
        // Expose configs for tests
        this.collisionConfig = COLLISION_CONFIG;
        this.worldSize = WORLD_CONFIG.size;
        this.cellSize = WORLD_CONFIG.cellSize;
        this.scoringConfig = { eatFood: SCORE_CONFIG.foodValue };
        
        // Game objects
        this.snake = null;
        this.food = null;
        this.obstacles = null;
        
        // Systems
        this.inputSystem = null;
        this.collisionSystem = null;
        
        // UI
        this.hud = null;
        this.menu = null;
        this.sceneManager = null;
        
        // Effects
        this.particles = null;
        
        // Game loop
        this.gameLoop = new GameLoop();
        this.gameLoop.onFixedUpdate = this.fixedUpdate.bind(this);
        this.gameLoop.onRender = this.render.bind(this);
        this.gameLoop.onUpdate = this.update.bind(this);
        
        // Expose to window for debugging and tests
        window.game = this;
        
        // Initialize
        this.boot();
    }

    /**
     * Boot sequence - initialize systems and load resources
     */
    boot() {
        this.stateMachine.transition(GameState.BOOT);
        
        // Initialize 3D scene
        this.sceneManager = new SceneManager('canvasContainer');
        
        // Initialize particle system
        this.particles = new Particles(this.sceneManager.getScene());
        
        // Initialize UI
        this.hud = new HUD();
        this.menu = new Menu(this);
        
        // Initialize game objects
        this.snake = new Snake(this.sceneManager);
        this.food = new Food(this.sceneManager);
        this.obstacles = new Obstacle(this.sceneManager);
        
        // Initialize systems
        this.inputSystem = new InputSystem(this.snake, this);
        this.collisionSystem = new CollisionSystem(this.snake, this.food, this.obstacles);
        
        // Show menu
        this.stateMachine.transition(GameState.MENU);
        this.menu.show();
        
        // Start game loop
        this.gameLoop.start();
        
        console.log('[Game] Boot complete');
    }

    /**
     * Start a new game
     */
    startGame() {
        // Reset state
        this.stateMachine.transition(GameState.PLAYING);
        this.score = 0;
        this.timeLeft = TIME_MODE_CONFIG.duration;
        
        // Reset snake
        this.snake.reset();
        
        // Reset food and spawn initial food
        this.food.clear();
        this.food.spawn(this.snake.getHeadPosition(), []);
        
        // Clear obstacles and spawn if in OBSTACLE mode
        this.obstacles.clear();
        if (this.mode === GameMode.OBSTACLE) {
            for (let i = 0; i < 5; i++) {
                this.obstacles.spawn(this.snake.getHeadPosition(), this.snake.getBodyPositions());
            }
        }
        
        // Update UI
        this.hud.updateScore(`分数: ${this.score}`);
        this.hud.updateTime(this.mode === GameMode.TIME ? this.timeLeft : null);
        this.hud.show();
        this.menu.hide();
        
        console.log(`[Game] Game started in ${this.mode} mode`);
    }

    /**
     * Toggle pause state
     */
    togglePause() {
        if (this.stateMachine.is(GameState.PLAYING)) {
            this.pause();
        } else if (this.stateMachine.is(GameState.PAUSED)) {
            this.resume();
        }
    }

    /**
     * Pause the game
     */
    pause() {
        this.stateMachine.transition(GameState.PAUSED);
        this.gameLoop.pause();
        this.menu.showPause();
        console.log('[Game] Paused');
    }

    /**
     * Resume from pause
     */
    resume() {
        this.stateMachine.transition(GameState.PLAYING);
        this.gameLoop.resume();
        this.menu.hidePause();
        console.log('[Game] Resumed');
    }

    /**
     * Show game over
     */
    gameOver() {
        this.stateMachine.transition(GameState.GAME_OVER);
        
        // Trigger death effects
        this.triggerDeathEffects();
        
        // Check high score
        const isNewRecord = this.checkAndSaveHighScore();
        
        // Update UI after a short delay for effects
        setTimeout(() => {
            this.menu.showGameOver(this.score, isNewRecord);
        }, 800);
        
        console.log(`[Game] Game Over - Score: ${this.score}`);
    }
    
    /**
     * Trigger death effects - screen shake, flash, snake explosion
     */
    triggerDeathEffects() {
        // Screen shake
        document.body.classList.add('screen-shake');
        setTimeout(() => {
            document.body.classList.remove('screen-shake');
        }, 400);
        
        // Death flash
        const flash = document.createElement('div');
        flash.className = 'death-flash';
        document.body.appendChild(flash);
        setTimeout(() => {
            if (flash.parentNode) flash.parentNode.removeChild(flash);
        }, 500);
        
        // Snake fragment explosion
        this.createSnakeExplosion();
    }
    
    /**
     * Create snake fragment explosion effect
     */
    createSnakeExplosion() {
        const container = document.createElement('div');
        container.className = 'snake-death-explosion';
        document.body.appendChild(container);
        
        const snakePositions = this.snake.getBodyPositions();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        snakePositions.forEach((pos, i) => {
            const fragment = document.createElement('div');
            fragment.className = 'snake-fragment';
            
            // Random direction for explosion
            const angle = (Math.PI * 2 * i) / snakePositions.length + Math.random() * 0.5;
            const distance = 100 + Math.random() * 150;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            fragment.style.left = `${centerX + (Math.random() - 0.5) * 100}px`;
            fragment.style.top = `${centerY + (Math.random() - 0.5) * 100}px`;
            fragment.style.setProperty('--tx', `${tx}px`);
            fragment.style.setProperty('--ty', `${ty}px`);
            fragment.style.animationDelay = `${Math.random() * 0.1}s`;
            
            container.appendChild(fragment);
        });
        
        // Clean up after animation
        setTimeout(() => {
            if (container.parentNode) container.parentNode.removeChild(container);
        }, 1000);
    }

    /**
     * Return to menu
     */
    returnToMenu() {
        this.stateMachine.transition(GameState.MENU);
        this.menu.show();
        this.hud.hide();
        
        // Reset snake visuals
        this.snake.reset();
        
        console.log('[Game] Returned to menu');
    }

    /**
     * Set game mode
     */
    setMode(mode) {
        if (Object.values(GameMode).includes(mode)) {
            this.mode = mode;
            console.log(`[Game] Mode set to ${mode}`);
        }
    }

    /**
     * Fixed update - runs at fixed timestep (5 Hz)
     * This is where game logic happens
     */
    fixedUpdate(deltaTime) {
        if (!this.stateMachine.is(GameState.PLAYING)) return;
        
        // Update time in TIME mode
        if (this.mode === GameMode.TIME) {
            this.timeLeft -= deltaTime;
            this.hud.updateTime(this.timeLeft);
            
            if (this.timeLeft <= 0) {
                this.timeLeft = 0;
                this.gameOver();
                return;
            }
        }
        
        // Update mouse-following direction
        this.inputSystem.updateMouseDirection();
        
        // Get input direction (keyboard/mouse/touch)
        const direction = this.inputSystem.consumeDirection();
        if (direction) {
            this.snake.setDirection(direction);
        }
        
        // Move snake
        const hitWall = this.snake.move();
        const hitSelf = this.snake.checkSelfCollision();
        
        // Check collisions
        if (hitWall) {
            console.log('[Game] Hit wall');
            this.gameOver();
            return;
        }
        
        if (hitSelf) {
            console.log('[Game] Self collision');
            this.gameOver();
            return;
        }
        
        // Check obstacle collision in OBSTACLE mode
        if (this.mode === GameMode.OBSTACLE) {
            if (this.collisionSystem.checkObstacleCollision(this.snake.getHeadPosition())) {
                console.log('[Game] Hit obstacle');
                this.gameOver();
                return;
            }
        }
        
        // Check food collision
        if (this.collisionSystem.checkFoodCollision(this.snake.getHeadPosition())) {
            this.eatFood();
        }
        
        // Spawn new food if needed
        if (this.food.needsSpawn()) {
            this.food.spawn(this.snake.getHeadPosition(), this.snake.getBodyPositions());
        }
        
        // Spawn new obstacle every 30 points in OBSTACLE mode
        if (this.mode === GameMode.OBSTACLE && this.score > 0 && this.score % 30 === 0) {
            this.obstacles.spawn(this.snake.getHeadPosition(), this.snake.getBodyPositions());
        }
    }

    /**
     * Handle eating food
     */
    eatFood() {
        this.score += SCORE_CONFIG.foodValue;
        this.hud.updateScore(`分数: ${this.score}`);
        
        // Grow snake
        this.snake.grow();
        
        // Particle burst at food position
        const foodPos = this.food.getLastEatenPosition ? this.food.getLastEatenPosition() : null;
        if (foodPos) {
            this.particles.burst(foodPos, 0x00ff88);
            this.createScoreFlyup(foodPos, `+${SCORE_CONFIG.foodValue}`);
        }
        
        // Camera effects: shake + FOV boost
        this.sceneManager.triggerShake(0.25);
        this.sceneManager.boostFov();
        setTimeout(() => this.sceneManager.resetFov(), 150);
        
        // Score pop animation
        this.hud.animateScorePop();
        
        // Speed up in TIME mode every 50 points
        if (this.mode === GameMode.TIME && this.score % 50 === 0) {
            this.snake.increaseSpeed();
        }
    }
    
    /**
     * Create score flyup animation
     */
    createScoreFlyup(position, text) {
        const flyup = document.createElement('div');
        flyup.className = 'score-flyup';
        flyup.textContent = text;
        
        // Project 3D position to screen
        const scene = this.sceneManager.getScene();
        const camera = this.sceneManager.getCamera();
        
        const vector = new THREE.Vector3(position.x, position.y + 1, position.z);
        vector.project(camera);
        
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;
        
        flyup.style.left = x + 'px';
        flyup.style.top = y + 'px';
        
        document.body.appendChild(flyup);
        
        setTimeout(() => {
            if (flyup.parentNode) {
                flyup.parentNode.removeChild(flyup);
            }
        }, 800);
    }

    /**
     * Variable update - runs every frame. 
     * ONLY does animation (tongue, particles). Does NOT update positions.
     */
    update(deltaTime) {
        // Always update particles
        if (this.particles) {
            this.particles.update(deltaTime);
        }
        
        // Always update ambient effects
        if (this.sceneManager) {
            this.sceneManager.updateParticles(deltaTime);
        }
        
        if (!this.stateMachine.is(GameState.PLAYING)) return;
        
        // Animation only - no position updates here
        this.snake.updateVisuals(deltaTime);
        
        // Update food animation
        this.food.update(deltaTime);
        
        // Update obstacles animation
        this.obstacles.update(deltaTime);
        
        // Update camera
        this.sceneManager.updateCamera(
            this.snake.getHeadPosition(),
            this.snake.getDirection()
        );
    }

    /**
     * Render - runs every frame with interpolation alpha.
     * Sets mesh positions using alpha for smooth interpolation between ticks.
     */
    render(alpha) {
        // Update snake trail particles
        this.snake.updateTrailGeometry();
        
        // Render snake with interpolation (sets actual mesh positions)
        this.snake.updateMeshesRender(alpha);
        
        // Render food (uses its own animation)
        this.food.updateInterpolation(alpha);
        
        // Render scene with post-processing
        this.sceneManager.render();
    }

    /**
     * Check and save high score
     */
    checkAndSaveHighScore() {
        const prevHigh = this.highScores[this.mode] || 0;
        if (this.score > prevHigh) {
            this.highScores[this.mode] = this.score;
            this.saveHighScores();
            return true;
        }
        return false;
    }

    /**
     * Load high scores from localStorage
     */
    loadHighScores() {
        try {
            const stored = localStorage.getItem(SCORE_CONFIG.storageKey);
            return stored ? JSON.parse(stored) : {};
        } catch (e) {
            console.error('[Game] Failed to load high scores:', e);
            return {};
        }
    }

    /**
     * Save high scores to localStorage
     */
    saveHighScores() {
        try {
            localStorage.setItem(SCORE_CONFIG.storageKey, JSON.stringify(this.highScores));
        } catch (e) {
            console.error('[Game] Failed to save high scores:', e);
        }
    }

    /**
     * Get high score for current mode
     */
    getHighScore() {
        return this.highScores[this.mode] || 0;
    }

    /**
     * Show high scores dialog
     */
    showHighScores() {
        const classic = this.highScores[GameMode.CLASSIC] || 0;
        const time = this.highScores[GameMode.TIME] || 0;
        const obstacle = this.highScores[GameMode.OBSTACLE] || 0;
        
        alert(`🏆 最高分\n🎮 经典: ${classic}\n⏱️ 限时: ${time}\n🧱 障碍: ${obstacle}`);
    }

    /**
     * Get current state
     */
    get state() {
        return this.stateMachine.getState();
    }

    /**
     * Get state machine for tests
     */
    getStateMachine() {
        return this.stateMachine;
    }
}
