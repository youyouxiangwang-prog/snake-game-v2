// Snake Game V3 - Power-ups System
import * as THREE from 'three';

// Power-up types
export const POWERUP_TYPES = {
    SPEED_BOOST: 'speedBoost',   // Temporary speed increase
    SHIELD: 'shield',             // Temporary invincibility
    SCORE_MULTIPLIER: 'scoreMultiplier'  // 2x score for a duration
};

// Duration constants (in seconds)
const POWERUP_DURATION = 5;

// Visual config per type
const POWERUP_CONFIG = {
    [POWERUP_TYPES.SPEED_BOOST]: {
        color: 0x00FFFF,    // Cyan
        icon: '⚡',
        geometry: new THREE.OctahedronGeometry(0.4, 0)
    },
    [POWERUP_TYPES.SHIELD]: {
        color: 0x4488FF,    // Blue
        icon: '🛡️',
        geometry: new THREE.BoxGeometry(0.5, 0.5, 0.5)
    },
    [POWERUP_TYPES.SCORE_MULTIPLIER]: {
        color: 0xFFD700,    // Gold
        icon: '✖️',
        geometry: new THREE.TetrahedronGeometry(0.4, 0)
    }
};

export class PowerUp {
    constructor(scene) {
        this.scene = scene;
        this.powerups = [];
        this.activeEffects = [];
        this.maxPowerups = 3;
        
        // Material cache
        this.materials = {};
        for (const [type, config] of Object.entries(POWERUP_CONFIG)) {
            this.materials[type] = new THREE.MeshLambertMaterial({
                color: config.color,
                flatShading: true,
                transparent: true,
                opacity: 0.9
            });
        }
    }
    
    clear() {
        this.powerups.forEach(p => {
            this.scene.getScene().remove(p.mesh);
        });
        this.powerups = [];
        this.activeEffects = [];
    }
    
    spawn(snakeHead, snakeBody) {
        if (this.powerups.length >= this.maxPowerups) return;
        
        // Pick random type
        const types = Object.values(POWERUP_TYPES);
        const type = types[Math.floor(Math.random() * types.length)];
        const config = POWERUP_CONFIG[type];
        
        let valid = false;
        let attempts = 0;
        let x, z;
        
        while (!valid && attempts < 100) {
            // Spawn within arena bounds (-14 to 14)
            x = Math.floor(Math.random() * 24) - 12;
            z = Math.floor(Math.random() * 24) - 12;
            
            // Check distance from snake head
            const dxH = x - snakeHead.x;
            const dzH = z - snakeHead.z;
            if (Math.sqrt(dxH * dxH + dzH * dzH) < 5) {
                attempts++;
                continue;
            }
            
            // Check distance from snake body
            let collision = false;
            for (const seg of snakeBody) {
                const dx = x - seg.x;
                const dz = z - seg.z;
                if (Math.sqrt(dx * dx + dz * dz) < 2) {
                    collision = true;
                    break;
                }
            }
            
            // Check distance from other powerups
            if (!collision) {
                for (const p of this.powerups) {
                    const dx = x - p.position.x;
                    const dz = z - p.position.z;
                    if (Math.sqrt(dx * dx + dz * dz) < 3) {
                        collision = true;
                        break;
                    }
                }
            }
            
            if (!collision) valid = true;
            attempts++;
        }
        
        if (!valid) return;
        
        // Create mesh
        const mesh = new THREE.Mesh(config.geometry, this.materials[type]);
        mesh.position.set(x, 0.6, z);
        mesh.castShadow = true;
        mesh.userData.type = type;
        mesh.userData.icon = config.icon;
        
        this.scene.getScene().add(mesh);
        this.powerups.push({
            type,
            position: { x, z },
            mesh
        });
    }
    
    update(time) {
        // Update existing powerups (bobbing animation)
        for (const p of this.powerups) {
            const bob = Math.sin(time * 0.003 + p.position.x) * 0.1;
            p.mesh.position.y = 0.6 + bob;
            p.mesh.rotation.y = time * 0.001;
        }
        
        // Update active effects
        for (let i = this.activeEffects.length - 1; i >= 0; i--) {
            const effect = this.activeEffects[i];
            effect.remaining -= 1/60; // Approximate frame time
            
            if (effect.remaining <= 0) {
                this.deactivateEffect(effect);
                this.activeEffects.splice(i, 1);
            }
        }
    }
    
    checkCollision(headPos) {
        for (let i = 0; i < this.powerups.length; i++) {
            const p = this.powerups[i];
            const dx = headPos.x - p.position.x;
            const dz = headPos.z - p.position.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            
            if (dist < 0.8) {
                // Collect powerup
                this.scene.getScene().remove(p.mesh);
                this.powerups.splice(i, 1);
                return p.type;
            }
        }
        return null;
    }
    
    activateEffect(type, game) {
        // Deactivate existing effect of same type
        const existing = this.activeEffects.find(e => e.type === type);
        if (existing) {
            this.deactivateEffect(existing);
            const idx = this.activeEffects.indexOf(existing);
            this.activeEffects.splice(idx, 1);
        }
        
        // Activate new effect
        const effect = { type, remaining: POWERUP_DURATION };
        this.activeEffects.push(effect);
        
        // Apply effect to game
        switch (type) {
            case POWERUP_TYPES.SPEED_BOOST:
                game.snake.applySpeedBoost(POWERUP_DURATION);
                break;
            case POWERUP_TYPES.SHIELD:
                game.snake.applyShield(POWERUP_DURATION);
                break;
            case POWERUP_TYPES.SCORE_MULTIPLIER:
                game.scoreMultiplier = 2;
                setTimeout(() => { game.scoreMultiplier = 1; }, POWERUP_DURATION * 1000);
                break;
        }
    }
    
    deactivateEffect(effect) {
        // Clean up effect (if needed)
    }
    
    hasActiveShield() {
        return this.activeEffects.some(e => e.type === POWERUP_TYPES.SHIELD);
    }
    
    getItems() {
        return this.powerups;
    }
}
