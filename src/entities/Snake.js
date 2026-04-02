/**
 * Snake.js - Snake Entity (PBR Upgrade)
 * 
 * Upgraded with:
 * - PBR ellipsoid head (SphereGeometry scaled)
 * - Detailed eyes with highlights
 * - Forked tongue with animation
 * - Body segments with wave motion
 * - Smooth connector spheres between segments
 */

import * as THREE from 'three';
import { MOVEMENT_CONFIG, WORLD_CONFIG, COLLISION_CONFIG } from '../core/Game.js';

export class Snake {
    constructor(sceneManager) {
        this.sceneManager = sceneManager;
        this.scene = sceneManager.getScene();
        
        this.config = {
            initialLength: WORLD_CONFIG.initialSnakeLength,
            segmentSpacing: MOVEMENT_CONFIG.segmentSpacing,
            moveInterval: MOVEMENT_CONFIG.moveInterval,
            lerpFactor: MOVEMENT_CONFIG.lerpFactor
        };
        
        this.moveInterval = this.config.moveInterval;
        this.segmentSpacing = this.config.segmentSpacing;
        
        this.segments = [];
        this.direction = { x: 0, z: -1 };
        this.nextDirection = { x: 0, z: -1 };
        this.isGrowing = false;
        this.growQueue = 0;
        
        this.moveTimer = 0;
        this.interpolationProgress = 0;
        this.prevPositions = [];
        
        // Wave animation
        this.waveTime = 0;
        
        this.colors = {
            head: 0x4ade80,
            body: 0x22c55e,
            tail: 0x16a34a,
            eye: 0xffffff,
            pupil: 0x111111,
            tongue: 0xf87171
        };
        
        this.createMeshes();
        this.reset();
    }
    
    createMeshes() {
        // PBR Head material
        const headMat = new THREE.MeshStandardMaterial({
            color: this.colors.head,
            metalness: 0.1,
            roughness: 0.6
        });
        
        // PBR Body material
        const bodyMat = new THREE.MeshStandardMaterial({
            color: this.colors.body,
            metalness: 0.1,
            roughness: 0.65
        });
        
        // PBR Tail material
        const tailMat = new THREE.MeshStandardMaterial({
            color: this.colors.tail,
            metalness: 0.1,
            roughness: 0.7
        });
        
        // Eye materials
        const eyeMat = new THREE.MeshStandardMaterial({
            color: this.colors.eye,
            metalness: 0.0,
            roughness: 0.3
        });
        
        const pupilMat = new THREE.MeshStandardMaterial({
            color: this.colors.pupil,
            metalness: 0.8,
            roughness: 0.2
        });
        
        // Head - ellipsoid using scaled sphere
        const headGeo = new THREE.SphereGeometry(0.65, 16, 12);
        this.headMesh = new THREE.Mesh(headGeo, headMat);
        this.headMesh.scale.set(1, 0.75, 1.3);
        this.headMesh.castShadow = true;
        this.headMesh.receiveShadow = true;
        this.scene.add(this.headMesh);
        
        // Snout
        const snoutGeo = new THREE.SphereGeometry(0.35, 12, 8);
        const snout = new THREE.Mesh(snoutGeo, headMat.clone());
        snout.scale.set(0.8, 0.6, 1);
        snout.position.set(0, -0.05, -0.6);
        snout.castShadow = true;
        this.headMesh.add(snout);
        
        // Eyes with highlights
        const eyeGeo = new THREE.SphereGeometry(0.14, 10, 10);
        const pupilGeo = new THREE.SphereGeometry(0.08, 8, 8);
        
        // Left eye
        const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
        leftEye.position.set(-0.28, 0.25, -0.35);
        leftEye.scale.set(1, 1, 0.7);
        this.headMesh.add(leftEye);
        
        const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
        leftPupil.position.set(-0.28, 0.25, -0.42);
        this.headMesh.add(leftPupil);
        
        const leftHighlight = new THREE.Mesh(
            new THREE.SphereGeometry(0.04, 6, 6),
            new THREE.MeshBasicMaterial({ color: 0xffffff })
        );
        leftHighlight.position.set(-0.32, 0.32, -0.46);
        this.headMesh.add(leftHighlight);
        
        // Right eye
        const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
        rightEye.position.set(0.28, 0.25, -0.35);
        rightEye.scale.set(1, 1, 0.7);
        this.headMesh.add(rightEye);
        
        const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
        rightPupil.position.set(0.28, 0.25, -0.42);
        this.headMesh.add(rightPupil);
        
        const rightHighlight = new THREE.Mesh(
            new THREE.SphereGeometry(0.04, 6, 6),
            new THREE.MeshBasicMaterial({ color: 0xffffff })
        );
        rightHighlight.position.set(0.24, 0.32, -0.46);
        this.headMesh.add(rightHighlight);
        
        // Tongue
        this.tongueMesh = this.createTongue();
        this.headMesh.add(this.tongueMesh);
        
        // Body - InstancedMesh for performance
        const maxSegments = 100;
        const segmentGeometry = new THREE.SphereGeometry(0.5, 12, 8);
        
        this.bodyInstancedMesh = new THREE.InstancedMesh(
            segmentGeometry,
            bodyMat,
            maxSegments
        );
        this.bodyInstancedMesh.castShadow = true;
        this.bodyInstancedMesh.receiveShadow = true;
        this.bodyInstancedMesh.count = 0;
        this.scene.add(this.bodyInstancedMesh);
        
        // Connector instanced mesh for smooth body
        const connectorGeo = new THREE.SphereGeometry(0.35, 8, 6);
        this.connectorMesh = new THREE.InstancedMesh(
            connectorGeo,
            bodyMat.clone(),
            maxSegments
        );
        this.connectorMesh.castShadow = true;
        this.connectorMesh.count = 0;
        this.scene.add(this.connectorMesh);
        
        // Tail
        const tailGeo = new THREE.ConeGeometry(0.28, 0.9, 10);
        this.tailMesh = new THREE.Mesh(tailGeo, tailMat);
        this.tailMesh.castShadow = true;
        this.tailMesh.visible = false;
        this.scene.add(this.tailMesh);
        
        // Temp matrices for instancing
        this.tempMatrix = new THREE.Matrix4();
        this.tempPosition = new THREE.Vector3();
        this.tempQuaternion = new THREE.Quaternion();
        this.tempScale = new THREE.Vector3(1, 1, 1);
    }
    
