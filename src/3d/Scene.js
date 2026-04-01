// Snake Game V3 - Three.js Scene Manager (PBR Upgrade)
import * as THREE from 'three';

export class Scene {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        
        // Arena config
        this.arenaSize = 48;
        this.wallHeight = 2.5;
        
        // Camera shake state
        this.shakeIntensity = 0;
        this.shakeDecay = 0.92;
        this.shakeOffset = { x: 0, y: 0, z: 0 };
        
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0f172a);
        
        // Camera
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            500
        );
        this.camera.position.set(0, 20, 20);
        this.camera.lookAt(0, 0, 0);
        
        // Camera config
        this.cameraOffset = { x: 0, y: 20, z: 20 };
        this.lookAhead = 5;
        this.lerpFactor = 0.05;
        
        // Renderer - PBR capable
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.container.appendChild(this.renderer.domElement);
        
        // Lighting
        this.setupLighting();
        
        // Ground with arena marking
        this.createGround();
        
        // Boundary walls
        this.createBoundaryWalls();
        
        // Arena boundary glow lines
        this.createBoundaryGlow();
        
        // Fog (exponential for depth)
        this.scene.fog = new THREE.FogExp2(0x0f172a, 0.012);
        
        // FPS tracking
        this.lastTime = performance.now();
        this.fps = 60;
        
        // Handle resize
        window.addEventListener('resize', () => this.onResize());
    }
    
    setupLighting() {
        // Ambient - warm and subtle
        const ambient = new THREE.AmbientLight(0x404060, 0.5);
        this.scene.add(ambient);
        
        // Hemisphere light for natural sky/ground color bleeding
        const hemi = new THREE.HemisphereLight(0x87ceeb, 0x2d5a27, 0.3);
        this.scene.add(hemi);
        
        // Main directional light (sun) - warm white
        this.sunLight = new THREE.DirectionalLight(0xFFEDD0, 1.8);
        this.sunLight.position.set(20, 40, 20);
        this.sunLight.castShadow = true;
        
        // Shadow map - soft shadows
        this.sunLight.shadow.mapSize.width = 1024;
        this.sunLight.shadow.mapSize.height = 1024;
        this.sunLight.shadow.camera.near = 1;
        this.sunLight.shadow.camera.far = 150;
        this.sunLight.shadow.camera.left = -60;
        this.sunLight.shadow.camera.right = 60;
        this.sunLight.shadow.camera.top = 60;
        this.sunLight.shadow.camera.bottom = -60;
        this.sunLight.shadow.bias = -0.001;
        this.sunLight.shadow.radius = 4; // Soft shadow blur
        this.scene.add(this.sunLight);
        
        // Add a target for the sun light
        this.sunLight.target.position.set(0, 0, 0);
        this.scene.add(this.sunLight.target);
        
        // Fill light - cool blue from opposite side
        const fillLight = new THREE.DirectionalLight(0x6080FF, 0.35);
        fillLight.position.set(-20, 15, -20);
        this.scene.add(fillLight);
        
        // Rim light - subtle backlight for depth
        const rimLight = new THREE.DirectionalLight(0x88ffaa, 0.2);
        rimLight.position.set(0, 10, -30);
        this.scene.add(rimLight);
    }
    
    createGround() {
        const groundSize = 100;
        
        // Ground geometry with vertex noise for terrain
        const groundGeo = new THREE.PlaneGeometry(groundSize, groundSize, 80, 80);
        
        // Apply height variation for organic ground
        const positions = groundGeo.attributes.position;
        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);
            // Keep center relatively flat (arena), edges more bumpy
            const distFromCenter = Math.sqrt(x*x + y*y) / (groundSize / 2);
            const flatZone = Math.max(0, 1 - distFromCenter * 1.5);
            const bump = (Math.sin(x * 0.5) * Math.cos(y * 0.5) * 0.25 +
                         Math.sin(x * 1.2 + y * 0.8) * 0.12) * (1 - flatZone);
            positions.setZ(i, bump);
        }
        groundGeo.computeVertexNormals();
        
        // Ground material - PBR
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x1a6b2a,
            roughness: 0.95,
            metalness: 0.0,
            flatShading: false
        });
        
        this.ground = new THREE.Mesh(groundGeo, groundMat);
        this.ground.rotation.x = -Math.PI / 2;
        this.ground.position.y = -0.15;
        this.ground.receiveShadow = true;
        this.scene.add(this.ground);
        
        // Create subtle grid lines
        this.createGridLines(groundSize);
    }
    
    createGridLines(size) {
        const gridMat = new THREE.LineBasicMaterial({
            color: 0x1a4a1a,
            transparent: true,
            opacity: 0.25
        });
        
        const points = [];
        const half = size / 2;
        const step = 2; // 2-unit grid
        
        for (let i = -half; i <= half; i += step) {
            // Lines along X
            points.push(new THREE.Vector3(-half, 0, i));
            points.push(new THREE.Vector3(half, 0, i));
            // Lines along Z
            points.push(new THREE.Vector3(i, 0, -half));
            points.push(new THREE.Vector3(i, 0, half));
        }
        
        const gridGeo = new THREE.BufferGeometry().setFromPoints(points);
        const gridLines = new THREE.LineSegments(gridGeo, gridMat);
        gridLines.position.y = 0.02;
        this.scene.add(gridLines);
    }
    
    createBoundaryWalls() {
        const size = this.arenaSize;
        const height = this.wallHeight;
        const thickness = 0.6;
        
        // Glass-like wall material
        const wallMat = new THREE.MeshPhysicalMaterial({
            color: 0x0a3d1a,
            metalness: 0.0,
            roughness: 0.15,
            transmission: 0.5,
            thickness: 0.8,
            transparent: true,
            opacity: 0.7
        });
        
        // Wall top cap - glowing
        const capMat = new THREE.MeshStandardMaterial({
            color: 0x22ff88,
            emissive: 0x22ff88,
            emissiveIntensity: 0.4,
            metalness: 0.3,
            roughness: 0.4
        });
        
        // Four walls
        const wallConfigs = [
            [size * 2, height, thickness, 0, height/2, -size],
            [size * 2, height, thickness, 0, height/2, size],
            [thickness, height, size * 2, -size, height/2, 0],
            [thickness, height, size * 2, size, height/2, 0]
        ];
        
        wallConfigs.forEach(([w, h, d, x, y, z]) => {
            const wallGeo = new THREE.BoxGeometry(w, h, d);
            const wall = new THREE.Mesh(wallGeo, wallMat);
            wall.position.set(x, y, z);
            wall.castShadow = true;
            wall.receiveShadow = true;
            this.scene.add(wall);
            
            // Glowing top cap
            const capGeo = new THREE.BoxGeometry(w, 0.15, d);
            const cap = new THREE.Mesh(capGeo, capMat);
            cap.position.set(x, h, z);
            this.scene.add(cap);
        });
        
        // Corner pillars
        const corners = [
            [-size, -size], [-size, size], [size, -size], [size, size]
        ];
        
        corners.forEach(([x, z]) => {
            const pillarGeo = new THREE.CylinderGeometry(0.5, 0.6, height + 0.5, 8);
            const pillar = new THREE.Mesh(pillarGeo, wallMat);
            pillar.position.set(x, (height + 0.5) / 2, z);
            pillar.castShadow = true;
            this.scene.add(pillar);
            
            // Pillar glowing cap
            const capGeo = new THREE.CylinderGeometry(0.6, 0.5, 0.25, 8);
            const cap = new THREE.Mesh(capGeo, capMat);
            cap.position.set(x, height + 0.6, z);
            this.scene.add(cap);
        });
    }
    
    createBoundaryGlow() {
        // Glowing arena boundary ring
        const segments = 128;
        const radius = this.arenaSize - 0.5;
        
        const points = [];
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            points.push(new THREE.Vector3(
                Math.cos(angle) * radius,
                0.05,
                Math.sin(angle) * radius
            ));
        }
        
        const ringGeo = new THREE.BufferGeometry().setFromPoints(points);
        const ringMat = new THREE.LineBasicMaterial({
            color: 0x22ff88,
            transparent: true,
            opacity: 0.6
        });
        const ring = new THREE.Line(ringGeo, ringMat);
        this.scene.add(ring);
        
        // Outer faint ring
        const outerPoints = [];
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            outerPoints.push(new THREE.Vector3(
                Math.cos(angle) * (radius + 1.5),
                0.05,
                Math.sin(angle) * (radius + 1.5)
            ));
        }
        const outerRingGeo = new THREE.BufferGeometry().setFromPoints(outerPoints);
        const outerRingMat = new THREE.LineBasicMaterial({
            color: 0x22ff88,
            transparent: true,
            opacity: 0.2
        });
        const outerRing = new THREE.Line(outerRingGeo, outerRingMat);
        this.scene.add(outerRing);
    }
    
    updateCamera(targetPos, direction) {
        // Apply shake decay
        if (this.shakeIntensity > 0.01) {
            this.shakeOffset.x = (Math.random() - 0.5) * this.shakeIntensity;
            this.shakeOffset.y = (Math.random() - 0.5) * this.shakeIntensity * 0.5;
            this.shakeOffset.z = (Math.random() - 0.5) * this.shakeIntensity;
            this.shakeIntensity *= this.shakeDecay;
        } else {
            this.shakeOffset.x = 0;
            this.shakeOffset.y = 0;
            this.shakeOffset.z = 0;
        }
        
        // Target camera position
        const targetX = targetPos.x + this.cameraOffset.x + this.shakeOffset.x;
        const targetZ = targetPos.z + this.cameraOffset.z + this.shakeOffset.z;
        const targetY = this.cameraOffset.y + this.shakeOffset.y;
        
        // Smooth interpolation
        this.camera.position.x += (targetX - this.camera.position.x) * this.lerpFactor;
        this.camera.position.z += (targetZ - this.camera.position.z) * this.lerpFactor;
        this.camera.position.y = targetY;
        
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
    
    triggerShake(intensity = 0.4) {
        this.shakeIntensity = intensity;
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
    
    getCamera() {
        return this.camera;
    }
    
    getFPS() {
        return this.fps;
    }
}
