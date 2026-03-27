/**
 * SceneManager.js - Three.js Scene Setup and Management
 * Based on SPEC.md Section 5.3
 * 
 * Sets up the 3D scene with:
 * - Perspective camera with follow behavior
 * - HemisphereLight + DirectionalLight with shadows
 * - Ground with grid lines
 * - Boundary walls
 */

import * as THREE from 'three';
import { WORLD_CONFIG, COLLISION_CONFIG, MOVEMENT_CONFIG } from '../core/Game.js';

// Camera configuration from SPEC Section 1.5
const CAMERA_CONFIG = {
    fov: 60,
    near: 0.1,
    far: 1000,
    follow: {
        offset: new THREE.Vector3(0, 15, 15),
        lookAhead: 5,
        lerpFactor: 0.05
    }
};

// Lighting configuration from SPEC Section 1.2.2
const LIGHTING_CONFIG = {
    hemisphere: {
        skyColor: 0x87CEEB,
        groundColor: 0x228822,
        intensity: 0.6
    },
    directional: {
        color: 0xFFFFAA,
        intensity: 1.0,
        position: new THREE.Vector3(5, 10, 5)
    }
};

// Shadow configuration from SPEC Section 4.2
const SHADOW_CONFIG = {
    mapSize: 1024,
    camera: {
        near: 0.5,
        far: 50,
        left: -25,
        right: 25,
        top: 25,
        bottom: -25
    }
};

// Color palette from SPEC Section 1.4
const COLOR_PALETTE = {
    ground: 0x228822,
    gridLine: 0x114411,
    wall: 0x228822,
    wallTop: 0x2a772a
};