    createTongue() {
        const tongueGroup = new THREE.Group();
        const tongueMat = new THREE.MeshStandardMaterial({
            color: this.colors.tongue,
            metalness: 0.0,
            roughness: 0.8
        });
        
        const tongueLen = 0.35;
        const forkAngle = 0.35;
        
        const leftGeo = new THREE.ConeGeometry(0.035, tongueLen, 6);
        const leftTongue = new THREE.Mesh(leftGeo, tongueMat);
        leftTongue.rotation.x = Math.PI / 2;
        leftTongue.rotation.z = forkAngle;
        leftTongue.position.z = -tongueLen / 2;
        tongueGroup.add(leftTongue);
        
        const rightGeo = new THREE.ConeGeometry(0.035, tongueLen, 6);
        const rightTongue = new THREE.Mesh(rightGeo, tongueMat);
        rightTongue.rotation.x = Math.PI / 2;
        rightTongue.rotation.z = -forkAngle;
        rightTongue.position.z = -tongueLen / 2;
        tongueGroup.add(rightTongue);
        
        const baseGeo = new THREE.CylinderGeometry(0.04, 0.055, 0.12, 6);
        const base = new THREE.Mesh(baseGeo, tongueMat);
        base.rotation.x = Math.PI / 2;
        tongueGroup.add(base);
        
        tongueGroup.position.set(0, 0.1, -0.55);
        tongueGroup.visible = false;
        
        return tongueGroup;
    }
    
