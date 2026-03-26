// Snake Game V3 - Input Handler
export class Input {
    constructor(snake) {
        this.snake = snake;
        this.setupKeyboard();
        this.setupTouch();
    }
    
    setupKeyboard() {
        document.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'ArrowUp':
                case 'KeyW':
                    e.preventDefault();
                    this.snake.setDirection('UP');
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    e.preventDefault();
                    this.snake.setDirection('DOWN');
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    e.preventDefault();
                    this.snake.setDirection('LEFT');
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    e.preventDefault();
                    this.snake.setDirection('RIGHT');
                    break;
                case 'Space':
                case 'Escape':
                    e.preventDefault();
                    if (window.game) {
                        if (window.game.state === 'PLAYING') {
                            window.game.showPause();
                        } else if (window.game.state === 'PAUSED') {
                            window.game.resume();
                        }
                    }
                    break;
            }
        });
    }
    
    setupTouch() {
        let touchStartX = 0;
        let touchStartY = 0;
        const minSwipeDistance = 30;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            if (!window.game || window.game.state !== 'PLAYING') return;
            
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            
            const dx = touchEndX - touchStartX;
            const dy = touchEndY - touchStartY;
            
            // Check if it's a horizontal or vertical swipe
            if (Math.abs(dx) < minSwipeDistance && Math.abs(dy) < minSwipeDistance) {
                return; // Too short
            }
            
            if (Math.abs(dx) > Math.abs(dy)) {
                // Horizontal swipe
                if (dx > 0) {
                    this.snake.setDirection('RIGHT');
                } else {
                    this.snake.setDirection('LEFT');
                }
            } else {
                // Vertical swipe
                if (dy > 0) {
                    this.snake.setDirection('DOWN');
                } else {
                    this.snake.setDirection('UP');
                }
            }
        }, { passive: true });
    }
    
    setDirection(dir) {
        this.snake.setDirection(dir);
    }
}
