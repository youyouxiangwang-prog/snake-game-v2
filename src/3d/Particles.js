/**
 * Particles.js - Particle Burst Effect System
 * 
 * Uses InstancedMesh for GPU-efficient particles.
 * Burst effect when eating food.
 */

import * as THREE from 'three';

export class Particles {
    constructor(scene) {
        this.scene = scene;
        this.particleCount = 60;
        this.active = [];
        this.positions = [];
        this.velocities = [];
        this.lifetimes = [];
        
        this.matrix = new THREE.Matrix4();
        this.quat = new THREE.Quaternion();
        this.scale = new THREE.Vector3(1, 1, 1);
        this.hiddenPos = new THREE.Vector3(0, -500, 0);
        
        this.init();
    }
    
    init() {
        const geo = new THREE.BoxGeometry(0.15, 0.15, 0.15);
        const mat = new THREE.MeshBasicMaterial({
            color: 0x00ff88,
            transparent: true
        });
        
        this.mesh = new THREE.InstancedMesh(geo, mat, this.particleCount);
        this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        this.scene.add(this.mesh);
        
        for (let i = 0; i < this.particleCount; i++) {
            this.active.push(false);
            this.positions.push(new THREE.Vector3(0, -500, 0));
            this.velocities.push(new THREE.Vector3());
            this.lifetimes.push(0);
            
            this.matrix.compose(this.hiddenPos, this.quat, this.scale);
            this.mesh.setMatrixAt(i, this.matrix);
        }
        this.mesh.instanceMatrix.needsUpdate = true;
    }
    
    burst(position, color = 0x00ff88) {
        this.mesh.material.color.setHex(color);
        
        // Activate particles
        for (let i = 0; i < this.particleCount; i++) {
            if (!this.active[i]) {
                this.active[i] = true;
                this.positions[i].copy(position);
                this.positions[i].y += 0.5;
                
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI * 0.8;
                const speed = 4 + Math.random() * 10;
                
                this.velocities[i].set(
                    Math.sin(phi) * Math.cos(theta) * speed,
                    Math.abs(Math.cos(phi)) * speed + 3,
                    Math.sin(phi) * Math.sin(theta) * speed
                );
                this.lifetimes[i] = 0.8 + Math.random() * 0.4;
                
                // Activate a few more for bigger burst
                for (let j = 0; j < 4; j++) {
                    for (let k = 0; k < this.particleCount; k++) {
                        if (!this.active[k]) {
                            this.active[k] = true;
                            this.positions[k].copy(position);
                            this.positions[k].y += 0.5;
                            const t2 = Math.random() * Math.PI * 2;
                            const p2 = Math.random() * Math.PI;
                            const s2 = 2 + Math.random() * 6;
                            this.velocities[k].set(
                                Math.sin(p2) * Math.cos(t2) * s2,
                                Math.abs(Math.cos(p2)) * s2 + 1,
                                Math.sin(p2) * Math.sin(t2) * s2
                            );
                            this.lifetimes[k] = 0.5 + Math.random() * 0.4;
                            break;
                        }
                    }
                }
                break;
            }
        }
    }
    
    burstCelebration(position) {
        const colors = [0xffd700, 0xffaa00, 0xffff00, 0xffffff, 0xff66aa];
        for (let i = 0; i < 25; i++) {
            this.burst(position, colors[Math.floor(Math.random() * colors.length)]);
        }
    }
    
    update(deltaTime) {
        const dt = Math.min(deltaTime, 0.05);
        
        for (let i = 0; i < this.particleCount; i++) {
            if (this.active[i]) {
                this.lifetimes[i] -= dt * 1.8;
                
                if (this.lifetimes[i] <= 0) {
                    this.active[i] = false;
                    this.positions[i].copy(this.hiddenPos);
                    this.matrix.compose(this.hiddenPos, this.quat, this.scale);
                } else {
                    this.positions[i].addScaledVector(this.velocities[i], dt);
                    this.velocities[i].y -= 14 * dt;
                    
                    if (this.positions[i].y < 0.1) {
                        this.positions[i].y = 0.1;
                        this.velocities[i].y *= -0.3;
                        this.velocities[i].x *= 0.6;
                        this.velocities[i].z *= 0.6;
                    }
                    
                    const s = Math.max(0.1, this.lifetimes[i] * 0.8 + 0.2);
                    this.scale.set(s, s, s);
                    this.matrix.compose(this.positions[i], this.quat, this.scale);
                }
            } else {
                this.matrix.compose(this.hiddenPos, this.quat, this.scale);
            }
            
            this.mesh.setMatrixAt(i, this.matrix);
        }
        
        this.mesh.instanceMatrix.needsUpdate = true;
    }
    
    dispose() {
        this.scene.remove(this.mesh);
    }
}
