/**
 * HUD.js - Heads-Up Display
 * Based on SPEC.md Section 3.3
 * 
 * Displays score, time, and pause button during gameplay.
 */

export class HUD {
    constructor() {
        // Get UI elements
        this.elements = {
            container: document.getElementById('hud'),
            score: document.getElementById('scoreDisplay'),
            time: document.getElementById('timeDisplay'),
            mode: document.getElementById('modeDisplay')
        };
        
        // Mode names
        this.modeNames = {
            'CLASSIC': '🎮 经典',
            'TIME': '⏱️ 限时',
            'OBSTACLE': '🧱 障碍'
        };
        
        // Animation state
        this.scoreAnimationActive = false;
        
        console.log('[HUD] Initialized');
    }

    /**
     * Show the HUD
     */
    show() {
        if (this.elements.container) {
            this.elements.container.style.display = 'flex';
            this.elements.container.classList.add('fade-in');
        }
    }

    /**
     * Hide the HUD
     */
    hide() {
        if (this.elements.container) {
            this.elements.container.style.display = 'none';
        }
    }

    /**
     * Update score display
     */
    updateScore(scoreText) {
        if (this.elements.score) {
            this.elements.score.textContent = scoreText;
        }
    }

    /**
     * Update time display
     */
    updateTime(timeLeft) {
        if (this.elements.time) {
            if (timeLeft !== null && timeLeft !== undefined) {
                this.elements.time.textContent = `⏱️ ${Math.ceil(Math.max(0, timeLeft))}s`;
                
                // Flash red when low
                if (timeLeft < 10) {
                    this.elements.time.style.color = '#FF3366';
                } else {
                    this.elements.time.style.color = '';
                }
            } else {
                this.elements.time.textContent = '';
            }
        }
    }

    /**
     * Update mode display
     */
    updateMode(mode) {
        if (this.elements.mode) {
            this.elements.mode.textContent = this.modeNames[mode] || mode;
        }
    }

    /**
     * Animate score pop effect
     */
    animateScorePop() {
        if (!this.elements.score) return;
        
        // Remove and re-add class to restart animation
        this.elements.score.classList.remove('pulse');
        void this.elements.score.offsetWidth; // Force reflow
        this.elements.score.classList.add('pulse');
        
        // Remove after animation
        setTimeout(() => {
            this.elements.score.classList.remove('pulse');
        }, 300);
    }
    
    /**
     * Show score fly animation at screen position
     * Called when food is eaten
     */
    showScoreFly(screenX, screenY, points, isCombo = false) {
        const el = document.createElement('div');
        el.className = `score-flyup${isCombo ? ' combo' : ''}`;
        el.textContent = `+${points}`;
        el.style.left = `${screenX}px`;
        el.style.top = `${screenY}px`;
        document.body.appendChild(el);
        
        // Remove after animation
        setTimeout(() => {
            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }, 600);
        
        // Pulse the score
        this.animateScorePop();
    }
    
    /**
     * Show food eaten burst effect at position
     */
    showFoodEatenEffect(screenX, screenY) {
        const el = document.createElement('div');
        el.className = 'food-eaten-effect';
        el.style.left = `${screenX}px`;
        el.style.top = `${screenY}px`;
        document.body.appendChild(el);
        
        setTimeout(() => {
            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }, 300);
    }
    
    /**
     * Enable minimal HUD mode (centered score only)
     */
    enableMinimalMode() {
        if (this.elements.container) {
            this.elements.container.classList.add('minimal');
        }
    }
    
    /**
     * Disable minimal HUD mode
     */
    disableMinimalMode() {
        if (this.elements.container) {
            this.elements.container.classList.remove('minimal');
        }
    }

    /**
     * Get score element for testing
     */
    getScoreElement() {
        return this.elements.score;
    }

    /**
     * Get time element for testing
     */
    getTimeElement() {
        return this.elements.time;
    }
}
