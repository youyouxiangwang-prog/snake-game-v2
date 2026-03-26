// Snake Game V3 - Snake 3D Mesh Renderer
import * as THREE from 'three';

export class SnakeMesh {
    constructor(scene) {
        this.scene = scene;
        this.headMesh = null;
        this.bodyMeshes = [];
        this.tailMesh = null;
        this.tongue = null;
        
        // Default skin colors (classic)
        this.colors = {
            headColor: 0xFFCC00,
            bodyColor: 0xFFCC00,
            tailColor: 0xDD9900,
            eyeColor: 0xFFFFFF,
            pupilColor: 0x000000,
            tongueColor: 0xFF3333
        };
        
        this.createMeshes();
    }
    
    createMeshes() {
        // Head material
        const headMat = new THREE.MeshLambertMaterial({
            color: this.colors.headColor,
            flatShading: true
        });
        
        // Body material
        const bodyMat = new THREE.MeshLambertMaterial({
            color: this.colors.bodyColor,
            flatShading: true
        });
        
        // Tail material
        const tailMat = new THREE.MeshLambertMaterial({
            color: this.colors.tailColor,
            flatShading: true
        });
        
        // Create head
        const headGeo = new THREE.CylinderGeometry(0.6, 0.7, 0.8, 12);
        this.headMesh = new THREE.Mesh(headGeo, headMat);
        this.headMesh.castShadow = true;
        this.headMesh.scale.set(1, 0.8, 1.2);
        this.scene.add(this.headMesh);
        
        // Create eyes
        this.createEyes();
        
        // Create tongue
        this.tongue = this.createTongue();
        this.headMesh.add(this.tongue);
        
        // Create body segments
        for (let i = 0; i < 50; i++) {
            const segGeo = new THREE.CylinderGeometry(0.45, 0.5, 0.6, 10);
            const segMesh = new THREE.Mesh(segGeo, bodyMat.clone());
            segMesh.castShadow = true;
            segMesh.visible = false;
            this.scene.add(segMesh);
            this.bodyMeshes.push(segMesh);
        }
        
        // Create tail
        const tailGeo = new THREE.ConeGeometry(0.4, 0.8, 8);
        this.tailMesh = new THREE.Mesh(tailGeo, tailMat);
        this.tailMesh.castShadow = true;
        this.tailMesh.visible = false;
        this.scene.add(this.tailMesh);
    }
    
    createEyes() {
        const eyeGeo = new THREE.SphereGeometry(0.15, 8, 8);
        const pupilGeo = new THREE.SphereGeometry(0.08, 6, 6);
        const eyeMat = new THREE.MeshBasicMaterial({ color: this.colors.eyeColor });
        const pupilMat = new THREE.MeshBasicMaterial({ color: this.colors.pupilColor });
        
        // Left eye
        const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
        leftEye.position.set(-0.25, 0.3, 0.35);
        this.headMesh.add(leftEye);
        
        const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
        leftPupil.position.set(-0.25, 0.3, 0.42);
        this.headMesh.add(leftPupil);
        
        // Right eye
        const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
        rightEye.position.set(0.25, 0.3, 0.35);
        this.headMesh.add(rightEye);
        
        const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
        rightPupil.position.set(0.25, 0.3, 0.42);
        this.headMesh.add(rightPupil);
    }
    
    createTongue() {
        const tongueGroup = new THREE.Group();
        tongueGroup.name = 'tongue';
        
        const tongueMat = new THREE.MeshBasicMaterial({
            color: this.colors.tongueColor,
            side: THREE.DoubleSide
        });
        
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
    
    updateColors(colors) {
        this.colors = { ...this.colors, ...colors };
        
        if (this.headMesh && this.headMesh.material) {
            this.headMesh.material.color.setHex(this.colors.headColor);
        }
        
        this.bodyMeshes.forEach(m => {
            if (m.material) m.material.color.setHex(this.colors.bodyColor);
        });
        
        if (this.tailMesh && this.tailMesh.material) {
            this.tailMesh.material.color.setHex(this.colors.tailColor);
        }
    }
    
    hideMeshes() {
        if (this.headMesh) this.headMesh.visible = false;
        this.bodyMeshes.forEach(m => m.visible = false);
        if (this.tailMesh) this.tailMesh.visible = false;
    }
    
    updateVisuals(time) {
        // Tongue animation
        if (this.tongue) {
            const flicker = Math.sin(time * 0.01) * 0.05;
            this.tongue.scale.z = 1 + flicker;
        }
        
        // Subtle head bob
        if (this.headMesh) {
            const bob = Math.sin(time * 0.005) * 0.02;
            this.headMesh.position.y = 0.4 + bob;
        }
    }
    
    setVisible(visible) {
        if (this.headMesh) this.headMesh.visible = visible;
    }
    
    dispose() {
        if (this.headMesh) this.scene.remove(this.headMesh);
        this.bodyMeshes.forEach(m => this.scene.remove(m));
        if (this.tailMesh) this.scene.remove(this.tailMesh);
    }
}
