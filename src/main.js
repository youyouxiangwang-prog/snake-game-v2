/**
 * Snake V3 - Main Entry Point
 * Based on SPEC.md
 * 
 * True 3D Snake Game with low-poly retro style.
 * Architecture follows ECS-lite pattern with proper module separation.
 */

// Import Three.js
import * as THREE from 'three';

// Make THREE available globally for debugging
window.THREE = THREE;

// Import Game
import { Game } from './core/Game.js';

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🐍 Snake V3 - Initializing...');
    
    // Create game instance
    const game = new Game();
    
    // Expose to window for debugging
    window.game = game;
    
    console.log('🐍 Snake V3 - True 3D Snake Game loaded');
    console.log('Controls: Arrow keys or WASD to move, Space/Escape to pause');
});

// Handle WebGL context loss
document.addEventListener('WebGLContextLost', (event) => {
    event.preventDefault();
    console.warn('[Main] WebGL context lost');
});

document.addEventListener('WebGLContextRestored', () => {
    console.log('[Main] WebGL context restored');
});

// Service Worker registration (if available)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Could register service worker here for offline support
    });
}
