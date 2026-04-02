/**
 * Food.js - Food Entity (PBR Glow Upgrade)
 * 
 * Upgraded with:
 * - Emissive red apple with glow
 * - PointLight following each food
 * - Pulsing glow effect
 * - Improved stem and leaf
 */

import * as THREE from 'three';
import { WORLD_CONFIG, COLLISION_CONFIG } from '../core/Game.js';

export class Food {
    constructor(sceneManager) {
        this.sceneManager = sceneManager;
        this.scene = sceneManager.getScene();
        
        this.foods = [];
        this.config = { maxCount: 3, radius: 0.45 };
        this.lastEatenPosition = null;
        
        this.createMeshTemplate();
        console.log('[Food] Initialized with PBR glow');
    }
    
    createMeshTemplate() {
        // Apple body - PBR with emissive glow
        this.appleMaterial = new THREE.MeshStandardMaterial({
            color: 0xff2266,
            emissive: 0xff0044,
            emissiveIntensity: 0.5,
            metalness: 0.2,
            roughness: 0.4
        });
        
        // Inner glow (additive)
        this.glowMaterial = new THREE.MeshBasicMaterial({
            color: 0xff4488,
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide
        });
        
        this.stemMaterial = new THREE.MeshStandardMaterial({
            color: 0x664422,
            metalness: 0.1,
            roughness: 0.7
        });
        
        this.leafMaterial = new THREE.MeshStandardMaterial({
            color: 0x44dd44,
            metalness: 0.0,
            roughness: 0.6
        });
        
        this.appleGeometry = new THREE.SphereGeometry(this.config.radius, 16, 12);
        this.glowGeometry = new THREE.SphereGeometry(this.config.radius * 1.3, 12, 8);
        this.stemGeometry = new THREE.CylinderGeometry(0.035, 0.055, 0.22, 6);
        this.leafGeometry = new THREE.SphereGeometry(0.14, 8, 6);
    }
    
