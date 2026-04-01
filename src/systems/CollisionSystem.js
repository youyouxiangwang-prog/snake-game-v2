/**
 * CollisionSystem.js - AABB Collision Detection
 * Based on SPEC.md Section 2.3
 * 
 * Handles all collision detection:
 * - Wall collisions
 * - Self collisions
 * - Food collisions
 * - Obstacle collisions
 */

import { COLLISION_CONFIG, WORLD_CONFIG } from '../core/Game.js';

export class CollisionSystem {
    constructor(snake, food, obstacles) {
        this.snake = snake;
        this.food = food;
        this.obstacles = obstacles;
        
        console.log('[CollisionSystem] Initialized');
    }

    /**
     * Check AABB collision between two positions
     * Based on SPEC Section 2.3.1
     */
    checkAABBCollision(pos1, size1, pos2, size2) {
        const halfSize1 = size1 / 2;
        const halfSize2 = size2 / 2;
        
        return (
            pos1.x - halfSize1 < pos2.x + halfSize2 &&
            pos1.x + halfSize1 > pos2.x - halfSize2 &&
            pos1.z - halfSize1 < pos2.z + halfSize2 &&
            pos1.z + halfSize1 > pos2.z - halfSize2
        );
    }

    /**
     * Check wall collision for snake head
     * Returns true if snake hit the wall
     */
    checkWallCollision(headPosition) {
        const bounds = COLLISION_CONFIG.bounds;
        
        return (
            headPosition.x < bounds.minX ||
            headPosition.x > bounds.maxX ||
            headPosition.z < bounds.minZ ||
            headPosition.z > bounds.maxZ
        );
    }

    /**
     * Check self collision for snake
     * Returns true if snake collided with itself
     */
    checkSelfCollision() {
        return this.snake.checkSelfCollision();
    }

    /**
     * Check food collision
     * Returns true if snake ate food
     */
    checkFoodCollision(headPosition) {
        const eatDistance = COLLISION_CONFIG.eatDistance;
        
        const foods = this.food.foods;
        
        for (let i = foods.length - 1; i >= 0; i--) {
            const food = foods[i];
            const dx = headPosition.x - food.position.x;
            const dz = headPosition.z - food.position.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            
            if (dist < eatDistance) {
                // Store eaten position for effects before removing
                this.food.lastEatenPosition = { 
                    x: food.position.x, 
                    y: food.position.y, 
                    z: food.position.z 
                };
                // Remove the food
                this.food.scene.remove(food.mesh);
                if (food.light) this.food.scene.remove(food.light);
                foods.splice(i, 1);
                return true;
            }
        }
        
        return false;
    }

    /**
     * Check obstacle collision
     * Returns true if snake hit an obstacle
     */
    checkObstacleCollision(headPosition) {
        const headRadius = COLLISION_CONFIG.headRadius;
        
        const obstacles = this.obstacles.obstacles;
        
        for (const obstacle of obstacles) {
            const dx = headPosition.x - obstacle.position.x;
            const dz = headPosition.z - obstacle.position.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            
            if (dist < headRadius + obstacle.radius) {
                return true;
            }
        }
        
        return false;
    }

    /**
     * Check all collisions at once
     * Returns object with collision results
     */
    checkAllCollisions(headPosition) {
        const result = {
            wall: false,
            self: false,
            food: false,
            obstacle: false
        };
        
        result.wall = this.checkWallCollision(headPosition);
        result.self = this.checkSelfCollision();
        result.food = this.checkFoodCollision(headPosition);
        result.obstacle = this.checkObstacleCollision(headPosition);
        
        return result;
    }

    /**
     * Calculate distance between two 2D points
     */
    distance2D(pos1, pos2) {
        const dx = pos1.x - pos2.x;
        const dz = pos1.z - pos2.z;
        return Math.sqrt(dx * dx + dz * dz);
    }

    /**
     * Check if position is within bounds
     */
    isWithinBounds(position) {
        const bounds = COLLISION_CONFIG.bounds;
        return (
            position.x >= bounds.minX &&
            position.x <= bounds.maxX &&
            position.z >= bounds.minZ &&
            position.z <= bounds.maxZ
        );
    }
}
