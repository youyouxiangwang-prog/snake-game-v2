// Snake Game V3 - Main Game Class
import * as THREE from 'three';
import { Scene } from '../3d/Scene.js';
import { Snake } from './Snake.js';
import { Food } from './Food.js';
import { Obstacle } from './Obstacle.js';
import { PowerUp, POWERUP_TYPES } from './PowerUp.js';
import { SkinsManager } from './Skins.js';
import { Input } from '../utils/Input.js';

export class Game {
    constructor() {
        // Game state
        this.state = 'menu'; // menu, playing, paused, gameOver
        this.mode = 'CLASSIC';
        this.score = 0;
        this.timeLeft = 60;
        this.lastTime = 0;
        
        // Collision bounds per SPEC Section 9.3
        this.collisionConfig = {
            bounds: { minX: -48, maxX: 48, minZ: -48, maxZ: 48 }
        };
        
        // Score config per SPEC Section 11.1
        this.scoringConfig = {
            eatFood: 10
        };
        
        // World config
        this.worldSize = 100;
        this.cellSize = 1;
        
        // Initialize 3D scene
        this.scene3d = new Scene('canvasContainer');
        
        // Initialize game objects
        this.snake = new Snake(this.scene3d);
        this.food = new Food(this.scene3d);
        this.obstacles = new Obstacle(this.scene3d);
        this.powerUp = new PowerUp(this.scene3d);
        this.skinsManager = new SkinsManager();
        
        // Input handler
        this.input = new Input(this.snake);
        
        // UI elements
        this.ui = {
            menu: document.getElementById('menuOverlay'),
            gameOver: document.getElementById('gameOverOverlay'),
            pause: document.getElementById('pauseOverlay'),
            score: document.getElementById('scoreDisplay'),
            time: document.getElementById('timeDisplay'),
            mode: document.getElementById('modeDisplay'),
            finalScore: document.getElementById('finalScore'),
            newRecord: document.getElementById('newRecord')
        };
        
        // Show menu
        this.showMenu();
        
        // Start render loop
        this.animate = this.animate.bind(this);
        requestAnimationFrame(this.animate);
    }
    
    setMode(mode) {
        this.mode = mode;
        const modeNames = { CLASSIC: '🎮 经典', TIME: '⏱️ 限时', OBSTACLE: '🧱 障碍' };
        this.ui.mode.textContent = modeNames[mode] || mode;
    }
    
    startGame() {
        // Reset state
        this.state = 'playing';
        this.score = 0;
        this.timeLeft = 60;
        this.lastTime = performance.now();
        
        // Reset snake
        this.snake.reset();
        
        // Reset food
        this.food.spawn(this.snake.getHeadPosition(), []);
        
        // Clear obstacles
        this.obstacles.clear();
        this.powerUp.clear();
        if (this.mode === 'OBSTACLE') {
            for (let i = 0; i < 5; i++) {
                this.obstacles.spawn(this.snake.getHeadPosition(), []);
            }
        }
        
        // Update UI
        this.ui.score.textContent = `分数: ${this.score}`;
        this.ui.menu.classList.add('hidden');
        this.ui.gameOver.classList.add('hidden');
        this.ui.pause.classList.add('hidden');
        this.ui.time.textContent = this.mode === 'TIME' ? `⏱️ ${Math.ceil(this.timeLeft)}s` : '';
    }
    
    showMenu() {
        this.state = 'menu';
        this.ui.menu.classList.remove('hidden');
        this.ui.gameOver.classList.add('hidden');
        this.ui.pause.classList.add('hidden');
    }
    
    showGameOver() {
        this.state = 'gameOver';
        
        // Check high score - use snakeV3_highscores per SPEC Section 11.2
        const key = 'snakeV3_highscores';
        const stored = localStorage.getItem(key);
        const highScores = stored ? JSON.parse(stored) : {};
        const prev = highScores[this.mode] || 0;
        if (this.score > prev) {
            highScores[this.mode] = this.score;
            localStorage.setItem(key, JSON.stringify(highScores));
            this.ui.newRecord.classList.remove('hidden');
        } else {
            this.ui.newRecord.classList.add('hidden');
        }
        
        this.ui.finalScore.textContent = this.score;
        this.ui.gameOver.classList.remove('hidden');
    }
    
