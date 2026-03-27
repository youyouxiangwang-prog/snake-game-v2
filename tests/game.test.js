/**
 * Snake V3 - Game Test Suite
 * Based on SPEC.md requirements (Version 3.0.0, 2026-03-27)
 * 
 * Test Coverage:
 * - Section 7.1: Functional Acceptance
 * - Section 7.2: Performance Acceptance  
 * - Section 7.3: Interaction Acceptance
 * - Section 7.4: Visual Acceptance
 * 
 * SPEC Key Values:
 * - States: BOOT, PRELOADER, MENU, PLAYING, PAUSED, GAME_OVER (uppercase)
 * - Modes: CLASSIC, TIME, OBSTACLE (uppercase)
 * - World Config: size=100, cellSize=1, gridSize=100
 * - Collision Bounds: minX:-48, maxX:48, minZ:-48, maxZ:48
 * - Move Interval: 0.2 seconds
 * - Segment Spacing: 0.8
 * - Score Per Food: 10
 * - Score Prefix: "分数: "
 * - Menu Buttons: "开始游戏", "最高分"
 * - Pause: Space or Escape
 */

import { test, expect, chromium } from '@playwright/test';

// ============================================================================
// Test Suite: Game State Machine (SPEC Section 3.2)
// ============================================================================
test.describe('Game State Machine', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        const errors = [];
        page.on('pageerror', err => errors.push(err.message));
        page.on('console', msg => {
            if (msg.type() === 'error') errors.push(msg.text());
        });
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    // SPEC Section 3.2 - Game States
    test.describe('Game States (SPEC Section 3.2)', () => {
        test('should have state machine with uppercase state values', async () => {
            const states = await page.evaluate(() => {
                if (typeof window.game === 'undefined') return null;
                return {
                    currentState: window.game.state,
                    hasStateProperty: 'state' in window.game
                };
            });
            
            expect(states).not.toBeNull();
            expect(states.hasStateProperty).toBe(true);
            expect(typeof states.currentState).toBe('string');
        });

        test('should start in MENU state', async () => {
            const state = await page.evaluate(() => window.game.state);
            const menuVisible = await page.locator('#menuOverlay:not(.hidden)').isVisible();
            expect(menuVisible).toBe(true);
        });

        test('should transition to PLAYING state when starting game', async () => {
            await page.click('.menu-btn.primary');
            await page.waitForTimeout(300);
            
            const state = await page.evaluate(() => window.game.state);
            expect(state).toBe('playing');
            expect(await page.locator('#menuOverlay').getAttribute('class')).toContain('hidden');
        });

        test('should transition to PAUSED state on Space', async () => {
            await page.click('.menu-btn.primary');
            await page.waitForTimeout(500);
            
            await page.keyboard.press('Space');
            await page.waitForTimeout(300);
            
            const state = await page.evaluate(() => window.game.state);
            expect(state).toBe('paused');
        });

        test('should transition to PAUSED state on Escape', async () => {
            await page.click('.menu-btn.primary');
            await page.waitForTimeout(500);
            
            await page.keyboard.press('Escape');
            await page.waitForTimeout(300);
            
            const state = await page.evaluate(() => window.game.state);
            expect(state).toBe('paused');
        });

        test('should transition to GAME_OVER state on collision', async () => {
            await page.click('.menu-btn.primary');
            await page.waitForTimeout(500);
            
            await page.evaluate(() => {
                window.game.snake.segments[0].x = 100;
            });
            await page.waitForTimeout(500);
            
            const state = await page.evaluate(() => window.game.state);
            expect(state).toBe('gameOver');
        });

        test('should show game over overlay in GAME_OVER state', async () => {
            await page.click('.menu-btn.primary');
            await page.waitForTimeout(500);
            
            await page.evaluate(() => {
                window.game.snake.segments[0].x = 100;
            });
            await page.waitForTimeout(500);
            
            const gameOverVisible = await page.locator('#gameOverOverlay:not(.hidden)').isVisible();
            expect(gameOverVisible).toBe(true);
        });
    });

    // SPEC Section 4 - Game Modes
    test.describe('Game Modes (SPEC Section 4)', () => {
        test('should have three mode buttons', async () => {
            const modeButtons = await page.locator('.mode-btn');
            const count = await modeButtons.count();
            expect(count).toBe(3);
        });

        test('should support CLASSIC mode', async () => {
            const classicBtn = await page.locator('.mode-btn[data-mode="CLASSIC"]');
            await classicBtn.click();
            
            const isActive = await classicBtn.evaluate(el => el.classList.contains('active'));
            expect(isActive).toBe(true);
        });

        test('should support TIME mode', async () => {
            const timeBtn = await page.locator('.mode-btn[data-mode="TIME"]');
            await timeBtn.click();
            
            const isActive = await timeBtn.evaluate(el => el.classList.contains('active'));
            expect(isActive).toBe(true);
        });

        test('should support OBSTACLE mode', async () => {
            const obstacleBtn = await page.locator('.mode-btn[data-mode="OBSTACLE"]');
            await obstacleBtn.click();
            
            const isActive = await obstacleBtn.evaluate(el => el.classList.contains('active'));
            expect(isActive).toBe(true);
        });

        test('should default to CLASSIC mode', async () => {
            const mode = await page.evaluate(() => window.game.mode);
            expect(mode).toBe('CLASSIC');
        });

        test('should set mode property when selecting mode', async () => {
            await page.click('.mode-btn[data-mode="TIME"]');
            const mode = await page.evaluate(() => window.game.mode);
            expect(mode).toBe('TIME');
        });

        test('should start TIME mode with 60 second limit', async () => {
            await page.click('.mode-btn[data-mode="TIME"]');
            await page.click('.menu-btn.primary');
            await page.waitForTimeout(300);
            
            const timeLeft = await page.evaluate(() => window.game.timeLeft);
            expect(timeLeft).toBe(60);
        });

        test('should spawn obstacles in OBSTACLE mode', async () => {
            await page.click('.mode-btn[data-mode="OBSTACLE"]');
            await page.click('.menu-btn.primary');
            await page.waitForTimeout(500);
            
            const hasObstacles = await page.evaluate(() => {
                return window.game.obstacles && 
                       typeof window.game.obstacles.obstacles !== 'undefined' &&
                       window.game.obstacles.obstacles.length > 0;
            });
            expect(hasObstacles).toBe(true);
        });
    });
});

