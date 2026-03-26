# Phase 0: Research - 3D Snake Game V3

**Date**: 2026-03-26
**Status**: In Progress
**Goal**: 实现真正的 3D 贪食蛇游戏

---

## 1. 参考图分析

### 用户提供的参考图特征

| 元素 | 描述 |
|------|------|
| **蛇** | 巨大黄色蛇，低多边形风格，身体呈S形蜿蜒，伸出的红色分叉舌头 |
| **蛇头** | 位于画面右下方，有一只大眼睛，伸出的舌头 |
| **蛇身纹理** | 块状/鳞片状质感，亮黄色 |
| **地面** | 绿色草地，早期3D游戏贴图风格 |
| **障碍物** | 树桩（顶部橙黄色，侧面灰褐色）、灰白色长方体石块 |
| **食物** | 左上角红色球体（苹果） |
| **UI** | 左下角"01%93"（得分），右下角"00"（计时器）|
| **整体风格** | 低多边形（Low-poly），复古90年代末/2000年代初，棱角分明 |

### 艺术风格定位
- **低多边形 (Low-poly)**：面数少，棱角明显
- **复古怀旧**：模仿早期3D游戏
- **卡通质感**：色彩鲜艳，对比度高

---

## 2. 技术方案对比

### 方案 A: Three.js (推荐)

| 优点 | 缺点 |
|------|------|
| Web原生，浏览器原生支持 | 需要编写较多代码 |
| 功能强大，生态完善 | 性能优化需要经验 |
| 轻量级 (~150KB) | 数学基础要求 |
| 手机支持良好 | |
| 开源活跃 | |

### 方案 B: Babylon.js

| 优点 | 缺点 |
|------|------|
| 功能更完整 | 包体积较大 (~1MB) |
| 游戏引擎级功能 | 学习曲线陡 |
| 更好的文档 |  |

### 方案 C: WebGPU (未来)

| 优点 | 缺点 |
|------|------|
| 最新技术，性能最好 | 兼容性差 |
| 现代API设计 | 需要fallback |

### 方案 D: CSS 3D transforms

| 优点 | 缺点 |
|------|------|
| 简单，无需额外库 | 能力有限 |
| 原生CSS | 不适合复杂3D |

### 方案 E: Canvas 2D + 伪3D

| 优点 | 缺点 |
|------|------|
| 无需额外依赖 | 不是真正的3D |
| 简单 | 效果有限 |

---

## 3. 推荐方案：Three.js

### 为什么选择 Three.js

1. **Web标准** - 所有现代浏览器原生支持
2. **低多边形风格完美契合** - Three.js 的 BufferGeometry 适合创建低面数模型
3. **轻量高效** - 适合浏览器游戏
4. **资源丰富** - 大量教程和示例
5. **移动端支持** - WebGL 广泛支持

### Three.js 核心概念

```
Scene (场景)
  ├── Camera (相机) - 透视/正交
  ├── Lights (光源) - 环境光/点光源/平行光
  └── Objects (物体)
       ├── Mesh (网格)
       │    ├── Geometry (几何体)
       │    └── Material (材质)
       └── Groups (组)
```

---

## 4. 低多边形3D蛇实现方案

### 蛇的建模方式

#### 4.1 蛇身段堆叠 (Segment Stacking)
```javascript
// 每段蛇身是一个低多边形圆柱/盒子
const segmentGeometry = new THREE.CylinderGeometry(0.4, 0.5, 0.8, 8);
const segmentMaterial = new THREE.MeshLambertMaterial({ color: 0xFFCC00 });
const segment = new THREE.Mesh(segmentGeometry, segmentMaterial);

// 连接处用球体过渡
const jointGeometry = new THREE.SphereGeometry(0.5, 8, 8);
```

#### 4.2 蛇身片段动画
```javascript
// 使用 requestAnimationFrame 更新位置
function animate() {
    snakeSegments.forEach((segment, index) => {
        // 跟随前一节的位置（延迟跟随）
        segment.position.lerp(targetPositions[index], 0.3);
    });
    renderer.render(scene, camera);
}
```

### 蛇的纹理方案

#### 方案 1: 纯色 + 光照 (复古风格)
```javascript
// 简单卡通风格
const material = new THREE.MeshLambertMaterial({
    color: 0xFFCC00,  // 亮黄色
    flatShading: true // 低多边形效果
});
```

#### 方案 2: 程序化纹理
```javascript
// 使用 Canvas 绘制鳞片纹理
const canvas = document.createElement('canvas');
canvas.width = 256;
canvas.height = 256;
const ctx = canvas.getContext('2d');
// 绘制黄色鳞片图案
const texture = new THREE.CanvasTexture(canvas);
```

