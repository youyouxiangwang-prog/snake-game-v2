// Snake Game V3 - Snake Logic (PBR Head Upgrade)
import * as THREE from 'three';

export class Snake {
    constructor(scene) {
        this.scene = scene;
        this.scene3d = scene;
        
        // Snake configuration
        this.config = {
            initialLength: 5,
            maxLength: 30,
            speed: 5,
            segmentSpacing: 0.85,
            turnSpeed: 10
        };
        
        // Arena bounds
        this.arenaSize = 48;
        
        // Current state
        this.segments = [];
        this.prevPositions = [];
        this.direction = { x: 0, z: -1 };
        this.nextDirection = { x: 0, z: -1 };
        this.isGrowing = false;
        this.moveTimer = 0;
        this.moveInterval = 0.2;
        this.lerpFactor = 0.25;
        this.interpolationProgress = 0;
        
        // Wave animation
        this.waveTime = 0;
        
        // 3D meshes
        this.headMesh = null;
        this.bodyMeshes = [];
        this.tailMesh = null;
        this.tongue = null;
        
        // Create meshes
        this.createMeshes();
        
        // Initial position
        this.reset();
    }
    
    createMeshes() {
        // PBR Head material
        const headMat = new THREE.MeshStandardMaterial({
            color: 0x4ade80,
            metalness: 0.1,
            roughness: 0.6
        });
        
        // PBR Body material
        const bodyMat = new THREE.MeshStandardMaterial({
            color: 0x22c55e,
            metalness: 0.1,
            roughness: 0.65
        });
        
        // PBR Tail material
        const tailMat = new THREE.MeshStandardMaterial({
            color: 0x16a34a,
            metalness: 0.1,
            roughness: 0.7
        });
        
        // Create head - ellipsoid using scaled sphere
        const headGeo = new THREE.SphereGeometry(0.65, 16, 12);
        this.headMesh = new THREE.Mesh(headGeo, headMat);
        this.headMesh.scale.set(1, 0.75, 1.3);
        this.headMesh.castShadow = true;
        this.headMesh.receiveShadow = true;
        this.scene.getScene().add(this.headMesh);
        
        // Snout
        const snoutGeo = new THREE.SphereGeometry(0.35, 12, 8);
        const snout = new THREE.Mesh(snoutGeo, headMat.clone());
        snout.scale.set(0.8, 0.6, 1);
        snout.position.set(0, -0.05, -0.6);
        snout.castShadow = true;
        this.headMesh.add(snout);
        
        // Eyes
        const eyeGeo = new THREE.SphereGeometry(0.14, 10, 10);
        const pupilGeo = new THREE.SphereGeometry(0.08, 8, 8);
        const eyeMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.0,
            roughness: 0.3
        });
        const pupilMat = new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.8,
            roughness: 0.2
        });
        
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
        this.tongue = this.createTongue();
        this.headMesh.add(this.tongue);
        
        // Create body segment meshes with varying radii
        for (let i = 0; i < this.config.maxLength; i++) {
            const t = i / this.config.maxLength;
            const radius = THREE.MathUtils.lerp(0.55, 0.28, t);
            const segGeo = new THREE.SphereGeometry(radius, 12, 8);
            const segMesh = new THREE.Mesh(segGeo, bodyMat.clone());
            segMesh.castShadow = true;
            segMesh.receiveShadow = true;
            segMesh.visible = false;
            this.scene.getScene().add(segMesh);
            this.bodyMeshes.push(segMesh);
        }
        
        // Connector meshes for smooth body
        this.connectorMeshes = [];
        for (let i = 0; i < this.config.maxLength - 1; i++) {
            const t = i / this.config.maxLength;
            const radius = THREE.MathUtils.lerp(0.45, 0.25, t);
            const connGeo = new THREE.SphereGeometry(radius * 0.7, 8, 6);
            const connMat = new THREE.MeshStandardMaterial({
                color: 0x22c55e,
                metalness: 0.1,
                roughness: 0.65
            });
            const connector = new THREE.Mesh(connGeo, connMat);
            connector.castShadow = true;
            connector.visible = false;
            this.scene.getScene().add(connector);
            this.connectorMeshes.push(connector);
        }
        
        // Tail - tapered
        const tailGeo = new THREE.ConeGeometry(0.28, 0.9, 10);
        this.tailMesh = new THREE.Mesh(tailGeo, tailMat);
        this.tailMesh.castShadow = true;
        this.tailMesh.visible = false;
        this.scene.getScene().add(this.tailMesh);
    }
    
    createTongue() {
        const tongueGroup = new THREE.Group();
        tongueGroup.name = 'tongue';
        
        const tongueMat = new THREE.MeshStandardMaterial({
            color: 0xf87171,
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
        
        return tongueGroup;
    }
    
    reset() {
        this.segments = [];
        this.prevPositions = [];
        
        const startX = 0;
        const startZ = 0;
        
        for (let i = 0; i < this.config.initialLength; i++) {
            this.segments.push({
                x: startX,
                z: startZ + i * this.config.segmentSpacing
            });
            this.prevPositions.push({
                x: startX,
                z: startZ + i * this.config.segmentSpacing
            });
        }
        
        this.direction = { x: 0, z: -1 };
        this.nextDirection = { x: 0, z: -1 };
        this.moveInterval = 0.2;
        
        this.updateMeshPositions();
        this.hideMeshes();
    }
    
    hideMeshes() {
        this.headMesh.visible = false;
        this.bodyMeshes.forEach(m => m.visible = false);
        this.connectorMeshes.forEach(m => m.visible = false);
        this.tailMesh.visible = false;
        if (this.tongue) this.tongue.visible = false;
    }
    
    setDirection(dir) {
        if (dir === 'UP' && this.direction.z !== 1) {
            this.nextDirection = { x: 0, z: -1 };
        } else if (dir === 'DOWN' && this.direction.z !== -1) {
            this.nextDirection = { x: 0, z: 1 };
        } else if (dir === 'LEFT' && this.direction.x !== 1) {
            this.nextDirection = { x: -1, z: 0 };
        } else if (dir === 'RIGHT' && this.direction.x !== -1) {
            this.nextDirection = { x: 1, z: 0 };
        }
    }
    
    update(deltaTime) {
        this.waveTime += deltaTime * 0.001;
        
        // Tongue flicker animation
        if (this.tongue) {
            const extend = (Math.sin(this.waveTime * 8) + 1) * 0.5 * 0.3;
            this.tongue.scale.z = 0.5 + extend;
            this.tongue.visible = Math.sin(this.waveTime * 6) > 0.3;
        }
        
        this.direction = { ...this.nextDirection };
        this.moveTimer += deltaTime;
        
        if (this.moveTimer >= this.moveInterval) {
            this.moveTimer = 0;
            this.move();
            this.interpolationProgress = 0;
        } else {
            this.interpolationProgress = Math.min(1, this.moveTimer / this.moveInterval);
        }
        
        this.updateMeshPositions();
        return false;
    }
    
    move() {
        this.prevPositions = this.segments.map(s => ({ x: s.x, z: s.z }));
        
        const head = this.segments[0];
        head.x += this.direction.x;
        head.z += this.direction.z;
        
        if (this.isGrowing) {
            const lastSeg = this.segments[this.segments.length - 1];
            this.segments.push({
                x: lastSeg.x,
                z: lastSeg.z
            });
            this.prevPositions.push({ x: lastSeg.x, z: lastSeg.z });
            this.isGrowing = false;
        }
        
        for (let i = this.segments.length - 1; i > 0; i--) {
            this.segments[i].x = this.segments[i - 1].x;
            this.segments[i].z = this.segments[i - 1].z;
        }
    }
    
    updateMeshPositions() {
        const t = this.easeOutCubic(this.interpolationProgress);
        
        const head = this.segments[0];
        let headX = head.x;
        let headZ = head.z;
        
        if (this.prevPositions.length > 0 && this.interpolationProgress > 0) {
            const prevHead = this.prevPositions[0];
            headX = prevHead.x + (head.x - prevHead.x) * t;
            headZ = prevHead.z + (head.z - prevHead.z) * t;
        }
        
        this.headMesh.position.set(headX, 0.4, headZ);
        this.headMesh.rotation.y = Math.atan2(this.direction.x, this.direction.z);
        this.headMesh.visible = true;
        
        // Wave offset for body segments
        const waveAmp = 0.08;
        
        // Position body segments
        for (let i = 0; i < this.segments.length - 1; i++) {
            const seg = this.segments[i];
            const mesh = this.bodyMeshes[i];
            const connector = this.connectorMeshes[i];
            
            if (mesh && i < this.bodyMeshes.length) {
                let segX = seg.x;
                let segZ = seg.z;
                
                if (this.prevPositions.length > i + 1 && this.interpolationProgress > 0) {
                    const prevSeg = this.prevPositions[i + 1];
                    segX = prevSeg.x + (seg.x - prevSeg.x) * t;
                    segZ = prevSeg.z + (seg.z - prevSeg.z) * t;
                }
                
                // Wave motion
                const waveOffset = Math.sin(i * 0.6 + this.waveTime * 4) * waveAmp;
                
                mesh.position.set(segX, 0.35 + waveOffset, segZ);
                mesh.visible = true;
                
                // Connector between segments
                if (connector && i < this.segments.length - 2) {
                    const nextSeg = this.segments[i + 1];
                    const connX = (segX + nextSeg.x) / 2;
                    const connZ = (segZ + nextSeg.z) / 2;
                    const nextWave = Math.sin((i + 1) * 0.6 + this.waveTime * 4) * waveAmp;
                    connector.position.set(connX, 0.35 + (waveOffset + nextWave) / 2, connZ);
                    connector.visible = true;
                }
                
                // Calculate rotation
                if (i < this.segments.length - 2) {
                    const next = this.segments[i + 1];
                    const angle = Math.atan2(next.x - seg.x, next.z - seg.z);
                    mesh.rotation.y = angle;
                } else {
                    const angle = Math.atan2(headX - segX, headZ - segZ);
                    mesh.rotation.y = angle;
                }
            }
        }
        
        // Tail position
        if (this.segments.length >= 2) {
            const last = this.segments[this.segments.length - 1];
            const prev = this.segments[this.segments.length - 2];
            let tailX = last.x;
            let tailZ = last.z;
            
            if (this.prevPositions.length >= this.segments.length && this.interpolationProgress > 0) {
                const prevLast = this.prevPositions[this.segments.length - 1];
                tailX = prevLast.x + (last.x - prevLast.x) * t;
                tailZ = prevLast.z + (last.z - prevLast.z) * t;
            }
            
            this.tailMesh.position.set(tailX, 0.3, tailZ);
            this.tailMesh.rotation.y = Math.atan2(prev.x - last.x, prev.z - last.z) + Math.PI / 2;
            this.tailMesh.visible = true;
        }
    }
    
    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }
    
    updateVisuals(time) {
        // Additional visual updates handled in update()
    }
    
    grow() {
        this.isGrowing = true;
    }
    
    getHeadPosition() {
        if (this.segments.length > 0) {
            return { x: this.segments[0].x, z: this.segments[0].z };
        }
        return { x: 0, z: 0 };
    }
    
    getBodyPositions() {
        return this.segments.slice(1).map(s => ({ x: s.x, z: s.z }));
    }
    
    getDirection() {
        return this.direction;
    }
    
    checkSelfCollision() {
        if (this.segments.length < 2) return false;
        const head = this.segments[0];
        const threshold = 0.6;
        
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
    
    increaseSpeed() {
        this.moveInterval = Math.max(0.1, this.moveInterval - 0.02);
    }
    
    triggerDeath() {
        // Animate death by scattering segments
        // Simple implementation - just hide after a delay
        setTimeout(() => {
            this.hideMeshes();
        }, 500);
    }
}
