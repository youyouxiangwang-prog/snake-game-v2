/**
 * Food.js - Food Entity
 * Based on SPEC.md Section 2.4
 * 
 * Food spawns at random positions, max 3 at a time.
 * Each food gives 10 points.
 */

import * as THREE from 'three';
import { WORLD_CONFIG, COLLISION_CONFIG, SCORE_CONFIG } from '../core/Game.js';

export class Food {
    constructor(sceneManager) {
        this.sceneManager = sceneManager;
        this.scene = sceneManager.getScene();
        
        // Food items array
        this.foods = [];
        
        // Configuration
        this.config = {
            maxCount: 3,
            radius: 0.4,
            spawnCheckInterval: 3000 // ms
        };
        
        // Spawn timer
        this.spawnTimer = 0;
        
        // Create food mesh template
        this.createMeshTemplate();
        
        console.log('[Food] Initialized');
    }

    /**
     * Create food mesh template
     */
    createMeshTemplate() {
        // Apple material - SPEC Section 1.2.1
        this.appleMaterial = new THREE.MeshStandardMaterial({
            color: 0xFF3333,
            flatShading: true,
            roughness: 0.6,
            metalness: 0.1
        });
        
        // Stem material
        this.stemMaterial = new THREE.MeshStandardMaterial({
            color: 0x664422,
            flatShading: true
        });
        
        // Leaf material
        this.leafMaterial = new THREE.MeshStandardMaterial({
            color: 0x44CC44,
            flatShading: true
        });
        
        // Apple geometry - SPEC Section 1.3.2
        this.appleGeometry = new THREE.SphereGeometry(
            this.config.radius,
            8,  // segmentsWidth
            8   // segmentsHeight
        );
        
        // Stem geometry
        this.stemGeometry = new THREE.CylinderGeometry(0.03, 0.04, 0.15, 6);
        
        // Leaf geometry
        this.leafGeometry = new THREE.ConeGeometry(0.08, 0.2, 4);
    }

    /**
     * Create a food mesh
     */
    createMesh() {
        const group = new THREE.Group();
        
        // Apple body
        const apple = new THREE.Mesh(this.appleGeometry, this.appleMaterial);
        apple.castShadow = true;
        apple.receiveShadow = true;
        group.add(apple);
        
        // Stem
        const stem = new THREE.Mesh(this.stemGeometry, this.stemMaterial);
        stem.position.set(0, 0.45, 0);
        group.add(stem);
        
        // Leaf
        const leaf = new THREE.Mesh(this.leafGeometry, this.leafMaterial);
        leaf.position.set(0.1, 0.5, 0);
        leaf.rotation.z = Math.PI / 4;
        group.add(leaf);
        
        return group;
    }

    /**
     * Spawn a new food item
     */
    spawn(snakeHead, snakeBody) {
        if (this.foods.length >= this.config.maxCount) {
            return null;
        }
        
        const gridWidth = WORLD_CONFIG.size;
        const halfGrid = gridWidth / 2;
        
        let position = null;
        let attempts = 0;
        const maxAttempts = 100;
        
        // Find valid spawn position
        do {
            const x = Math.floor(Math.random() * (gridWidth - 4)) - halfGrid + 2;
            const z = Math.floor(Math.random() * (gridWidth - 4)) - halfGrid + 2;
            
            position = { x, z };
            attempts++;
        } while (this.isPositionOccupied(position, snakeHead, snakeBody) && attempts < maxAttempts);
        
        if (attempts >= maxAttempts) {
            console.warn('[Food] Could not find valid spawn position');
            return null;
        }
        
        // Create food object
        const food = {
            gridX: position.x,
            gridZ: position.z,
            position: new THREE.Vector3(position.x, 0.4, position.z),
            targetPosition: new THREE.Vector3(position.x, 0.4, position.z),
            mesh: this.createMesh(),
            bobOffset: Math.random() * Math.PI * 2 // Random starting phase for bobbing
        };
        
        // Position mesh
        food.mesh.position.copy(food.position);
        this.scene.add(food.mesh);
        
        // Add to foods array
        this.foods.push(food);
        
        console.log(`[Food] Spawned at (${position.x}, ${position.z}), total: ${this.foods.length}`);
        
        return food;
    }

    /**
     * Check if position is occupied by snake or other food
     */
    isPositionOccupied(position, snakeHead, snakeBody) {
        const checkRadius = 1.5;
        
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
        
        // Check other food
        for (const food of this.foods) {
            const dx = position.x - food.gridX;
            const dz = position.z - food.gridZ;
            if (Math.sqrt(dx * dx + dz * dz) < checkRadius) {
                return true;
            }
        }
        
        return false;
    }

    /**
     * Remove a food item
     */
    remove(food) {
        const index = this.foods.indexOf(food);
        if (index > -1) {
            // Remove mesh from scene
            this.scene.remove(food.mesh);
            
            // Dispose geometries and materials
            food.mesh.traverse(child => {
                if (child.geometry) child.geometry.dispose();
                if (child.material) child.material.dispose();
            });
            
            // Remove from array
            this.foods.splice(index, 1);
            
            console.log(`[Food] Removed, remaining: ${this.foods.length}`);
        }
    }

    /**
     * Clear all food items
     */
    clear() {
        for (const food of this.foods) {
            this.scene.remove(food.mesh);
            food.mesh.traverse(child => {
                if (child.geometry) child.geometry.dispose();
                if (child.material) child.material.dispose();
            });
        }
        this.foods = [];
        console.log('[Food] Cleared all food');
    }

    /**
     * Check if food needs to spawn
     */
    needsSpawn() {
        return this.foods.length < this.config.maxCount;
    }

    /**
     * Check collision with snake head
     */
    checkCollision(headPosition) {
        const eatDistance = COLLISION_CONFIG.eatDistance;
        
        for (let i = this.foods.length - 1; i >= 0; i--) {
            const food = this.foods[i];
            const dx = headPosition.x - food.position.x;
            const dz = headPosition.z - food.position.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            
            if (dist < eatDistance) {
                // Remove and return food
                const eaten = this.foods.splice(i, 1)[0];
                this.scene.remove(eaten.mesh);
                return true;
            }
        }
        
        return false;
    }

    /**
     * Get all food positions
     */
    getPositions() {
        return this.foods.map(f => ({ x: f.gridX, z: f.gridZ }));
    }

    /**
     * Update interpolation (for smooth movement if needed)
     */
    updateInterpolation(alpha) {
        // Food doesn't interpolate position like snake
    }

    /**
     * Update food animation
     */
    update(deltaTime) {
        const time = performance.now() * 0.001;
        
        for (const food of this.foods) {
            // Bobbing animation
            const bob = Math.sin(time * 3 + food.bobOffset) * 0.05;
            food.mesh.position.y = 0.4 + bob;
            
            // Gentle rotation
            food.mesh.rotation.y += deltaTime * 0.5;
        }
    }

    /**
     * Get food count
     */
    getCount() {
        return this.foods.length;
    }
}
