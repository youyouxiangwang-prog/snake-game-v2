/**
 * GameLoop.js - Fixed timestep game loop with interpolation
 * Based on SPEC.md Section 2.5.1
 * 
 * Uses requestAnimationFrame for rendering and fixed timestep for logic updates.
 * Desktop target: 60 FPS, Mobile target: 30 FPS
 */

export const GAME_LOOP_CONFIG = {
    // Fixed game tick rate (logic updates per second)
    TICK_RATE: 5, // 5 Hz = moveInterval 0.2s as per SPEC
    
    // Target FPS by platform
    TARGET_FPS: {
        desktop: 60,
        mobile: 30
    },
    
    // Maximum delta time to prevent spiral of death
    MAX_DELTA_TIME: 0.1, // 100ms
    
    // Interpolation alpha for smooth rendering
    INTERPOLATION_ALPHA: 0.15
};

export class GameLoop {
    constructor() {
        this.lastTime = 0;
        this.accumulator = 0;
        this.tickRate = 1000 / GAME_LOOP_CONFIG.TICK_RATE; // 200ms per tick
        
        this.isRunning = false;
        this.isPaused = false;
        
        // Callbacks
        this.onFixedUpdate = null;  // (deltaTime) => void - called at fixed intervals
        this.onRender = null;       // (alpha) => void - called every frame with interpolation alpha
        this.onUpdate = null;       // (deltaTime) => void - called every frame
        
        // Performance tracking
        this.frameCount = 0;
        this.fps = 60;
        this.fpsUpdateInterval = 1000; // Update FPS every second
        this.lastFpsUpdate = 0;
        
        // Bind the loop
        this.loop = this.loop.bind(this);
        
        // Detect mobile
        this.isMobile = this.detectMobile();
    }

    /**
     * Detect if running on mobile device
     */
    detectMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
               window.innerWidth < 768;
    }

    /**
     * Start the game loop
     */
    start() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.isPaused = false;
        this.lastTime = performance.now();
        this.lastFpsUpdate = this.lastTime;
        this.accumulator = 0;
        this.frameCount = 0;
        
        requestAnimationFrame(this.loop);
        console.log('[GameLoop] Started');
    }

    /**
     * Stop the game loop
     */
    stop() {
        this.isRunning = false;
        console.log('[GameLoop] Stopped');
    }

    /**
     * Pause the game loop
     */
    pause() {
        this.isPaused = true;
    }

    /**
     * Resume the game loop
     */
    resume() {
        if (!this.isPaused) return;
        
        this.isPaused = false;
        this.lastTime = performance.now();
        this.accumulator = 0;
    }

    /**
     * Main game loop
     */
    loop(currentTime) {
        if (!this.isRunning) return;

        // Request next frame
        requestAnimationFrame(this.loop);

        // Calculate delta time
        let deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        // Skip if paused
        if (this.isPaused) return;

        // Clamp delta time to prevent spiral of death
        deltaTime = Math.min(deltaTime, GAME_LOOP_CONFIG.MAX_DELTA_TIME);

        // Accumulate time for fixed timestep
        this.accumulator += deltaTime;

        // Fixed timestep updates (game logic)
        // This runs at TICK_RATE Hz consistently
        while (this.accumulator >= this.tickRate / 1000) {
            if (this.onFixedUpdate) {
                this.onFixedUpdate(this.tickRate / 1000);
            }
            this.accumulator -= this.tickRate / 1000;
            
            // Safety break to prevent infinite loop
            if (this.accumulator > 0.5) {
                console.warn('[GameLoop] Accumulator overflow, resetting');
                this.accumulator = 0;
                break;
            }
        }

        // Calculate interpolation alpha (0 to 1 between ticks)
        const alpha = this.accumulator / (this.tickRate / 1000);

        // Variable timestep update (animation, effects)
        if (this.onUpdate) {
            this.onUpdate(deltaTime);
        }

        // Render with interpolation
        if (this.onRender) {
            this.onRender(alpha);
        }

        // Update FPS counter
        this.frameCount++;
        if (currentTime - this.lastFpsUpdate >= this.fpsUpdateInterval) {
            this.fps = Math.round(this.frameCount * 1000 / (currentTime - this.lastFpsUpdate));
            this.frameCount = 0;
            this.lastFpsUpdate = currentTime;
        }
    }

    /**
     * Get current FPS
     */
    getFPS() {
        return this.fps;
    }

    /**
     * Get target FPS based on device
     */
    getTargetFPS() {
        return this.isMobile ? 
            GAME_LOOP_CONFIG.TARGET_FPS.mobile : 
            GAME_LOOP_CONFIG.TARGET_FPS.desktop;
    }
}

// Export singleton
export const gameLoop = new GameLoop();
