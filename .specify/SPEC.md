# Snake V3 - 真3D贪食蛇游戏 技术规范

**版本**: 3.0.0  
**日期**: 2026-03-27  
**状态**: Phase 1 - 技术规范  
**引擎**: Three.js (WebGL)  
**目标平台**: Web (Desktop + Mobile)

---

## 目录

1. [视觉设计规范](#1-视觉设计规范)
2. [游戏机制规范](#2-游戏机制规范)
3. [用户界面与交互规范](#3-用户界面与交互规范)
4. [性能优化规范](#4-性能优化规范)
5. [系统架构规范](#5-系统架构规范)
6. [技术规格汇总](#6-技术规格汇总)
7. [验收标准](#7-验收标准)

---

## 1. 视觉设计规范

### 1.1 艺术风格定位

**主题**: 低多边形复古风格 (Low-poly Retro)
**参考**: 90年代末/2000年代初3D游戏美学，参考 Crossy Road、Monument Valley

| 特征 | 规格 |
|------|------|
| 多边形数量 | 每个物体 ≤500 triangles |
| 着色方式 | `flatShading: true` 强制平面着色 |
| 纹理 | 无纹理贴图，纯纯色 + 光照 |
| 线条 | 无描边，保持几何棱角 |

### 1.2 材质与光照

#### 1.2.1 材质规格

```typescript
// 低多边形材质配置
const LOW_POLY_MATERIAL_CONFIG = {
    snake: {
        head: new THREE.MeshStandardMaterial({
            color: 0xFFCC00,      // 亮黄色
            flatShading: true,
            roughness: 0.8,
            metalness: 0.1
        }),
        body: new THREE.MeshStandardMaterial({
            color: 0xE6B800,      // 深黄色
            flatShading: true,
            roughness: 0.9,
            metalness: 0.0
        })
    },
    food: {
        apple: new THREE.MeshStandardMaterial({
            color: 0xFF3333,       // 红色
            flatShading: true,
            roughness: 0.6,
            metalness: 0.1
        })
    },
    obstacles: {
        stump: new THREE.MeshStandardMaterial({
            color: 0x886644,       // 棕色
            flatShading: true,
            roughness: 1.0
        }),
        rock: new THREE.MeshStandardMaterial({
            color: 0xAAAAAA,       // 灰色
            flatShading: true,
            roughness: 1.0
        })
    }
};
```

#### 1.2.2 光照系统

```typescript
// 光照配置 - 半球光 + 方向光
const LIGHTING_CONFIG = {
    hemisphere: {
        type: 'HemisphereLight',
        skyColor: 0x87CEEB,       // 天蓝色
        groundColor: 0x228822,    // 地面绿色
        intensity: 0.6
    },
    directional: {
        type: 'DirectionalLight',
        color: 0xFFFFAA,          // 暖白色
        intensity: 1.0,
        position: new THREE.Vector3(5, 10, 5),
        castShadow: true,
        shadow: {
            mapSize: { width: 1024, height: 1024 },  // 最大 1024x1024
            camera: {
                near: 0.5,
                far: 50,
                left: -25,
                right: 25,
                top: 25,
                bottom: -25
            }
        }
    }
};
```

**注意**:
- 使用 `MeshStandardMaterial` + `flatShading: true` 实现低多边形效果
- 方向光阴影贴图尺寸 **不得超过 1024x1024**
- PCF 阴影滤镜 **仅在桌面端使用**，移动端禁用

### 1.3 几何体规格

#### 1.3.1 BufferGeometry 要求

**强制使用**:
- `THREE.BufferGeometry` (所有几何体)
- `THREE.BoxBufferGeometry` (蛇身段、障碍物)
- `THREE.SphereBufferGeometry` (食物、眼球)
- `THREE.CylinderBufferGeometry` (树桩)
- `THREE.PlaneBufferGeometry` (地面)
- `THREE.DodecahedronBufferGeometry` (石块)

**禁止使用**:
- `THREE.Geometry` (已废弃)
- 每帧创建新几何体

#### 1.3.2 物体规格

| 物体 | 几何体 | 尺寸 | 段数/面数 |
|------|--------|------|-----------|
| 蛇头 | CylinderBufferGeometry | topRadius: 0.6, bottomRadius: 0.7, height: 0.8 | radialSegments: 8 |
| 蛇身段 | CylinderBufferGeometry 或 SphereBufferGeometry | radius: 0.5, height: 0.6 | radialSegments: 8 |
| 眼球 | SphereBufferGeometry | radius: 0.15 | segmentsWidth: 8, segmentsHeight: 6 |
| 舌头 | 自定义 BufferGeometry (两个三角形) | length: 0.5-1.5 | 动态 |
| 食物(苹果) | SphereBufferGeometry | radius: 0.4 | segments: 8 |
| 地面 | PlaneBufferGeometry | 100x100 units | 无细分 |
| 网格线 | LineSegments + BufferGeometry | 100x100, 1-unit cells | - |
| 围墙 | BoxBufferGeometry | thickness: 0.5, height: 2 | - |
| 树桩 | CylinderBufferGeometry | topRadius: 0.8, bottomRadius: 1.0, height: 1.5 | radialSegments: 8 |
| 石块 | DodecahedronBufferGeometry | radius: 0.6 | detail: 0 |

### 1.4 颜色系统

```typescript
const COLOR_PALETTE = {
    // 蛇 - 低多边形黄色系 (3色)
    snake: {
        head: 0xFFCC00,     // 亮黄
        body: 0xE6B800,     // 深黄
        belly: 0xFFE066,    // 淡黄
        tongue: 0xFF3333,   // 红色舌头
        eye: 0xFFFFFF,      // 白色
        pupil: 0x000000    // 黑色
    },
    
    // 食物 - 红色系 (1色)
    food: {
        apple: 0xFF3333,    // 红色
        stem: 0x664422,    // 棕色茎
        leaf: 0x44CC44     // 绿色叶
    },
    
    // 环境 - 绿色系 (2色)
    environment: {
        ground: 0x228822,   // 草地绿
        gridLine: 0x114411, // 深绿网格
        wall: 0x228822      // 围墙绿
    },
    
    // 障碍物 (2色)
    obstacles: {
        stumpTop: 0xDDAA55,  // 橙黄
        stumpSide: 0x886644, // 棕色
        rock: 0xAAAAAA      // 灰色
    },
    
    // UI (不限但建议 3-5 色)
    ui: {
        background: 'rgba(0, 0, 0, 0.7)',
        text: '#FFFFFF',
        score: '#FFD700',    // 金色
        accent: '#00FFFF',   // 青色
        danger: '#FF3366'    // 红色
    }
};
```

### 1.5 相机系统

#### 1.5.1 跟随相机配置

```typescript
const CAMERA_CONFIG = {
    type: 'PerspectiveCamera',
    fov: 60,
    near: 0.1,
    far: 1000,
    
    // 跟随参数
    follow: {
        offset: new THREE.Vector3(0, 15, 15),  // 固定偏移量
        lookAhead: 5,                          // 前方看多远
        lerpFactor: 0.05,                      // 插值系数 (0.05-0.08)
        damping: true
    },
    
    // 边界限制
    bounds: {
        minX: -50, maxX: 50,
        minZ: -50, maxZ: 50
    }
};
```

**相机更新算法**:

```typescript
// 相机跟随蛇头，带阻尼
function updateCamera(deltaTime) {
    const head = snake.head.position;
    const direction = snake.direction; // THREE.Vector3
    
    // 目标位置 = 蛇头位置 + 偏移
    const targetX = head.x + CAMERA_CONFIG.follow.offset.x;
    const targetZ = head.z + CAMERA_CONFIG.follow.offset.z;
    
    // 平滑插值 (lerp)
    const lerpFactor = CAMERA_CONFIG.follow.lerpFactor;
    camera.position.x += (targetX - camera.position.x) * lerpFactor;
    camera.position.y += (CAMERA_CONFIG.follow.offset.y - camera.position.y) * lerpFactor;
    camera.position.z += (targetZ - camera.position.z) * lerpFactor;
    
    // 相机朝向：蛇头前方
    const lookAtX = head.x + direction.x * CAMERA_CONFIG.follow.lookAhead;
    const lookAtZ = head.z + direction.z * CAMERA_CONFIG.follow.lookAhead;
    camera.lookAt(lookAtX, 0, lookAtZ);
}
```

---

## 2. 游戏机制规范

### 2.1 游戏世界规格

```typescript
const WORLD_CONFIG = {
    grid: {
        width: 100,       // 100 单位宽
        height: 100,      // 100 单位高
        cellSize: 1       // 每格 1 单位
    },
    boundary: {
        enabled: true,    // 启用围墙
        height: 2,        // 围墙高度 2 单位
        thickness: 0.5    // 围墙厚度
    },
    startPosition: {
        x: 0,
        z: 0
    },
    initialSnakeLength: 5
};
```

### 2.2 移动系统

#### 2.2.1 网格对齐移动

```typescript
const MOVEMENT_CONFIG = {
    // 网格对齐移动 (snake只能在格子上移动)
    gridAligned: true,
    
    // 移动方向
    directions: {
        UP: { x: 0, z: -1 },
        DOWN: { x: 0, z: 1 },
        LEFT: { x: -1, z: 0 },
        RIGHT: { x: 1, z: 0 }
    },
    
    // tick 率 (游戏逻辑更新频率)
    tickRate: {
        normal: 15,        // 正常速度: 15 Hz (每 66.67ms 移动一次)
        fast: 20,         // 快速: 20 Hz
        slow: 10          // 慢速: 10 Hz
    },
    
    // 每 tick 移动距离
    moveDistance: 1      // 每次 tick 移动 1 格
};
```

#### 2.2.2 蛇身跟随算法 (Trail Method)

```typescript
// 蛇身段跟随算法 - 每段跟随前一节
class SnakeSegment {
    constructor(position) {
        this.position = position.clone();      // 当前位置
        this.targetPosition = position.clone(); // 目标位置
        this.mesh = null;
    }
    
    update(followTarget, deltaTime) {
        // 设置目标位置为前一段的当前位置
        this.targetPosition.copy(followTarget.position);
        
        // 平滑插值到目标位置
        const followFactor = 0.3;  // 跟随系数
        this.position.lerp(this.targetPosition, followFactor);
        
        // 更新网格位置 (用于碰撞检测)
        this.gridX = Math.round(this.position.x);
        this.gridZ = Math.round(this.position.z);
        
        // 更新3D位置和旋转
        if (this.mesh) {
            this.mesh.position.copy(this.position);
            
            // 旋转朝向移动方向
            const direction = new THREE.Vector3()
                .subVectors(this.targetPosition, this.position)
                .normalize();
            
            if (direction.length() > 0.01) {
                const angle = Math.atan2(direction.x, direction.z);
                this.mesh.rotation.y = angle;
            }
        }
    }
}

// 游戏 tick 时更新蛇头，蛇身自动跟随
function updateSnake(deltaTime) {
    // 蛇头根据输入移动到新位置
    if (inputQueue.length > 0) {
        const nextDirection = inputQueue.shift();
        if (isValidDirection(nextDirection)) {
            snake.direction = nextDirection;
        }
    }
    
    // 蛇头移动
    const head = snake.segments[0];
    head.targetPosition.set(
        head.gridX + snake.direction.x * MOVEMENT_CONFIG.moveDistance,
        0.5,
        head.gridZ + snake.direction.z * MOVEMENT_CONFIG.moveDistance
    );
    head.gridX = head.targetPosition.x;
    head.gridZ = head.targetPosition.z;
    head.position.copy(head.targetPosition);
    
    // 每节身体跟随前一节
    for (let i = 1; i < snake.segments.length; i++) {
        snake.segments[i].update(snake.segments[i - 1], deltaTime);
    }
}
```

### 2.3 碰撞检测系统

#### 2.3.1 AABB 碰撞检测 (墙壁/障碍物/自身)

```typescript
// AABB (Axis-Aligned Bounding Box) 碰撞检测
function checkAABBCollision(pos1, size1, pos2, size2) {
    const halfSize1 = size1 / 2;
    const halfSize2 = size2 / 2;
    
    return (
        pos1.x - halfSize1 < pos2.x + halfSize2 &&
        pos1.x + halfSize1 > pos2.x - halfSize2 &&
        pos1.z - halfSize1 < pos2.z + halfSize2 &&
        pos1.z + halfSize1 > pos2.z - halfSize2
    );
}

// 墙壁碰撞检测
function checkWallCollision(headPosition) {
    const bounds = WORLD_CONFIG.boundary;
    const halfGrid = WORLD_CONFIG.grid.width / 2;
    
    return (
        headPosition.x < -halfGrid + 1 ||
        headPosition.x > halfGrid - 1 ||
        headPosition.z < -halfGrid + 1 ||
        headPosition.z > halfGrid - 1
    );
}

// 自身碰撞检测 (排除头部和尾巴)
function checkSelfCollision(headPosition, snakeSegments) {
    const headSize = 0.6;  // 蛇头半径
    const bodySize = 0.5;  // 蛇身半径
    
    // 从第4节开始检测 (避免与蛇头附近误检)
    for (let i = 3; i < snakeSegments.length - 1; i++) {
        const segment = snakeSegments[i];
        const distance = Math.sqrt(
            Math.pow(headPosition.x - segment.position.x, 2) +
            Math.pow(headPosition.z - segment.position.z, 2)
        );
        
        if (distance < headSize + bodySize) {
            return true;  // 碰撞
        }
    }
    return false;
}

// 食物碰撞检测 (球体测试)
function checkFoodCollision(headPosition, foodPosition) {
    const eatDistance = 0.8;  // 吃到食物的距离
    
    const distance = Math.sqrt(
        Math.pow(headPosition.x - foodPosition.x, 2) +
        Math.pow(headPosition.z - foodPosition.z, 2)
    );
    
    return distance < eatDistance;
}
```

#### 2.3.2 障碍物碰撞

```typescript
// 障碍物碰撞检测
function checkObstacleCollision(headPosition, obstacles) {
    const headRadius = 0.6;
    
    for (const obstacle of obstacles) {
        const obstacleRadius = obstacle.radius || 0.6;
        const distance = Math.sqrt(
            Math.pow(headPosition.x - obstacle.position.x, 2) +
            Math.pow(headPosition.z - obstacle.position.z, 2)
        );
        
        if (distance < headRadius + obstacleRadius) {
            return true;
        }
    }
    return false;
}
```

### 2.4 食物系统

#### 2.4.1 食物生成

```typescript
const FOOD_CONFIG = {
    spawnInterval: 3000,      // 每 3 秒检查是否需要生成新食物
    maxFoodCount: 3,          // 最多同时存在 3 个食物
    eatDistance: 0.8,         // 吃到的距离
    scoreValue: 10            // 每个食物 10 分
};

function spawnFood() {
    const gridWidth = WORLD_CONFIG.grid.width;
    const halfGrid = gridWidth / 2;
    
    let newPosition;
    let attempts = 0;
    const maxAttempts = 100;
    
    do {
        // 随机位置 (避开围墙边缘)
        newPosition = {
            x: Math.floor(Math.random() * (gridWidth - 4)) - halfGrid + 2,
            z: Math.floor(Math.random() * (gridWidth - 4)) - halfGrid + 2
        };
        attempts++;
    } while (isPositionOccupied(newPosition) && attempts < maxAttempts);
    
    // 创建食物对象
    const food = {
        position: new THREE.Vector3(newPosition.x, 0.4, newPosition.z),
        gridX: newPosition.x,
        gridZ: newPosition.z,
        mesh: createAppleMesh()
    };
    
    food.mesh.position.copy(food.position);
    scene.add(food.mesh);
    
    return food;
}

// 检查位置是否被占用 (蛇身、障碍物、其他食物)
function isPositionOccupied(position) {
    const checkRadius = 1.5;
    
    // 检查蛇身
    for (const segment of snake.segments) {
        const distance = Math.sqrt(
            Math.pow(position.x - segment.gridX, 2) +
            Math.pow(position.z - segment.gridZ, 2)
        );
        if (distance < checkRadius) return true;
    }
    
    // 检查障碍物
    for (const obstacle of obstacles) {
        const distance = Math.sqrt(
            Math.pow(position.x - obstacle.gridX, 2) +
            Math.pow(position.z - obstacle.gridZ, 2)
        );
        if (distance < checkRadius) return true;
    }
    
    return false;
}
```

### 2.5 游戏循环

#### 2.5.1 固定时间步长 + 插值

```typescript
const GAME_LOOP_CONFIG = {
    // 固定游戏 tick 率 (逻辑更新)
    TICK_RATE: 15,              // 15 Hz = 每秒 15 次逻辑更新
    
    // 渲染帧率目标
    TARGET_FPS: {
        desktop: 60,
        mobile: 30
    },
    
    // 最大 deltaTime 限制 (防止跳帧)
    MAX_DELTA_TIME: 0.1,        // 100ms
    
    // 插值系数 (渲染时平滑)
    INTERPOLATION_ALPHA: 0.15
};

class GameLoop {
    constructor() {
        this.lastTime = 0;
        this.accumulator = 0;
        this.tickRate = 1000 / GAME_LOOP_CONFIG.TICK_RATE;
    }
    
    start() {
        this.lastTime = performance.now();
        requestAnimationFrame(this.loop.bind(this));
    }
    
    loop(currentTime) {
        // 计算 deltaTime
        let deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        
        // 限制最大 deltaTime
        deltaTime = Math.min(deltaTime, GAME_LOOP_CONFIG.MAX_DELTA_TIME);
        
        // 累加时间
        this.accumulator += deltaTime;
        
        // 固定时间步长更新 (逻辑更新)
        while (this.accumulator >= this.tickRate / 1000) {
            this.fixedUpdate(this.tickRate / 1000);
            this.accumulator -= this.tickRate / 1000;
        }
        
        // 渲染 (带插值)
        const alpha = this.accumulator / (this.tickRate / 1000);
        this.render(alpha);
        
        requestAnimationFrame(this.loop.bind(this));
    }
    
    fixedUpdate(deltaTime) {
        // 游戏逻辑更新 (15 Hz)
        // - 移动蛇
        // - 碰撞检测
        // - 吃食物
        // - 生成新食物
        // - 更新分数
    }
    
    render(alpha) {
        // 渲染更新 (可达 60 Hz)
        // - 插值渲染蛇身位置
        // - 更新相机
        // - 更新动画
        this.updateVisuals(alpha);
        renderer.render(scene, camera);
    }
    
    updateVisuals(alpha) {
        // 使用 alpha 进行插值渲染
        snake.segments.forEach((segment, index) => {
            if (index === 0) return; // 蛇头不使用插值
            
            // 计算插值位置
            const interpolatedX = segment.position.x + 
                (segment.targetPosition.x - segment.position.x) * alpha;
            const interpolatedZ = segment.position.z + 
                (segment.targetPosition.z - segment.position.z) * alpha;
            
            segment.mesh.position.x = interpolatedX;
            segment.mesh.position.z = interpolatedZ;
        });
    }
}
```

### 2.6 分数系统

```typescript
const SCORE_CONFIG = {
    foodValue: 10,              // 每个食物 10 分
    speedBonus: 2,              // 加速时分数倍数
    obstacleBonus: 5,          // 障碍物模式额外分数
    
    // 本地存储
    storageKey: 'snakeV3_highScore'
};

let score = 0;
let highScore = parseInt(localStorage.getItem(SCORE_CONFIG.storageKey)) || 0;

function addScore(points) {
    score += points;
    
    // 更新 UI
    updateScoreDisplay(score);
    
    // 保存最高分
    if (score > highScore) {
        highScore = score;
        localStorage.setItem(SCORE_CONFIG.storageKey, highScore.toString());
        updateHighScoreDisplay(highScore);
    }
    
    // 分数动画
    showScorePopup(points);
}
```

---

## 3. 用户界面与交互规范

### 3.1 状态机架构

```typescript
// 游戏状态机
const GameState = {
    BOOT: 'boot',           // 启动加载
    PRELOADER: 'preloader', // 资源预加载
    MENU: 'menu',           // 主菜单
    PLAYING: 'playing',     // 游戏进行中
    PAUSED: 'paused',       // 暂停
    GAME_OVER: 'gameOver'   // 游戏结束
};

class StateMachine {
    constructor() {
        this.currentState = GameState.BOOT;
        this.listeners = [];
    }
    
    transition(newState) {
        const oldState = this.currentState;
        this.currentState = newState;
        
        // 调用状态-enter 和 exit 回调
        this.onStateChange(oldState, newState);
        this.notifyListeners(oldState, newState);
    }
    
    is(state) {
        return this.currentState === state;
    }
}
```

### 3.2 Z-Index 图层系统

```css
/* Z-Index 分层 */
.layer-0 { z-index: 0; }  /* 3D Canvas - 底层 */
.layer-1 { z-index: 100; } /* 游戏中3D UI (如血条) */
.layer-2 { z-index: 200; } /* HUD 覆盖层 */
.layer-3 { z-index: 300; } /* 模态框 */
.layer-4 { z-index: 400; } /* 加载/过渡动画 */
```

### 3.3 HUD 设计规范

```css
/* HUD 容器 */
.game-hud {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    /* 使用 safe-area-inset 适配刘海屏 */
    padding-top: env(safe-area-inset-top);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
    
    pointer-events: none;  /* 允许点击穿透到 Canvas */
}

.game-hud > * {
    pointer-events: auto;  /* 子元素可点击 */
}

/* 分数显示 - 左上角 */
.score-display {
    position: absolute;
    top: clamp(10px, 3vw, 20px);
    left: clamp(10px, 3vw, 20px);
    
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: clamp(20px, 5vw, 32px);
    color: #FFD700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    padding: 10px 20px;
}

/* 最高分 */
.high-score {
    font-size: clamp(12px, 3vw, 16px);
    color: #FFFFFF;
    margin-top: 5px;
}

/* 暂停按钮 - 右上角 */
.pause-button {
    position: absolute;
    top: clamp(10px, 3vw, 20px);
    right: clamp(10px, 3vw, 20px);
    
    width: clamp(40px, 10vw, 50px);
    height: clamp(40px, 10vw, 50px);
    
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    border: none;
    border-radius: 50%;
    
    font-size: clamp(18px, 5vw, 24px);
    color: #FFFFFF;
    
    cursor: pointer;
    transition: transform 0.1s ease;
}

.pause-button:active {
    transform: scale(0.95);
}

/* 移动端控制 - 底部 */
.mobile-controls {
    position: absolute;
    bottom: clamp(20px, 5vw, 40px);
    left: 50%;
    transform: translateX(-50%);
    
    display: flex;
    gap: 10px;
    
    /* 移动端显示，桌面端隐藏 */
    @media (hover: hover) {
        display: none;
    }
}

.control-btn {
    width: clamp(50px, 15vw, 70px);
    height: clamp(50px, 15vw, 70px);
    
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 15px;
    
    font-size: clamp(24px, 6vw, 32px);
    color: #FFFFFF;
    
    touch-action: manipulation;  /* 禁用双击缩放 */
    user-select: none;
}

.control-btn:active {
    background: rgba(255, 255, 255, 0.4);
}
```

### 3.4 触控输入规范

```typescript
const TOUCH_CONFIG = {
    // 滑动检测
    swipe: {
        enabled: true,
        threshold: 30,          // 触发滑动的最小距离 (px)
        maxTime: 500,           // 最大滑动时间 (ms)
        preventDefault: true    // 阻止默认滚动
    },
    
    // 方向键按钮 (备选)
    dpad: {
        enabled: true,
        deadzone: 0.3           // 摇杆死区
    }
};

class TouchInputHandler {
    constructor() {
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchStartTime = 0;
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        const canvas = renderer.domElement;
        
        // 使用 Pointer Events (兼容鼠标和触摸)
        canvas.addEventListener('pointerdown', this.onPointerDown.bind(this), { passive: false });
        canvas.addEventListener('pointerup', this.onPointerUp.bind(this), { passive: false });
        
        // 移动端触摸
        canvas.style.touchAction = 'none';  // 重要：阻止浏览器默认触摸滚动
    }
    
    onPointerDown(event) {
        event.preventDefault();
        
        this.touchStartX = event.clientX;
        this.touchStartY = event.clientY;
        this.touchStartTime = performance.now();
    }
    
    onPointerUp(event) {
        event.preventDefault();
        
        const deltaX = event.clientX - this.touchStartX;
        const deltaY = event.clientY - this.touchStartY;
        const deltaTime = performance.now() - this.touchStartTime;
        
        // 检查是否有效滑动
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance > TOUCH_CONFIG.swipe.threshold && 
            deltaTime < TOUCH_CONFIG.swipe.maxTime) {
            
            // 确定滑动方向
            let direction;
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                direction = deltaX > 0 ? 'RIGHT' : 'LEFT';
            } else {
                direction = deltaY > 0 ? 'DOWN' : 'UP';
            }
            
            this.queueDirection(direction);
        }
    }
    
    queueDirection(direction) {
        // 将方向加入队列，等待蛇头处理
        inputQueue.push(MOVEMENT_CONFIG.directions[direction]);
        
        // 限制队列长度
        if (inputQueue.length > 2) {
            inputQueue.shift();
        }
    }
}
```

### 3.5 响应式设计

```html
<!-- Viewport meta 标签 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
```

```css
/* 响应式字体和间距使用 clamp() */
.responsive-text {
    font-size: clamp(16px, 4vw, 24px);
}

.responsive-padding {
    padding: clamp(10px, 3vw, 20px);
}

/* devicePixelRatio 处理 */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    /* 高 DPI 屏幕 */
    .high-dpi-text {
        font-weight: 500;
    }
}
```

### 3.6 菜单界面

```typescript
// 菜单状态
function showMenu() {
    stateMachine.transition(GameState.MENU);
    
    // 隐藏游戏 HUD
    hud.style.display = 'none';
    
    // 显示菜单
    menuContainer.style.display = 'flex';
    
    // 3D 场景继续运行 (背景动画)
    // 可以添加相机旋转等效果
}

// 游戏状态
function startGame() {
    stateMachine.transition(GameState.PLAYING);
    
    // 重置游戏
    resetGame();
    
    // 显示游戏 HUD
    hud.style.display = 'block';
    
    // 隐藏菜单
    menuContainer.style.display = 'none';
}

// 暂停状态
function togglePause() {
    if (stateMachine.is(GameState.PLAYING)) {
        stateMachine.transition(GameState.PAUSED);
        showPauseMenu();
    } else if (stateMachine.is(GameState.PAUSED)) {
        stateMachine.transition(GameState.PLAYING);
        hidePauseMenu();
    }
}
```

---

## 4. 性能优化规范

### 4.1 InstancedMesh 使用

```typescript
// 使用 InstancedMesh 优化蛇身段渲染
class SnakeMeshOptimizer {
    constructor(maxSegments = 100) {
        this.maxSegments = maxSegments;
        this.currentCount = 0;
        
        // 创建 InstancedMesh
        const geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.6, 8);
        const material = new THREE.MeshStandardMaterial({
            color: COLOR_PALETTE.snake.body,
            flatShading: true
        });
        
        this.instancedMesh = new THREE.InstancedMesh(geometry, material, maxSegments);
        this.instancedMesh.castShadow = true;
        this.instancedMesh.receiveShadow = true;
        
        // 实例矩阵
        this.tempMatrix = new THREE.Matrix4();
        this.tempPosition = new THREE.Vector3();
        this.tempQuaternion = new THREE.Quaternion();
        this.tempScale = new THREE.Vector3(1, 1, 1);
        
        scene.add(this.instancedMesh);
    }
    
    updateSegments(segments) {
        this.currentCount = Math.min(segments.length, this.maxSegments);
        
        for (let i = 0; i < this.currentCount; i++) {
            const segment = segments[i];
            
            // 设置位置和旋转
            this.tempPosition.set(segment.position.x, 0.3, segment.position.z);
            this.tempQuaternion.setFromAxisAngle(
                new THREE.Vector3(0, 1, 0),
                segment.mesh ? segment.mesh.rotation.y : 0
            );
            
            this.tempMatrix.compose(
                this.tempPosition,
                this.tempQuaternion,
                this.tempScale
            );
            
            this.instancedMesh.setMatrixAt(i, this.tempMatrix);
        }
        
        // 更新实例计数
        this.instancedMesh.instanceMatrix.needsUpdate = true;
    }
}
```

### 4.2 阴影优化

```typescript
const SHADOW_CONFIG = {
    // 方向光阴影
    directional: {
        enabled: true,
        mapSize: {
            width: 1024,   // 最大 1024x1024
            height: 1024
        },
        // PCF (Percentage-Closer Filtering) - 仅桌面端
        filter: 'PCFSoftShadowMap',  // 桌面端
        // filter: 'BasicShadowMap',    // 移动端 (更高效)
        
        // 阴影相机范围
        camera: {
            near: 0.5,
            far: 50,
            left: -25,
            right: 25,
            top: 25,
            bottom: -25
        }
    },
    
    // 性能模式
    performance: {
        desktop: {
            shadowMapEnabled: true,
            shadowMapType: 'PCFSoftShadowMap',
            maxShadowMapSize: 1024
        },
        mobile: {
            shadowMapEnabled: true,
            shadowMapType: 'BasicShadowMap',  // 移动端用简单阴影
            maxShadowMapSize: 512              // 移动端降低阴影分辨率
        }
    }
};

function configureShadows(renderer, isMobile) {
    const config = isMobile ? 
        SHADOW_CONFIG.performance.mobile : 
        SHADOW_CONFIG.performance.desktop;
    
    renderer.shadowMap.enabled = config.shadowMapEnabled;
    renderer.shadowMap.type = config.shadowMapType;
    
    // 设置阴影贴图大小
    directionalLight.shadow.mapSize.width = 
        Math.min(config.maxShadowMapSize, SHADOW_CONFIG.directional.mapSize.width);
    directionalLight.shadow.mapSize.height = 
        Math.min(config.maxShadowMapSize, SHADOW_CONFIG.directional.mapSize.height);
}
```

### 4.3 内存管理

```typescript
class MemoryManager {
    // 对象池
    pools = {};
    
    acquire(type) {
        if (!this.pools[type]) {
            this.pools[type] = [];
        }
        
        const pool = this.pools[type];
        if (pool.length > 0) {
            return pool.pop();
        }
        
        return this.createNew(type);
    }
    
    release(type, obj) {
        if (!this.pools[type]) {
            this.p        
        this.pools[type].push(obj);
    }
    
    // 清理几何体和材质
    dispose(obj) {
        if (obj.geometry) {
            obj.geometry.dispose();
        }
        if (obj.material) {
            if (Array.isArray(obj.material)) {
                obj.material.forEach(m => m.dispose());
            } else {
                obj.material.dispose();
            }
        }
    }
}

// BufferGeometry 优化
const GEOMETRY_CONFIG = {
    // 静态几何体使用 STATIC_DRAW
    static: {
        usage: THREE.StaticDrawUsage
    },
    // 动态几何体使用 DYNAMIC_DRAW
    dynamic: {
        usage: THREE.DynamicDrawUsage
    }
};

// 使用示例
const gridGeometry = new THREE.BufferGeometry();
const gridPositions = new Float32Array(VERTS_COUNT * 3);
gridGeometry.setAttribute('position', 
    new THREE.BufferAttribute(gridPositions, 3));
gridGeometry.attributes.position.usage = THREE.StaticDrawUsage;
gridGeometry.setDrawRange(0, VERTS_COUNT);
```

### 4.4 移动端优化

```typescript
const MOBILE_OPTIMIZATION = {
    // DPR 限制
    maxDPR: 1.5,  // 限制 devicePixelRatio 防止过载
    
    // FPS 目标
    targetFPS: {
        desktop: 60,
        mobile: 30
    },
    
    // 自动检测
    detect() {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
                         window.innerWidth < 768;
        
        return {
            isMobile,
            dpr: Math.min(window.devicePixelRatio, MOBILE_OPTIMIZATION.maxDPR)
        };
    }
};

function configureForDevice(renderer) {
    const { isMobile, dpr } = MOBILE_OPTIMIZATION.detect();
    
    // 设置 DPR
    renderer.setPixelRatio(dpr);
    
    // 调整渲染质量
    if (isMobile) {
        renderer.shadowMap.type = THREE.BasicShadowMap;
        renderer.setSize(
            window.innerWidth * dpr,
            window.innerHeight * dpr,
            false
        );
    }
}
```

### 4.5 绘制调用优化

```typescript
const DRAW_CALL_TARGETS = {
    mobile: 20,   // 移动端 <20
    desktop: 50   // 桌面端 <50
};

// 优化绘制调用
function optimizeDrawCalls(scene) {
    // 合并静态几何体
    scene.traverse((object) => {
        if (object.isMesh && object.geometry) {
            // 确保使用 BufferGeometry
            if (!object.geometry.isBufferGeometry) {
                console.warn('Non-BufferGeometry detected:', object);
            }
        }
    });
    
    // 报告绘制调用数
    console.log('Draw calls:', renderer.info.render.calls);
}
```

---

## 5. 系统架构规范

### 5.1 模块结构

```
src/
├── core/                    # 核心模块
│   ├── Game.js             # 游戏主控制器
│   ├── GameLoop.js         # 游戏循环 (固定时间步长 + RAF)
│   └── StateMachine.js     # 状态机
│
├── entities/                # 游戏实体
│   ├── Snake.js            # 蛇 (包含所有段)
│   ├── SnakeSegment.js     # 单个蛇身段
│   ├── Food.js             # 食物
│   └── Obstacle.js         # 障碍物
│
├── components/             # 数据组件 (纯数据)
│   ├── Position.js         # 位置分量
│   ├── Velocity.js         # 速度分量
│   ├── Direction.js        # 方向分量
│   └── Collision.js        # 碰撞分量
│
├── systems/                 # 系统 (纯逻辑)
│   ├── MovementSystem.js    # 移动系统
│   ├── CollisionSystem.js   # 碰撞系统
│   ├── RenderSystem.js      # 渲染系统
│   ├── InputSystem.js       # 输入系统
│   └── ScoreSystem.js       # 分数系统
│
├── 3d/                      # Three.js 封装
│   ├── SceneManager.js     # 场景管理
│   ├── CameraController.js # 相机控制器
│   ├── SnakeMesh.js        # 蛇的3D模型
│   ├── FoodMesh.js         # 食物3D模型
│   ├── ObstacleMesh.js     # 障碍物3D模型
│   ├── Environment.js       # 环境 (地面、天空、光照)
│   └── Lighting.js          # 光照系统
│
├── state/                   # 状态管理
│   ├── GameState.js        # 游戏状态
│   └── Store.js            # 状态存储 (订阅/发布)
│
├── ui/                      # UI 模块
│   ├── HUD.js              # HUD 显示
│   ├── Menu.js             # 菜单界面
│   ├── PauseMenu.js        # 暂停菜单
│   ├── GameOverScreen.js   # 游戏结束界面
│   └── TouchControls.js    # 触控控制
│
├── utils/                   # 工具函数
│   ├── math.js             # 数学工具 (lerp, clamp 等)
│   ├── collision.js        # 碰撞检测工具
│   ├── pool.js             # 对象池
│   └── memory.js           # 内存管理
│
└── main.js                 # 入口文件
```

### 5.2 实体组件系统 (ECS) 简化版

```typescript
// Entity - 包装 Object3D + 组件映射
class Entity {
    constructor(object3D) {
        this.object3D = object3D;  // THREE.Object3D
        this.components = new Map();
    }
    
    addComponent(type, data) {
        this.components.set(type, data);
        return this;
    }
    
    getComponent(type) {
        return this.components.get(type);
    }
    
    hasComponent(type) {
        return this.components.has(type);
    }
    
    removeComponent(type) {
        this.components.delete(type);
    }
}

// 示例：创建蛇
function createSnakeEntity(startX, startZ, length) {
    const snakeEntity = new Entity(new THREE.Group());
    snakeEntity.name = 'Snake';
    
    // 添加蛇专属组件
    snakeEntity.addComponent('SnakeController', {
        direction: { x: 1, z: 0 },
        speed: MOVEMENT_CONFIG.moveDistance,
        growQueue: 0
    });
    
    // 添加碰撞组件
    snakeEntity.addComponent('Collider', {
        radius: 0.6,
        type: 'snake'
    });
    
    // 添加蛇身段
    for (let i = 0; i < length; i++) {
        const segment = new Entity(createSegmentMesh());
        segment.position.set(startX - i, 0.5, startZ);
        segment.addComponent('GridPosition', {
            x: startX - i,
            z: startZ
        });
        snakeEntity.object3D.add(segment.object3D);
        snakeEntity.addComponent(`Segment_${i}`, segment);
    }
    
    return snakeEntity;
}
```

### 5.3 Three.js 集成模式

```typescript
// SceneManager - Three.js 场景封装
class SceneManager {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB);  // 天蓝色背景
        
        this.setupRenderer();
        this.setupCamera();
        this.setupLighting();
        this.setupEnvironment();
    }
    
    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            powerPreference: 'high-performance'
        });
        
        // 响应式尺寸
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        
        // 阴影
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        
        // 添加到 DOM
        document.getElementById('game-container').appendChild(this.renderer.domElement);
    }
    
    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            CAMERA_CONFIG.fov,
            window.innerWidth / window.innerHeight,
            CAMERA_CONFIG.near,
            CAMERA_CONFIG.far
        );
        
        this.cameraController = new CameraController(this.camera);
    }
    
    setupLighting() {
        // 半球光
        const hemisphere = new THREE.HemisphereLight(
            LIGHTING_CONFIG.hemisphere.skyColor,
            LIGHTING_CONFIG.hemisphere.groundColor,
            LIGHTING_CONFIG.hemisphere.intensity
        );
        this.scene.add(hemisphere);
        
        // 方向光 (带阴影)
        const directional = new THREE.DirectionalLight(
            LIGHTING_CONFIG.directional.color,
            LIGHTING_CONFIG.directional.intensity
        );
        directional.position.copy(LIGHTING_CONFIG.directional.position);
        directional.castShadow = true;
        
        // 阴影配置
        directional.shadow.mapSize.width = 1024;
        directional.shadow.mapSize.height = 1024;
        directional.shadow.camera.near = 0.5;
        directional.shadow.camera.far = 50;
        directional.shadow.camera.left = -25;
        directional.shadow.camera.right = 25;
        directional.shadow.camera.top = 25;
        directional.shadow.camera.bottom = -25;
        
        this.scene.add(directional);
    }
    
    setupEnvironment() {
        // 地面
        const groundGeometry = new THREE.PlaneGeometry(
            WORLD_CONFIG.grid.width,
            WORLD_CONFIG.grid.height
        );
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: COLOR_PALETTE.environment.ground,
            flatShading: true,
            roughness: 1.0
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);
        
        // 网格线
        this.createGridLines();
        
        // 围墙
        if (WORLD_CONFIG.boundary.enabled) {
            this.createBoundaryWalls();
        }
    }
    
    createGridLines() {
        const gridSize = WORLD_CONFIG.grid.width;
        const cellSize = WORLD_CONFIG.grid.cellSize;
        const halfGrid = gridSize / 2;
        
        const points = [];
        
        // 水平和垂直线
        for (let i = -halfGrid; i <= halfGrid; i += cellSize) {
            // 垂直线
            points.push(new THREE.Vector3(i, 0.01, -halfGrid));
            points.push(new THREE.Vector3(i, 0.01, halfGrid));
            
            // 水平线
            points.push(new THREE.Vector3(-halfGrid, 0.01, i));
            points.push(new THREE.Vector3(halfGrid, 0.01, i));
        }
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
            color: COLOR_PALETTE.environment.gridLine,
            transparent: true,
            opacity: 0.5
        });
        
        const gridLines = new THREE.LineSegments(geometry, material);
        this.scene.add(gridLines);
    }
    
    createBoundaryWalls() {
        const wallHeight = WORLD_CONFIG.boundary.height;
        const wallThickness = WORLD_CONFIG.boundary.thickness;
        const gridSize = WORLD_CONFIG.grid.width;
        const halfGrid = gridSize / 2;
        
        const wallMaterial = new THREE.MeshStandardMaterial({
            color: COLOR_PALETTE.environment.wall,
            flatShading: true,
            roughness: 1.0
        });
        
        // 四面墙
        const wallPositions = [
            { pos: [0, wallHeight/2, -halfGrid], size: [gridSize, wallHeight, wallThickness] },
            { pos: [0, wallHeight/2, halfGrid], size: [gridSize, wallHeight, wallThickness] },
            { pos: [-halfGrid, wallHeight/2, 0], size: [wallThickness, wallHeight, gridSize] },
            { pos: [halfGrid, wallHeight/2, 0], size: [wallThickness, wallHeight, gridSize] }
        ];
        
        wallPositions.forEach(({ pos, size }) => {
            const geometry = new THREE.BoxBufferGeometry(...size);
            const wall = new THREE.Mesh(geometry, wallMaterial);
            wall.position.set(...pos);
            wall.castShadow = true;
            wall.receiveShadow = true;
            this.scene.add(wall);
        });
    }
    
    render() {
        this.renderer.render(this.scene, this.camera);
    }
}
```

### 5.4 输入系统

```typescript
// InputSystem - 统一输入处理
class InputSystem {
    constructor() {
        this.keys = {};
        this.swipeStart = null;
        this.inputQueue = [];
        
        this.setupKeyboard();
        this.setupTouch();
    }
    
    setupKeyboard() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // 方向键映射
            const directionMap = {
                'ArrowUp': 'UP',
                'ArrowDown': 'DOWN',
                'ArrowLeft': 'LEFT',
                'ArrowRight': 'RIGHT',
                'KeyW': 'UP',
                'KeyS': 'DOWN',
                'KeyA': 'LEFT',
                'KeyD': 'RIGHT'
            };
            
            if (directionMap[e.code]) {
                e.preventDefault();
                this.queueDirection(directionMap[e.code]);
            }
            
            // 暂停
            if (e.code === 'Escape' || e.code === 'KeyP') {
                game.togglePause();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
    }
    
    setupTouch() {
        const canvas = renderer.domElement;
        
        canvas.addEventListener('pointerdown', (e) => {
            this.swipeStart = {
                x: e.clientX,
                y: e.clientY,
                time: performance.now()
            };
        }, { passive: false });
        
        canvas.addEventListener('pointerup', (e) => {
            if (!this.swipeStart) return;
            
            const deltaX = e.clientX - this.swipeStart.x;
            const deltaY = e.clientY - this.swipeStart.y;
            const deltaTime = performance.now() - this.swipeStart.time;
            
            const threshold = TOUCH_CONFIG.swipe.threshold;
            
            if (Math.abs(deltaX) > threshold && Math.abs(deltaX) > Math.abs(deltaY)) {
                this.queueDirection(deltaX > 0 ? 'RIGHT' : 'LEFT');
            } else if (Math.abs(deltaY) > threshold && Math.abs(deltaY) > Math.abs(deltaX)) {
                this.queueDirection(deltaY > 0 ? 'DOWN' : 'UP');
            }
            
            this.swipeStart = null;
        }, { passive: false });
        
        canvas.style.touchAction = 'none';
    }
    
    queueDirection(direction) {
        const directions = MOVEMENT_CONFIG.directions;
        
        // 获取蛇头当前方向
        const currentDir = snake.head.getComponent('SnakeController').direction;
        
        // 防止 180 度掉头
        const newDir = directions[direction];
        if (newDir.x === -currentDir.x && newDir.z === -currentDir.z) {
            return;  // 不能掉头
        }
        
        this.inputQueue.push(direction);
        
        // 限制队列长度
        if (this.inputQueue.length > 2) {
            this.inputQueue.shift();
        }
    }
    
    consumeInput() {
        return this.inputQueue.shift() || null;
    }
}
```

---

## 6. 技术规格汇总

### 6.1 常量配置表

```typescript
// 所有可配置常量的汇总
const CONFIG = {
    // 世界
    WORLD: {
        GRID_SIZE: 100,
        CELL_SIZE: 1,
        INITIAL_LENGTH: 5
    },
    
    // 移动
    MOVEMENT: {
        TICK_RATE: 15,        // Hz
        MOVE_DISTANCE: 1,     // 每 tick 格数
        LERP_FACTOR: 0.3,     // 跟随插值
        CAMERA_LERP: 0.05    // 相机跟随
    },
    
    // 渲染
    RENDER: {
        SHADOW_MAP_SIZE: 1024,
        MAX_DPR: 1.5,
        TARGET_FPS: { desktop: 60, mobile: 30 }
    },
    
    // 蛇
    SNAKE: {
        HEAD_RADIUS: 0.6,
        SEGMENT_RADIUS: 0.5,
        SEGMENT_HEIGHT: 0.6,
        RADIAL_SEGMENTS: 8
    },
    
    // 食物
    FOOD: {
        RADIUS: 0.4,
        MAX_COUNT: 3,
        SCORE_VALUE: 10
    },
    
    // 颜色
    COLORS: COLOR_PALETTE
};
```

### 6.2 性能目标

| 指标 | 桌面端 | 移动端 |
|------|--------|--------|
| 帧率 | 60 FPS | 30 FPS |
| 首屏加载 | < 2s | < 3s |
| 内存占用 | < 100MB | < 80MB |
| 绘制调用 | < 50 | < 20 |
| 阴影贴图 | 1024x1024 | 512x512 |
| DPR | 1.0-2.0 | 1.0-1.5 |

### 6.3 兼容性要求

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome for Android 90+

---

## 7. 验收标准

### 7.1 功能验收

- [ ] 蛇可以上下左右移动
- [ ] 蛇身正确跟随蛇头移动
- [ ] 蛇不能 180 度掉头
- [ ] 吃食物后蛇身增长
- [ ] 吃食物后分数增加 10 分
- [ ] 撞墙后游戏结束
- [ ] 撞自身后游戏结束
- [ ] 暂停功能正常
- [ ] 游戏结束可以重新开始
- [ ] 最高分保存到 localStorage

### 7.2 性能验收

- [ ] 桌面端稳定 60 FPS
- [ ] 移动端稳定 30 FPS
- [ ] 首屏加载 < 3 秒
- [ ] 绘制调用数符合目标
- [ ] 内存无泄漏 (刷新页面后)

### 7.3 交互验收

- [ ] 键盘方向键/WASD 控制
- [ ] 移动端触摸滑动控制
- [ ] 移动端方向按钮控制
- [ ] 暂停按钮可用
- [ ] 安全区域适配刘海屏

### 7.4 视觉验收

- [ ] 低多边形风格 (flatShading)
- [ ] 相机平滑跟随蛇头
- [ ] 阴影正常显示
- [ ] 地面网格线可见
- [ ] 围墙边界清晰

---

## 附录 A: Three.js API 参考

### A.1 几何体

```javascript
// CylinderGeometry (圆柱)
new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments);

// SphereGeometry (球体)
new THREE.SphereGeometry(radius, widthSegments, heightSegments);

// BoxGeometry (立方体)
new THREE.BoxGeometry(width, height, depth);

// PlaneGeometry (平面)
new THREE.PlaneGeometry(width, height);

// BufferGeometry (自定义)
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
```

### A.2 材质

```javascript
// MeshStandardMaterial
new THREE.MeshStandardMaterial({
    color: 0xFFCC00,
    flatShading: true,
    roughness: 0.8,
    metalness: 0.1
});

// MeshBasicMaterial
new THREE.MeshBasicMaterial({ color: 0xFF0000 });

// LineBasicMaterial
new THREE.LineBasicMaterial({ color: 0x00FF00 });
```

### A.3 光照

```javascript
// HemisphereLight
new THREE.HemisphereLight(skyColor, groundColor, intensity);

// DirectionalLight
new THREE.DirectionalLight(color, intensity);

// AmbientLight
new THREE.AmbientLight(color, intensity);

// PointLight
new THREE.PointLight(color, intensity, distance);
```

### A.4 相机

```javascript
// PerspectiveCamera
new THREE.PerspectiveCamera(fov, aspect, near, far);

// OrthographicCamera
new THREE.OrthographicCamera(left, right, top, bottom, near, far);
```

### A.5 工具方法

```javascript
// 向量插值
vector.lerp(target, alpha);

// 欧拉角转四元数
euler.setFromQuaternion(quaternion);

// 弧度转角度
THREE.MathUtils.radToDeg(radians);

// 角度转弧度
THREE.MathUtils.degToRad(degrees);

// 限制值范围
THREE.MathUtils.clamp(value, min, max);
```

---

## 附录 B: 术语表

| 术语 | 说明 |
|------|------|
| AABB | Axis-Aligned Bounding Box，轴对齐边界框 |
| BufferGeometry | Three.js 优化的几何体格式 |
| DPR | Device Pixel Ratio，设备像素比 |
| ECS | Entity Component System，实体组件系统 |
| flatShading | 平面着色，低多边形效果 |
| InstancedMesh | 实例化网格，优化多物体渲染 |
| lerp | Linear Interpolation，线性插值 |
| LOD | Level of Detail，多层次细节 |
| PCF | Percentage-Closer Filtering，阴影滤波 |
| RAF | requestAnimationFrame，浏览器帧循环 |
| Shadow Map | 阴影贴图技术 |

---

*规范版本: 3.0.0*  
*最后更新: 2026-03-27*  
*状态: Phase 1 完成，等待用户确认*
