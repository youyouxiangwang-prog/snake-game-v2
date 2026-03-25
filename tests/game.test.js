const { chromium } = require('playwright');

async function runTests() {
    console.log('Starting Snake Game Tests...\n');
    
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    // Collect errors
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));
    page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
    });
    
    let passed = 0;
    let failed = 0;
    
    function test(name, condition) {
        if (condition) {
            console.log(`✓ ${name}`);
            passed++;
        } else {
            console.log(`✗ ${name}`);
            failed++;
        }
    }
    
    try {
        // Load the page
        await page.goto('file:///home/ubuntu/webgames-snake-v2/index.html');
        await page.waitForTimeout(500);
        
        // Test 1: Page loads
        const title = await page.title();
        test('Page title is correct', title.includes('贪食蛇之王'));
        
        // Test 2: Menu is visible
        const menuVisible = await page.isVisible('#menuOverlay');
        test('Menu overlay is visible', menuVisible);
        
        // Test 3: Play button exists
        const playBtn = await page.isVisible('.menu-btn.primary');
        test('Play button exists', playBtn);
        
        // Test 4: Click play
        await page.click('.menu-btn.primary');
        await page.waitForTimeout(300);
        
        // Test 5: Menu hidden after play
        const menuHidden = !(await page.isVisible('#menuOverlay'));
        test('Menu hidden after clicking play', menuHidden);
        
        // Test 6: Game container visible
        const gameVisible = await page.isVisible('#gameContainer');
        test('Game container visible', gameVisible);
        
        // Test 7: Canvas exists
        const canvasExists = await page.isVisible('#gameCanvas');
        test('Canvas element exists', canvasExists);
        
        // Test 8: Score display exists
        const scoreExists = await page.isVisible('#scoreDisplay');
        test('Score display exists', scoreExists);
        
        // Test 9: Mode buttons exist
        const modeBtns = await page.locator('.mode-btn').count();
        test('Mode buttons exist (3 modes)', modeBtns === 3);
        
        // Test 10: Canvas has correct size
        const canvasSize = await page.evaluate(() => {
            const canvas = document.getElementById('gameCanvas');
            return { width: canvas.width, height: canvas.height };
        });
        test('Canvas size is 500x500', canvasSize.width === 500 && canvasSize.height === 500);
        
        // Test 11: Snake is initialized (should have 3 segments)
        const snakeLength = await page.evaluate(() => {
            return typeof snake !== 'undefined' && snake.length;
        });
        test('Snake initialized with 3 segments', snakeLength === 3);
        
        // Test 12: Food is placed
        const foodPlaced = await page.evaluate(() => {
            return typeof food !== 'undefined' && food.x >= 0 && food.y >= 0;
        });
        test('Food is placed', foodPlaced);
        
        // Test 13: No console errors
        test('No JavaScript errors', errors.length === 0);
        
        // Print errors if any
        if (errors.length > 0) {
            console.log('\nErrors found:');
            errors.forEach(e => console.log(`  - ${e}`));
        }
        
        console.log(`\nResults: ${passed} passed, ${failed} failed`);
        
        await browser.close();
        
        if (failed > 0) {
            process.exit(1);
        }
        
    } catch (err) {
        console.error('Test error:', err.message);
        await browser.close();
        process.exit(1);
    }
}

runTests();
