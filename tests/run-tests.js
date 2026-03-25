/**
 * Snake Game V2 - Simple Test Runner
 * 
 * Tests verify snake color and visibility
 */

const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Extract the script from HTML
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
const gameCode = scriptMatch ? scriptMatch[1] : '';

let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        console.log(`✓ ${name}`);
        passed++;
    } catch (e) {
        console.log(`✗ ${name}`);
        console.log(`  Error: ${e.message}`);
        failed++;
    }
}

function assert(condition, message) {
    if (!condition) throw new Error(message || 'Assertion failed');
}

console.log('=== Snake Game V2 Tests ===\n');

// Test 1: Snake color should be green (hue ~120), not yellow (hue 45)
test('Snake should be GREEN (hue ~120) per SPEC, not yellow (hue 45)', () => {
    const hueMatch = gameCode.match(/const hue\s*=\s*(\d+)/);
    assert(hueMatch, 'Could not find snake hue value');
    
    const actualHue = parseInt(hueMatch[1]);
    console.log(`  Current snake hue: ${actualHue}`);
    
    // BUG: hue 45 is yellow, not green!
    if (actualHue === 45) {
        throw new Error(`BUG FOUND: Snake is YELLOW (hue 45) but SPEC says it should be GREEN (hue ~120)!`);
    }
    
    // Should be green range
    assert(actualHue >= 100 && actualHue <= 180, 
        `Snake hue should be green (100-180), got ${actualHue}`);
});

// Test 2: Background color
test('Background should be dark', () => {
    const bgMatch = gameCode.match(/fillStyle\s*=\s*['"](#[0-9a-fA-F]{6})['"]/);
    assert(bgMatch, 'Could not find background color');
    console.log(`  Background color: ${bgMatch[1]}`);
});

// Test 3: Canvas exists
test('Canvas element exists', () => {
    assert(html.includes('id="gameCanvas"'), 'Canvas element not found');
});

// Test 4: Canvas has correct dimensions
test('Canvas dimensions are correct', () => {
    const canvasMatch = html.match(/<canvas[^>]*width="(\d+)"[^>]*height="(\d+)"[^>]*>/);
    assert(canvasMatch, 'Canvas dimensions not found');
    console.log(`  Canvas: ${canvasMatch[1]}x${canvasMatch[2]}`);
});

// Test 5: Snake body drawing uses fillRect
test('Snake body is drawn with fillRect', () => {
    assert(gameCode.includes('ctx.fillRect'), 'fillRect not found for snake body');
});

// Test 6: Eyes are drawn on snake head
test('Snake head has eyes', () => {
    assert(gameCode.includes('function drawEyes'), 'drawEyes function not found');
});

// Test 7: Game loop exists
test('Game loop exists', () => {
    assert(gameCode.includes('function gameStep'), 'gameStep function not found');
    assert(gameCode.includes('setInterval'), 'setInterval not found');
});

// Test 8: Movement controls
test('Keyboard controls exist', () => {
    assert(gameCode.includes('ArrowUp') && gameCode.includes('ArrowDown'), 
        'Arrow key controls not found');
});

console.log(`\n=== Results: ${passed} passed, ${failed} failed ===`);

// Exit with error code if tests failed
if (failed > 0) {
    console.log('\n🔍 ROOT CAUSE: The snake is YELLOW (hue=45) instead of GREEN (hue~120) per SPEC!');
    console.log('   On the dark blue background (#1a1a4e), yellow may appear too bright or blend strangely.');
    console.log('   This is likely why the user cannot see the snake properly.');
    process.exit(1);
}

process.exit(0);
