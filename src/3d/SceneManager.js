/**
 * SceneManager.js - Three.js Scene (Ultimate Visual Edition)
 * 
 * Full post-processing pipeline:
 * - UnrealBloomPass for neon glow
 * - Film grain for cinematic feel
 * - FXAA anti-aliasing
 * - ACES filmic tone mapping
 * - Ambient particle dust
 * - Dynamic camera with FOV effects
 */

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { FilmPass } from 'three/addons/postprocessing/FilmPass.js';
import { FXAAPass } from 'three/addons/postprocessing/FXAAPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { WORLD_CONFIG, COLLISION_CONFIG, MOVEMENT_CONFIG } from '../core/Game.js';

const CAMERA_CONFIG = {
    fov: 60,
    near: 0.1,
    far: 1000,
    follow: { offset: new THREE.Vector3(0, 16, 16), lookAhead: 5, lerpFactor: 0.08 },
    fovBoost: 5, // FOV increase when eating
    fovLerp: 0.05
};

const LIGHTING_CONFIG = {
    ambient: { color: 0x1a0a2e, intensity: 0.8 },
    hemisphere: { skyColor: 0x1a0533, groundColor: 0x0a1a0a, intensity: 0.4 },
    directional: { color: 0xFFE4C4, intensity: 2.0, position: new THREE.Vector3(20, 40, 20) },
    fill: { color: 0x4040FF, intensity: 0.4, position: new THREE.Vector3(-20, 15, -20) },
    snake: { color: 0x00ff88, intensity: 1.5 }
};

const ARENA_SIZE = 48;
const WALL_HEIGHT = 2.5;

export class SceneManager {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        this.isMobile = this.detectMobile();
        
