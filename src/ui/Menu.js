/**
 * Menu.js - Menu Interface
 * Based on SPEC.md Section 3.6
 * 
 * Handles menu display, mode selection, and game state overlays.
 */

export class Menu {
    constructor(game) {
        this.game = game;
        
        // Get UI elements
        this.elements = {
            menu: document.getElementById('menuOverlay'),
            gameOver: document.getElementById('gameOverOverlay'),
            pause: document.getElementById('pauseOverlay'),
            finalScore: document.getElementById('finalScore'),
            newRecord: document.getElementById('newRecord'),
            scoreDisplay: document.getElementById('scoreDisplay')
        };
        
        // Get mode buttons
        this.modeButtons = document.querySelectorAll('.mode-btn');
        
        // Current selected mode
        this.selectedMode = 'CLASSIC';
        
        // Setup event listeners
        this.setupEventListeners();
        
        console.log('[Menu] Initialized');
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Mode selection buttons
        this.modeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const mode = btn.dataset.mode;
                if (mode) {
                    this.selectMode(mode);
                }
            });
        });
        
        // Start game button
        const startBtn = document.querySelector('#menuOverlay .menu-btn.primary');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                this.game.setMode(this.selectedMode);
                this.game.startGame();
            });
        }
        
        // High score button
        const highScoreBtn = document.querySelector('#menuOverlay .menu-btn.secondary');
        if (highScoreBtn) {
            highScoreBtn.addEventListener('click', () => {
                this.game.showHighScores();
            });
        }
        
        // Game Over buttons
        const restartBtn = document.querySelector('#gameOverOverlay .menu-btn.primary');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                this.game.startGame();
            });
        }
        
        const menuBtn1 = document.querySelector('#gameOverOverlay .menu-btn.secondary');
        if (menuBtn1) {
            menuBtn1.addEventListener('click', () => {
                this.game.returnToMenu();
            });
        }
        
        // Pause buttons
        const resumeBtn = document.querySelector('#pauseOverlay .menu-btn.primary');
        if (resumeBtn) {
            resumeBtn.addEventListener('click', () => {
                this.game.resume();
            });
        }
        
        const menuBtn2 = document.querySelector('#pauseOverlay .menu-btn.secondary');
        if (menuBtn2) {
            menuBtn2.addEventListener('click', () => {
                this.game.returnToMenu();
            });
        }
        
        // Global selectMode function for HTML onclick
        window.selectMode = (mode) => {
            this.selectMode(mode);
        };
    }

    /**
     * Select game mode
     */
    selectMode(mode) {
        this.selectedMode = mode;
        
        // Update button states
        this.modeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });
        
        // Update game
        this.game.setMode(mode);
        
        console.log(`[Menu] Mode selected: ${mode}`);
    }

    /**
     * Show main menu
     */
    show() {
        if (this.elements.menu) {
            this.elements.menu.classList.remove('hidden');
        }
    }

    /**
     * Hide main menu
     */
    hide() {
        if (this.elements.menu) {
            this.elements.menu.classList.add('hidden');
        }
    }

    /**
     * Show game over screen
     */
    showGameOver(score, isNewRecord) {
        if (this.elements.gameOver) {
            this.elements.finalScore.textContent = score;
            
            if (isNewRecord) {
                this.elements.newRecord.classList.remove('hidden');
            } else {
                this.elements.newRecord.classList.add('hidden');
            }
            
            this.elements.gameOver.classList.remove('hidden');
        }
    }

    /**
     * Hide game over screen
     */
    hideGameOver() {
        if (this.elements.gameOver) {
            this.elements.gameOver.classList.add('hidden');
        }
    }

    /**
     * Show pause screen
     */
    showPause() {
        if (this.elements.pause) {
            this.elements.pause.classList.remove('hidden');
        }
    }

    /**
     * Hide pause screen
     */
    hidePause() {
        if (this.elements.pause) {
            this.elements.pause.classList.add('hidden');
        }
    }

    /**
     * Hide all overlays
     */
    hideAll() {
        this.hide();
        this.hideGameOver();
        this.hidePause();
    }
}
