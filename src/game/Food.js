// Snake Game V3 - Food with PBR + Glow (Upgrade)
import * as THREE from 'three';

export class Food {
    constructor(scene) {
        this.scene = scene;
        this.position = { x: 0, z: 0 };
        this.mesh = null;
        this.glowLight = null;
        this.baseY = 0.6;
        this.createMesh();
    }
    
    get x() { return this.position.x; }
    get z() { return this.position.z; }
    set x(val) { this.position.x = val; }
    set z(val) { this.position.z = val; }
    
    createMesh() {
        this.mesh = new THREE.Group();
        
        // Apple body - PBR with emissive glow
        const bodyGeo = new THREE.SphereGeometry(0.45, 16, 12);
        const bodyMat = new THREE.MeshStandardMaterial({
            color: 0xff2266,
            emissive: 0xff0044,
            emissiveIntensity: 0.5,
            metalness: 0.2,
            roughness: 0.4
        });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.scale.set(1, 0.9, 1);
        body.castShadow = true;
        this.mesh.add(body);
        
        // Inner glow sphere (additive)
        const glowGeo = new THREE.SphereGeometry(0.55, 12, 8);
        const glowMat = new THREE.MeshBasicMaterial({
            color: 0xff4488,
            transparent: true,
            opacity: 0.15,
            side: THREE.BackSide
        });
        const glow = new THREE.Mesh(glowGeo, glowMat);
        this.mesh.add(glow);
        
        // Stem
        const stemGeo = new THREE.CylinderGeometry(0.035, 0.055, 0.22, 6);
        const stemMat = new THREE.MeshStandardMaterial({
            color: 0x664422,
            metalness: 0.1,
            roughness: 0.7
        });
        const stem = new THREE.Mesh(stemGeo, stemMat);
        stem.position.set(0, 0.5, 0);
        this.mesh.add(stem);
        
        // Leaf
        const leafGeo = new THREE.SphereGeometry(0.14, 8, 6);
        const leafMat = new THREE.MeshStandardMaterial({
            color: 0x44dd44,
            metalness: 0.0,
            roughness: 0.6
        });
        const leaf = new THREE.Mesh(leafGeo, leafMat);
        leaf.scale.set(1.6, 0.4, 1);
        leaf.position.set(0.12, 0.56, 0.05);
        leaf.rotation.z = 0.5;
        this.mesh.add(leaf);
        
        // Shine highlight
        const highlightGeo = new THREE.SphereGeometry(0.1, 8, 8);
        const highlightMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.7
        });
        const highlight = new THREE.Mesh(highlightGeo, highlightMat);
        highlight.position.set(-0.18, 0.18, -0.28);
        this.mesh.add(highlight);
        
        // Small sparkle
        const sparkleGeo = new THREE.SphereGeometry(0.04, 6, 6);
        const sparkle = new THREE.Mesh(sparkleGeo, highlightMat.clone());
        sparkle.position.set(0.15, 0.25, -0.2);
        sparkle.material.opacity = 0.5;
        this.mesh.add(sparkle);
        
        this.mesh.position.set(0, this.baseY, 0);
        this.scene.getScene().add(this.mesh);
        this.mesh.visible = false;
        
        // Create point light that follows food
        this.glowLight = new THREE.PointLight(0xff2266, 2.5, 8);
        this.glowLight.position.set(0, this.baseY, 0);
        this.scene.getScene().add(this.glowLight);
    }
    
    spawn(snakeHead, snakeBody) {
        let valid = false;
        let attempts = 0;
        
        while (!valid && attempts < 100) {
            this.position.x = Math.floor(Math.random() * 40) - 20;
            this.position.z = Math.floor(Math.random() * 40) - 20;
            
            const dxH = this.position.x - snakeHead.x;
            const dzH = this.position.z - snakeHead.z;
            const distH = Math.sqrt(dxH * dxH + dzH * dzH);
            
            if (distH < 5) {
                attempts++;
                continue;
            }
            
            let collision = false;
            for (const seg of snakeBody) {
                const dx = this.position.x - seg.x;
                const dz = this.position.z - seg.z;
                const dist = Math.sqrt(dx * dx + dz * dz);
                if (dist < 2) {
                    collision = true;
                    break;
                }
            }
            
            if (!collision) valid = true;
            attempts++;
        }
        
        this.mesh.position.set(this.position.x, this.baseY, this.position.z);
        this.glowLight.position.set(this.position.x, this.baseY, this.position.z);
        this.mesh.visible = true;
        this.glowLight.intensity = 2.5;
    }
    
    update(time) {
        if (!this.mesh.visible) return;
        
        // Floating bob animation
        const bob = Math.sin(time * 0.0025) * 0.18;
        this.mesh.position.y = this.baseY + bob;
        this.glowLight.position.y = this.baseY + bob;
        
        // Gentle rotation
        this.mesh.rotation.y = time * 0.0012;
        
        // Pulsing glow intensity
        const pulse = 2.0 + Math.sin(time * 0.004) * 0.8;
        this.glowLight.intensity = pulse;
    }
    
    checkCollision(headPos) {
        const dx = headPos.x - this.position.x;
        const dz = headPos.z - this.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        return dist < 0.9;
    }
    
    hide() {
        if (this.mesh) this.mesh.visible = false;
        if (this.glowLight) this.glowLight.intensity = 0;
    }
    
    getPosition() {
        return { x: this.position.x, y: this.mesh ? this.mesh.position.y : this.baseY, z: this.position.z };
    }
}