        // Camera effects
        this.shakeIntensity = 0;
        this.shakeDecay = 0.9;
        this.shakeOffset = { x: 0, y: 0, z: 0 };
        this.currentFov = CAMERA_CONFIG.fov;
        this.targetFov = CAMERA_CONFIG.fov;
        
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x050510);
        
        this.setupRenderer();
        this.setupCamera();
        this.setupLighting();
        this.setupEnvironment();
        this.setupParticles();
        this.setupPostProcessing();
        
        window.addEventListener('resize', this.onResize.bind(this));
        console.log('[SceneManager] Ultimate Visual Edition initialized');
    }
    
    detectMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    }
    
    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: false, // We'll use FXAA instead
            alpha: false,
            powerPreference: 'high-performance',
            stencil: false,
            depth: true
        });
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        const maxDPR = this.isMobile ? 1.5 : 2.0;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDPR));
        
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.shadowMap.radius = 4;
        
        // Tone mapping for filmic colors
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.3;
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
        this.camera.position.set(0, 16, 16);
        this.camera.lookAt(0, 0, 0);
        this.cameraTarget = new THREE.Vector3();
    }
    
    setupLighting() {
        // Ambient - deep purple for atmosphere
        this.ambientLight = new THREE.AmbientLight(LIGHTING_CONFIG.ambient.color, LIGHTING_CONFIG.ambient.intensity);
        this.scene.add(this.ambientLight);
        
        // Hemisphere - purple sky, green ground
        this.hemiLight = new THREE.HemisphereLight(
            LIGHTING_CONFIG.hemisphere.skyColor,
            LIGHTING_CONFIG.hemisphere.groundColor,
            LIGHTING_CONFIG.hemisphere.intensity
        );
        this.scene.add(this.hemiLight);
        
        // Main directional (warm sun)
        this.sunLight = new THREE.DirectionalLight(LIGHTING_CONFIG.directional.color, LIGHTING_CONFIG.directional.intensity);
        this.sunLight.position.copy(LIGHTING_CONFIG.directional.position);
        this.sunLight.castShadow = true;
        
        const shadowSize = this.isMobile ? 512 : 1024;
        this.sunLight.shadow.mapSize.width = shadowSize;
        this.sunLight.shadow.mapSize.height = shadowSize;
        this.sunLight.shadow.camera.near = 1;
        this.sunLight.shadow.camera.far = 150;
        this.sunLight.shadow.camera.left = -60;
        this.sunLight.shadow.camera.right = 60;
        this.sunLight.shadow.camera.top = 60;
        this.sunLight.shadow.camera.bottom = -60;
        this.sunLight.shadow.bias = -0.001;
        this.scene.add(this.sunLight);
        this.scene.add(this.sunLight.target);
        
        // Fill light (blue from opposite side)
        this.fillLight = new THREE.DirectionalLight(LIGHTING_CONFIG.fill.color, LIGHTING_CONFIG.fill.intensity);
        this.fillLight.position.copy(LIGHTING_CONFIG.fill.position);
        this.scene.add(this.fillLight);
        
        // Snake tracking light (follows snake head, added dynamically)
        this.snakeLight = new THREE.PointLight(LIGHTING_CONFIG.snake.color, 0, 15);
        this.snakeLight.position.set(0, 5, 0);
        this.scene.add(this.snakeLight);
    }
    
    setupEnvironment() {
        this.createGround();
        this.createGridLines();
        this.createBoundaryWalls();
        this.createBoundaryGlow();
        this.createSkybox();
        this.createFog();
    }
    
    createSkybox() {
        // Gradient sky using a large sphere
        const skyGeo = new THREE.SphereGeometry(200, 32, 32);
        const skyMat = new THREE.ShaderMaterial({
            uniforms: {
                topColor: { value: new THREE.Color(0x0a0020) },
                bottomColor: { value: new THREE.Color(0x050510) },
                offset: { value: 20 },
                exponent: { value: 0.6 }
            },
            vertexShader: `
                varying vec3 vWorldPosition;
                void main() {
                    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPosition.xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 topColor;
                uniform vec3 bottomColor;
                uniform float offset;
                uniform float exponent;
                varying vec3 vWorldPosition;
                void main() {
                    float h = normalize(vWorldPosition + offset).y;
                    gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
                }
            `,
            side: THREE.BackSide,
            depthWrite: false
        });
        
        const sky = new THREE.Mesh(skyGeo, skyMat);
        this.scene.add(sky);
        
        // Add distant stars as points
        const starGeo = new THREE.BufferGeometry();
        const starCount = 500;
        const starPositions = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI * 0.5; // Only upper hemisphere
            const r = 150 + Math.random() * 30;
            starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            starPositions[i * 3 + 1] = r * Math.cos(phi) + 20;
            starPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
        }
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, transparent: true, opacity: 0.6 });
        const stars = new THREE.Points(starGeo, starMat);
        this.scene.add(stars);
    }
    
    createFog() {
        // Exponential fog for depth
        this.scene.fog = new THREE.FogExp2(0x050510, 0.008);
    }
    
    createGround() {
        const groundSize = WORLD_CONFIG.size;
        
        // Ground with vertex noise
        const groundGeo = new THREE.PlaneGeometry(groundSize, groundSize, 100, 100);
        const positions = groundGeo.attributes.position;
        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);
            const distFromCenter = Math.sqrt(x*x + y*y) / (groundSize / 2);
            const flatZone = Math.max(0, 1 - distFromCenter * 1.5);
            const bump = (Math.sin(x * 0.5) * Math.cos(y * 0.5) * 0.25 +
                         Math.sin(x * 1.2 + y * 0.8) * 0.12 +
                         Math.sin(x * 3 + y * 2) * 0.05) * (1 - flatZone);
            positions.setZ(i, bump);
        }
        groundGeo.computeVertexNormals();
        
        // Rich PBR ground material
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x0a2a0a,
            roughness: 0.95,
            metalness: 0.0,
            envMapIntensity: 0.5
        });
        
        this.ground = new THREE.Mesh(groundGeo, groundMat);
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
        
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const mat = new THREE.LineBasicMaterial({
            color: 0x00ff44,
            transparent: true,
            opacity: 0.08
        });
        this.gridLines = new THREE.LineSegments(geo, mat);
        this.scene.add(this.gridLines);
    }
    
    createBoundaryWalls() {
        const halfGrid = ARENA_SIZE;
        
        // Glowing glass wall material
        const wallMat = new THREE.MeshPhysicalMaterial({
            color: 0x00ff44,
            emissive: 0x00ff44,
            emissiveIntensity: 0.15,
            metalness: 0.0,
            roughness: 0.1,
            transmission: 0.6,
            thickness: 0.8,
            transparent: true,
            opacity: 0.4
        });
        
        const walls = [
            { pos: [0, WALL_HEIGHT / 2, -halfGrid], size: [halfGrid * 2, WALL_HEIGHT, 0.4] },
            { pos: [0, WALL_HEIGHT / 2, halfGrid], size: [halfGrid * 2, WALL_HEIGHT, 0.4] },
            { pos: [-halfGrid, WALL_HEIGHT / 2, 0], size: [0.4, WALL_HEIGHT, halfGrid * 2] },
            { pos: [halfGrid, WALL_HEIGHT / 2, 0], size: [0.4, WALL_HEIGHT, halfGrid * 2] }
        ];
        
        walls.forEach(({ pos, size }) => {
            const geo = new THREE.BoxGeometry(...size);
            const wall = new THREE.Mesh(geo, wallMat);
            wall.position.set(...pos);
            wall.castShadow = false;
            wall.receiveShadow = true;
            this.scene.add(wall);
        });
        
        // Corner pillars with glow
        const corners = [[-halfGrid, -halfGrid], [-halfGrid, halfGrid], [halfGrid, -halfGrid], [halfGrid, halfGrid]];
        const pillarMat = new THREE.MeshStandardMaterial({
            color: 0x00ff88, emissive: 0x00ff88, emissiveIntensity: 0.8,
            metalness: 0.3, roughness: 0.4
        });
        
        corners.forEach(([x, z]) => {
            const pillarGeo = new THREE.CylinderGeometry(0.5, 0.6, WALL_HEIGHT + 0.5, 8);
            const pillar = new THREE.Mesh(pillarGeo, pillarMat);
            pillar.position.set(x, (WALL_HEIGHT + 0.5) / 2, z);
            pillar.castShadow = true;
            this.scene.add(pillar);
        });
    }
    
    createBoundaryGlow() {
        const radius = ARENA_SIZE - 0.5;
        const segments = 128;
        
        // Inner glow ring
        const innerPoints = [];
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            innerPoints.push(new THREE.Vector3(Math.cos(angle) * radius, 0.1, Math.sin(angle) * radius));
        }
        const innerGeo = new THREE.BufferGeometry().setFromPoints(innerPoints);
        const innerMat = new THREE.LineBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.7 });
        this.scene.add(new THREE.Line(innerGeo, innerMat));
        
        // Outer glow ring
        const outerPoints = [];
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            outerPoints.push(new THREE.Vector3(Math.cos(angle) * (radius + 2), 0.1, Math.sin(angle) * (radius + 2)));
        }
        const outerGeo = new THREE.BufferGeometry().setFromPoints(outerPoints);
        const outerMat = new THREE.LineBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.2 });
        this.scene.add(new THREE.Line(outerGeo, outerMat));
    }
    
    setupParticles() {
        // Ambient floating dust particles
        const dustCount = this.isMobile ? 100 : 200;
        const dustGeo = new THREE.BufferGeometry();
        const dustPositions = new Float32Array(dustCount * 3);
        const dustSizes = new Float32Array(dustCount);
        
        for (let i = 0; i < dustCount; i++) {
            dustPositions[i * 3] = (Math.random() - 0.5) * 100;
            dustPositions[i * 3 + 1] = Math.random() * 20;
            dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
            dustSizes[i] = Math.random() * 0.3 + 0.1;
        }
        
        dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
        dustGeo.setAttribute('size', new THREE.BufferAttribute(dustSizes, 1));
        
        const dustMat = new THREE.PointsMaterial({
            color: 0x88ffcc,
            size: 0.15,
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        
        this.dustParticles = new THREE.Points(dustGeo, dustMat);
        this.scene.add(this.dustParticles);
        this.dustTime = 0;
    }
    
    setupPostProcessing() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.composer = new EffectComposer(this.renderer);
        
        // Base render pass
        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);
        
        // Bloom pass for neon glow - KEY for the visual look
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(width, height),
            1.5,   // strength - high for neon glow
            0.4,   // radius
            0.85   // threshold - only bright things glow
        );
        this.bloomPass = bloomPass;
        this.composer.addPass(bloomPass);
        
        // Film grain for cinematic feel
        const filmPass = new FilmPass(0.3); // noise intensity
        this.filmPass = filmPass;
        this.composer.addPass(filmPass);
        
        // FXAA for smoother edges
        if (!this.isMobile) {
            const fxaaPass = new FXAAPass(width, height);
            this.composer.addPass(fxaaPass);
        }
        
        // Output pass (color space)
        const outputPass = new OutputPass();
        this.composer.addPass(outputPass);
    }
    
    updateCamera(targetPos, direction) {
        // Apply camera shake
        if (this.shakeIntensity > 0.005) {
            this.shakeOffset.x = (Math.random() - 0.5) * this.shakeIntensity;
            this.shakeOffset.y = (Math.random() - 0.5) * this.shakeIntensity * 0.5;
            this.shakeOffset.z = (Math.random() - 0.5) * this.shakeIntensity;
            this.shakeIntensity *= this.shakeDecay;
        } else {
            this.shakeOffset.x = 0;
            this.shakeOffset.y = 0;
            this.shakeOffset.z = 0;
        }
        
        // Smooth FOV transition
        this.currentFov += (this.targetFov - this.currentFov) * CAMERA_CONFIG.fovLerp;
        this.camera.fov = this.currentFov;
        this.camera.updateProjectionMatrix();
        
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
        
        // Update sun light to follow
        this.sunLight.position.set(this.camera.position.x + 15, 30, this.camera.position.z + 15);
        this.sunLight.target.position.set(targetPos.x, 0, targetPos.z);
        
        // Update snake light position
        this.snakeLight.position.set(targetPos.x, 3, targetPos.z);
    }
    
    triggerShake(intensity = 0.4) {
        this.shakeIntensity = intensity;
    }
    
    boostFov() {
        this.targetFov = CAMERA_CONFIG.fov + CAMERA_CONFIG.fovBoost;
    }
    
    resetFov() {
        this.targetFov = CAMERA_CONFIG.fov;
    }
    
    updateBloomStrength(strength) {
        if (this.bloomPass) {
            this.bloomPass.strength = strength;
        }
    }
    
    updateParticles(deltaTime) {
        this.dustTime += deltaTime;
        if (this.dustParticles) {
            const positions = this.dustParticles.geometry.attributes.position.array;
            const count = positions.length / 3;
            for (let i = 0; i < count; i++) {
                positions[i * 3 + 1] += Math.sin(this.dustTime * 0.001 + i) * 0.002;
                if (positions[i * 3 + 1] > 20) positions[i * 3 + 1] = 0;
            }
            this.dustParticles.geometry.attributes.position.needsUpdate = true;
        }
    }
    
    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.composer.setSize(window.innerWidth, window.innerHeight);
    }
    
    render() {
        this.composer.render();
    }
    
    getScene() { return this.scene; }
    getRenderer() { return this.renderer; }
    getCamera() { return this.camera; }
}