    reset() {
        this.segments = [];
        this.prevPositions = [];
        
        const startX = WORLD_CONFIG.startPosition.x;
        const startZ = WORLD_CONFIG.startPosition.z;
        
        for (let i = 0; i < this.config.initialLength; i++) {
            const x = startX;
            const z = startZ + i * this.config.segmentSpacing;
            
            this.segments.push({
                x, z,
                position: new THREE.Vector3(x, 0.4, z),
                targetPosition: new THREE.Vector3(x, 0.4, z),
                gridX: startX,
                gridZ: startZ + i
            });
            
            this.prevPositions.push({ x, z });
        }
        
        this.direction = { x: 0, z: -1 };
        this.nextDirection = { x: 0, z: -1 };
        this.moveTimer = 0;
        this.interpolationProgress = 0;
        this.growQueue = 0;
        
        this.updateMeshes();
        console.log(`[Snake] Reset with ${this.segments.length} segments`);
    }
    
    setDirection(dir) {
        const dirMap = {
            'UP': { x: 0, z: -1 },
            'DOWN': { x: 0, z: 1 },
            'LEFT': { x: -1, z: 0 },
            'RIGHT': { x: 1, z: 0 }
        };
        
        const newDir = dirMap[dir.toUpperCase()];
        if (!newDir) return;
        
        if (newDir.x === -this.direction.x && newDir.z === -this.direction.z) return;
        this.nextDirection = newDir;
    }
    
    move() {
        this.direction = { ...this.nextDirection };
        
        this.prevPositions = this.segments.map(s => ({ x: s.x, z: s.z }));
        
        const head = this.segments[0];
        const newHeadX = head.x + this.direction.x;
        const newHeadZ = head.z + this.direction.z;
        
        if (newHeadX < COLLISION_CONFIG.bounds.minX ||
            newHeadX > COLLISION_CONFIG.bounds.maxX ||
            newHeadZ < COLLISION_CONFIG.bounds.minZ ||
            newHeadZ > COLLISION_CONFIG.bounds.maxZ) {
            return true;
        }
        
        head.x = newHeadX;
        head.z = newHeadZ;
        head.gridX = Math.round(newHeadX);
        head.gridZ = Math.round(newHeadZ);
        head.targetPosition.set(newHeadX, 0.4, newHeadZ);
        head.position.copy(head.targetPosition);
        
        for (let i = this.segments.length - 1; i > 0; i--) {
            const current = this.segments[i];
            const target = this.segments[i - 1];
            
            const targetOldX = this.prevPositions[i - 1]?.x ?? target.x;
            const targetOldZ = this.prevPositions[i - 1]?.z ?? target.z;
            
            current.x = targetOldX;
            current.z = targetOldZ;
            current.gridX = Math.round(targetOldX);
            current.gridZ = Math.round(targetOldZ);
            current.targetPosition.set(targetOldX, 0.35, targetOldZ);
            current.position.copy(current.targetPosition);
        }
        
        if (this.growQueue > 0) {
            const lastSeg = this.segments[this.segments.length - 1];
            const newSeg = {
                x: lastSeg.x, z: lastSeg.z,
                position: new THREE.Vector3(lastSeg.x, 0.35, lastSeg.z),
                targetPosition: new THREE.Vector3(lastSeg.x, 0.35, lastSeg.z),
                gridX: lastSeg.gridX, gridZ: lastSeg.gridZ
            };
            this.segments.push(newSeg);
            this.prevPositions.push({ x: lastSeg.x, z: lastSeg.z });
            this.growQueue--;
        }
        
        this.interpolationProgress = 0;
        return false;
    }
    
    checkSelfCollision() {
        if (this.segments.length < 2) return false;
        
        const head = this.segments[0];
        const threshold = COLLISION_CONFIG.headRadius + COLLISION_CONFIG.segmentRadius;
        
        for (let i = 4; i < this.segments.length; i++) {
            const seg = this.segments[i];
            const dx = head.x - seg.x;
            const dz = head.z - seg.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            
            if (dist < threshold) return true;
        }
        return false;
    }
    
    grow() { this.growQueue++; }
    increaseSpeed() {
        this.config.moveInterval = Math.max(0.1, this.config.moveInterval - 0.02);
        this.moveInterval = this.config.moveInterval;
    }
    
