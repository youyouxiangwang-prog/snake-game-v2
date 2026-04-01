/**
 * SceneManager.js - Three.js Scene Setup and Management (PBR Upgrade)
 * 
 * Upgraded with:
 * - PBR lighting (warm directional + cool fill)
 * - Glass boundary walls (MeshPhysicalMaterial)
 * - Glowing arena boundary lines
 * - Improved ground with vertex displacement
 * - Soft PCF shadows
 * - ACES filmic tone mapping
 * - Camera shake support
 */

import * as THREE from 'three';
import { WORLD_CONFIG, COLLISION_CONFIG, MOVEMENT_CONFIG } from '../core/Game.js';

const CAMERA_CONFIG = {
    fov: 60,
    near: 0.1,
    far: 1000,
    follow: {
        offset: new THREE.Vector3(0, 18, 18),
        lookAhead: 5,
        lerpFactor: 0.05
    }
};

const LIGHTING_CONFIG = {
    ambient: { color: 0x404060, intensity: 0.5 },
    hemisphere: { skyColor: 0x87ceeb, groundColor: 0x2d5a27, intensity: 0.35 },
    directional: { color: 0xFFEDD0, intensity: 1.8, position: new THREE.Vector3(20, 40, 20) },
    fill: { color: 0x6080FF, intensity: 0.35, position: new THREE.Vector3(-20, 15, -20) }
};

const ARENA_SIZE = 48;
const WALL_HEIGHT = 2.5;

