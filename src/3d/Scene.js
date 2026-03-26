// Snake Game V3 - Three.js Scene Manager
import * as THREE from 'three';

export class Scene {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1a3a1a);
        
        // Camera
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            500
        );
        this.camera.position.set(0, 15, 15);
        this.camera.lookAt(0, 0, 0);
        
        // Camera config
        this.cameraOffset = { x: 0, y: 15, z: 15 };
        this.lookAhead = 5;
        this.lerpFactor = 0.08;
        
        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.container.appendChild(this.renderer.domElement);
        
        // Lighting
        this.setupLighting();
        
        // Ground
        this.createGround();
        
        // Fog (for depth)
        this.scene.fog = new THREE.Fog(0x1a3a1a, 50, 150);
        
        // Handle resize
        window.addEventListener('resize', () => this.onResize());
    }
    
    setupLighting() {
        // Ambient light
        const ambient = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambient);
        
        // Main directional light (sun)
        this.sunLight = new THREE.DirectionalLight(0xFFFFAA, 1.0);
        this.sunLight.position.set(10, 20, 10);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.width = 2048;
        this.sunLight.shadow.mapSize.height = 2048;
        this.sunLight.shadow.camera.near = 0.5;
        this.sunLight.shadow.camera.far = 100;
        this.sunLight.shadow.camera.left = -50;
        this.sunLight.shadow.camera.right = 50;
        this.sunLight.shadow.camera.top = 50;
        this.sunLight.shadow.camera.bottom = -50;
        this.scene.add(this.sunLight);
        
        // Fill light (blue tint from opposite side)
        const fillLight = new THREE.DirectionalLight(0x4444AA, 0.3);
        fillLight.position.set(-10, 5, -10);
        this.scene.add(fillLight);
    }
    
    createGround() {
        // Ground geometry with slight height variation
        const groundGeo = new THREE.PlaneGeometry(100, 100, 50, 50);
        
        // Add slight height variation
        const positions = groundGeo.attributes.position;
        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);
            positions.setZ(i, Math.sin(x * 0.1) * 0.1 + Math.cos(y * 0.1) * 0.1);
        }
        groundGeo.computeVertexNormals();
        
        // Ground material with flat shading for low-poly look
        const groundMat = new THREE.MeshLambertMaterial({
            color: 0x228822,
            flatShading: true
        });
        
        this.ground = new THREE.Mesh(groundGeo, groundMat);
        this.ground.rotation.x = -Math.PI / 2;
        this.ground.receiveShadow = true;
        this.scene.add(this.ground);
    }
    
    updateCamera(targetPos, direction) {
        // Target camera position
        const targetX = targetPos.x + this.cameraOffset.x;
        const targetZ = targetPos.z + this.cameraOffset.z;
        
        // Smooth interpolation
        this.camera.position.x += (targetX - this.camera.position.x) * this.lerpFactor;
        this.camera.position.y += (this.cameraOffset.y - this.camera.position.y) * this.lerpFactor;
        this.camera.position.z += (targetZ - this.camera.position.z) * this.lerpFactor;
        
        // Look at point ahead of snake
        const lookAtX = targetPos.x + direction.x * this.lookAhead;
        const lookAtZ = targetPos.z + direction.z * this.lookAhead;
        
        this.camera.lookAt(lookAtX, 0, lookAtZ);
        
        // Update sun light position to follow camera
        this.sunLight.position.set(
            this.camera.position.x + 10,
            20,
            this.camera.position.z + 10
        );
        this.sunLight.target.position.copy(targetPos);
    }
    
    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    render() {
        this.renderer.render(this.scene, this.camera);
    }
    
    getScene() {
        return this.scene;
    }
}
