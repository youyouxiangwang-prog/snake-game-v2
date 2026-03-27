/**
 * Obstacle.js - Obstacle Entity
 * Based on SPEC.md Section 2.3.2
 * 
 * Obstacles spawn in OBSTACLE mode and cause game over on collision.
 * Types: stumps (cylinders) and rocks (dodecahedrons)
 */

import * as THREE from 'three';
import { WORLD_CONFIG, COLLISION_CONFIG } from '../core/Game.js';

export class Obstacle {
    constructor(sceneManager) {
        this.sceneManager = sceneManager;
        this.scene = sceneManager.getScene();
        
        // Obstacles array
        this.obstacles = [];
        
        // Configuration
        this.config = {
            stumpRadius: 0.8,
            stumpHeight: 1.5,
            rockRadius: 0.6,
            
            // Colors from SPEC Section 1.4
            stumpTopColor: 0xDDAA55,
            stumpSideColor: 0x886644,
            rockColor: 0xAAAAAA
        };
        
        // Create materials
        this.createMaterials();
        
        // Create geometries
        this.createGeometries();
        
        console.log('[Obstacle] Initialized');
    }

    /**
     * Create obstacle materials
     */
    createMaterials() {
        // Stump material
        this.stumpMaterial = new THREE.MeshStandardMaterial({
            color: this.config.stumpSideColor,
            flatShading: true,
            roughness: 1.0
        });
        
        // Stump top material
        this.stumpTopMaterial = new THREE.MeshStandardMaterial({
            color: this.config.stumpTopColor,
            flatShading: true,
            roughness: 1.0
        });
        
        // Rock material
        this.rockMaterial = new THREE.MeshStandardMaterial({
            color: this.config.rockColor,
            flatShading: true,
            roughness: 1.0
        });
    }

    /**
     * Create obstacle geometries
     */
    createGeometries() {
        // Stump geometry - SPEC Section 1.3.2
        this.stumpGeometry = new THREE.CylinderGeometry(
            this.config.stumpRadius,  // topRadius
            this.config.stumpRadius + 0.2, // bottomRadius (slightly wider)
            this.config.stumpHeight,
            8   // radialSegments
        );
        
        // Stump top geometry
        this.stumpTopGeometry = new THREE.CylinderGeometry(
            this.config.stumpRadius - 0.1,
            this.config.stumpRadius,
            0.2,
            8
        );
        
        // Rock geometry - DodecahedronBufferGeometry - SPEC Section 1.3.2
        this.rockGeometry = new THREE.DodecahedronGeometry(
            this.config.rockRadius,
            0   // detail
        );
    }

    /**
     * Spawn a new obstacle
     */
    spawn(snakeHead, snakeBody, type = null) {
        const gridWidth = WORLD_CONFIG.size;
        const halfGrid = gridWidth / 2;
        
        // Randomly choose type if not specified
        if (!type) {
            type = Math.random() > 0.5 ? 'stump' : 'rock';
        }
        
        let position = null;
        let attempts = 0;
        const maxAttempts = 100;
        
        // Find valid spawn position
        do {
            const x = Math.floor(Math.random() * (gridWidth - 6)) - halfGrid + 3;
            const z = Math.floor(Math.random() * (gridWidth - 6)) - halfGrid + 3;
            
            position = { x, z };
            attempts++;
        } while (this.isPositionOccupied(position, snakeHead, snakeBody) && attempts < maxAttempts);
        
        if (attempts >= maxAttempts) {
            console.warn('[Obstacle] Could not find valid spawn position');
            return null;
        }
        
        // Create obstacle object
        const obstacle = {
            type: type,
            gridX: position.x,
            gridZ: position.z,
            position: new THREE.Vector3(position.x, this.getHeight(type) / 2, position.z),
            radius: this.getRadius(type),
            mesh: this.createMesh(type)
        };
        
        // Position mesh
        obstacle.mesh.position.copy(obstacle.position);
        this.scene.add(obstacle.mesh);
        
        // Add to obstacles array
        this.obstacles.push(obstacle);
        
        console.log(`[Obstacle] Spawned ${type} at (${position.x}, ${position.z}), total: ${this.obstacles.length}`);
        
        return obstacle;
    }

    /**
     * Create obstacle mesh
     */
    createMesh(type) {
        const group = new THREE.Group();
        
        if (type === 'stump') {
            // Main stump body
            const stump = new THREE.Mesh(this.stumpGeometry, this.stumpMaterial);
            stump.castShadow = true;
            stump.receiveShadow = true;
            group.add(stump);
            
            // Stump top (lighter color)
            const top = new THREE.Mesh(this.stumpTopGeometry, this.stumpTopMaterial);
            top.position.y = this.config.stumpHeight / 2 - 0.05;
            top.castShadow = true;
            group.add(top);
        } else {
            // Rock
            const rock = new THREE.Mesh(this.rockGeometry, this.rockMaterial);
            rock.castShadow = true;
            rock.receiveShadow = true;
            rock.position.y = this.config.rockRadius * 0.5;
            rock.rotation.y = Math.random() * Math.PI;
            group.add(rock);
        }
        
        return group;
    }

    /**
     * Get obstacle height by type
     */
    getHeight(type) {
        return type === 'stump' ? this.config.stumpHeight : this.config.rockRadius * 2;
    }

    /**
     * Get obstacle radius by type
     */
    getRadius(type) {
        return type === 'stump' ? this.config.stumpRadius : this.config.rockRadius;
    }

    /**
     * Check if position is occupied
     */
    isPositionOccupied(position, snakeHead, snakeBody) {
        const checkRadius = 2.0;
        
        // Check snake head
        if (snakeHead) {
            const dx = position.x - snakeHead.x;
            const dz = position.z - snakeHead.z;
            if (Math.sqrt(dx * dx + dz * dz) < checkRadius) {
                return true;
            }
        }
        
        // Check snake body
        if (snakeBody && Array.isArray(snakeBody)) {
            for (const seg of snakeBody) {
                const dx = position.x - seg.x;
                const dz = position.z - seg.z;
                if (Math.sqrt(dx * dx + dz * dz) < checkRadius) {
                    return true;
                }
            }
        }
        
        // Check other obstacles
        for (const obs of this.obstacles) {
            const dx = position.x - obs.gridX;
            const dz = position.z - obs.gridZ;
            if (Math.sqrt(dx * dx + dz * dz) < checkRadius) {
                return true;
            }
        }
        
        return false;
    }

    /**
     * Check collision with snake head
     */
    checkCollision(headPosition) {
        const headRadius = COLLISION_CONFIG.headRadius;
        
        for (const obstacle of this.obstacles) {
            const dx = headPosition.x - obstacle.position.x;
            const dz = headPosition.z - obstacle.position.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            
            if (dist < headRadius + obstacle.radius) {
                return true;
            }
        }
        
        return false;
    }

    /**
     * Clear all obstacles
     */
    clear() {
        for (const obstacle of this.obstacles) {
            this.scene.remove(obstacle.mesh);
            obstacle.mesh.traverse(child => {
                if (child.geometry) child.geometry.dispose();
                if (child.material) child.material.dispose();
            });
        }
        this.obstacles = [];
        console.log('[Obstacle] Cleared all obstacles');
    }

    /**
     * Update obstacle animation
     */
    update(deltaTime) {
        // Obstacles don't animate much, but we could add subtle effects here
    }

    /**
     * Get obstacle count
     */
    getCount() {
        return this.obstacles.length;
    }

    /**
     * Get all obstacle positions
     */
    getPositions() {
        return this.obstacles.map(o => ({ x: o.gridX, z: o.gridZ }));
    }
}
