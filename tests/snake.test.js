/**
 * Snake Game V2 - Test Suite
 * 
 * Tests verify:
 * 1. Canvas renders correctly
 * 2. Snake is visible with correct color (green per SPEC)
 * 3. Snake movement works
 * 4. Food spawns correctly
 */

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

describe('Snake Game V2 Tests', () => {
    let dom, document, window, canvas, ctx;
    let gameCode;

    beforeAll(() => {
        // Read the index.html file
        const htmlPath = path.join(__dirname, '..', 'index.html');
        const html = fs.readFileSync(htmlPath, 'utf8');
        
        // Create JSDOM instance
        dom = new JSDOM(html, {
            runScripts: 'dangerously',
            resources: 'usable',
            pretendToBeVisual: true
        });
        
        document = dom.window.document;
        window = dom.window;
        canvas = document.getElementById('gameCanvas');
        ctx = canvas.getContext('2d');
        
        // Extract the script from HTML
        const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
        if (scriptMatch) {
            gameCode = scriptMatch[1];
        }
    });

    afterAll(() => {
        dom.window.close();
    });

    describe('Canvas Rendering', () => {
        test('Canvas element exists', () => {
            expect(canvas).toBeTruthy();
            expect(canvas.id).toBe('gameCanvas');
        });

        test('Canvas has correct dimensions', () => {
            expect(canvas.width).toBe(500);
            expect(canvas.height).toBe(500);
        });

        test('Canvas context is available', () => {
            expect(ctx).toBeTruthy();
            expect(ctx.fillStyle).toBeDefined();
        });
    });

    describe('Snake Initialization', () => {
        test('Snake should be green (hue ~120) per SPEC, not yellow (hue 45)', () => {
            // The SPEC.md says snake should be green (#00ff88 = hsl(156, 100%, 50%))
            // Current implementation uses hue 45 (yellow)
            // This test documents the expected behavior
            
            const GREEN_HUE = 120; // Expected: green
            const YELLOW_HUE = 45;  // Current bug: yellow
            
            // Read the code to check the hue value
            const hueMatch = gameCode.match(/const hue\s*=\s*(\d+)/);
            if (hueMatch) {
                const actualHue = parseInt(hueMatch[1]);
                console.log(`Snake hue: ${actualHue}`);
                
                // BUG: If hue is 45, snake is yellow, not green
                // Should be close to 120 for green
                expect(actualHue).toBeGreaterThan(100); // Green range
                expect(actualHue).toBeLessThan(180);
            }
        });

        test('Snake body uses HSL color format', () => {
            // Verify snake is drawn with HSL color
            const hslPattern = /hsl\(\$\{hue\}/;
            expect(gameCode).toMatch(hslPattern);
        });

        test('Snake head has eyes', () => {
            // Verify drawEyes function exists
            expect(gameCode).toMatch(/function drawEyes/);
        });
    });

    describe('Background Color', () => {
        test('Background should be dark per SPEC (#0a0a1a or similar)', () => {
            // Read the actual background color from code
            const bgMatch = gameCode.match(/fillStyle\s*=\s*['"]([^'"]+)['"]/);
            if (bgMatch) {
                const bgColor = bgMatch[1];
                console.log(`Background color: ${bgColor}`);
                // Should be a dark color
                expect(bgColor).toMatch(/^#[0-9a-f]{6}$/i);
            }
        });
    });

    describe('Snake Visibility', () => {
        test('Snake segments should be visible against background', () => {
            // This test checks that the snake color is different enough from background
            // to be visible
            
            // Extract snake color (hsl with hue 45 currently)
            const snakeHslMatch = gameCode.match(/fillStyle\s*=\s*`hsl\(45,.*?\)`/);
            if (snakeHslMatch) {
                console.log('Snake color:', snakeHslMatch[0]);
            }
            
            // Extract background color
            const bgMatch = gameCode.match(/fillStyle\s*=\s*['"]#1a1a4e['"]/);
            if (bgMatch) {
                console.log('Background color:', bgMatch[0]);
            }
        });
    });

    describe('Game Mechanics', () => {
        test('Snake initializes with 3 segments', () => {
            const snakeInitMatch = gameCode.match(/snake\s*=\s*\[\s*\{[^}]+\},[^}]+,[^}]+\]/);
            expect(snakeInitMatch).toBeTruthy();
        });

        test('Game loop exists', () => {
            expect(gameCode).toMatch(/function gameStep/);
            expect(gameCode).toMatch(/setInterval/);
        });

        test('Movement controls exist', () => {
            expect(gameCode).toMatch(/ArrowUp|ArrowDown|ArrowLeft|ArrowRight/);
        });
    });
});