    showPause() {
        if (this.state !== 'playing') return;
        this.state = 'paused';
        this.ui.pause.classList.remove('hidden');
    }
    
    resume() {
        if (this.state !== 'paused') return;
        this.state = 'playing';
        this.lastTime = performance.now();
        this.ui.pause.classList.add('hidden');
    }
    
    showHighScores() {
        const key = 'snakeV3_highscores';
        const stored = localStorage.getItem(key);
        const highScores = stored ? JSON.parse(stored) : {};
        const classic = highScores.CLASSIC || 0;
        const time = highScores.TIME || 0;
        const obstacle = highScores.OBSTACLE || 0;
        alert(`🏆 最高分\n🎮 经典: ${classic}\n⏱️ 限时: ${time}\n🧱 障碍: ${obstacle}`);
    }
    
    handleDirection(dir) {
        if (this.state !== 'playing') return;
        this.input.setDirection(dir);
    }
    
    handleFoodCollision() {
        // Check food collision
        if (this.food.checkCollision(this.snake.getHeadPosition())) {
            this.addScore(this.scoringConfig.eatFood);
            this.snake.grow();
            this.food.spawn(this.snake.getHeadPosition(), this.snake.getBodyPositions());
        }
    }
    
    addScore(points) {
        this.score += points;
        this.ui.score.textContent = `分数: ${this.score}`;
        
        // Score pop animation
        this.ui.score.classList.remove('pop');
        void this.ui.score.offsetWidth;
        this.ui.score.classList.add('pop');
        
        // Spawn new obstacle in obstacle mode
        if (this.mode === 'OBSTACLE' && this.score % 30 === 0) {
            this.obstacles.spawn(this.snake.getHeadPosition(), this.snake.getBodyPositions());
        }
        
        // Speed up in time mode
        if (this.mode === 'TIME' && this.score % 50 === 0) {
            this.snake.increaseSpeed();
        }
    }
    
    triggerScreenShake() {
        const container = document.getElementById('canvasContainer');
        container.classList.remove('screen-shake');
        void container.offsetWidth;
        container.classList.add('screen-shake');
        setTimeout(() => container.classList.remove('screen-shake'), 300);
    }
    
    animate(time) {
        requestAnimationFrame(this.animate);
        
        const deltaTime = (time - this.lastTime) / 1000;
        this.lastTime = time;
        
        if (this.state === 'playing') {
            // Update time in time mode
            if (this.mode === 'TIME') {
                this.timeLeft -= deltaTime;
                this.ui.time.textContent = `⏱️ ${Math.ceil(Math.max(0, this.timeLeft))}s`;
                if (this.timeLeft <= 0) {
                    this.showGameOver();
                }
            }
            
            // Update snake
            const hitWall = this.snake.update(deltaTime, this.worldSize);
            const hitSelf = this.snake.checkSelfCollision();
            const hitObstacle = this.mode === 'OBSTACLE' && 
                               this.obstacles.checkCollision(this.snake.getHeadPosition());
            
            if (hitWall || hitSelf || hitObstacle) {
                this.triggerScreenShake();
                this.showGameOver();
            }
            
            // Check food collision
            if (this.food.checkCollision(this.snake.getHeadPosition())) {
                this.addScore(this.scoringConfig.eatFood);
                this.snake.grow();
                this.food.spawn(this.snake.getHeadPosition(), this.snake.getBodyPositions());
            }
            
            // Check power-up collision
            const powerUpType = this.powerUp.checkCollision(this.snake.getHeadPosition());
            if (powerUpType) {
                this.powerUp.activateEffect(powerUpType, this);
            }
            
            // Update camera
            this.scene3d.updateCamera(this.snake.getHeadPosition(), this.snake.getDirection());
        }
        
        // Always update visuals
        this.snake.updateVisuals(time);
        this.food.update(time);
        this.powerUp.update(time);
        
        // Render
        this.scene3d.render();
    }
}
