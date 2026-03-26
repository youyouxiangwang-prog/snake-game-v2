// Snake Game V3 - Main Game Class
import * as THREE from 'three';
import { Scene } from '../3d/Scene.js';
import { Snake } from './Snake.js';
import { Food } from './Food.js';
import { Obstacle } from './Obstacle.js';
import { Input } from '../utils/Input.js';

export class Game {
    constructor() {
        // Game state
        this.state = 'MENU'; // MENU, PLAYING, PAUSED, GAME_OVER
        this.mode = 'classic';
        this.score = 0;
        this.timeLeft = 60;
        this.lastTime = 0;
        
        // World config
        this.worldSize = 100;
        this.cellSize = 1;
        
        // Initialize 3D scene
        this.scene3d = new Scene('canvasContainer');
        
        // Initialize game objects
        this.snake = new Snake(this.scene3d);
        this.food = new Food(this.scene3d);
        this.obstacles = new Obstacle(this.scene3d);
        
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
        const modeNames = { classic: '🎮 经典', time: '⏱️ 限时', obstacle: '🧱 障碍' };
        this.ui.mode.textContent = modeNames[mode] || mode;
    }
    
    startGame() {
        // Reset state
        this.state = 'PLAYING';
        this.score = 0;
        this.timeLeft = 60;
        this.lastTime = performance.now();
        
        // Reset snake
        this.snake.reset();
        
        // Reset food
        this.food.spawn(this.snake.getHeadPosition(), []);
        
        // Clear obstacles
        this.obstacles.clear();
        if (this.mode === 'obstacle') {
            for (let i = 0; i < 5; i++) {
                this.obstacles.spawn(this.snake.getHeadPosition(), []);
            }
        }
        
        // Update UI
        this.ui.score.textContent = `分数: ${this.score}`;
        this.ui.menu.classList.add('hidden');
        this.ui.gameOver.classList.add('hidden');
        this.ui.pause.classList.add('hidden');
        this.ui.time.textContent = this.mode === 'time' ? `⏱️ ${Math.ceil(this.timeLeft)}s` : '';
    }
    
    showMenu() {
        this.state = 'MENU';
        this.ui.menu.classList.remove('hidden');
        this.ui.gameOver.classList.add('hidden');
        this.ui.pause.classList.add('hidden');
    }
    
    showGameOver() {
        this.state = 'GAME_OVER';
        
        // Check high score
        const key = `snakeV3_${this.mode}`;
        const prev = parseInt(localStorage.getItem(key) || '0');
        if (this.score > prev) {
            localStorage.setItem(key, this.score.toString());
            this.ui.newRecord.classList.remove('hidden');
        } else {
            this.ui.newRecord.classList.add('hidden');
        }
        
        this.ui.finalScore.textContent = this.score;
        this.ui.gameOver.classList.remove('hidden');
    }
    
    showPause() {
        if (this.state !== 'PLAYING') return;
        this.state = 'PAUSED';
        this.ui.pause.classList.remove('hidden');
    }
    
    resume() {
        if (this.state !== 'PAUSED') return;
        this.state = 'PLAYING';
        this.lastTime = performance.now();
        this.ui.pause.classList.add('hidden');
    }
    
    showHighScores() {
        const classic = localStorage.getItem('snakeV3_classic') || '0';
        const time = localStorage.getItem('snakeV3_time') || '0';
        const obstacle = localStorage.getItem('snakeV3_obstacle') || '0';
        alert(`🏆 最高分\n🎮 经典: ${classic}\n⏱️ 限时: ${time}\n🧱 障碍: ${obstacle}`);
    }
    
    handleDirection(dir) {
        if (this.state !== 'PLAYING') return;
        this.input.setDirection(dir);
    }
    
    addScore(points) {
        this.score += points;
        this.ui.score.textContent = `分数: ${this.score}`;
        
        // Spawn new obstacle in obstacle mode
        if (this.mode === 'obstacle' && this.score % 30 === 0) {
            this.obstacles.spawn(this.snake.getHeadPosition(), this.snake.getBodyPositions());
        }
        
        // Speed up in time mode
        if (this.mode === 'time' && this.score % 50 === 0) {
            this.snake.increaseSpeed();
        }
    }
    
    animate(time) {
        requestAnimationFrame(this.animate);
        
        const deltaTime = (time - this.lastTime) / 1000;
        this.lastTime = time;
        
        if (this.state === 'PLAYING') {
            // Update time in time mode
            if (this.mode === 'time') {
                this.timeLeft -= deltaTime;
                this.ui.time.textContent = `⏱️ ${Math.ceil(Math.max(0, this.timeLeft))}s`;
                if (this.timeLeft <= 0) {
                    this.showGameOver();
                }
            }
            
            // Update snake
            const hitWall = this.snake.update(deltaTime, this.worldSize);
            const hitSelf = this.snake.checkSelfCollision();
            const hitObstacle = this.mode === 'obstacle' && 
                               this.obstacles.checkCollision(this.snake.getHeadPosition());
            
            if (hitWall || hitSelf || hitObstacle) {
                this.showGameOver();
            }
            
            // Check food collision
            if (this.food.checkCollision(this.snake.getHeadPosition())) {
                this.addScore(10);
                this.snake.grow();
                this.food.spawn(this.snake.getHeadPosition(), this.snake.getBodyPositions());
            }
            
            // Update camera
            this.scene3d.updateCamera(this.snake.getHeadPosition(), this.snake.getDirection());
        }
        
        // Always update visuals
        this.snake.updateVisuals(time);
        this.food.update(time);
        
        // Render
        this.scene3d.render();
    }
}
