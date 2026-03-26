// Snake Game V3 - Main Entry
import * as THREE from 'three';
import { Game } from './game/Game.js';

// Make THREE available globally for debugging
window.THREE = THREE;

// Initialize game
const game = new Game();
window.game = game;

// Mode selection
window.selectMode = function(mode) {
    window.game.setMode(mode);
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
};

// Mobile controls
document.querySelectorAll('.ctrl-btn').forEach(btn => {
    btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const dir = btn.dataset.dir;
        if (window.game) {
            window.game.handleDirection(dir.toUpperCase());
        }
    });
});

console.log('🐍 Snake Game V3 - True 3D loaded');