export class SceneManager {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        this.isMobile = this.detectMobile();
        
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0f172a);
        
        // Camera shake state
        this.shakeIntensity = 0;
        this.shakeDecay = 0.92;
        this.shakeOffset = { x: 0, y: 0, z: 0 };
        
        this.setupRenderer();
        this.setupCamera();
        this.setupLighting();
        this.setupEnvironment();
        
        window.addEventListener('resize', this.onResize.bind(this));
        
        console.log(`[SceneManager] Initialized (mobile: ${this.isMobile})`);
    }
    
    detectMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    }
    
    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: !this.isMobile,
            alpha: false,
            powerPreference: 'high-performance'
        });
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        const maxDPR = this.isMobile ? 1.5 : 2.0;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDPR));
        
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = this.isMobile ? THREE.BasicShadowMap : THREE.PCFSoftShadowMap;
        this.renderer.shadowMap.radius = this.isMobile ? 1 : 4;
        
        // Tone mapping for better colors
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        
        this.container.appendChild(this.renderer.domElement);
    }
    
    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            CAMERA_CONFIG.fov,
            window.innerWidth / window.innerHeight,
            CAMERA_CONFIG.near,
            CAMERA_CONFIG.far
        );
        
        this.camera.position.set(0, 20, 20);
        this.camera.lookAt(0, 0, 0);
        this.cameraTarget = new THREE.Vector3();
    }
    
    setupLighting() {
        // Ambient light
        this.ambientLight = new THREE.AmbientLight(
            LIGHTING_CONFIG.ambient.color,
            LIGHTING_CONFIG.ambient.intensity
        );
        this.scene.add(this.ambientLight);
        
        // Hemisphere light for sky/ground color bleed
        this.hemisphereLight = new THREE.HemisphereLight(
            LIGHTING_CONFIG.hemisphere.skyColor,
            LIGHTING_CONFIG.hemisphere.groundColor,
            LIGHTING_CONFIG.hemisphere.intensity
        );
        this.scene.add(this.hemisphereLight);
        
        // Main directional light (warm sun)
        this.directionalLight = new THREE.DirectionalLight(
            LIGHTING_CONFIG.directional.color,
            LIGHTING_CONFIG.directional.intensity
        );
        this.directionalLight.position.copy(LIGHTING_CONFIG.directional.position);
        this.directionalLight.castShadow = true;
        
        const shadowSize = this.isMobile ? 512 : 1024;
        this.directionalLight.shadow.mapSize.width = shadowSize;
        this.directionalLight.shadow.mapSize.height = shadowSize;
        this.directionalLight.shadow.camera.near = 1;
        this.directionalLight.shadow.camera.far = 150;
        this.directionalLight.shadow.camera.left = -60;
        this.directionalLight.shadow.camera.right = 60;
        this.directionalLight.shadow.camera.top = 60;
        this.directionalLight.shadow.camera.bottom = -60;
        this.directionalLight.shadow.bias = -0.001;
        
        this.scene.add(this.directionalLight);
        this.scene.add(this.directionalLight.target);
        
        // Fill light (cool blue from opposite side)
        this.fillLight = new THREE.DirectionalLight(
            LIGHTING_CONFIG.fill.color,
            LIGHTING_CONFIG.fill.intensity
        );
        this.fillLight.position.copy(LIGHTING_CONFIG.fill.position);
        this.scene.add(this.fillLight);
    }
    
    setupEnvironment() {
        this.createGround();
        this.createGridLines();
        this.createBoundaryWalls();
        this.createBoundaryGlow();
        
        // Fog for depth
        this.scene.fog = new THREE.FogExp2(0x0f172a, 0.012);
    }
    
    createGround() {
        const groundSize = WORLD_CONFIG.size;
        
        // Ground geometry with vertex displacement
        const groundGeometry = new THREE.PlaneGeometry(groundSize, groundSize, 80, 80);
        
        // Add terrain variation
        const positions = groundGeometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);
            const distFromCenter = Math.sqrt(x*x + y*y) / (groundSize / 2);
            const flatZone = Math.max(0, 1 - distFromCenter * 1.5);
            const bump = (Math.sin(x * 0.5) * Math.cos(y * 0.5) * 0.25 +
                         Math.sin(x * 1.2 + y * 0.8) * 0.12) * (1 - flatZone);
            positions.setZ(i, bump);
        }
        groundGeometry.computeVertexNormals();
        
        // PBR ground material
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a6b2a,
            roughness: 0.95,
            metalness: 0.0
        });
        
        this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
        this.ground.rotation.x = -Math.PI / 2;
        this.ground.position.y = -0.15;
        this.ground.receiveShadow = true;
        this.scene.add(this.ground);
    }
    
    createGridLines() {
        const gridSize = WORLD_CONFIG.size;
        const halfGrid = gridSize / 2;
        const cellSize = 2;
        
        const points = [];
        
        for (let i = -halfGrid; i <= halfGrid; i += cellSize) {
            points.push(new THREE.Vector3(i, 0.02, -halfGrid));
            points.push(new THREE.Vector3(i, 0.02, halfGrid));
            points.push(new THREE.Vector3(-halfGrid, 0.02, i));
            points.push(new THREE.Vector3(halfGrid, 0.02, i));
        }
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
            color: 0x1a4a1a,
            transparent: true,
            opacity: 0.25
        });
        
        this.gridLines = new THREE.LineSegments(geometry, material);
        this.scene.add(this.gridLines);
    }
    
    createBoundaryWalls() {
        const halfGrid = ARENA_SIZE;
        
        // Glass wall material
        const wallMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x0a3d1a,
            metalness: 0.0,
            roughness: 0.15,
            transmission: 0.5,
            thickness: 0.8,
            transparent: true,
            opacity: 0.7
        });
        
        // Glowing top cap
        const capMaterial = new THREE.MeshStandardMaterial({
            color: 0x22ff88,
            emissive: 0x22ff88,
            emissiveIntensity: 0.5,
            metalness: 0.3,
            roughness: 0.4
        });
        
        const walls = [
            { pos: [0, WALL_HEIGHT / 2, -halfGrid], size: [halfGrid * 2, WALL_HEIGHT, 0.6] },
            { pos: [0, WALL_HEIGHT / 2, halfGrid], size: [halfGrid * 2, WALL_HEIGHT, 0.6] },
            { pos: [-halfGrid, WALL_HEIGHT / 2, 0], size: [0.6, WALL_HEIGHT, halfGrid * 2] },
            { pos: [halfGrid, WALL_HEIGHT / 2, 0], size: [0.6, WALL_HEIGHT, halfGrid * 2] }
        ];
        
        walls.forEach(({ pos, size }) => {
            const geometry = new THREE.BoxGeometry(...size);
            const wall = new THREE.Mesh(geometry, wallMaterial);
            wall.position.set(...pos);
            wall.castShadow = true;
            wall.receiveShadow = true;
            this.scene.add(wall);
            
            const capGeo = new THREE.BoxGeometry(size[0], 0.15, size[2]);
            const cap = new THREE.Mesh(capGeo, capMaterial);
            cap.position.set(pos[0], WALL_HEIGHT, pos[2]);
            this.scene.add(cap);
        });
        
        // Corner pillars
        const corners = [
            [-halfGrid, -halfGrid], [-halfGrid, halfGrid],
            [halfGrid, -halfGrid], [halfGrid, halfGrid]
        ];
        
        corners.forEach(([x, z]) => {
            const pillarGeo = new THREE.CylinderGeometry(0.5, 0.6, WALL_HEIGHT + 0.5, 8);
            const pillar = new THREE.Mesh(pillarGeo, wallMaterial);
            pillar.position.set(x, (WALL_HEIGHT + 0.5) / 2, z);
            pillar.castShadow = true;
            this.scene.add(pillar);
            
            const capGeo = new THREE.CylinderGeometry(0.6, 0.5, 0.25, 8);
            const cap = new THREE.Mesh(capGeo, capMaterial);
            cap.position.set(x, WALL_HEIGHT + 0.6, z);
            this.scene.add(cap);
        });
    }
    
    createBoundaryGlow() {
        // Inner glow ring
        const segments = 128;
        const radius = ARENA_SIZE - 0.5;
        
        const points = [];
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            points.push(new THREE.Vector3(
                Math.cos(angle) * radius, 0.05, Math.sin(angle) * radius
            ));
        }
        
        const ringGeo = new THREE.BufferGeometry().setFromPoints(points);
        const ringMat = new THREE.LineBasicMaterial({
            color: 0x22ff88,
            transparent: true,
            opacity: 0.6
        });
        this.scene.add(new THREE.Line(ringGeo, ringMat));
        
        // Outer faint ring
        const outerPoints = [];
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            outerPoints.push(new THREE.Vector3(
                Math.cos(angle) * (radius + 1.5), 0.05, Math.sin(angle) * (radius + 1.5)
            ));
        }
        const outerGeo = new THREE.BufferGeometry().setFromPoints(outerPoints);
        const outerMat = new THREE.LineBasicMaterial({
            color: 0x22ff88,
            transparent: true,
            opacity: 0.2
        });
        this.scene.add(new THREE.Line(outerGeo, outerMat));
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
        
        const targetX = targetPos.x + CAMERA_CONFIG.follow.offset.x + this.shakeOffset.x;
        const targetZ = targetPos.z + CAMERA_CONFIG.follow.offset.z + this.shakeOffset.z;
        const targetY = CAMERA_CONFIG.follow.offset.y + this.shakeOffset.y;
        
        const lerpFactor = CAMERA_CONFIG.follow.lerpFactor;
        this.camera.position.x += (targetX - this.camera.position.x) * lerpFactor;
        this.camera.position.z += (targetZ - this.camera.position.z) * lerpFactor;
        this.camera.position.y = targetY;
        
        const lookAtX = targetPos.x + direction.x * CAMERA_CONFIG.follow.lookAhead;
        const lookAtZ = targetPos.z + direction.z * CAMERA_CONFIG.follow.lookAhead;
        this.camera.lookAt(lookAtX, 0, lookAtZ);
        
        this.directionalLight.position.set(
            this.camera.position.x + 15, 30, this.camera.position.z + 15
        );
        this.directionalLight.target.position.set(targetPos.x, 0, targetPos.z);
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
        this.renderer.render(this.scene, this.camera);
    }
    
    getScene() { return this.scene; }
    getRenderer() { return this.renderer; }
    getCamera() { return this.camera; }
}
