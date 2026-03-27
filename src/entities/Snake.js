/**
 * Snake.js - Snake Entity with Trail Method
 * Based on SPEC.md Section 2.2.2 and 6.2
 * 
 * Uses Trail Method where each segment follows the one before it.
 * Smooth interpolation between positions for fluid movement.
 */

import * as THREE from 'three';
import { MOVEMENT_CONFIG, WORLD_CONFIG, COLLISION_CONFIG } from '../core/Game.js';

export class Snake {
    constructor(sceneManager) {
        this.sceneManager = sceneManager;
        this.scene = sceneManager.getScene();
        
        // Configuration
        this.config = {
            initialLength: WORLD_CONFIG.initialSnakeLength,
            segmentSpacing: MOVEMENT_CONFIG.segmentSpacing,
            moveInterval: MOVEMENT_CONFIG.moveInterval,
            lerpFactor: MOVEMENT_CONFIG.lerpFactor
        };
        
        // Expose moveInterval and segmentSpacing directly for tests
        this.moveInterval = this.config.moveInterval;
        this.segmentSpacing = this.config.segmentSpacing;
        
        // State
        this.segments = []; // Array of {position, targetPosition, mesh}
        this.direction = { x: 0, z: -1 };
        this.nextDirection = { x: 0, z: -1 };
        this.isGrowing = false;
        this.growQueue = 0;
        
        // Movement timing
        this.moveTimer = 0;
        this.interpolationProgress = 0;
        
        // Previous positions for interpolation
        this.prevPositions = [];
        
        // Colors from SPEC
        this.colors = {
            head: 0xFFCC00,
            body: 0xE6B800,
            belly: 0xFFE066,
            tongue: 0xFF3333,
            eye: 0xFFFFFF,
            pupil: 0x000000
        };
        
        // Create meshes
        this.createMeshes();
        
        // Initial setup
        this.reset();
    }

    /**
     * Create 3D meshes for snake
     */
    createMeshes() {
        // Head material - SPEC Section 1.2.1
        const headMaterial = new THREE.MeshStandardMaterial({
            color: this.colors.head,
            flatShading: true,
            roughness: 0.8,
            metalness: 0.1
        });
        
        // Body material
        const bodyMaterial = new THREE.MeshStandardMaterial({
            color: this.colors.body,
            flatShading: true,
            roughness: 0.9,
            metalness: 0.0
        });
        
        // Eye material
        const eyeMaterial = new THREE.MeshStandardMaterial({
            color: this.colors.eye,
            flatShading: true
        });
        
        // Pupil material
        const pupilMaterial = new THREE.MeshStandardMaterial({
            color: this.colors.pupil
        });
        
        // Tongue material
        const tongueMaterial = new THREE.MeshStandardMaterial({
            color: this.colors.tongue,
            flatShading: true
        });
        
        // Create head mesh (cylinder) - SPEC Section 1.3.2
        const headGeometry = new THREE.CylinderGeometry(0.6, 0.7, 0.8, 8);
        this.headMesh = new THREE.Mesh(headGeometry, headMaterial);
        this.headMesh.castShadow = true;
        this.headMesh.receiveShadow = true;
        
        // Add eyes to head
        const eyeGeometry = new THREE.SphereGeometry(0.15, 8, 6);
        const pupilGeometry = new THREE.SphereGeometry(0.08, 6, 6);
        
        // Left eye
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.25, 0.25, -0.35);
        this.headMesh.add(leftEye);
        
        const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
        leftPupil.position.set(-0.25, 0.3, -0.42);
        this.headMesh.add(leftPupil);
        