#### 方案 3: 基础纹理贴图
```javascript
// 使用简单的基础纹理
const loader = new THREE.TextureLoader();
const snakeTexture = loader.load('snake-texture.png');
```

---

## 5. 环境建模

### 5.1 地面

```javascript
// 低多边形草地平面
const groundGeometry = new THREE.PlaneGeometry(50, 50, 20, 20);
// 添加高度变化
groundGeometry.vertices.forEach(v => {
    v.z += Math.random() * 0.2;
});
const groundMaterial = new THREE.MeshLambertMaterial({
    color: 0x228822,
    flatShading: true
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
```

### 5.2 障碍物 - 树桩

```javascript
// 树桩：截断的圆柱
const stumpGeometry = new THREE.CylinderGeometry(0.8, 1.0, 1.5, 8);
const stumpMaterial = new THREE.MeshLambertMaterial({
    color: 0x886644,  // 棕色
    flatShading: true
});
const stump = new THREE.Mesh(stumpGeometry, stumpMaterial);

// 顶部截面
const topGeometry = new THREE.CircleGeometry(0.8, 8);
const topMaterial = new THREE.MeshLambertMaterial({
    color: 0xDDAA55,  // 橙黄色
    flatShading: true
});
```

### 5.3 障碍物 - 石块

```javascript
// 不规则多面体
const rockGeometry = new THREE.DodecahedronGeometry(0.6, 0);
const rockMaterial = new THREE.MeshLambertMaterial({
    color: 0xAAAAAA,
    flatShading: true
});
```

### 5.4 食物 - 苹果

```javascript
// 苹果：球体 + 小圆柱茎 + 圆锥叶子
const appleGeometry = new THREE.SphereGeometry(0.4, 8, 8);
const appleMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF3333,
    flatShading: true
});

// 叶子
const leafGeometry = new THREE.ConeGeometry(0.15, 0.3, 4);
const leafMaterial = new THREE.MeshLambertMaterial({ color: 0x44CC44 });
```

---

## 6. 光照系统

### 6.1 基础光照设置

```javascript
// 环境光 - 提供基础照明
const ambientLight = new THREE.AmbientLight(0x404040, 0.6);

// 主方向光 - 模拟太阳
const directionalLight = new THREE.DirectionalLight(0xFFFFAA, 1.0);
directionalLight.position.set(5, 10, 5);

// 方向光阴影
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
```

### 6.2 低多边形风格光照

```javascript
// 使用 flatShading 材质 + 强方向光 = 低多边形风格
const material = new THREE.MeshLambertMaterial({
    color: 0xFFCC00,
    flatShading: true  // 关键：强制使用平面着色
});
```

---

## 7. 相机设置

### 俯视角方案 (适合贪食蛇)

```javascript
// 透视相机，从上方45度俯视
const camera = new THREE.PerspectiveCamera(
    60,  // FOV
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// 相机位置：上方后方
camera.position.set(0, 15, 15);
camera.lookAt(0, 0, 0);
```

### 可选：跟随蛇的相机

```javascript
// 相机跟随蛇头
function updateCamera() {
    const head = snakeSegments[0];
    camera.position.x = head.position.x;
    camera.position.z = head.position.z + 15;
    camera.lookAt(head.position.x, 0, head.position.z);
}
```

---

## 8. 游戏循环架构

```javascript
// 游戏状态
const gameState = {
    snake: [],           // 蛇身段数组
    food: null,          // 食物位置
    obstacles: [],       // 障碍物数组
    score: 0,
    isPlaying: false,
    moveInterval: 200    // 移动间隔(ms)
};

// 游戏循环
function gameLoop() {
    if (!gameState.isPlaying) return;
    
    // 1. 移动蛇
    moveSnake();
    
    // 2. 碰撞检测
    checkCollisions();
    
    // 3. 更新3D位置
    updateSnakeMesh();
    
    // 4. 渲染
    renderer.render(scene, camera);
    
    requestAnimationFrame(gameLoop);
}

// 网格更新
function updateSnakeMesh() {
    gameState.snake.forEach((segment, index) => {
        snakeMeshes[index].position.set(
            segment.x * CELL_SIZE,
            0.5,
            segment.y * CELL_SIZE
        );
    });
}
```

---

## 9. 项目结构建议

