// Snake Game V3 - Obstacles
import * as THREE from 'three';

export class Obstacle {
    constructor(scene) {
        this.scene = scene;
        this.obstacles = [];
        this.maxObstacles = 15;
        
        // Materials
        this.stumpMat = new THREE.MeshLambertMaterial({
            color: 0x886644,
            flatShading: true
        });
        
        this.stumpTopMat = new THREE.MeshLambertMaterial({
            color: 0xDDAA55,
            flatShading: true
        });
        
        this.rockMat = new THREE.MeshLambertMaterial({
            color: 0xAAAAAA,
            flatShading: true
        });
    }
    
    get items() {
        return this.obstacles;
    }
    
    get length() {
        return this.obstacles.length;
    }
    
    clear() {
        this.obstacles.forEach(obs => {
            this.scene.getScene().remove(obs.mesh);
        });
        this.obstacles = [];
    }
    
    spawn(snakeHead, snakeBody) {
        if (this.obstacles.length >= this.maxObstacles) return;
        
        let valid = false;
        let attempts = 0;
        let x, z;
        
        while (!valid && attempts < 100) {
            // Spawn within ±48 (matching COLLISION_CONFIG bounds)
            x = Math.floor(Math.random() * 96) - 48;
            z = Math.floor(Math.random() * 96) - 48;
            
            // Check distance from snake head
            const dxH = x - snakeHead.x;
            const dzH = z - snakeHead.z;
            const distH = Math.sqrt(dxH * dxH + dzH * dzH);
            
            if (distH < 5) {
                attempts++;
                continue;
            }
            
            // Check distance from snake body
            let collision = false;
            for (const seg of snakeBody) {
                const dx = x - seg.x;
                const dz = z - seg.z;
                const dist = Math.sqrt(dx * dx + dz * dz);
                if (dist < 2) {
                    collision = true;
                    break;
                }
            }
            
            // Check distance from other obstacles
            if (!collision) {
                for (const obs of this.obstacles) {
                    const dx = x - obs.position.x;
                    const dz = z - obs.position.z;
                    const dist = Math.sqrt(dx * dx + dz * dz);
                    if (dist < 3) {
                        collision = true;
                        break;
                    }
                }
            }
            
            if (!collision) {
                valid = true;
            }
            attempts++;
        }
        
        if (!valid) return;
        
        // Random type
        const type = Math.random() < 0.6 ? 'stump' : 'rock';
        const mesh = this.createObstacleMesh(type);
        mesh.position.set(x, 0, z);
        mesh.rotation.y = Math.random() * Math.PI * 2;
        
        this.scene.getScene().add(mesh);
        this.obstacles.push({
            type,
            position: { x, z },
            mesh
        });
    }
    
    createObstacleMesh(type) {
        const group = new THREE.Group();
        
        if (type === 'stump') {
            // Stump body
            const bodyGeo = new THREE.CylinderGeometry(0.8, 1.0, 1.2, 8);
            const body = new THREE.Mesh(bodyGeo, this.stumpMat);
            body.position.y = 0.6;
            body.castShadow = true;
            body.receiveShadow = true;
            group.add(body);
            
            // Stump top
            const topGeo = new THREE.CircleGeometry(0.8, 8);
            const top = new THREE.Mesh(topGeo, this.stumpTopMat);
            top.rotation.x = -Math.PI / 2;
            top.position.y = 1.21;
            top.receiveShadow = true;
            group.add(top);
            
            // Rings on top
            const ringGeo = new THREE.RingGeometry(0.2, 0.3, 8);
            const ringMat = new THREE.MeshBasicMaterial({ 
                color: 0xCC9944,
                side: THREE.DoubleSide
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = -Math.PI / 2;
            ring.position.y = 1.22;
            group.add(ring);
            
        } else {
            // Rock (dodecahedron)
            const rockGeo = new THREE.DodecahedronGeometry(0.6, 0);
            const rock = new THREE.Mesh(rockGeo, this.rockMat);
            rock.position.y = 0.5;
            rock.rotation.set(
                Math.random() * 0.5,
                Math.random() * Math.PI,
                Math.random() * 0.5
            );
            rock.castShadow = true;
            rock.receiveShadow = true;
            group.add(rock);
        }
        
        return group;
    }
    
    checkCollision(headPos) {
        const headRadius = 0.6;
        const obstacleRadius = 0.8;
        
        for (const obs of this.obstacles) {
            const dx = headPos.x - obs.position.x;
            const dz = headPos.z - obs.position.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            
            if (dist < headRadius + obstacleRadius) {
                return true;
            }
        }
        return false;
    }
    
    getObstacles() {
        return this.obstacles;
    }
}
