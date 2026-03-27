/**
 * InputSystem.js - Unified Input Handler
 * Based on SPEC.md Section 3.4 and 5.4
 * 
 * Handles keyboard (Arrow keys, WASD) and touch input.
 * Queues directions to prevent input loss.
 */

import { MOVEMENT_CONFIG } from '../core/Game.js';

// Touch configuration
const TOUCH_CONFIG = {
    swipe: {
        enabled: true,
        threshold: 30,          // Minimum swipe distance in px
        maxTime: 500,           // Maximum swipe time in ms
        preventDefault: true
    }
};

export class InputSystem {
    constructor(snake, game) {
        this.snake = snake;
        this.game = game;
        
        // Direction queue (max 2 inputs buffered)
        this.directionQueue = [];
        
        // Track current keys pressed
        this.keys = {};
        
        // Touch tracking
        this.touchStart = null;
        
        // Setup input handlers
        this.setupKeyboard();
        this.setupTouch();
        
        console.log('[InputSystem] Initialized');
    }

    /**
     * Setup keyboard input
     */
    setupKeyboard() {
        document.addEventListener('keydown', (e) => {
            // Prevent default for game keys
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
                 'KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'Escape'].includes(e.code)) {
                e.preventDefault();
            }
            
            this.keys[e.code] = true;
            
            // Map keys to directions
            const directionMap = {
                'ArrowUp': 'UP',
                'ArrowDown': 'DOWN',
                'ArrowLeft': 'LEFT',
                'ArrowRight': 'RIGHT',
                'KeyW': 'UP',
                'KeyS': 'DOWN',
                'KeyA': 'LEFT',
                'KeyD': 'RIGHT'
            };
            
            if (directionMap[e.code]) {
                this.queueDirection(directionMap[e.code]);
            }
            
            // Pause handling
            if (e.code === 'Space' || e.code === 'Escape') {
                if (this.game) {
                    this.game.togglePause();
                }
            }
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }

    /**
     * Setup touch input
     */
    setupTouch() {
        const canvas = this.game?.sceneManager?.renderer?.domElement || document.querySelector('canvas');
        
        if (!canvas) {
            console.warn('[InputSystem] Canvas not found for touch input');
            return;
        }
        
        // Use pointer events for unified mouse/touch handling
        canvas.addEventListener('pointerdown', this.onPointerDown.bind(this), { passive: false });
        canvas.addEventListener('pointerup', this.onPointerUp.bind(this), { passive: false });
        canvas.addEventListener('pointercancel', this.onPointerUp.bind(this), { passive: false });
        
        // Prevent default touch behavior
        canvas.style.touchAction = 'none';
        
        // Mobile control buttons (in HTML)
        this.setupMobileButtons();
    }

    /**
     * Setup mobile control buttons
     */
    setupMobileButtons() {
        document.querySelectorAll('.ctrl-btn').forEach(btn => {
            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const dir = btn.dataset.dir;
                if (dir) {
                    this.queueDirection(dir.toUpperCase());
                }
            }, { passive: false });
            
            // Also handle click for testing
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const dir = btn.dataset.dir;
                if (dir) {
                    this.queueDirection(dir.toUpperCase());
                }
            });
        });
    }

    /**
     * Handle pointer down (touch start)
     */
    onPointerDown(e) {
        if (e.pointerType === 'touch') {
            this.touchStart = {
                x: e.clientX,
                y: e.clientY,
                time: performance.now()
            };
        }
    }

    /**
     * Handle pointer up (touch end)
     */
    onPointerUp(e) {
        if (!this.touchStart || e.pointerType !== 'touch') {
            return;
        }
        
        const deltaX = e.clientX - this.touchStart.x;
        const deltaY = e.clientY - this.touchStart.y;
        const deltaTime = performance.now() - this.touchStart.time;
        
        // Check if valid swipe
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance > TOUCH_CONFIG.swipe.threshold && 
            deltaTime < TOUCH_CONFIG.swipe.maxTime) {
            
            // Determine swipe direction
            let direction;
            
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // Horizontal swipe
                direction = deltaX > 0 ? 'RIGHT' : 'LEFT';
            } else {
                // Vertical swipe
                direction = deltaY > 0 ? 'DOWN' : 'UP';
            }
            
            this.queueDirection(direction);
        }
        
        this.touchStart = null;
    }

    /**
     * Queue a direction input
     */
    queueDirection(direction) {
        // Prevent 180 degree turns using queued next direction
        // Use nextDirection if set, otherwise use current direction
        const currentDir = this.snake.nextDirection || this.snake.getDirection();
        
        const dirMap = {
            'UP': { x: 0, z: -1 },
            'DOWN': { x: 0, z: 1 },
            'LEFT': { x: -1, z: 0 },
            'RIGHT': { x: 1, z: 0 }
        };
        
        const newDir = dirMap[direction];
        if (!newDir) return;
        
        // Check if this would be a 180 degree turn
        if (newDir.x === -currentDir.x && newDir.z === -currentDir.z) {
            return; // Can't reverse
        }
        
        // Add to queue (max 2)
        if (this.directionQueue.length < 2) {
            this.directionQueue.push(direction);
        }
        
        // Also immediately apply if queue was empty
        if (this.directionQueue.length === 1) {
            this.snake.setDirection(direction);
        }
    }

    /**
     * Consume next direction from queue
     * Called by Game during fixedUpdate
     */
    consumeDirection() {
        if (this.directionQueue.length === 0) {
            return null;
        }
        
        const direction = this.directionQueue.shift();
        
        // Apply to snake
        if (direction) {
            this.snake.setDirection(direction);
        }
        
        return direction;
    }

    /**
     * Clear direction queue
     */
    clearQueue() {
        this.directionQueue = [];
    }

    /**
     * Check if a key is currently pressed
     */
    isKeyPressed(code) {
        return !!this.keys[code];
    }

    /**
     * Get current queue length
     */
    getQueueLength() {
        return this.directionQueue.length;
    }
}