    updateInterpolation(alpha) {
        const t = this.easeOutCubic(alpha);
        
        for (let i = 1; i < this.segments.length; i++) {
            const seg = this.segments[i];
            
            if (i < this.prevPositions.length) {
                const prev = this.prevPositions[i];
                const targetX = seg.targetPosition.x;
                const targetZ = seg.targetPosition.z;
                
                const newX = prev.x + (targetX - prev.x) * t;
                const newZ = prev.z + (targetZ - prev.z) * t;
                
                seg.x = newX;
                seg.z = newZ;
                seg.position.x = newX;
                seg.position.z = newZ;
            }
        }
    }
    
    /**
     * Animation-only update - runs every frame, does NOT touch positions.
     * Call this from Game.update().
     */
    updateVisuals(deltaTime) {
        this.waveTime += deltaTime * 0.001;
        
        // Tongue flicker (pure animation, no position)
        if (this.tongueMesh) {
            const extend = (Math.sin(this.waveTime * 8) + 1) * 0.5 * 0.3;
            this.tongueMesh.scale.z = 0.5 + extend;
            this.tongueMesh.visible = Math.sin(this.waveTime * 6) > 0.2;
        }
    }
    
    /**
     * Render with interpolation - runs every frame with alpha (0-1).
     * Interpolates between prevPositions (last tick) and targetPositions (current tick).
     * Call this from Game.render(alpha).
     */
    updateMeshesRender(alpha) {
        const t = this.easeOutCubic(alpha);
        
        // Head with interpolation
        if (this.segments.length > 0) {
            const head = this.segments[0];
            let headX = head.position.x;
            let headZ = head.position.z;
            
            if (this.prevPositions.length > 0) {
                const prev = this.prevPositions[0];
                headX = prev.x + (head.position.x - prev.x) * t;
                headZ = prev.z + (head.position.z - prev.z) * t;
            }
            
            const bob = Math.sin(this.waveTime * 4) * 0.03;
            this.headMesh.position.set(headX, 0.4 + bob, headZ);
            this.headMesh.rotation.y = Math.atan2(this.direction.x, this.direction.z);
            this.headMesh.visible = true;
        }
        
        // Wave animation params
        const waveAmp = 0.08;
        
        // Body segments with interpolation
        const bodyCount = Math.min(this.segments.length - 1, 99);
        
        for (let i = 0; i < bodyCount; i++) {
            const seg = this.segments[i + 1];
            const prev = i < this.prevPositions.length ? this.prevPositions[i + 1] : null;
            
            // Interpolated position
            let segX = seg.position.x;
            let segZ = seg.position.z;
            if (prev && t < 1) {
                segX = prev.x + (seg.position.x - prev.x) * t;
                segZ = prev.z + (seg.position.z - prev.z) * t;
            }
            
            const waveOffset = Math.sin((i + 1) * 0.6 + this.waveTime * 4) * waveAmp;
            this.tempPosition.set(segX, 0.3 + waveOffset, segZ);
            
            // Rotation towards next segment (also interpolated)
            let angle = 0;
            if (i < bodyCount - 1) {
                const next = this.segments[i + 2];
                const nextPrev = (i + 2) < this.prevPositions.length ? this.prevPositions[i + 2] : null;
                let nextX = next.position.x, nextZ = next.position.z;
                if (nextPrev && t < 1) {
                    nextX = nextPrev.x + (next.position.x - nextPrev.x) * t;
                    nextZ = nextPrev.z + (next.position.z - nextPrev.z) * t;
                }
                angle = Math.atan2(nextX - segX, nextZ - segZ);
            } else {
                const prevSeg = this.segments[i];
                const prevSegPrev = (i + 1) < this.prevPositions.length ? this.prevPositions[i + 1] : null;
                let prevX = prevSeg.position.x, prevZ = prevSeg.position.z;
                if (prevSegPrev && t < 1) {
                    prevX = prevSegPrev.x + (prevSeg.position.x - prevSegPrev.x) * t;
                    prevZ = prevSegPrev.z + (prevSeg.position.z - prevSegPrev.z) * t;
                }
                angle = Math.atan2(prevX - segX, prevZ - segZ);
            }
            
            // Scale body segments - smaller towards tail
            const tSeg = (i + 1) / this.segments.length;
            const scale = THREE.MathUtils.lerp(0.9, 0.5, tSeg);
            this.tempScale.set(scale, scale, scale);
            
            this.tempQuaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
            this.tempMatrix.compose(this.tempPosition, this.tempQuaternion, this.tempScale);
            this.bodyInstancedMesh.setMatrixAt(i, this.tempMatrix);
        }
        
        this.bodyInstancedMesh.count = bodyCount;
        this.bodyInstancedMesh.instanceMatrix.needsUpdate = true;
        
        // Connectors
        const connCount = Math.min(this.segments.length - 2, 99);
        for (let i = 0; i < connCount; i++) {
            const segA = this.segments[i + 1];
            const segB = this.segments[i + 2];
            
            let midX = (segA.position.x + segB.position.x) / 2;
            let midZ = (segA.position.z + segB.position.z) / 2;
            const midY = 0.3;
            
            if (this.prevPositions.length > i + 2 && t < 1) {
                const prevA = this.prevPositions[i + 1];
                const prevB = this.prevPositions[i + 2];
                const interpAX = prevA.x + (segA.position.x - prevA.x) * t;
                const interpAZ = prevA.z + (segA.position.z - prevA.z) * t;
                const interpBX = prevB.x + (segB.position.x - prevB.x) * t;
                const interpBZ = prevB.z + (segB.position.z - prevB.z) * t;
                midX = (interpAX + interpBX) / 2;
                midZ = (interpAZ + interpBZ) / 2;
            }
            
            const waveA = Math.sin((i + 1) * 0.6 + this.waveTime * 4) * waveAmp;
            const waveB = Math.sin((i + 2) * 0.6 + this.waveTime * 4) * waveAmp;
            
            this.tempPosition.set(midX, midY + (waveA + waveB) / 2, midZ);
            this.tempQuaternion.identity();
            const connScale = THREE.MathUtils.lerp(0.6, 0.35, (i + 1) / this.segments.length);
            this.tempScale.set(connScale, connScale, connScale);
            this.tempMatrix.compose(this.tempPosition, this.tempQuaternion, this.tempScale);
            this.connectorMesh.setMatrixAt(i, this.tempMatrix);
        }
        this.connectorMesh.count = connCount;
        this.connectorMesh.instanceMatrix.needsUpdate = true;
        
        // Tail with interpolation
        if (this.segments.length >= 2) {
            const last = this.segments[this.segments.length - 1];
            const prev = this.segments[this.segments.length - 2];
            
            let tailX = last.position.x, tailZ = last.position.z;
            let prevTailX = prev.position.x, prevTailZ = prev.position.z;
            
            if (this.prevPositions.length >= this.segments.length && t < 1) {
                const prevLast = this.prevPositions[this.segments.length - 1];
                const prevPrev = this.prevPositions[this.segments.length - 2];
                tailX = prevLast.x + (last.position.x - prevLast.x) * t;
                tailZ = prevLast.z + (last.position.z - prevLast.z) * t;
                prevTailX = prevPrev.x + (prev.position.x - prevPrev.x) * t;
                prevTailZ = prevPrev.z + (prev.position.z - prevPrev.z) * t;
            }
            
            this.tailMesh.position.set(tailX, 0.28, tailZ);
            this.tailMesh.rotation.y = Math.atan2(prevTailX - tailX, prevTailZ - tailZ) + Math.PI / 2;
            this.tailMesh.visible = true;
        } else {
            this.tailMesh.visible = false;
        }
    }
    
    easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
    
    getHeadPosition() {
        if (this.segments.length > 0) {
            return { x: this.segments[0].x, z: this.segments[0].z };
        }
        return { x: 0, z: 0 };
    }
    
    getHeadGridPosition() {
        if (this.segments.length > 0) {
            return { x: this.segments[0].gridX, z: this.segments[0].gridZ };
        }
        return { x: 0, z: 0 };
    }
    
    getBodyPositions() {
        return this.segments.slice(1).map(s => ({ x: s.gridX, z: s.gridZ }));
    }
    
    getDirection() { return this.direction; }
    getLength() { return this.segments.length; }
}
