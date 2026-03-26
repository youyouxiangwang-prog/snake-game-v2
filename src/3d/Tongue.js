// Snake Game V3 - Tongue Animation System
import * as THREE from 'three';

export class Tongue {
    constructor(parent) {
        this.parent = parent;
        this.mesh = null;
        
        // Animation state machine
        this.state = 'IDLE';
        this.length = 0.1;
        this.idleTimer = 0;
        this.idleDuration = 3 + Math.random() * 2; // 3-5 seconds
        
        // Configuration per SPEC
        this.config = {
            maxLength: 1.2,
            minLength: 0.1,
            extendSpeed: 0.15,
            retractSpeed: 0.2,
            flickerSpeed: 0.3,
            flickerAmount: 0.02,
            forkAngle: 0.3,
            position: { x: 0, y: 0.2, z: -0.5 }
        };
        
        this.createMesh();
    }
    
    createMesh() {
        this.mesh = new THREE.Group();
        this.mesh.name = 'tongue';
        
        const tongueMat = new THREE.MeshBasicMaterial({
            color: 0xFF3333,
            side: THREE.DoubleSide
        });
        
        const tongueLen = 0.4;
        const forkAngle = this.config.forkAngle;
        
        // Left part
        const leftGeo = new THREE.ConeGeometry(0.04, tongueLen, 4);
        this.leftTongue = new THREE.Mesh(leftGeo, tongueMat);
        this.leftTongue.rotation.x = Math.PI / 2;
        this.leftTongue.rotation.z = forkAngle;
        this.leftTongue.position.z = -tongueLen / 2;
        this.mesh.add(this.leftTongue);
        
        // Right part
        const rightGeo = new THREE.ConeGeometry(0.04, tongueLen, 4);
        this.rightTongue = new THREE.Mesh(rightGeo, tongueMat);
        this.rightTongue.rotation.x = Math.PI / 2;
        this.rightTongue.rotation.z = -forkAngle;
        this.rightTongue.position.z = -tongueLen / 2;
        this.mesh.add(this.rightTongue);
        
        // Base
        const baseGeo = new THREE.CylinderGeometry(0.04, 0.06, 0.15, 6);
        this.baseTongue = new THREE.Mesh(baseGeo, tongueMat);
        this.baseTongue.rotation.x = Math.PI / 2;
        this.mesh.add(this.baseTongue);
        
        this.mesh.position.set(
            this.config.position.x,
            this.config.position.y,
            this.config.position.z
        );
        
        if (this.parent) {
            this.parent.add(this.mesh);
        }
    }
    
    update(deltaTime) {
        switch (this.state) {
            case 'IDLE':
                this.updateIdle(deltaTime);
                break;
            case 'EXTENDING':
                this.updateExtending(deltaTime);
                break;
            case 'RETRACTING':
                this.updateRetracting(deltaTime);
                break;
        }
        
        this.applyAnimation();
    }
    
    updateIdle(deltaTime) {
        this.idleTimer += deltaTime;
        
        // Add subtle flicker while idle
        const flicker = Math.sin(Date.now() * 0.01) * this.config.flickerAmount;
        this.mesh.scale.z = 1 + flicker;
        
        if (this.idleTimer >= this.idleDuration) {
            this.state = 'EXTENDING';
            this.idleTimer = 0;
        }
    }
    
    updateExtending(deltaTime) {
        this.length += this.config.extendSpeed;
        
        if (this.length >= this.config.maxLength) {
            this.length = this.config.maxLength;
            this.state = 'RETRACTING';
        }
    }
    
    updateRetracting(deltaTime) {
        this.length -= this.config.retractSpeed;
        
        if (this.length <= this.config.minLength) {
            this.length = this.config.minLength;
            this.state = 'IDLE';
            this.idleDuration = 3 + Math.random() * 2;
        }
    }
    
    applyAnimation() {
        // Scale the entire tongue group based on length
        // Length 0.1 = scale 1, Length 1.2 = scale ~3
        const scale = 1 + (this.length - this.config.minLength) / this.config.maxLength * 2;
        this.mesh.scale.z = scale;
    }
    
    // Force tongue out (e.g., when eating)
    triggerEat() {
        this.length = this.config.maxLength;
        this.state = 'RETRACTING';
    }
    
    // Reset to idle state
    reset() {
        this.state = 'IDLE';
        this.length = this.config.minLength;
        this.idleTimer = 0;
        this.idleDuration = 3 + Math.random() * 2;
        this.mesh.scale.z = 1;
    }
    
    setVisible(visible) {
        this.mesh.visible = visible;
    }
}