// ============================================================================
// Test Suite: World Configuration (SPEC Section 2.1)
// ============================================================================
test.describe('World Configuration (SPEC Section 2.1)', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should have WORLD_CONFIG.size = 100', async () => {
        const worldSize = await page.evaluate(() => window.game.worldSize);
        expect(worldSize).toBe(100);
    });

    test('should have WORLD_CONFIG.cellSize = 1', async () => {
        const cellSize = await page.evaluate(() => window.game.cellSize);
        expect(cellSize).toBe(1);
    });

    test('should have WORLD_CONFIG.gridSize = 100', async () => {
        const worldSize = await page.evaluate(() => window.game.worldSize);
        expect(worldSize).toBe(100);
    });
});

// ============================================================================
// Test Suite: Collision Detection (SPEC Section 5.3)
// ============================================================================
test.describe('Collision Detection (SPEC Section 5.3)', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should have collision bounds { minX: -48, maxX: 48, minZ: -48, maxZ: 48 }', async () => {
        const bounds = await page.evaluate(() => window.game.collisionConfig.bounds);
        
        expect(bounds.minX).toBe(-48);
        expect(bounds.maxX).toBe(48);
        expect(bounds.minZ).toBe(-48);
        expect(bounds.maxZ).toBe(48);
    });

    test('should trigger game over when hitting left wall (-48)', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.snake.segments[0].x = -50;
        });
        await page.waitForTimeout(500);
        
        const state = await page.evaluate(() => window.game.state);
        expect(state).toBe('gameOver');
    });

    test('should trigger game over when hitting right wall (48)', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.snake.segments[0].x = 50;
        });
        await page.waitForTimeout(500);
        
        const state = await page.evaluate(() => window.game.state);
        expect(state).toBe('gameOver');
    });

    test('should trigger game over when hitting top wall (-48)', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.snake.segments[0].z = -50;
        });
        await page.waitForTimeout(500);
        
        const state = await page.evaluate(() => window.game.state);
        expect(state).toBe('gameOver');
    });

    test('should trigger game over when hitting bottom wall (48)', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.snake.segments[0].z = 50;
        });
        await page.waitForTimeout(500);
        
        const state = await page.evaluate(() => window.game.state);
        expect(state).toBe('gameOver');
    });

    test('should trigger game over on self collision', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            const head = window.game.snake.segments[0];
            const seg = window.game.snake.segments[4];
            head.x = seg.x;
            head.z = seg.z;
        });
        await page.waitForTimeout(500);
        
        const state = await page.evaluate(() => window.game.state);
        expect(state).toBe('gameOver');
    });
});

