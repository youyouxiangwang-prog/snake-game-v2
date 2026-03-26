// Snake Game V3 - Environment (Ground & Sky)
import * as THREE from 'three';

export class Environment {
    constructor(scene) {
        this.scene = scene;
        this.ground = null;
        this.walls = [];
        this.wallHeight = 2;
        
        this.createGround();
        this.createBoundaryWalls();
        this.createSkybox();
    }
    
    createGround() {
        const WORLD_CONFIG = {
            size: 100,
            cellSize: 1
        };
        
        const GROUND_CONFIG = {
            color: 0x4ade80,  // Green from SPEC
            flatShading: true
        };
        
        // Ground geometry
        const groundGeo = new THREE.PlaneGeometry(100, 100, 50, 50);
        
        // Apply height variation for low-poly effect
        const positions = groundGeo.attributes.position;
        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);
            const distFromCenter = Math.sqrt(x*x + y*y) / 50;
            positions.setZ(i, Math.sin(x * 0.3) * Math.cos(y * 0.3) * 0.1 * Math.min(1, distFromCenter));
        }
        groundGeo.computeVertexNormals();
        
        const groundMat = new THREE.MeshLambertMaterial({
            color: GROUND_CONFIG.color,
            flatShading: GROUND_CONFIG.flatShading
        });
        
        this.ground = new THREE.Mesh(groundGeo, groundMat);
        this.ground.rotation.x = -Math.PI / 2;
        this.ground.position.y = -0.1;
        this.ground.receiveShadow = true;
        this.scene.add(this.ground);
        
        // Arena boundary ring marker
        const ringGeo = new THREE.RingGeometry(48, 48.5, 4);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0x225522,
            side: THREE.DoubleSide
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.01;
        this.scene.add(ring);
    }
    
    createBoundaryWalls() {
        const size = 48; // Half of 100, minus padding
        const height = this.wallHeight;
        const thickness = 0.8;
        
        const wallMat = new THREE.MeshLambertMaterial({
            color: 0x1a551a,
            flatShading: true
        });
        
        const topMat = new THREE.MeshLambertMaterial({
            color: 0x2a772a,
            flatShading: true
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
            this.walls.push(wall);
            
            const capGeo = new THREE.BoxGeometry(w, 0.2, d);
            const cap = new THREE.Mesh(capGeo, topMat);
            cap.position.set(x, h, z);
            this.scene.add(cap);
        });
        
        // Corner pillars
        const corners = [
            [-size, -size], [-size, size], [size, -size], [size, size]
        ];
        
        corners.forEach(([x, z]) => {
            const pillarGeo = new THREE.CylinderGeometry(0.4, 0.5, height + 0.5, 6);
            const pillar = new THREE.Mesh(pillarGeo, wallMat);
            pillar.position.set(x, (height + 0.5) / 2, z);
            pillar.castShadow = true;
            this.scene.add(pillar);
            
            const capGeo = new THREE.CylinderGeometry(0.5, 0.4, 0.3, 6);
            const cap = new THREE.Mesh(capGeo, topMat);
            cap.position.set(x, height + 0.6, z);
            this.scene.add(cap);
        });
    }
    
    createSkybox() {
        // Simple fog-based sky effect
        this.scene.fog = new THREE.Fog(0x0f172a, 40, 80);
    }
}
