// Snake Game V3 - Food (Apple)
import * as THREE from 'three';

export class Food {
    constructor(scene) {
        this.scene = scene;
        this.position = { x: 0, z: 0 };
        this.mesh = null;
        this.createMesh();
    }
    
    createMesh() {
        this.mesh = new THREE.Group();
        
        // Apple body
        const bodyGeo = new THREE.SphereGeometry(0.4, 10, 8);
        const bodyMat = new THREE.MeshLambertMaterial({
            color: 0xFF3333,
            flatShading: true
        });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.scale.set(1, 0.9, 1); // Slightly flattened
        body.castShadow = true;
        this.mesh.add(body);
        
        // Stem
        const stemGeo = new THREE.CylinderGeometry(0.03, 0.05, 0.2, 6);
        const stemMat = new THREE.MeshLambertMaterial({ color: 0x886633 });
        const stem = new THREE.Mesh(stemGeo, stemMat);
        stem.position.set(0, 0.45, 0);
        this.mesh.add(stem);
        
        // Leaf
        const leafGeo = new THREE.SphereGeometry(0.12, 6, 4);
        const leafMat = new THREE.MeshLambertMaterial({ color: 0x44CC44 });
        const leaf = new THREE.Mesh(leafGeo, leafMat);
        leaf.scale.set(1.5, 0.5, 1);
        leaf.position.set(0.1, 0.5, 0.05);
        leaf.rotation.z = 0.5;
        this.mesh.add(leaf);
        
        // Highlight (shine)
        const highlightGeo = new THREE.SphereGeometry(0.08, 6, 6);
        const highlightMat = new THREE.MeshBasicMaterial({ 
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0.6
        });
        const highlight = new THREE.Mesh(highlightGeo, highlightMat);
        highlight.position.set(-0.15, 0.15, -0.25);
        this.mesh.add(highlight);
        
        this.mesh.position.set(0, 0.5, 0);
        this.scene.getScene().add(this.mesh);
        this.mesh.visible = false;
    }
    
    spawn(snakeHead, snakeBody) {
        // Generate random position
        let valid = false;
        let attempts = 0;
        
        while (!valid && attempts < 100) {
            this.position.x = Math.floor(Math.random() * 40) - 20;
            this.position.z = Math.floor(Math.random() * 40) - 20;
            
            // Check distance from snake head
            const dxH = this.position.x - snakeHead.x;
            const dzH = this.position.z - snakeHead.z;
            const distH = Math.sqrt(dxH * dxH + dzH * dzH);
            
            if (distH < 5) {
                attempts++;
                continue;
            }
            
            // Check distance from snake body
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
            
            if (!collision) {
                valid = true;
            }
            attempts++;
        }
        
        // Update mesh position
        this.mesh.position.set(this.position.x, 0.5, this.position.z);
        this.mesh.visible = true;
    }
    
    update(time) {
        if (!this.mesh.visible) return;
        
        // Bobbing animation
        const bob = Math.sin(time * 0.003) * 0.08;
        this.mesh.position.y = 0.5 + bob;
        
        // Slow rotation
        this.mesh.rotation.y = time * 0.001;
    }
    
    checkCollision(headPos) {
        const dx = headPos.x - this.position.x;
        const dz = headPos.z - this.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        
        return dist < 0.8; // Collision radius
    }
    
    hide() {
        this.mesh.visible = false;
    }
}