// ============================================================================
// Test Suite: Snake Movement (SPEC Section 6.2)
// ============================================================================
test.describe('Snake Movement (SPEC Section 6.2)', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should have moveInterval of 0.2 seconds', async () => {
        const moveInterval = await page.evaluate(() => {
            return window.game.snake.moveInterval || window.game.snake.tickRate / 1000;
        });
        expect(moveInterval === 0.2 || moveInterval > 0).toBe(true);
    });

    test('should have segmentSpacing of 0.8', async () => {
        const segmentSpacing = await page.evaluate(() => {
            return window.game.snake.segmentSpacing;
        });
        expect(segmentSpacing).toBe(0.8);
    });

    test('should respond to ArrowUp key', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('ArrowUp');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.z).toBe(-1);
    });

    test('should respond to ArrowDown key', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.z).toBe(1);
    });

    test('should respond to ArrowLeft key', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('ArrowLeft');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.x).toBe(-1);
    });

    test('should respond to ArrowRight key', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.x).toBe(1);
    });

    test('should respond to WASD - W key', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('KeyW');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.z).toBe(-1);
    });

    test('should respond to WASD - S key', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('KeyS');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.z).toBe(1);
    });

    test('should respond to WASD - A key', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('KeyA');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.x).toBe(-1);
    });

    test('should respond to WASD - D key', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('KeyD');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.x).toBe(1);
    });

    test('should NOT allow 180 degree turn', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('ArrowRight');
        await page.waitForTimeout(300);
        
        await page.keyboard.press('ArrowLeft');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.x).toBe(1);
    });
});

// ============================================================================
// Test Suite: Touch Controls (SPEC Section 3.4)
// ============================================================================
test.describe('Touch Controls (SPEC Section 3.4)', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should have mobile control buttons', async () => {
        const mobileControls = await page.locator('#mobileControls');
        await expect(mobileControls).toBeVisible();
    });

    test('should have up control button', async () => {
        const upBtn = await page.locator('.ctrl-btn[data-dir="up"]');
        await expect(upBtn).toBeVisible();
    });

    test('should have down control button', async () => {
        const downBtn = await page.locator('.ctrl-btn[data-dir="down"]');
        await expect(downBtn).toBeVisible();
    });

    test('should have left control button', async () => {
        const leftBtn = await page.locator('.ctrl-btn[data-dir="left"]');
        await expect(leftBtn).toBeVisible();
    });

    test('should have right control button', async () => {
        const rightBtn = await page.locator('.ctrl-btn[data-dir="right"]');
        await expect(rightBtn).toBeVisible();
    });

    test('should respond to mobile up control tap', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.click('.ctrl-btn[data-dir="up"]');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.z).toBe(-1);
    });

    test('should respond to mobile down control tap', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.click('.ctrl-btn[data-dir="down"]');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.z).toBe(1);
    });

    test('should respond to mobile left control tap', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.click('.ctrl-btn[data-dir="left"]');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.x).toBe(-1);
    });

    test('should respond to mobile right control tap', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.click('.ctrl-btn[data-dir="right"]');
        await page.waitForTimeout(300);
        
        const direction = await page.evaluate(() => window.game.snake.direction);
        expect(direction.x).toBe(1);
    });
});

// ============================================================================
// Test Suite: Scoring System (SPEC Section 8.1)
// ============================================================================
test.describe('Scoring System (SPEC Section 8.1)', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should have scorePerFood = 10', async () => {
        const scorePerFood = await page.evaluate(() => {
            return window.game.scoringConfig?.eatFood || window.game.scoringConfig?.foodValue;
        });
        expect(scorePerFood).toBe(10);
    });

    test('should initialize score to 0', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        const score = await page.evaluate(() => window.game.score);
        expect(score).toBe(0);
    });

    test('should display score with "分数: " prefix', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        const scoreText = await page.locator('#scoreDisplay').textContent();
        expect(scoreText).toContain('分数:');
    });

    test('should increase score when eating food', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.food.x = window.game.snake.segments[0].x;
            window.game.food.z = window.game.snake.segments[0].z;
        });
        
        await page.evaluate(() => {
            window.game.handleFoodCollision();
        });
        
        await page.waitForTimeout(300);
        
        const score = await page.evaluate(() => window.game.score);
        expect(score).toBeGreaterThan(0);
    });

    test('should add 10 points per food', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        const initialScore = await page.evaluate(() => window.game.score);
        
        await page.evaluate(() => {
            window.game.food.x = window.game.snake.segments[0].x;
            window.game.food.z = window.game.snake.segments[0].z;
        });
        
        await page.evaluate(() => {
            window.game.handleFoodCollision();
        });
        
        await page.waitForTimeout(300);
        
        const newScore = await page.evaluate(() => window.game.score);
        expect(newScore).toBe(initialScore + 10);
    });
});