        // Right eye
        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.25, 0.25, -0.35);
        this.headMesh.add(rightEye);
        
        const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
        rightPupil.position.set(0.25, 0.3, -0.42);
        this.headMesh.add(rightPupil);
        
        // Tongue - SPEC Section 1.3.2 (custom geometry)
        this.tongueMesh = this.createTongue(tongueMaterial);
        this.headMesh.add(this.tongueMesh);
        
        this.scene.add(this.headMesh);
        
        // Create body segment meshes - using InstancedMesh for performance (SPEC Section 4.1)
        const maxSegments = 100;
        const segmentGeometry = new THREE.CylinderGeometry(0.45, 0.5, 0.6, 8);
        
        this.bodyInstancedMesh = new THREE.InstancedMesh(
            segmentGeometry,
            bodyMaterial,
            maxSegments
        );
        this.bodyInstancedMesh.castShadow = true;
        this.bodyInstancedMesh.receiveShadow = true;
        this.bodyInstancedMesh.count = 0;
        this.scene.add(this.bodyInstancedMesh);
        
        // Tail mesh (cone)
        const tailGeometry = new THREE.ConeGeometry(0.4, 0.6, 8);
        this.tailMesh = new THREE.Mesh(tailGeometry, bodyMaterial);
        this.tailMesh.castShadow = true;
        this.tailMesh.visible = false;
        this.scene.add(this.tailMesh);
        
        // Initialize instance matrices
        this.tempMatrix = new THREE.Matrix4();
        this.tempPosition = new THREE.Vector3();
        this.tempQuaternion = new THREE.Quaternion();
        this.tempScale = new THREE.Vector3(1, 1, 1);
        
        // Store segment data
        this.segments = [];
    }

    /**
     * Create tongue mesh
     */
    createTongue(material) {
        const tongueGroup = new THREE.Group();
        
        // V-shape tongue using two cones
        const tongueLen = 0.4;
        const forkAngle = 0.3;
        
        // Left part
        const leftGeo = new THREE.ConeGeometry(0.04, tongueLen, 4);
        const leftTongue = new THREE.Mesh(leftGeo, material);
        leftTongue.rotation.x = Math.PI / 2;
        leftTongue.rotation.z = forkAngle;
        leftTongue.position.z = -tongueLen / 2;
        tongueGroup.add(leftTongue);
        
        // Right part
        const rightGeo = new THREE.ConeGeometry(0.04, tongueLen, 4);
        const rightTongue = new THREE.Mesh(rightGeo, material);
        rightTongue.rotation.x = Math.PI / 2;
        rightTongue.rotation.z = -forkAngle;
        rightTongue.position.z = -tongueLen / 2;
        tongueGroup.add(rightTongue);
        
        // Base
        const baseGeo = new THREE.CylinderGeometry(0.04, 0.06, 0.15, 6);
        const base = new THREE.Mesh(baseGeo, material);
        base.rotation.x = Math.PI / 2;
        tongueGroup.add(base);
        
        tongueGroup.position.set(0, 0.2, -0.5);
        
        return tongueGroup;
    }

    /**
     * Reset snake to initial state
     */
    reset() {
        // Clear segments
        this.segments = [];
        this.prevPositions = [];
        
        // Create initial segments
        const startX = WORLD_CONFIG.startPosition.x;
        const startZ = WORLD_CONFIG.startPosition.z;
        
        for (let i = 0; i < this.config.initialLength; i++) {
            const x = startX;
            const z = startZ + i * this.config.segmentSpacing;
            
            this.segments.push({
                x: x,
                z: z,
                position: new THREE.Vector3(x, 0.4, z),
                targetPosition: new THREE.Vector3(x, 0.4, z),
                gridX: startX,
                gridZ: startZ + i
            });
            
            this.prevPositions.push({
                x: x,
                z: z
            });
        }
        
        // Reset direction
        this.direction = { x: 0, z: -1 };
        this.nextDirection = { x: 0, z: -1 };
        
        // Reset timing
        this.moveTimer = 0;
        this.interpolationProgress = 0;
        this.growQueue = 0;
        
        // Update meshes
        this.updateMeshes();
        
        console.log(`[Snake] Reset with ${this.segments.length} segments`);
    }

    /**
     * Set snake direction (input from player)
     */
    setDirection(dir) {
        const dirMap = {
            'UP': { x: 0, z: -1 },
            'DOWN': { x: 0, z: 1 },
            'LEFT': { x: -1, z: 0 },
            'RIGHT': { x: 1, z: 0 }
        };
        
        const newDir = dirMap[dir.toUpperCase()];
        if (!newDir) return;
        
        // Prevent 180 degree turn
        if (newDir.x === -this.direction.x && newDir.z === -this.direction.z) {
            return; // Can't reverse
        }
        
        this.nextDirection = newDir;
    }

    /**
     * Move snake one step (called at fixed timestep)
     * @returns {boolean} true if hit wall, false otherwise
     */
    move() {
        // Apply direction change
        this.direction = { ...this.nextDirection };
        
        // Store previous positions for interpolation
        this.prevPositions = this.segments.map(s => ({
            x: s.x,
            z: s.z
        }));
        
        // Move head
        const head = this.segments[0];
        const newHeadX = head.x + this.direction.x;
        const newHeadZ = head.z + this.direction.z;
        
        // Check wall collision
        if (newHeadX < COLLISION_CONFIG.bounds.minX ||
            newHeadX > COLLISION_CONFIG.bounds.maxX ||
            newHeadZ < COLLISION_CONFIG.bounds.minZ ||
            newHeadZ > COLLISION_CONFIG.bounds.maxZ) {
            return true; // Hit wall
        }
        
        // Update head position
        head.x = newHeadX;
        head.z = newHeadZ;
        head.gridX = Math.round(newHeadX);
        head.gridZ = Math.round(newHeadZ);
        head.targetPosition.set(newHeadX, 0.4, newHeadZ);
        head.position.copy(head.targetPosition);
        
        // Move body segments - each follows the one before (Trail Method)
        for (let i = 1; i < this.segments.length; i++) {
            const current = this.segments[i];
            const target = this.segments[i - 1];
            
            current.gridX = target.gridX;
            current.gridZ = target.gridZ;
            current.x = target.x;
            current.z = target.z;
            current.targetPosition.set(
                target.x,
                0.35,
                target.z
            );
            current.position.copy(current.targetPosition);
        }
        
        // Handle growth
        if (this.growQueue > 0) {
            const lastSeg = this.segments[this.segments.length - 1];
            const newSeg = {
                x: lastSeg.x,
                z: lastSeg.z,
                position: new THREE.Vector3(lastSeg.x, 0.35, lastSeg.z),
                targetPosition: new THREE.Vector3(lastSeg.x, 0.35, lastSeg.z),
                gridX: lastSeg.gridX,
                gridZ: lastSeg.gridZ
            };
            this.segments.push(newSeg);
            this.prevPositions.push({ x: lastSeg.x, z: lastSeg.z });
            this.growQueue--;
        }
        
        // Reset interpolation
        this.interpolationProgress = 0;
        
        return false;
    }

    /**
     * Check self collision
     */
    checkSelfCollision() {
        if (this.segments.length < 2) return false;
        
        const head = this.segments[0];
        const threshold = COLLISION_CONFIG.headRadius + COLLISION_CONFIG.segmentRadius;
        
        // Start from segment 4 to avoid false positives near head
        for (let i = 4; i < this.segments.length; i++) {
            const seg = this.segments[i];
            const dx = head.x - seg.x;
            const dz = head.z - seg.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            
            if (dist < threshold) {
                return true;
            }
        }
        
        return false;
    }

    /**
     * Grow snake by one segment
     */
    grow() {
        this.growQueue++;
    }

    /**
     * Increase snake speed
     */
    increaseSpeed() {
        this.config.moveInterval = Math.max(0.1, this.config.moveInterval - 0.02);
        this.moveInterval = this.config.moveInterval;
    }

    /**
     * Update interpolation (called every frame)
     */
    updateInterpolation(alpha) {
        const t = this.easeOutCubic(alpha);
        
        // Update body segments with interpolation (except head which is already at target)
        for (let i = 1; i < this.segments.length; i++) {
            const seg = this.segments[i];
            
            if (i < this.prevPositions.length) {
                const prev = this.prevPositions[i];
                const targetX = seg.targetPosition.x;
                const targetZ = seg.targetPosition.z;
                
                // Interpolate x and z towards target
                const newX = prev.x + (targetX - prev.x) * t;
                const newZ = prev.z + (targetZ - prev.z) * t;
                
                seg.x = newX;
                seg.z = newZ;
                
                // Also update position for rendering
                seg.position.x = newX;
                seg.position.z = newZ;
            }
        }
    }

    /**
     * Update visual representation (called every frame)
     */
    updateMeshes() {
        // Position head
        if (this.segments.length > 0) {
            const head = this.segments[0];
            this.headMesh.position.copy(head.position);
            this.headMesh.rotation.y = Math.atan2(this.direction.x, this.direction.z);
            this.headMesh.visible = true;
        }
        
        // Update body instances using InstancedMesh
        const bodyCount = Math.min(this.segments.length - 1, this.bodyInstancedMesh.count === 0 ? 99 : this.bodyInstancedMesh.count);
        
        for (let i = 0; i < bodyCount && i < this.segments.length - 1; i++) {
            const seg = this.segments[i + 1];
            
            this.tempPosition.set(seg.position.x, 0.3, seg.position.z);
            
            // Calculate rotation towards next segment
            let angle = 0;
            if (i < bodyCount - 1) {
                const next = this.segments[i + 2];
                angle = Math.atan2(
                    next.position.x - seg.position.x,
                    next.position.z - seg.position.z
                );
            } else {
                // Last body segment, face towards tail direction
                const prev = this.segments[i];
                angle = Math.atan2(
                    prev.position.x - seg.position.x,
                    prev.position.z - seg.position.z
                );
            }
            
            this.tempQuaternion.setFromAxisAngle(
                new THREE.Vector3(0, 1, 0),
                angle
            );
            
            this.tempMatrix.compose(
                this.tempPosition,
                this.tempQuaternion,
                this.tempScale
            );
            
            this.bodyInstancedMesh.setMatrixAt(i, this.tempMatrix);
        }
        
        this.bodyInstancedMesh.count = bodyCount;
        this.bodyInstancedMesh.instanceMatrix.needsUpdate = true;
        
        // Position tail
        if (this.segments.length >= 2) {
            const last = this.segments[this.segments.length - 1];
            const prev = this.segments[this.segments.length - 2];
            
            this.tailMesh.position.set(last.position.x, 0.3, last.position.z);
            this.tailMesh.rotation.y = Math.atan2(
                prev.position.x - last.position.x,
                prev.position.z - last.position.z
            ) + Math.PI / 2;
            this.tailMesh.visible = true;
        } else {
            this.tailMesh.visible = false;
        }
    }

    /**
     * Update visuals every frame (animation)
     */
    updateVisuals(deltaTime) {
        // Update interpolation progress
        this.interpolationProgress += deltaTime / this.config.moveInterval;
        
        // Tongue animation
        if (this.tongueMesh) {
            const flicker = Math.sin(performance.now() * 0.01) * 0.05;
            this.tongueMesh.scale.z = 1 + flicker;
        }
        
        // Subtle head bob
        if (this.headMesh) {
            const bob = Math.sin(performance.now() * 0.005) * 0.02;
            this.headMesh.position.y = 0.4 + bob;
        }
        
        // Update mesh positions
        this.updateMeshes();
    }

    /**
     * Ease-out cubic for smooth interpolation
     */
    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    /**
     * Get head position
     */
    getHeadPosition() {
        if (this.segments.length > 0) {
            return {
                x: this.segments[0].x,
                z: this.segments[0].z
            };
        }
        return { x: 0, z: 0 };
    }

    /**
     * Get head grid position
     */
    getHeadGridPosition() {
        if (this.segments.length > 0) {
            return {
                x: this.segments[0].gridX,
                z: this.segments[0].gridZ
            };
        }
        return { x: 0, z: 0 };
    }

    /**
     * Get all body positions
     */
    getBodyPositions() {
        return this.segments.slice(1).map(s => ({
            x: s.gridX,
            z: s.gridZ
        }));
    }

    /**
     * Get current direction
     */
    getDirection() {
        return this.direction;
    }

    /**
     * Get segment count
     */
    getLength() {
        return this.segments.length;
    }
}
