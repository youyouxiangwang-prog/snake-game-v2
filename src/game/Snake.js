// Snake Game V3 - Snake Logic
import * as THREE from 'three';

export class Snake {
    constructor(scene) {
        this.scene = scene;
        this.scene3d = scene;
        
        // Snake configuration
        this.config = {
            initialLength: 5,
            maxLength: 50,
            speed: 5,
            segmentSpacing: 0.8,
            turnSpeed: 10
        };
        
        // Current state
        this.segments = []; // {x, z, mesh}
        this.direction = { x: 0, z: -1 };
        this.nextDirection = { x: 0, z: -1 };
        this.isGrowing = false;
        this.moveTimer = 0;
        this.moveInterval = 0.2; // seconds between moves
        
        // 3D meshes
        this.headMesh = null;
        this.bodyMeshes = [];
        this.tailMesh = null;
        
        // Create meshes
        this.createMeshes();
        
        // Initial position
        this.reset();
    }
    
    createMeshes() {
        // Snake head material
        const headMat = new THREE.MeshLambertMaterial({
            color: 0xFFCC00,
            flatShading: true
        });
        
        // Body material
        const bodyMat = new THREE.MeshLambertMaterial({
            color: 0xFFCC00,
            flatShading: true
        });
        
        // Tail material
        const tailMat = new THREE.MeshLambertMaterial({
            color: 0xDD9900,
            flatShading: true
        });
        
        // Create head (flattened cylinder)
        const headGeo = new THREE.CylinderGeometry(0.6, 0.7, 0.6, 12);
        this.headMesh = new THREE.Mesh(headGeo, headMat);
        this.headMesh.castShadow = true;
        this.scene.getScene().add(this.headMesh);
        
        // Eyes
        const eyeGeo = new THREE.SphereGeometry(0.15, 8, 8);
        const pupilGeo = new THREE.SphereGeometry(0.08, 6, 6);
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
        const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
        
        // Left eye
        const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
        leftEye.position.set(-0.25, 0.25, -0.35);
        this.headMesh.add(leftEye);
        
        const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
        leftPupil.position.set(-0.25, 0.3, -0.4);
        this.headMesh.add(leftPupil);
        
        // Right eye
        const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
        rightEye.position.set(0.25, 0.25, -0.35);
        this.headMesh.add(rightEye);
        
        const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
        rightPupil.position.set(0.25, 0.3, -0.4);
        this.headMesh.add(rightPupil);
        
        // Tongue
        this.tongue = this.createTongue();
        this.headMesh.add(this.tongue);
        
        // Create body segment meshes
        for (let i = 0; i < this.config.maxLength; i++) {
            const segGeo = new THREE.CylinderGeometry(0.45, 0.5, 0.5, 10);
            const segMesh = new THREE.Mesh(segGeo, bodyMat.clone());
            segMesh.castShadow = true;
            segMesh.visible = false;
            this.scene.getScene().add(segMesh);
            this.bodyMeshes.push(segMesh);
        }
        
        // Tail
        const tailGeo = new THREE.ConeGeometry(0.4, 0.6, 8);
        this.tailMesh = new THREE.Mesh(tailGeo, tailMat);
        this.tailMesh.castShadow = true;
        this.tailMesh.visible = false;
        this.scene.getScene().add(this.tailMesh);
    }
    
    createTongue() {
        const tongueGroup = new THREE.Group();
        tongueGroup.name = 'tongue';
        
        const tongueMat = new THREE.MeshBasicMaterial({
            color: 0xFF3333,
            side: THREE.DoubleSide
        });
        
        // Simple V-shape tongue using two small cones
        const tongueLen = 0.4;
        const forkAngle = 0.3;
        
        // Left part
        const leftGeo = new THREE.ConeGeometry(0.04, tongueLen, 4);
        const leftTongue = new THREE.Mesh(leftGeo, tongueMat);
        leftTongue.rotation.x = Math.PI / 2;
        leftTongue.rotation.z = forkAngle;
        leftTongue.position.z = -tongueLen / 2;
        tongueGroup.add(leftTongue);
        
        // Right part
        const rightGeo = new THREE.ConeGeometry(0.04, tongueLen, 4);
        const rightTongue = new THREE.Mesh(rightGeo, tongueMat);
        rightTongue.rotation.x = Math.PI / 2;
        rightTongue.rotation.z = -forkAngle;
        rightTongue.position.z = -tongueLen / 2;
        tongueGroup.add(rightTongue);
        
        // Base
        const baseGeo = new THREE.CylinderGeometry(0.04, 0.06, 0.15, 6);
        const base = new THREE.Mesh(baseGeo, tongueMat);
        base.rotation.x = Math.PI / 2;
        tongueGroup.add(base);
        
        tongueGroup.position.set(0, 0.2, -0.5);
        
        return tongueGroup;
    }
    