export class SceneManager {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        
        // Detect mobile for performance optimization
        this.isMobile = this.detectMobile();
        
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB);
        
        // Setup components
        this.setupRenderer();
        this.setupCamera();
        this.setupLighting();
        this.setupEnvironment();
        
        // Handle resize
        window.addEventListener('resize', this.onResize.bind(this));
        
        console.log(`[SceneManager] Initialized (mobile: ${this.isMobile})`);
    }

    /**
     * Detect mobile device
     */
    detectMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
               window.innerWidth < 768;
    }

    /**
     * Setup Three.js renderer
     */
    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: !this.isMobile,
            alpha: false,
            powerPreference: 'high-performance'
        });
        
        // Set size
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Set pixel ratio (cap at 1.5 for mobile, 2.0 for desktop - SPEC Section 4.4)
        const maxDPR = this.isMobile ? 1.5 : 2.0;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDPR));
        
        // Enable shadows
        this.renderer.shadowMap.enabled = true;
        // Use BasicShadowMap for mobile (faster), PCFSoftShadowMap for desktop (better quality)
        this.renderer.shadowMap.type = this.isMobile ? 
            THREE.BasicShadowMap : THREE.PCFSoftShadowMap;
        
        // Add canvas to container
        this.container.appendChild(this.renderer.domElement);
    }

    /**
     * Setup camera
     */
    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            CAMERA_CONFIG.fov,
            window.innerWidth / window.innerHeight,
            CAMERA_CONFIG.near,
            CAMERA_CONFIG.far
        );
        
        // Initial camera position
        this.camera.position.set(0, 20, 20);
        this.camera.lookAt(0, 0, 0);
        
        // Camera target for smooth follow
        this.cameraTarget = new THREE.Vector3();
    }

    /**
     * Setup lighting
     */
    setupLighting() {
        // Hemisphere light - SPEC Section 1.2.2
        this.hemisphereLight = new THREE.HemisphereLight(
            LIGHTING_CONFIG.hemisphere.skyColor,
            LIGHTING_CONFIG.hemisphere.groundColor,
            LIGHTING_CONFIG.hemisphere.intensity
        );
        this.scene.add(this.hemisphereLight);
        
        // Directional light with shadows - SPEC Section 1.2.2
        this.directionalLight = new THREE.DirectionalLight(
            LIGHTING_CONFIG.directional.color,
            LIGHTING_CONFIG.directional.intensity
        );
        this.directionalLight.position.copy(LIGHTING_CONFIG.directional.position);
        this.directionalLight.castShadow = true;
        
        // Shadow configuration
        this.directionalLight.shadow.mapSize.width = this.isMobile ? 512 : SHADOW_CONFIG.mapSize;
        this.directionalLight.shadow.mapSize.height = this.isMobile ? 512 : SHADOW_CONFIG.mapSize;
        
        // Shadow camera bounds
        this.directionalLight.shadow.camera.near = SHADOW_CONFIG.camera.near;
        this.directionalLight.shadow.camera.far = SHADOW_CONFIG.camera.far;
        this.directionalLight.shadow.camera.left = SHADOW_CONFIG.camera.left;
        this.directionalLight.shadow.camera.right = SHADOW_CONFIG.camera.right;
        this.directionalLight.shadow.camera.top = SHADOW_CONFIG.camera.top;
        this.directionalLight.shadow.camera.bottom = SHADOW_CONFIG.camera.bottom;
        
        this.scene.add(this.directionalLight);
        this.scene.add(this.directionalLight.target);
    }

    /**
     * Setup environment (ground, grid, walls)
     */
    setupEnvironment() {
        // Ground - SPEC Section 1.3.2
        this.createGround();
        
        // Grid lines
        this.createGridLines();
        
        // Boundary walls
        this.createBoundaryWalls();
        
        // Fog for depth
        this.scene.fog = new THREE.Fog(0x87CEEB, 50, 100);
    }

    /**
     * Create ground plane
     */
    createGround() {
        const groundSize = WORLD_CONFIG.size;
        
        // Ground geometry - SPEC Section 1.3.2 (PlaneBufferGeometry)
        const groundGeometry = new THREE.PlaneGeometry(groundSize, groundSize);
        
        // Ground material - SPEC Section 1.2.1 (MeshStandardMaterial with flatShading)
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: COLOR_PALETTE.ground,
            flatShading: true,
            roughness: 1.0
        });
        
        this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
        this.ground.rotation.x = -Math.PI / 2;
        this.ground.position.y = -0.05;
        this.ground.receiveShadow = true;
        this.scene.add(this.ground);
    }

    /**
     * Create grid lines on ground
     */
    createGridLines() {
        const gridSize = WORLD_CONFIG.size;
        const halfGrid = gridSize / 2;
        const cellSize = WORLD_CONFIG.cellSize;
        
        const points = [];
        
        // Create grid lines
        for (let i = -halfGrid; i <= halfGrid; i += cellSize) {
            // Vertical lines (along X axis)
            points.push(new THREE.Vector3(i, 0.01, -halfGrid));
            points.push(new THREE.Vector3(i, 0.01, halfGrid));
            
            // Horizontal lines (along Z axis)
            points.push(new THREE.Vector3(-halfGrid, 0.01, i));
            points.push(new THREE.Vector3(halfGrid, 0.01, i));
        }
        
        // Create line geometry
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        // Line material
        const material = new THREE.LineBasicMaterial({
            color: COLOR_PALETTE.gridLine,
            transparent: true,
            opacity: 0.5
        });
        
        this.gridLines = new THREE.LineSegments(geometry, material);
        this.scene.add(this.gridLines);
    }

    /**
     * Create boundary walls
     */
    createBoundaryWalls() {
        const wallHeight = 2;
        const wallThickness = 0.5;
        const gridSize = WORLD_CONFIG.size;
        const halfGrid = gridSize / 2;
        
        // Wall material
        const wallMaterial = new THREE.MeshStandardMaterial({
            color: COLOR_PALETTE.wall,
            flatShading: true,
            roughness: 1.0
        });
        
        // Wall top material (lighter)
        const wallTopMaterial = new THREE.MeshStandardMaterial({
            color: COLOR_PALETTE.wallTop,
            flatShading: true
        });
        
        // Wall positions
        const walls = [
            // North wall (-Z)
            { pos: [0, wallHeight / 2, -halfGrid], size: [gridSize, wallHeight, wallThickness] },
            // South wall (+Z)
            { pos: [0, wallHeight / 2, halfGrid], size: [gridSize, wallHeight, wallThickness] },
            // West wall (-X)
            { pos: [-halfGrid, wallHeight / 2, 0], size: [wallThickness, wallHeight, gridSize] },
            // East wall (+X)
            { pos: [halfGrid, wallHeight / 2, 0], size: [wallThickness, wallHeight, gridSize] }
        ];
        
        walls.forEach(({ pos, size }) => {
            // Main wall
            const geometry = new THREE.BoxGeometry(...size);
            const wall = new THREE.Mesh(geometry, wallMaterial);
            wall.position.set(...pos);
            wall.castShadow = true;
            wall.receiveShadow = true;
            this.scene.add(wall);
            
            // Top cap
            const capGeometry = new THREE.BoxGeometry(size[0], 0.2, size[2]);
            const cap = new THREE.Mesh(capGeometry, wallTopMaterial);
            cap.position.set(pos[0], wallHeight, pos[2]);
            this.scene.add(cap);
        });
        
        // Corner pillars
        const corners = [
            [-halfGrid, -halfGrid],
            [-halfGrid, halfGrid],
            [halfGrid, -halfGrid],
            [halfGrid, halfGrid]
        ];
        
        const pillarGeometry = new THREE.CylinderGeometry(0.4, 0.5, wallHeight + 0.5, 6);
        
        corners.forEach(([x, z]) => {
            const pillar = new THREE.Mesh(pillarGeometry, wallMaterial);
            pillar.position.set(x, (wallHeight + 0.5) / 2, z);
            pillar.castShadow = true;
            this.scene.add(pillar);
            
            // Pillar cap
            const capGeo = new THREE.CylinderGeometry(0.5, 0.4, 0.3, 6);
            const cap = new THREE.Mesh(capGeo, wallTopMaterial);
            cap.position.set(x, wallHeight + 0.6, z);
            this.scene.add(cap);
        });
    }

    /**
     * Update camera to follow target
     */
    updateCamera(targetPos, direction) {
        // Calculate target camera position
        const targetX = targetPos.x + CAMERA_CONFIG.follow.offset.x;
        const targetZ = targetPos.z + CAMERA_CONFIG.follow.offset.z;
        
        // Smooth interpolation
        const lerpFactor = CAMERA_CONFIG.follow.lerpFactor;
        this.camera.position.x += (targetX - this.camera.position.x) * lerpFactor;
        this.camera.position.z += (targetZ - this.camera.position.z) * lerpFactor;
        this.camera.position.y = CAMERA_CONFIG.follow.offset.y;
        
        // Look at point ahead of snake
        const lookAtX = targetPos.x + direction.x * CAMERA_CONFIG.follow.lookAhead;
        const lookAtZ = targetPos.z + direction.z * CAMERA_CONFIG.follow.lookAhead;
        
        this.camera.lookAt(lookAtX, 0, lookAtZ);
        
        // Update directional light to follow
        this.directionalLight.position.set(
            this.camera.position.x + 5,
            10,
            this.camera.position.z + 5
        );
        this.directionalLight.target.position.set(targetPos.x, 0, targetPos.z);
    }

    /**
     * Handle window resize
     */
    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    /**
     * Render the scene
     */
    render() {
        this.renderer.render(this.scene, this.camera);
    }

    /**
     * Get the scene
     */
    getScene() {
        return this.scene;
    }

    /**
     * Get the renderer
     */
    getRenderer() {
        return this.renderer;
    }

    /**
     * Get the camera
     */
    getCamera() {
        return this.camera;
    }
}
