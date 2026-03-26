// Snake Game V3 - Audio System (Optional)
// SPEC: Audio is disabled by default (enabled: false)

export const AUDIO_CONFIG = {
    enabled: false,             // Default disabled per SPEC
    volume: 0.5,
    
    sounds: {
        eat: 'eat.wav',
        wallHit: 'wall.wav',
        gameOver: 'gameover.wav',
        menuClick: 'click.wav',
        powerUp: 'powerup.wav',
        speedBoost: 'speedboost.wav'
    }
};

export class AudioManager {
    constructor() {
        this.enabled = AUDIO_CONFIG.enabled;
        this.volume = AUDIO_CONFIG.volume;
        this.sounds = {};
        this.audioContext = null;
        
        // Only initialize if enabled
        if (this.enabled) {
            this.init();
        }
    }
    
    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.loadSounds();
        } catch (e) {
            console.warn('Web Audio API not supported:', e);
            this.enabled = false;
        }
    }
    
    loadSounds() {
        // Load sound effects using Web Audio API oscillators
        // This creates synthesized sounds since we don't have actual audio files
        this.sounds = {
            eat: { frequency: 440, duration: 0.1, type: 'sine' },
            wallHit: { frequency: 150, duration: 0.3, type: 'sawtooth' },
            gameOver: { frequency: 200, duration: 0.5, type: 'square' },
            menuClick: { frequency: 520, duration: 0.05, type: 'sine' },
            powerUp: { frequency: 660, duration: 0.2, type: 'sine' },
            speedBoost: { frequency: 880, duration: 0.15, type: 'triangle' }
        };
    }
    
    play(soundName) {
        if (!this.enabled || !this.audioContext || !this.sounds[soundName]) {
            return;
        }
        
        try {
            const sound = this.sounds[soundName];
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.value = sound.frequency;
            oscillator.type = sound.type;
            
            gainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(
                0.01, 
                this.audioContext.currentTime + sound.duration
            );
            
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + sound.duration);
        } catch (e) {
            console.warn('Failed to play sound:', e);
        }
    }
    
    resume() {
        // Resume audio context if suspended (needed for user interaction requirement)
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }
    
    setEnabled(enabled) {
        this.enabled = enabled;
        if (enabled && !this.audioContext) {
            this.init();
        }
    }
    
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
    }
    
    // Convenience methods for game events
    playEat() { this.play('eat'); }
    playWallHit() { this.play('wallHit'); }
    playGameOver() { this.play('gameOver'); }
    playMenuClick() { this.play('menuClick'); }
    playPowerUp() { this.play('powerUp'); }
    playSpeedBoost() { this.play('speedBoost'); }
}
