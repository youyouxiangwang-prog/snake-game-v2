// Snake Game V3 - Three.js Scene Manager (Optimized)
import * as THREE from 'three';

export class Scene {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        
        // Arena config
        this.arenaSize = 30;
        this.wallHeight = 2;
        
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1a4a1a);
        
        // Camera
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            500
        );
        this.camera.position.set(0, 20, 20);
        this.camera.lookAt(0, 0, 0);
        
        // Camera config - optimized lerp
        this.cameraOffset = { x: 0, y: 20, z: 20 };
        this.lookAhead = 5;
        this.lerpFactor = 0.05; // Reduced for smoother camera
        
        // Renderer - optimized
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Reduced for performance
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.BasicShadowMap; // Fastest shadow
        this.container.appendChild(this.renderer.domElement);
        
        // Lighting
        this.setupLighting();
        
        // Ground with arena marking
        this.createGround();
        
        // Boundary walls
        this.createBoundaryWalls();
        
        // Fog (for depth)
        this.scene.fog = new THREE.Fog(0x1a4a1a, 40, 80);
        
        // FPS tracking
        this.lastTime = performance.now();
        this.fps = 60;
        
        // Handle resize
        window.addEventListener('resize', () => this.onResize());
    }
    
    setupLighting() {
        // Ambient light
        const ambient = new THREE.AmbientLight(0x608060, 0.8);
        this.scene.add(ambient);
        
        // Main directional light (sun)
        this.sunLight = new THREE.DirectionalLight(0xFFFFCC, 1.2);
        this.sunLight.position.set(15, 30, 15);
        this.sunLight.castShadow = true;
        
        // Optimized shadow - reduced from 2048 to 1024
        this.sunLight.shadow.mapSize.width = 1024;
        this.sunLight.shadow.mapSize.height = 1024;
        this.sunLight.shadow.camera.near = 1;
        this.sunLight.shadow.camera.far = 80;
        this.sunLight.shadow.camera.left = -30;
        this.sunLight.shadow.camera.right = 30;
        this.sunLight.shadow.camera.top = 30;
        this.sunLight.shadow.camera.bottom = -30;
        this.scene.add(this.sunLight);
        
        // Fill light (softer, from below)
        const fillLight = new THREE.DirectionalLight(0x88AA88, 0.4);
        fillLight.position.set(-10, 5, -10);
        this.scene.add(fillLight);
    }
    
    createGround() {
        const size = this.arenaSize;
        
        // Ground geometry - arena floor
        const groundGeo = new THREE.PlaneGeometry(size * 2, size * 2, 30, 30);
        
        // Slight height variation for low-poly effect
        const positions = groundGeo.attributes.position;
        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);
            // Keep center flat, edges slightly bumpy
            const distFromCenter = Math.sqrt(x*x + y*y) / size;
            positions.setZ(i, Math.sin(x * 0.3) * Math.cos(y * 0.3) * 0.1 * Math.min(1, distFromCenter));
        }
        groundGeo.computeVertexNormals();
        
        // Ground material with flat shading for low-poly look
        const groundMat = new THREE.MeshLambertMaterial({
            color: 0x228822,
            flatShading: true
        });
        
        this.ground = new THREE.Mesh(groundGeo, groundMat);
        this.ground.rotation.x = -Math.PI / 2;
        this.ground.position.y = -0.1;
        this.ground.receiveShadow = true;
        this.scene.add(this.ground);
        
        // Arena boundary marker (subtle ring)
        const ringGeo = new THREE.RingGeometry(size - 0.5, size, 4);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0x114411,
            side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.01;
        this.scene.add(ring);
    }
    
    createBoundaryWalls() {
        const size = this.arenaSize;
        const height = this.wallHeight;
        const thickness = 0.8;
        
        // Wall material - low-poly green
        const wallMat = new THREE.MeshLambertMaterial({
            color: 0x1a551a,
            flatShading: true
        });
        
        // Top highlight
        const topMat = new THREE.MeshLambertMaterial({
            color: 0x2a772a,
            flatShading: true
        });
        
        // Create four walls
        const wallConfigs = [
            // [width, height, depth, x, y, z]
            [size * 2, height, thickness, 0, height/2, -size],    // North
            [size * 2, height, thickness, 0, height/2, size],    // South
            [thickness, height, size * 2, -size, height/2, 0],  // West
            [thickness, height, size * 2, size, height/2, 0],  // East
        ];
        
        wallConfigs.forEach(([w, h, d, x, y, z]) => {
            const wallGeo = new THREE.BoxGeometry(w, h, d);
            const wall = new THREE.Mesh(wallGeo, wallMat);
            wall.position.set(x, y, z);
            wall.castShadow = true;
            wall.receiveShadow = true;
            this.scene.add(wall);
            
            // Add top cap for 3D effect
            const capGeo = new THREE.BoxGeometry(w, 0.2, d);
            const cap = new THREE.Mesh(capGeo, topMat);
            cap.position.set(x, h, z);
            this.scene.add(cap);
        });
        
        // Corner decorations (small pillars)
        const corners = [
            [-size, -size], [-size, size], [size, -size], [size, size]
        ];
        
        corners.forEach(([x, z]) => {
            const pillarGeo = new THREE.CylinderGeometry(0.4, 0.5, height + 0.5, 6);
            const pillar = new THREE.Mesh(pillarGeo, wallMat);
            pillar.position.set(x, (height + 0.5) / 2, z);
            pillar.castShadow = true;
            this.scene.add(pillar);
            
            // Pillar cap
            const capGeo = new THREE.CylinderGeometry(0.5, 0.4, 0.3, 6);
            const cap = new THREE.Mesh(capGeo, topMat);
            cap.position.set(x, height + 0.6, z);
            this.scene.add(cap);
        });
    }
    
    updateCamera(targetPos, direction) {
        // Target camera position
        const targetX = targetPos.x + this.cameraOffset.x;
        const targetZ = targetPos.z + this.cameraOffset.z;
        
        // Smooth interpolation with reduced factor
        this.camera.position.x += (targetX - this.camera.position.x) * this.lerpFactor;
        this.camera.position.z += (targetZ - this.camera.position.z) * this.lerpFactor;
        this.camera.position.y = this.cameraOffset.y;
        
        // Look at point ahead of snake
        const lookAtX = targetPos.x + direction.x * this.lookAhead;
        const lookAtZ = targetPos.z + direction.z * this.lookAhead;
        
        this.camera.lookAt(lookAtX, 0, lookAtZ);
        
        // Update sun light to follow
        this.sunLight.position.set(
            this.camera.position.x + 15,
            30,
            this.camera.position.z + 15
        );
        this.sunLight.target.position.set(targetPos.x, 0, targetPos.z);
    }
    
    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    render() {
        // FPS calculation
        const now = performance.now();
        const delta = now - this.lastTime;
        this.fps = Math.round(1000 / delta);
        this.lastTime = now;
        
        this.renderer.render(this.scene, this.camera);
    }
    
    getScene() {
        return this.scene;
    }
    
    getFPS() {
        return this.fps;
    }
}
