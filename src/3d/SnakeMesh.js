// Snake Game V3 - Snake 3D Mesh Renderer (PBR Upgrade)
import * as THREE from 'three';

export class SnakeMesh {
    constructor(scene) {
        this.scene = scene;
        this.headMesh = null;
        this.bodyMeshes = [];
        this.tailMesh = null;
        this.tongueGroup = null;
        this.connectorMeshes = [];
        
        // Death animation state
        this.isDying = false;
        this.deathTime = 0;
        this.deathStartPositions = [];
        this.deathStartTime = 0;
        
        // Default skin colors (classic green)
        this.colors = {
            headColor: 0x4ade80,
            bodyColor: 0x22c55e,
            tailColor: 0x16a34a,
            eyeWhite: 0xffffff,
            pupilColor: 0x111111,
            tongueColor: 0xf87171
        };
        
        // Wave animation params
        this.waveTime = 0;
        this.waveAmplitude = 0.08;
        this.waveFrequency = 0.6;
        
        this.createMeshes();
    }
    
    createMeshes() {
        // Head material - PBR
        const headMat = new THREE.MeshStandardMaterial({
            color: this.colors.headColor,
            metalness: 0.1,
            roughness: 0.6,
            flatShading: false
        });
        
        // Body material - PBR
        const bodyMat = new THREE.MeshStandardMaterial({
            color: this.colors.bodyColor,
            metalness: 0.1,
            roughness: 0.65,
            flatShading: false
        });
        
        // Tail material
        const tailMat = new THREE.MeshStandardMaterial({
            color: this.colors.tailColor,
            metalness: 0.1,
            roughness: 0.7,
            flatShading: false
        });
        
        // Create head - ellipsoid using SphereGeometry scaled
        const headGeo = new THREE.SphereGeometry(0.65, 16, 12);
        this.headMesh = new THREE.Mesh(headGeo, headMat);
        this.headMesh.scale.set(1, 0.75, 1.3);
        this.headMesh.castShadow = true;
        this.headMesh.receiveShadow = true;
        this.scene.add(this.headMesh);
        
        // Add snout (front protrusion)
        const snoutGeo = new THREE.SphereGeometry(0.35, 12, 8);
        const snout = new THREE.Mesh(snoutGeo, headMat.clone());
        snout.scale.set(0.8, 0.6, 1);
        snout.position.set(0, -0.05, -0.6);
        snout.castShadow = true;
        this.headMesh.add(snout);
        
        // Create eyes
        this.createEyes();
        
        // Create tongue
        this.tongueGroup = this.createTongue();
        this.headMesh.add(this.tongueGroup);
        
        // Create body segments with decreasing radius
        const maxSegments = 50;
        for (let i = 0; i < maxSegments; i++) {
            // Calculate radius that decreases along body
            const t = i / maxSegments;
            const radius = THREE.MathUtils.lerp(0.55, 0.25, t);
            const segGeo = new THREE.SphereGeometry(radius, 12, 8);
            const segMesh = new THREE.Mesh(segGeo, bodyMat.clone());
            segMesh.castShadow = true;
            segMesh.receiveShadow = true;
            segMesh.visible = false;
            this.scene.add(segMesh);
            this.bodyMeshes.push(segMesh);
        }
        
        // Create connector meshes for smooth body transitions
        for (let i = 0; i < maxSegments - 1; i++) {
            const connectorGeo = new THREE.SphereGeometry(0.4, 8, 6);
            const connectorMat = new THREE.MeshStandardMaterial({
                color: this.colors.bodyColor,
                metalness: 0.1,
                roughness: 0.65,
                flatShading: false
            });
            const connector = new THREE.Mesh(connectorGeo, connectorMat);
            connector.castShadow = true;
            connector.visible = false;
            this.scene.add(connector);
            this.connectorMeshes.push(connector);
        }
        
        // Create tail - tapered cone
        const tailGeo = new THREE.ConeGeometry(0.3, 1.0, 10);
        this.tailMesh = new THREE.Mesh(tailGeo, tailMat);
        this.tailMesh.castShadow = true;
        this.tailMesh.visible = false;
        this.scene.add(this.tailMesh);
    }
    