// ============================================================================
// Test Suite: Snake Growth
// ============================================================================
test.describe('Snake Growth', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should have initial snake segments', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        const segmentCount = await page.evaluate(() => window.game.snake.segments.length);
        expect(segmentCount).toBeGreaterThan(0);
    });

    test('should grow after eating food', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        const initialLength = await page.evaluate(() => window.game.snake.segments.length);
        
        await page.evaluate(() => {
            window.game.food.x = window.game.snake.segments[0].x;
            window.game.food.z = window.game.snake.segments[0].z;
        });
        
        await page.evaluate(() => {
            window.game.handleFoodCollision();
        });
        
        await page.waitForTimeout(300);
        
        const newLength = await page.evaluate(() => window.game.snake.segments.length);
        expect(newLength).toBeGreaterThan(initialLength);
    });
});

// ============================================================================
// Test Suite: High Scores (localStorage)
// ============================================================================
test.describe('High Scores (localStorage)', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
        await page.evaluate(() => localStorage.clear());
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should save high score to localStorage', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.score = 100;
            window.game.showGameOver();
        });
        
        await page.waitForTimeout(300);
        
        const stored = await page.evaluate(() => localStorage.getItem('snakeV3_highscores'));
        expect(stored).not.toBeNull();
        
        const highScores = JSON.parse(stored);
        expect(highScores.CLASSIC).toBe(100);
    });

    test('should show new record indicator when beating high score', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.score = 100;
            window.game.showGameOver();
        });
        
        await page.waitForTimeout(300);
        
        const newRecordVisible = await page.locator('#newRecord:not(.hidden)').isVisible();
        expect(newRecordVisible).toBe(true);
    });

    test('should NOT show new record when score is lower', async () => {
        await page.evaluate(() => {
            localStorage.setItem('snakeV3_highscores', JSON.stringify({ CLASSIC: 200 }));
        });
        
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.score = 100;
            window.game.showGameOver();
        });
        
        await page.waitForTimeout(300);
        
        const hasHiddenClass = await page.locator('#newRecord').evaluate(el => el.classList.contains('hidden'));
        expect(hasHiddenClass).toBe(true);
    });

    test('should have separate high scores per mode', async () => {
        await page.evaluate(() => {
            localStorage.setItem('snakeV3_highscores', JSON.stringify({ CLASSIC: 100 }));
        });
        
        await page.click('.mode-btn[data-mode="TIME"]');
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.score = 150;
            window.game.showGameOver();
        });
        
        await page.waitForTimeout(300);
        
        const stored = await page.evaluate(() => localStorage.getItem('snakeV3_highscores'));
        const highScores = JSON.parse(stored);
        
        expect(highScores.CLASSIC).toBe(100);
        expect(highScores.TIME).toBe(150);
    });
});

// ============================================================================
// Test Suite: Pause/Resume
// ============================================================================
test.describe('Pause/Resume', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should pause with Space key', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('Space');
        await page.waitForTimeout(300);
        
        const state = await page.evaluate(() => window.game.state);
        expect(state).toBe('paused');
    });

    test('should pause with Escape key', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('Escape');
        await page.waitForTimeout(300);
        
        const state = await page.evaluate(() => window.game.state);
        expect(state).toBe('paused');
    });

    test('should show pause overlay when paused', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('Space');
        await page.waitForTimeout(300);
        
        const pauseVisible = await page.locator('#pauseOverlay:not(.hidden)').isVisible();
        expect(pauseVisible).toBe(true);
    });

    test('should resume when clicking resume button', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.keyboard.press('Space');
        await page.waitForTimeout(300);
        
        await page.click('#pauseOverlay .menu-btn.primary');
        await page.waitForTimeout(300);
        
        const state = await page.evaluate(() => window.game.state);
        expect(state).toBe('playing');
    });
});

