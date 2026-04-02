/**
 * InputSystem.js - Unified Input Handler
 * Based on SPEC.md Section 3.4 and 5.4
 * 
 * Handles keyboard (Arrow keys, WASD), mouse, and touch input.
 * Mouse following control: snake follows mouse position (Slither.io style)
 */

import { MOVEMENT_CONFIG } from '../core/Game.js';

// Touch configuration
const TOUCH_CONFIG = {
    swipe: {
        enabled: true,
        threshold: 30,
        maxTime: 500,
        preventDefault: true
    }
};

// Mouse following configuration
const MOUSE_CONFIG = {
    enabled: true,
    deadZone: 10,  // Minimum pixels to move before changing direction
    smoothing: 0.3 // Direction change interpolation
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
        
        // Mouse tracking for mouse-following control
        this.mousePosition = { x: 0, y: 0 };
        this.lastMouseDirection = null;
        this.canvas = null;
        
        // Setup input handlers
        this.setupKeyboard();
        this.setupMouse();
        this.setupTouch();
        
        console.log('[InputSystem] Initialized with mouse-following support');
    }

    /**
     * Setup mouse input for mouse-following control
     */
    setupMouse() {
        this.canvas = this.game?.sceneManager?.renderer?.domElement || document.querySelector('canvas');
        
        if (!this.canvas) {
            console.warn('[InputSystem] Canvas not found for mouse input');
            return;
        }
        
        // Track mouse position
        this.canvas.addEventListener('mousemove', (e) => {
            if (!MOUSE_CONFIG.enabled) return;
            
            const rect = this.canvas.getBoundingClientRect();
            this.mousePosition = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        });
        
        // Also track on document for better coverage
        document.addEventListener('mousemove', (e) => {
            if (!MOUSE_CONFIG.enabled) return;
            
            if (this.canvas) {
                const rect = this.canvas.getBoundingClientRect();
                this.mousePosition = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                };
            }
        });
        
        console.log('[InputSystem] Mouse tracking enabled');
    }
    
    /**
     * Get mouse-based direction
     * Called during fixedUpdate to update snake direction based on mouse position
     */
    updateMouseDirection() {
        if (!MOUSE_CONFIG.enabled || !this.canvas) return;
        
        const canvas = this.canvas;
        const rect = canvas.getBoundingClientRect();
        
        // Get snake head screen position (approximate - center of canvas)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate direction from center to mouse
        const dx = this.mousePosition.x - centerX;
        const dy = this.mousePosition.y - centerY;
        
        // Check dead zone
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < MOUSE_CONFIG.deadZone) return;
        
        // Determine primary direction based on angle
        // 0° = right, 90° = down, 180°/-180° = left, -90° = up
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        
        let newDirection;
        if (angle >= -45 && angle < 45) {
            newDirection = 'RIGHT';
        } else if (angle >= 45 && angle < 135) {
            newDirection = 'DOWN';
        } else if (angle >= -135 && angle < -45) {
            newDirection = 'UP';
        } else {
            newDirection = 'LEFT';
        }
        
        // Only queue if different from last direction
        if (newDirection !== this.lastMouseDirection) {
            this.lastMouseDirection = newDirection;
            this.queueDirection(newDirection);
        }
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