    createEyes() {
        // Eye white
        const eyeGeo = new THREE.SphereGeometry(0.14, 10, 10);
        const eyeMat = new THREE.MeshStandardMaterial({
            color: this.colors.eyeWhite,
            metalness: 0.0,
            roughness: 0.3
        });
        
        // Pupil
        const pupilGeo = new THREE.SphereGeometry(0.08, 8, 8);
        const pupilMat = new THREE.MeshStandardMaterial({
            color: this.colors.pupilColor,
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
        leftPupil.scale.set(1, 1, 0.5);
        this.headMesh.add(leftPupil);
        
        // Right eye
        const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
        rightEye.position.set(0.28, 0.25, -0.35);
        rightEye.scale.set(1, 1, 0.7);
        this.headMesh.add(rightEye);
        
        const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
        rightPupil.position.set(0.28, 0.25, -0.42);
        rightPupil.scale.set(1, 1, 0.5);
        this.headMesh.add(rightPupil);
        
        // Eye highlights (shine)
        const highlightGeo = new THREE.SphereGeometry(0.04, 6, 6);
        const highlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        
        const leftHighlight = new THREE.Mesh(highlightGeo, highlightMat);
        leftHighlight.position.set(-0.32, 0.32, -0.46);
        this.headMesh.add(leftHighlight);
        
        const rightHighlight = new THREE.Mesh(highlightGeo, highlightMat);
        rightHighlight.position.set(0.24, 0.32, -0.46);
        this.headMesh.add(rightHighlight);
    }
    
    createTongue() {
        const tongueGroup = new THREE.Group();
        tongueGroup.name = 'tongue';
        
        const tongueMat = new THREE.MeshStandardMaterial({
            color: this.colors.tongueColor,
            metalness: 0.0,
            roughness: 0.8
        });
        
        const tongueLen = 0.35;
        const forkAngle = 0.35;
        
        // Left fork
        const leftGeo = new THREE.ConeGeometry(0.035, tongueLen, 6);
        const leftTongue = new THREE.Mesh(leftGeo, tongueMat);
        leftTongue.rotation.x = Math.PI / 2;
        leftTongue.rotation.z = forkAngle;
        leftTongue.position.z = -tongueLen / 2;
        tongueGroup.add(leftTongue);
        
        // Right fork
        const rightGeo = new THREE.ConeGeometry(0.035, tongueLen, 6);
        const rightTongue = new THREE.Mesh(rightGeo, tongueMat);
        rightTongue.rotation.x = Math.PI / 2;
        rightTongue.rotation.z = -forkAngle;
        rightTongue.position.z = -tongueLen / 2;
        tongueGroup.add(rightTongue);
        
        // Base
        const baseGeo = new THREE.CylinderGeometry(0.04, 0.055, 0.12, 6);
        const base = new THREE.Mesh(baseGeo, tongueMat);
        base.rotation.x = Math.PI / 2;
        tongueGroup.add(base);
        
        tongueGroup.position.set(0, 0.1, -0.55);
        tongueGroup.visible = false; // Hidden by default
        
        return tongueGroup;
    }
    
    updateColors(colors) {
        this.colors = { ...this.colors, ...colors };
        
        if (this.headMesh && this.headMesh.material) {
            this.headMesh.material.color.setHex(this.colors.headColor);
        }
    }
    
    hideMeshes() {
        if (this.headMesh) this.headMesh.visible = false;
        this.bodyMeshes.forEach(m => m.visible = false);
        this.connectorMeshes.forEach(m => m.visible = false);
        if (this.tailMesh) this.tailMesh.visible = false;
        if (this.tongueGroup) this.tongueGroup.visible = false;
    }
    
    triggerDeath() {
        this.isDying = true;
        this.deathStartTime = performance.now();
        
        // Store start positions
        this.deathStartPositions = [];
        if (this.headMesh) {
            this.deathStartPositions.push({ mesh: this.headMesh, pos: this.headMesh.position.clone() });
        }
        this.bodyMeshes.forEach((m, i) => {
            if (m.visible) {
                this.deathStartPositions.push({ mesh: m, pos: m.position.clone() });
            }
        });
        if (this.tailMesh && this.tailMesh.visible) {
            this.deathStartPositions.push({ mesh: this.tailMesh, pos: this.tailMesh.position.clone() });
        }
    }
    
    updateVisuals(time, deltaTime = 16) {
        this.waveTime += deltaTime * 0.001;
        
        // Tongue animation - extend/retract
        if (this.tongueGroup && this.tongueGroup.visible) {
            const tongueExtend = (Math.sin(this.waveTime * 8) + 1) * 0.5; // 0 to 1
            const scale = 0.3 + tongueExtend * 0.7;
            this.tongueGroup.scale.z = scale;
            this.tongueGroup.position.z = -0.55 - tongueExtend * 0.15;
        }
        
        // Subtle head bob while moving
        if (this.headMesh && this.headMesh.visible && !this.isDying) {
            const bob = Math.sin(this.waveTime * 4) * 0.03;
            // Only bob if we apply it externally via position
        }
        
        // Death animation
        if (this.isDying) {
            const elapsed = (performance.now() - this.deathStartTime) / 1000;
            const duration = 1.5;
            
            if (elapsed < duration) {
                const t = elapsed / duration;
                this.deathStartPositions.forEach(({ mesh, pos }) => {
                    // Explode outward with gravity
                    const angle = Math.atan2(pos.z, pos.x) + Math.random() * 0.5;
                    const speed = (1 - t) * 8;
                    mesh.position.x = pos.x + Math.cos(angle) * speed * t;
                    mesh.position.y = pos.y + Math.sin(elapsed * 5) * t * 3 + (1 - t) * 5;
                    mesh.position.z = pos.z + Math.sin(angle) * speed * t;
                    
                    // Fade out
                    if (mesh.material) {
                        mesh.material.opacity = 1 - t;
                        mesh.material.transparent = true;
                    }
                });
            } else {
                this.isDying = false;
            }
        }
    }
    
    setVisible(visible) {
        if (this.headMesh) this.headMesh.visible = visible;
        if (this.tongueGroup) this.tongueGroup.visible = visible;
    }
    
    dispose() {
        if (this.headMesh) this.scene.remove(this.headMesh);
        this.bodyMeshes.forEach(m => this.scene.remove(m));
        this.connectorMeshes.forEach(m => this.scene.remove(m));
        if (this.tailMesh) this.scene.remove(this.tailMesh);
    }
}