    createMesh() {
        const group = new THREE.Group();
        
        // Apple body - emissive glow material
        const appleMat = new THREE.MeshPhysicalMaterial({
            color: 0xff2266,
            emissive: 0xff0044,
            emissiveIntensity: 0.8,
            metalness: 0.2,
            roughness: 0.3,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1
        });
        
        const apple = new THREE.Mesh(this.appleGeometry, appleMat);
        apple.scale.set(1, 0.9, 1);
        apple.castShadow = true;
        group.add(apple);
        
        // Multiple glow layers for bloom effect
        const glowMat1 = new THREE.MeshBasicMaterial({
            color: 0xff4488,
            transparent: true,
            opacity: 0.2,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        
        const glowMat2 = new THREE.MeshBasicMaterial({
            color: 0xff0066,
            transparent: true,
            opacity: 0.1,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        
        const glow1 = new THREE.Mesh(new THREE.SphereGeometry(this.config.radius * 1.3, 12, 8), glowMat1);
        group.add(glow1);
        const glow2 = new THREE.Mesh(new THREE.SphereGeometry(this.config.radius * 1.8, 10, 6), glowMat2);
        group.add(glow2);
        
        // Stem
        const stem = new THREE.Mesh(this.stemGeometry, this.stemMaterial);
        stem.position.set(0, 0.5, 0);
        group.add(stem);
        
        // Leaf
        const leaf = new THREE.Mesh(this.leafGeometry, this.leafMaterial);
        leaf.scale.set(1.6, 0.4, 1);
        leaf.position.set(0.12, 0.56, 0.05);
        leaf.rotation.z = 0.5;
        group.add(leaf);
        
        // Shine highlight
        const highlight = new THREE.Mesh(
            new THREE.SphereGeometry(0.1, 8, 8),
            new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 })
        );
        highlight.position.set(-0.18, 0.18, -0.28);
        group.add(highlight);
        
        return group;
    }
    
    createLight() {
        const light = new THREE.PointLight(0xff2266, 2.5, 8);
        return light;
    }
    
    spawn(snakeHead, snakeBody) {
        if (this.foods.length >= this.config.maxCount) return null;
        
        const gridWidth = WORLD_CONFIG.size;
        const halfGrid = gridWidth / 2;
        
        let position = null;
        let attempts = 0;
        
        do {
            const x = Math.floor(Math.random() * (gridWidth - 4)) - halfGrid + 2;
            const z = Math.floor(Math.random() * (gridWidth - 4)) - halfGrid + 2;
            position = { x, z };
            attempts++;
        } while (this.isPositionOccupied(position, snakeHead, snakeBody) && attempts < 100);
        
        if (attempts >= 100) return null;
        
        const food = {
            gridX: position.x,
            gridZ: position.z,
            position: new THREE.Vector3(position.x, 0.5, position.z),
            targetPosition: new THREE.Vector3(position.x, 0.5, position.z),
            mesh: this.createMesh(),
            light: this.createLight(),
            bobOffset: Math.random() * Math.PI * 2
        };
        
        food.mesh.position.copy(food.position);
        food.light.position.copy(food.position);
        this.scene.add(food.mesh);
        this.scene.add(food.light);
        this.foods.push(food);
        
        return food;
    }
    
    isPositionOccupied(position, snakeHead, snakeBody) {
        const checkRadius = 1.5;
        
        if (snakeHead) {
            const dx = position.x - snakeHead.x;
            const dz = position.z - snakeHead.z;
            if (Math.sqrt(dx * dx + dz * dz) < checkRadius) return true;
        }
        
        if (snakeBody && Array.isArray(snakeBody)) {
            for (const seg of snakeBody) {
                const dx = position.x - seg.x;
                const dz = position.z - seg.z;
                if (Math.sqrt(dx * dx + dz * dz) < checkRadius) return true;
            }
        }
        
        for (const food of this.foods) {
            const dx = position.x - food.gridX;
            const dz = position.z - food.gridZ;
            if (Math.sqrt(dx * dx + dz * dz) < checkRadius) return true;
        }
        
        return false;
    }
    
    remove(food) {
        const index = this.foods.indexOf(food);
        if (index > -1) {
            this.scene.remove(food.mesh);
            this.scene.remove(food.light);
            this.foods.splice(index, 1);
        }
    }
    
    clear() {
        for (const food of this.foods) {
            this.scene.remove(food.mesh);
            this.scene.remove(food.light);
        }
        this.foods = [];
    }
    
    needsSpawn() { return this.foods.length < this.config.maxCount; }
    
    checkCollision(headPosition) {
        for (let i = this.foods.length - 1; i >= 0; i--) {
            const food = this.foods[i];
            const dx = headPosition.x - food.position.x;
            const dz = headPosition.z - food.position.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            
            if (dist < 0.9) {
                const eaten = this.foods.splice(i, 1)[0];
                this.scene.remove(eaten.mesh);
                this.scene.remove(eaten.light);
                this.lastEatenPosition = { x: food.position.x, y: food.position.y, z: food.position.z };
                return { x: food.position.x, y: food.position.y, z: food.position.z };
            }
        }
        return null;
    }
    
    getLastEatenPosition() {
        return this.lastEatenPosition || null;
    }
    
    getPositions() {
        return this.foods.map(f => ({ x: f.gridX, z: f.gridZ }));
    }
    
    update(deltaTime) {
        const time = performance.now() * 0.001;
        
        for (const food of this.foods) {
            // Bobbing
            const bob = Math.sin(time * 2.5 + food.bobOffset) * 0.18;
            food.mesh.position.y = 0.5 + bob;
            food.light.position.y = 0.5 + bob;
            
            // Rotation
            food.mesh.rotation.y += deltaTime * 1.2;
            
            // Pulsing light
            const pulse = 2.0 + Math.sin(time * 4 + food.bobOffset) * 0.8;
            food.light.intensity = pulse;
        }
    }
    
    updateInterpolation(alpha) {}
    getCount() { return this.foods.length; }
}