```
snake-game-v3/
├── index.html              # 入口HTML
├── src/
│   ├── main.js             # 主入口
│   ├── game/
│   │   ├── Game.js        # 游戏主逻辑
│   │   ├── Snake.js       # 蛇类
│   │   ├── Food.js        # 食物类
│   │   └── Obstacles.js   # 障碍物类
│   ├── 3d/
│   │   ├── Scene.js       # Three.js场景管理
│   │   ├── SnakeMesh.js   # 蛇的3D模型
│   │   ├── Environment.js # 环境（地面、天空）
│   │   └── Objects.js     # 苹果、障碍物3D模型
│   ├── ui/
│   │   └── UI.js          # 分数、菜单等UI
│   └── utils/
│       └── helpers.js     # 工具函数
├── assets/
│   └── textures/          # 纹理图片（可选）
├── styles/
│   └── main.css           # 样式
├── package.json
├── vite.config.js          # Vite配置
└── SPEC.md                # 规范文档
```

---

## 10. 技术决策

### 已确认

| 决策项 | 选择 | 理由 |
|--------|------|------|
| 3D引擎 | Three.js | Web原生，生态好，适合低多边形 |
| 艺术风格 | Low-poly 复古 | 参考图风格 |
| 构建工具 | Vite | 现代、快速 |
| 包管理 | npm | 标准 |

### 待确认 (Phase 2 - Clarify)

1. 相机是否跟随蛇移动？
2. 是否需要滚动视角？
3. 障碍物数量和密度？
4. 舌头动画细节？
5. 是否需要音效？

---

## 11. 参考资源