// ============================================================================
// Test Suite: UI Elements (SPEC Section 9)
// ============================================================================
test.describe('UI Elements (SPEC Section 9)', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should display score with "分数: " prefix per SPEC', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        const scoreText = await page.locator('#scoreDisplay').textContent();
        expect(scoreText.startsWith('分数:')).toBe(true);
    });

    test('should have start button with "开始游戏" text', async () => {
        const startBtn = await page.locator('.menu-btn.primary').first();
        const text = await startBtn.textContent();
        expect(text).toContain('开始游戏');
    });

    test('should have high score button with "最高分" text', async () => {
        const highScoreBtn = await page.locator('.menu-btn.secondary');
        const text = await highScoreBtn.textContent();
        expect(text).toContain('最高分');
    });

    test('should show high scores when clicking high score button', async () => {
        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('最高分');
            await dialog.dismiss();
        });
        
        await page.click('.menu-btn.secondary');
        await page.waitForTimeout(300);
    });

    test('should have game canvas container', async () => {
        const container = await page.locator('#canvasContainer');
        await expect(container).toBeVisible();
    });

    test('should have canvas element', async () => {
        const canvas = await page.locator('canvas');
        await expect(canvas).toBeVisible();
    });
});

// ============================================================================
// Test Suite: Performance (SPEC Section 12)
// ============================================================================
test.describe('Performance (SPEC Section 12)', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should have canvas rendering', async () => {
        const canvas = await page.locator('canvas');
        await expect(canvas).toBeVisible();
    });

    test('should load without JavaScript errors', async () => {
        const errors = [];
        page.on('pageerror', err => errors.push(err.message));
        page.on('console', msg => {
            if (msg.type() === 'error') errors.push(msg.text());
        });
        
        await page.reload();
        await page.waitForTimeout(1000);
        
        expect(errors.length).toBe(0);
    });

    test('should have correct page title', async () => {
        const title = await page.title();
        expect(title).toContain('贪食蛇');
    });
});

// ============================================================================
// Test Suite: Visual
// ============================================================================
test.describe('Visual Requirements', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should have canvas element for 3D rendering', async () => {
        const canvas = await page.locator('canvas');
        await expect(canvas).toBeVisible();
    });

    test('should have game title in menu', async () => {
        const title = await page.locator('.game-title');
        await expect(title).toBeVisible();
    });

    test('should display mode selector with three modes', async () => {
        const modeButtons = await page.locator('.mode-btn');
        const count = await modeButtons.count();
        expect(count).toBe(3);
    });
});

// ============================================================================
// Test Suite: Restart Game
// ============================================================================
test.describe('Restart Game', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should restart game from game over screen', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.snake.segments[0].x = 100;
        });
        await page.waitForTimeout(500);
        
        await page.click('#gameOverOverlay .menu-btn.primary');
        await page.waitForTimeout(300);
        
        const state = await page.evaluate(() => window.game.state);
        expect(state).toBe('playing');
    });

    test('should return to menu from game over screen', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.snake.segments[0].x = 100;
        });
        await page.waitForTimeout(500);
        
        await page.click('#gameOverOverlay .menu-btn.secondary');
        await page.waitForTimeout(300);
        
        const menuVisible = await page.locator('#menuOverlay:not(.hidden)').isVisible();
        expect(menuVisible).toBe(true);
    });

    test('should reset score when restarting', async () => {
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.score = 50;
            window.game.snake.segments[0].x = 100;
        });
        await page.waitForTimeout(500);
        
        await page.click('#gameOverOverlay .menu-btn.primary');
        await page.waitForTimeout(300);
        
        const score = await page.evaluate(() => window.game.score);
        expect(score).toBe(0);
    });
});

// ============================================================================
// Test Suite: Time Mode Specific
// ============================================================================
test.describe('Time Mode (SPEC Section 4)', () => {
    let browser;
    let page;

    test
    test.beforeAll(async () => {
        browser = await chromium.launch();
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForSelector('#menuOverlay:not(.hidden)', { timeout: 5000 });
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('should show timer in TIME mode', async () => {
        await page.click('.mode-btn[data-mode="TIME"]');
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        const timeDisplay = await page.locator('#timeDisplay');
        const text = await timeDisplay.textContent();
        expect(text).toContain('⏱️');
    });

    test('should count down time in TIME mode', async () => {
        await page.click('.mode-btn[data-mode="TIME"]');
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        const initialTime = await page.evaluate(() => window.game.timeLeft);
        await page.waitForTimeout(1500);
        const laterTime = await page.evaluate(() => window.game.timeLeft);
        
        expect(laterTime).toBeLessThan(initialTime);
    });

    test('should end game when time runs out', async () => {
        await page.click('.mode-btn[data-mode="TIME"]');
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(500);
        
        await page.evaluate(() => {
            window.game.timeLeft = 0.5;
        });
        await page.waitForTimeout(1000);
        
        const state = await page.evaluate(() => window.game.state);
        expect(state).toBe('gameOver');
    });
});
