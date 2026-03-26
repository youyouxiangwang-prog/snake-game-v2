// Snake Game V3 - Camera Controller
import * as THREE from 'three';

export class Camera {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        
        // Camera configuration per SPEC
        this.config = {
            fov: 60,
            near: 0.1,
            far: 500,
            
            // Follow parameters
            offset: { x: 0, y: 15, z: 15 },
            lookAhead: 5,
            lerpFactor: 0.08,
            
            // Angle
            angle: Math.PI / 4,
            
            // Bounds
            bounds: {
                minX: -48,
                maxX: 48,
                minZ: -48,
                maxZ: 48
            }
        };
        
        // Initialize camera position
        this.camera.position.set(0, this.config.offset.y, this.config.offset.z);
    }
    
    update(targetPos, direction) {
        // Calculate target camera position
        const targetX = targetPos.x + this.config.offset.x;
        const targetZ = targetPos.z + this.config.offset.z;
        
        // Smooth interpolation
        this.camera.position.x += (targetX - this.camera.position.x) * this.config.lerpFactor;
        this.camera.position.z += (targetZ - this.camera.position.z) * this.config.lerpFactor;
        this.camera.position.y = this.config.offset.y;
        
        // Look at point ahead of snake
        const lookAtX = targetPos.x + direction.x * this.config.lookAhead;
        const lookAtZ = targetPos.z + direction.z * this.config.lookAhead;
        
        this.camera.lookAt(lookAtX, 0, lookAtZ);
    }
    
    // Update sun light to follow camera (for consistent shadows)
    updateLighting(sunLight, targetPos) {
        if (sunLight) {
            sunLight.position.set(
                this.camera.position.x + 15,
                30,
                this.camera.position.z + 15
            );
            sunLight.target.position.set(targetPos.x, 0, targetPos.z);
        }
    }
    
    // Handle window resize
    onResize(aspectRatio) {
        this.camera.aspect = aspectRatio;
        this.camera.updateProjectionMatrix();
    }
}