- [Three.js 官方文档](https://threejs.org/docs/)
- [Three.js 示例](https://threejs.org/examples/)
- [SimonDev Three.js 教程](https://simondev.io/)
- [低多边形建模技巧](https://styly.cc/tips/lowpoly_3d/)

---

## 12. 相机跟随系统

### 需求确认
1. **相机跟随蛇移动** - 蛇移动时相机平滑跟随
2. **滚动视角** - 蛇头保持在画面前方，可动态调整

### 实现方案

#### 方案 1: 简单跟随 (推荐)
```javascript
const CAMERA_OFFSET = new THREE.Vector3(0, 15, 15); // 固定偏移
const LOOK_AHEAD = 5; // 前方看多远

function updateCamera() {
    const head = snakeMesh.position;
    
    // 相机位置：跟随蛇 + 固定偏移
    camera.position.x = head.x + CAMERA_OFFSET.x;
    camera.position.y = CAMERA_OFFSET.y;
    camera.position.z = head.z + CAMERA_OFFSET.z;
    
    // 相机朝向：蛇头前方
    camera.lookAt(
        head.x + snakeDirection.x * LOOK_AHEAD,
        0,
        head.z + snakeDirection.z * LOOK_AHEAD
    );
}
```

#### 方案 2: 平滑插值跟随
```javascript
function updateCamera() {
    const targetX = snakeHead.x + CAMERA_OFFSET.x;
    const targetZ = snakeHead.z + CAMERA_OFFSET.z;
    
    // 平滑移动 (lerp)
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.z += (targetZ - camera.position.z) * 0.05;
    camera.position.y = CAMERA_OFFSET.y;
    
    camera.lookAt(snakeHead.x, 0, snakeHead.z);
}
```

#### 方案 3: 方向感知跟随
```javascript
// 根据蛇的移动方向动态调整相机偏移
const cameraAngle = Math.atan2(snakeDirection.z, snakeDirection.x);
const DISTANCE = 18;

camera.position.x = snakeHead.x + Math.cos(cameraAngle + Math.PI) * DISTANCE;
camera.position.y = 12 + Math.sin(cameraAngle + Math.PI) * 3; // 轻微俯冲
camera.position.z = snakeHead.z + Math.sin(cameraAngle + Math.PI) * DISTANCE;
```

### 滚动边界
```javascript
const WORLD_BOUNDS = {
    minX: -50, maxX: 50,
    minZ: -50, maxZ: 50
};

// 限制相机和蛇在边界内
function clampPosition(pos, min, max) {
    return Math.max(min, Math.min(max, pos));
}
```

---

## 13. 舌头动画系统

### 需求确认
蛇头需要 **动态分叉舌头**，参考图显示舌头伸出状态

### 实现方案

#### 方案 1: 程序化动画 (推荐)
```javascript
// 舌头由两个细长三角形组成
const tongueGroup = new THREE.Group();

const tongueMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xFF3333,
    side: THREE.DoubleSide
});

// 左半边舌头
const leftTongue = new THREE.Mesh(
    new THREE.BufferGeometry(),
    tongueMaterial
);

// 右半边舌头
const rightTongue = new THREE.Mesh(
    new THREE.BufferGeometry(),
    tongueMaterial
);

tongueGroup.add(leftTongue, rightTongue);
snakeHead.add(tongueGroup); // 添加到蛇头
```

#### 方案 2: 骨骼动画
```javascript
// 使用 Two.Bones 实现更自然的弯曲
const tongueBone = new THREE.Bone();
const tongueMesh = new THREE.SkinnedMesh(geometry, material);
tongueMesh.add(tongueBone);
```

#### 舌头动画参数
```javascript
const tongueConfig = {
    extendSpeed: 0.15,      // 伸出速度
    retractSpeed: 0.2,     // 缩回速度
    maxLength: 1.5,        // 最大长度
    minLength: 0.1,        // 最小长度（收起状态）
    flickerSpeed: 0.3,     // 颤抖速度
    flickerAmount: 0.05    // 颤抖幅度
};

// 舌头状态机
const tongueState = {
    phase: 'idle',         // idle | extending | retracting
    length: 0.1,
    time: 0
};

function updateTongue(deltaTime) {
    switch(tongueState.phase) {
        case 'idle':
            // 轻微颤抖
            tongueState.time += deltaTime * tongueConfig.flickerSpeed;
            tongueState.length = tongueConfig.minLength + 
                Math.sin(tongueState.time) * tongueConfig.flickerAmount;
            break;
            
        case 'extending':
            tongueState.length += tongueConfig.extendSpeed * deltaTime;
            if (tongueState.length >= tongueConfig.maxLength) {
                tongueState.phase = 'retracting';
            }
            break;
            
        case 'retracting':
            tongueState.length -= tongueConfig.retractSpeed * deltaTime;
            if (tongueState.length <= tongueConfig.minLength) {
                tongueState.length = tongueConfig.minLength;
                tongueState.phase = 'idle';
            }
            break;
    }
    
    // 更新舌头几何体
    updateTongueGeometry(tongueState.length);
}
```

#### 舌头几何体更新
```javascript
function updateTongueGeometry(length) {
    // 创建V形舌头
    const angle = 0.3; // 分叉角度 (弧度)
    
    const leftPoints = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(-length * Math.sin(angle), 0, -length * Math.cos(angle)),
    ];
    
    const rightPoints = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(length * Math.sin(angle), 0, -length * Math.cos(angle)),
    ];
    
    // 生成几何体
    const leftShape = createTongueShape(leftPoints, 0.08);
    const rightShape = createTongueShape(rightPoints, 0.08);
    
    leftTongue.geometry = leftShape;
    rightTongue.geometry = rightShape;
}
```

---

## 14. 蛇身移动系统

### 段跟随算法
```javascript
// 每个蛇身段跟随前一节的位置
class SnakeSegment {
    constructor(position) {
        this.position = position.clone();
        this.targetPosition = position.clone();
        this.mesh = createMesh();
    }
    
    update(followTarget, delay = 0.1) {
        // 延迟跟随：越靠后的段跟随越慢
        this.targetPosition.copy(followTarget.position);
        
        // 平滑插值
        this.position.lerp(this.targetPosition, delay);
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

// 初始化蛇身
const snakeSegments = [];
for (let i = 0; i < INITIAL_LENGTH; i++) {
    snakeSegments.push(new SnakeSegment(
        new THREE.Vector3(0, 0.5, i * SEGMENT_SPACING)
    ));
}

// 更新循环
function updateSnake() {
    // 蛇头直接响应输入
    snakeHead.position.x += moveX * SPEED;
    snakeHead.position.z += moveZ * SPEED;
    
    // 每节跟随前一节
    for (let i = 1; i < snakeSegments.length; i++) {
        snakeSegments[i].update(snakeSegments[i - 1], 0.15 + i * 0.02);
    }
}
```

---

## 15. 参考资源更新

### 相机跟随
- [Three.js 相机教程](https://threejs.org/manual/#en/cameras)
- [平滑跟随实现](https://codepen.io/anon/pen/xyz)

### 舌头动画
- [Three.js 形状动画](https://threejs.org/examples/#webgl_modifier_tessellation)
- [程序化动画](https://codepen.io/threejs/pen/JXBXVw)

### 蛇类游戏参考
- [Slither.io 源码分析](https://github.com/huytd/slither.io-clone)
- [低多边形蛇建模](https://sketchfab.com/3d-models/low-poly-snake-47f6b9f9)

---

## 16. 下一步

- [ ] **Phase 1**: 更新 CONSTITUTION.md (设计原则) - 包含相机跟随、滚动、舌头动画
- [ ] **Phase 2**: 更新 SPEC.md (详细规范)
- [ ] **Phase 3**: CLARIFY.md (澄清问题)
- [ ] **Phase 4**: PLAN.md (实施计划)
- [ ] **Phase 5**: 实现代码

---

*Research Complete - Ready for Phase 1*
*Updated with: Camera follow, scrolling view, tongue animation details*