    reset() {
        // Clear segments
        this.segments = [];
        
        // Create initial segments
        const startX = 0;
        const startZ = 0;
        
        for (let i = 0; i < this.config.initialLength; i++) {
            this.segments.push({
                x: startX,
                z: startZ + i * this.config.segmentSpacing,
                mesh: null
            });
        }
        
        // Reset direction
        this.direction = { x: 0, z: -1 };
        this.nextDirection = { x: 0, z: -1 };
        
        // Reset speed
        this.moveInterval = 0.2;
        
        // Update meshes
        this.updateMeshPositions();
        this.hideMeshes();
    }
    
    hideMeshes() {
        this.headMesh.visible = false;
        this.bodyMeshes.forEach(m => m.visible = false);
        this.tailMesh.visible = false;
    }
    
    setDirection(dir) {
        // Prevent 180 degree turns
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
        // Apply direction change
        this.direction = { ...this.nextDirection };
        
        // Move timer
        this.moveTimer += deltaTime;
        
        if (this.moveTimer >= this.moveInterval) {
            this.moveTimer = 0;
            this.move();
        }
        
        // Update mesh positions
        this.updateMeshPositions();
        
        return false; // No collision yet (handled in Game)
    }
    
    move() {
        // Move head
        const head = this.segments[0];
        head.x += this.direction.x;
        head.z += this.direction.z;
        
        // Grow if needed
        if (this.isGrowing) {
            this.segments.push({
                x: head.x,
                z: head.z,
                mesh: null
            });
            this.isGrowing = false;
        }
        
        // Move body (each segment follows the one before it)
        for (let i = this.segments.length - 1; i > 0; i--) {
            const current = this.segments[i];
            const target = this.segments[i - 1];
            current.x = target.x;
            current.z = target.z;
        }
    }
    
    updateMeshPositions() {
        // Position head
        const head = this.segments[0];
        this.headMesh.position.set(head.x, 0.4, head.z);
        this.headMesh.rotation.y = Math.atan2(this.direction.x, this.direction.z);
        this.headMesh.visible = true;
        
        // Position body segments
        for (let i = 0; i < this.segments.length - 1; i++) {
            const seg = this.segments[i];
            const mesh = this.bodyMeshes[i];
            
            if (mesh && i < this.bodyMeshes.length) {
                mesh.position.set(seg.x, 0.35, seg.z);
                mesh.visible = true;
                
                // Calculate rotation towards next segment
                if (i < this.segments.length - 2) {
                    const next = this.segments[i + 1];
                    const angle = Math.atan2(next.x - seg.x, next.z - seg.z);
                    mesh.rotation.y = angle;
                } else {
                    // Last body segment, face the tail
                    const angle = Math.atan2(head.x - seg.x, head.z - seg.z);
                    mesh.rotation.y = angle;
                }
            }
        }
        
        // Position tail
        if (this.segments.length >= 2) {
            const last = this.segments[this.segments.length - 1];
            const prev = this.segments[this.segments.length - 2];
            this.tailMesh.position.set(last.x, 0.3, last.z);
            this.tailMesh.rotation.y = Math.atan2(prev.x - last.x, prev.z - last.z) + Math.PI / 2;
            this.tailMesh.visible = true;
        }
    }
    
    updateVisuals(time) {
        // Tongue animation - always slightly out with flickering
        if (this.tongue) {
            const flicker = Math.sin(time * 0.01) * 0.05;
            const baseLen = 0.4;
            this.tongue.scale.z = 1 + flicker;
        }
        
        // Subtle head bob
        if (this.headMesh) {
            const bob = Math.sin(time * 0.005) * 0.02;
            this.headMesh.position.y = 0.4 + bob;
        }
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
        const threshold = 0.6; // Collision distance
        
        for (let i = 4; i < this.segments.length; i++) { // Start from 4 to skip near-head segments
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
}
