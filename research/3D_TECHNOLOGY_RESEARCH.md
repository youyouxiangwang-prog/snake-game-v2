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

## 12. 下一步

- [ ] **Phase 1**: 创建 CONSTITUTION.md (设计原则)
- [ ] **Phase 2**: 创建 SPEC.md (详细规范)
- [ ] **Phase 3**: CLARIFY.md (澄清问题)
- [ ] **Phase 4**: PLAN.md (实施计划)
- [ ] **Phase 5**: 实现代码

---

*Research Complete - Ready for Phase 1*
