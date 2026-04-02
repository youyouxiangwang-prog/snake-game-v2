/**
 * Snake.js - Snake Entity (Ultimate Visual Edition)
 * 
 * Features:
 * - Holographic/iridescent body (MeshPhysicalMaterial + iridescence)
 * - Particle trail following snake head
 * - Glow effect on head
 * - Proper interpolation rendering
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
            moveInterval: MOVEMENT_CONFIG.moveInterval
        };
        
        this.moveInterval = this.config.moveInterval;
        this.segments = [];
        this.direction = { x: 0, z: -1 };
        this.nextDirection = { x: 0, z: -1 };
        this.isGrowing = false;
        this.growQueue = 0;
        this.moveTimer = 0;
        this.interpolationProgress = 0;
        this.prevPositions = [];
        this.waveTime = 0;
        
        // Trail history for particle trail
        this.trailHistory = [];
        this.maxTrailLength = 30;
        
        this.colors = {
            head: 0x00ff88,
            body: 0x00dd66,
            tail: 0x00aa44,
            eye: 0xffffff,
            pupil: 0x111111,
            tongue: 0xff4466,
            trail: 0x00ffaa
        };
        
        this.createMeshes();
        this.createTrail();
        this.reset();
    }
    
    createMeshes() {
        // Head - iridescent holographic material
        const headMat = new THREE.MeshPhysicalMaterial({
            color: this.colors.head,
            metalness: 0.3,
            roughness: 0.2,
            transmission: 0.1,
            thickness: 0.5,
            iridescence: 1.0,
            iridescenceIOR: 1.5,
            iridescenceThicknessRange: [100, 400],
            emissive: this.colors.head,
            emissiveIntensity: 0.3,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1
        });
        
        // Body - iridescent
        const bodyMat = new THREE.MeshPhysicalMaterial({
            color: this.colors.body,
            metalness: 0.3,
            roughness: 0.25,
            iridescence: 0.8,
            iridescenceIOR: 1.3,
            iridescenceThicknessRange: [80, 300],
            emissive: this.colors.body,
            emissiveIntensity: 0.15,
            clearcoat: 0.8,
            clearcoatRoughness: 0.15
        });
        
        // Eye materials
        const eyeMat = new THREE.MeshStandardMaterial({
            color: this.colors.eye,
            metalness: 0.0,
            roughness: 0.3,
            emissive: 0xffffff,
            emissiveIntensity: 0.2
        });
        
        const pupilMat = new THREE.MeshStandardMaterial({
            color: this.colors.pupil,
            metalness: 0.9,
            roughness: 0.1
        });
        
        // Head - ellipsoid
        const headGeo = new THREE.SphereGeometry(0.65, 20, 16);
        this.headMesh = new THREE.Mesh(headGeo, headMat);
        this.headMesh.scale.set(1, 0.75, 1.3);
        this.headMesh.castShadow = true;
        this.scene.add(this.headMesh);
        
        // Snout
        const snoutGeo = new THREE.SphereGeometry(0.35, 16, 12);
        const snout = new THREE.Mesh(snoutGeo, headMat.clone());
        snout.scale.set(0.8, 0.6, 1);
        snout.position.set(0, -0.05, -0.6);
        snout.castShadow = true;
        this.headMesh.add(snout);
        
        // Head glow (additive sphere slightly larger)
        const glowGeo = new THREE.SphereGeometry(0.85, 16, 12);
        const glowMat = new THREE.MeshBasicMaterial({
            color: this.colors.head,
            transparent: true,
            opacity: 0.12,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.headGlow = new THREE.Mesh(glowGeo, glowMat);
        this.headGlow.scale.set(1, 0.75, 1.3);
        this.headMesh.add(this.headGlow);
        
        // Eyes
        const eyeGeo = new THREE.SphereGeometry(0.14, 12, 12);
        const pupilGeo = new THREE.SphereGeometry(0.08, 8, 8);
        
        // Left eye
        const leftEye = new THREE.Mesh(eyeGeo, eyeMat.clone());
        leftEye.position.set(-0.28, 0.25, -0.35);
        leftEye.scale.set(1, 1, 0.7);
        this.headMesh.add(leftEye);
        
        const leftPupil = new THREE.Mesh(pupilGeo, pupilMat.clone());
        leftPupil.position.set(-0.28, 0.25, -0.42);
        this.headMesh.add(leftPupil);
        
        const leftHighlight = new THREE.Mesh(
            new THREE.SphereGeometry(0.045, 6, 6),
            new THREE.MeshBasicMaterial({ color: 0xffffff })
        );
        leftHighlight.position.set(-0.32, 0.32, -0.46);
        this.headMesh.add(leftHighlight);
        
        // Right eye
        const rightEye = new THREE.Mesh(eyeGeo, eyeMat.clone());
        rightEye.position.set(0.28, 0.25, -0.35);
        rightEye.scale.set(1, 1, 0.7);
        this.headMesh.add(rightEye);
        
        const rightPupil = new THREE.Mesh(pupilGeo, pupilMat.clone());
        rightPupil.position.set(0.28, 0.25, -0.42);
        this.headMesh.add(rightPupil);
        
        const rightHighlight = new THREE.Mesh(
            new THREE.SphereGeometry(0.045, 6, 6),
            new THREE.MeshBasicMaterial({ color: 0xffffff })
        );
        rightHighlight.position.set(0.24, 0.32, -0.46);
        this.headMesh.add(rightHighlight);
        
        // Tongue
        this.tongueMesh = this.createTongue();
        this.headMesh.add(this.tongueMesh);
        
        // Body - InstancedMesh
        const maxSegments = 100;
        const segGeo = new THREE.SphereGeometry(0.5, 12, 8);
        this.bodyMesh = new THREE.InstancedMesh(segGeo, bodyMat, maxSegments);
        this.bodyMesh.castShadow = true;
        this.bodyMesh.receiveShadow = true;
        this.bodyMesh.count = 0;
        this.scene.add(this.bodyMesh);
        
        // Connector mesh
        const connGeo = new THREE.SphereGeometry(0.35, 8, 6);
        this.connectorMesh = new THREE.InstancedMesh(connGeo, bodyMat.clone(), maxSegments);
        this.connectorMesh.castShadow = true;
        this.connectorMesh.count = 0;
        this.scene.add(this.connectorMesh);
        
        // Tail
        const tailMat = new THREE.MeshPhysicalMaterial({
            color: this.colors.tail,
            metalness: 0.3,
            roughness: 0.3,
            iridescence: 0.5,
            emissive: this.colors.tail,
            emissiveIntensity: 0.1
        });
        const tailGeo = new THREE.ConeGeometry(0.28, 0.9, 12);
        this.tailMesh = new THREE.Mesh(tailGeo, tailMat);
        this.tailMesh.castShadow = true;
        this.tailMesh.visible = false;
        this.scene.add(this.tailMesh);
        
        // Temp matrices
        this.tempMatrix = new THREE.Matrix4();
        this.tempPosition = new THREE.Vector3();
        this.tempQuaternion = new THREE.Quaternion();
        this.tempScale = new THREE.Vector3(1, 1, 1);
    }
    
    createTrail() {
        // Trail particles using Points with custom material
        const trailCount = this.maxTrailLength;
        const trailGeo = new THREE.BufferGeometry();
        const trailPositions = new Float32Array(trailCount * 3);
        const trailSizes = new Float32Array(trailCount);
        const trailAlphas = new Float32Array(trailCount);
        
        for (let i = 0; i < trailCount; i++) {
            trailPositions[i * 3] = 0;
            trailPositions[i * 3 + 1] = -500;
            trailPositions[i * 3 + 2] = 0;
            trailSizes[i] = 0;
            trailAlphas[i] = 0;
        }
        
        trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
        trailGeo.setAttribute('size', new THREE.BufferAttribute(trailSizes, 1));
        trailGeo.setAttribute('alpha', new THREE.BufferAttribute(trailAlphas, 1));
        
        // Custom shader material for glowing trail
        const trailMat = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(this.colors.trail) },
                time: { value: 0 }
            },
            vertexShader: `
                attribute float size;
                attribute float alpha;
                varying float vAlpha;
                void main() {
                    vAlpha = alpha;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                uniform vec3 color;
                varying float vAlpha;
                void main() {
                    float d = length(gl_PointCoord - vec2(0.5));
                    if (d > 0.5) discard;
                    float strength = 1.0 - d * 2.0;
                    strength = pow(strength, 1.5);
                    gl_FragColor = vec4(color, strength * vAlpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        
        this.trailMesh = new THREE.Points(trailGeo, trailMat);
        this.scene.add(this.trailMesh);
    }
    
    createTongue() {
        const tongueGroup = new THREE.Group();
        const tongueMat = new THREE.MeshStandardMaterial({
            color: this.colors.tongue,
            metalness: 0.0,
            roughness: 0.6,
            emissive: this.colors.tongue,
            emissiveIntensity: 0.3
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
        this.trailHistory = [];
        
        const startX = WORLD_CONFIG.startPosition.x;
        const startZ = WORLD_CONFIG.startPosition.z;
        
        for (let i = 0; i < this.config.initialLength; i++) {
            const x = startX;
            const z = startZ + i * this.config.segmentSpacing;
            this.segments.push({
                x, z,
                position: new THREE.Vector3(x, 0.4, z),
                targetPosition: new THREE.Vector3(x, 0.4, z)
            });
            this.prevPositions.push({ x, z });
            this.trailHistory.push({ x, z, time: 0 });
        }
        
        this.direction = { x: 0, z: -1 };
        this.nextDirection = { x: 0, z: -1 };
        this.moveTimer = 0;
        this.interpolationProgress = 0;
        this.growQueue = 0;
        
        this.updateTrailGeometry();
    }
    
    setDirection(dir) {
        const dirMap = {
            'UP': { x: 0, z: -1 }, 'DOWN': { x: 0, z: 1 },
            'LEFT': { x: -1, z: 0 }, 'RIGHT': { x: 1, z: 0 }
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
        
        // Store trail point
        this.trailHistory.unshift({ x: head.x, z: head.z, time: performance.now() });
        if (this.trailHistory.length > this.maxTrailLength) {
            this.trailHistory.pop();
        }
        
        if (newHeadX < COLLISION_CONFIG.bounds.minX || newHeadX > COLLISION_CONFIG.bounds.maxX ||
            newHeadZ < COLLISION_CONFIG.bounds.minZ || newHeadZ > COLLISION_CONFIG.bounds.maxZ) {
            return true;
        }
        
        head.x = newHeadX;
        head.z = newHeadZ;
        head.targetPosition.set(newHeadX, 0.4, newHeadZ);
        head.position.copy(head.targetPosition);
        
        for (let i = this.segments.length - 1; i > 0; i--) {
            const current = this.segments[i];
            const target = this.segments[i - 1];
            const targetOldX = this.prevPositions[i - 1]?.x ?? target.x;
            const targetOldZ = this.prevPositions[i - 1]?.z ?? target.z;
            current.x = targetOldX;
            current.z = targetOldZ;
            current.targetPosition.set(targetOldX, 0.35, targetOldZ);
            current.position.copy(current.targetPosition);
        }
        
        if (this.growQueue > 0) {
            const lastSeg = this.segments[this.segments.length - 1];
            const newSeg = {
                x: lastSeg.x, z: lastSeg.z,
                position: new THREE.Vector3(lastSeg.x, 0.35, lastSeg.z),
                targetPosition: new THREE.Vector3(lastSeg.x, 0.35, lastSeg.z)
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
        const threshold = 0.6;
        for (let i = 4; i < this.segments.length; i++) {
            const seg = this.segments[i];
            const dx = head.x - seg.x;
            const dz = head.z - seg.z;
            if (Math.sqrt(dx * dx + dz * dz) < threshold) return true;
        }
        return false;
    }
    
    grow() { this.growQueue++; }
    increaseSpeed() {
        this.config.moveInterval = Math.max(0.05, this.config.moveInterval - 0.01);
        this.moveInterval = this.config.moveInterval;
    }
    
    updateVisuals(deltaTime) {
        this.waveTime += deltaTime * 0.001;
        if (this.tongueMesh) {
            const extend = (Math.sin(this.waveTime * 8) + 1) * 0.5 * 0.3;
            this.tongueMesh.scale.z = 0.5 + extend;
            this.tongueMesh.visible = Math.sin(this.waveTime * 6) > 0.2;
        }
        // Update trail material time
        if (this.trailMesh) {
            this.trailMesh.material.uniforms.time.value = this.waveTime;
        }
    }
    
    updateMeshesRender(alpha) {
        const t = this.easeOutCubic(alpha);
        
        // Head
        if (this.segments.length > 0) {
            const head = this.segments[0];
            let headX = head.position.x, headZ = head.position.z;
            if (this.prevPositions.length > 0) {
                const prev = this.prevPositions[0];
                headX = prev.x + (head.position.x - prev.x) * t;
                headZ = prev.z + (head.position.z - prev.z) * t;
            }
            const bob = Math.sin(this.waveTime * 4) * 0.03;
            this.headMesh.position.set(headX, 0.4 + bob, headZ);
            this.headMesh.rotation.y = Math.atan2(this.direction.x, this.direction.z);
            this.headMesh.visible = true;
            
            // Glow pulse
            const glowPulse = 0.08 + Math.sin(this.waveTime * 3) * 0.04;
            this.headGlow.material.opacity = glowPulse;
        }
        
        const waveAmp = 0.06;
        const bodyCount = Math.min(this.segments.length - 1, 99);
        
        for (let i = 0; i < bodyCount; i++) {
            const seg = this.segments[i + 1];
            const prev = i < this.prevPositions.length ? this.prevPositions[i + 1] : null;
            let segX = seg.position.x, segZ = seg.position.z;
            if (prev && t < 1) {
                segX = prev.x + (seg.position.x - prev.x) * t;
                segZ = prev.z + (seg.position.z - prev.z) * t;
            }
            const waveOffset = Math.sin((i + 1) * 0.6 + this.waveTime * 4) * waveAmp;
            this.tempPosition.set(segX, 0.3 + waveOffset, segZ);
            
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
            
            const tSeg = (i + 1) / this.segments.length;
            const scale = THREE.MathUtils.lerp(0.9, 0.4, tSeg);
            this.tempScale.set(scale, scale, scale);
            this.tempQuaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
            this.tempMatrix.compose(this.tempPosition, this.tempQuaternion, this.tempScale);
            this.bodyMesh.setMatrixAt(i, this.tempMatrix);
        }
        this.bodyMesh.count = bodyCount;
        this.bodyMesh.instanceMatrix.needsUpdate = true;
        
        // Connectors
        const connCount = Math.min(this.segments.length - 2, 99);
        for (let i = 0; i < connCount; i++) {
            const segA = this.segments[i + 1];
            const segB = this.segments[i + 2];
            let midX = (segA.position.x + segB.position.x) / 2;
            let midZ = (segA.position.z + segB.position.z) / 2;
            const waveA = Math.sin((i + 1) * 0.6 + this.waveTime * 4) * waveAmp;
            const waveB = Math.sin((i + 2) * 0.6 + this.waveTime * 4) * waveAmp;
            
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
            
            this.tempPosition.set(midX, 0.3 + (waveA + waveB) / 2, midZ);
            this.tempQuaternion.identity();
            const connScale = THREE.MathUtils.lerp(0.6, 0.3, (i + 1) / this.segments.length);
            this.tempScale.set(connScale, connScale, connScale);
            this.tempMatrix.compose(this.tempPosition, this.tempQuaternion, this.tempScale);
            this.connectorMesh.setMatrixAt(i, this.tempMatrix);
        }
        this.connectorMesh.count = connCount;
        this.connectorMesh.instanceMatrix.needsUpdate = true;
        
        // Tail
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
    
    updateTrailGeometry() {
        if (!this.trailMesh) return;
        const positions = this.trailMesh.geometry.attributes.position.array;
        const sizes = this.trailMesh.geometry.attributes.size.array;
        const alphas = this.trailMesh.geometry.attributes.alpha.array;
        const now = performance.now();
        
        for (let i = 0; i < this.maxTrailLength; i++) {
            if (i < this.trailHistory.length) {
                const point = this.trailHistory[i];
                const age = (now - point.time) / 1000;
                positions[i * 3] = point.x;
                positions[i * 3 + 1] = 0.3;
                positions[i * 3 + 2] = point.z;
                const lifeRatio = Math.max(0, 1 - age * 2);
                sizes[i] = lifeRatio * 0.5;
                alphas[i] = lifeRatio * 0.8;
            } else {
                positions[i * 3 + 1] = -500;
                sizes[i] = 0;
                alphas[i] = 0;
            }
        }
        
        this.trailMesh.geometry.attributes.position.needsUpdate = true;
        this.trailMesh.geometry.attributes.size.needsUpdate = true;
        this.trailMesh.geometry.attributes.alpha.needsUpdate = true;
    }
    
    easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
    getHeadPosition() {
        if (this.segments.length > 0) return { x: this.segments[0].x, z: this.segments[0].z };
        return { x: 0, z: 0 };
    }
    getBodyPositions() {
        return this.segments.slice(1).map(s => ({ x: s.x, z: s.z }));
    }
    getDirection() { return this.direction; }
    getLength() { return this.segments.length; }
}
