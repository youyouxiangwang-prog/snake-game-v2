# SPEC.md - Snake Game V3 (True 3D)

**Project**: 贪食蛇 3D 版
**Version**: 5.0
**Date**: 2026-03-26
**Status**: Draft
**Constitution**: CONSTITUTION.md

---

## 1. 项目概述

### 1.1 项目简介
真正的 3D 低多边形风格贪食蛇游戏，使用 Three.js 渲染。玩家控制一条 3D 蛇在草地世界中移动，吃苹果得分，躲避障碍物和自身。

### 1.2 核心功能
1. **3D 渲染** - Three.js 实现的真正 3D 世界
2. **相机跟随** - 平滑跟随蛇移动，动态滚动视角
3. **蛇身动画** - 多段蛇身平滑跟随蛇头
4. **舌头动画** - V形分叉舌头动态伸出/缩回
5. **游戏循环** - 经典/限时/障碍三种模式
6. **碰撞检测** - 墙壁、自身、障碍物检测

### 1.3 目标平台
- Web 浏览器 (Chrome, Firefox, Safari, Edge)
- 桌面端 (键盘控制)
- 移动端 (触摸控制)

---

## 2. 技术规格

### 2.1 技术栈
| 技术 | 版本 | 用途 |
|------|------|------|
| Three.js | r183+ | 3D 渲染 |
| Vite | 5.x | 构建工具 |
| JavaScript | ES6+ | 编程语言 |

### 2.2 性能目标
| 指标 | 目标值 |
|------|--------|
| 帧率 | 60 FPS |
| 首屏加载 | < 3s |
| 内存占用 | < 200MB |

### 2.3 渲染参数
```javascript
const RENDER_CONFIG = {
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
};
```

---

## 3. 3D 场景规格

### 3.1 世界设置
```javascript
const WORLD_CONFIG = {
    size: 100,           // 世界大小 100x100 单位
    cellSize: 1,         // 网格单元 1x1 单位
    gridSize: 100,       // 100x100 网格
    boundaryPadding: 2   // 边界内边距
};
```

### 3.2 相机规格
```javascript
const CAMERA_CONFIG = {
    // 类型：PerspectiveCamera
    fov: 60,                    // 视野角度
    near: 0.1,                  // 近裁切面
    far: 500,                   // 远裁切面
    
    // 跟随参数
    offset: { x: 0, y: 15, z: 15 },  // 从蛇头的偏移
    lookAhead: 5,               // 向前看的距离
    lerpFactor: 0.08,          // 平滑系数 (0-1)
    
    // 角度
    angle: Math.PI / 4,        // 45度俯视角
    
    // 边界限制
    bounds: {
        minX: -50, maxX: 50,
        minZ: -50, maxZ: 50
    }
};
```

### 3.3 光照规格
```javascript
const LIGHTING_CONFIG = {
    // 环境光
    ambient: {
        color: 0x404040,
        intensity: 0.6
    },
    
    // 主方向光 (太阳)
    directional: {
        color: 0xFFFFAA,
        intensity: 1.0,
        position: { x: 10, y: 20, z: 10 },
        castShadow: true,
        shadow: {
            mapSize: { width: 2048, height: 2048 },
            near: 0.5,
            far: 100,
            left: -50,
            right: 50,
            top: 50,
            bottom: -50
        }
    },
    
    // 补光 (可选)
    fill: {
        color: 0x4444AA,
        intensity: 0.3,
        position: { x: -10, y: 5, z: -10 }
    }
};
```

---

## 4. 蛇模型规格

### 4.1 蛇头
```javascript
const SNAKE_HEAD_CONFIG = {
    // 几何体
    body: {
        type: 'CylinderGeometry',
        radiusTop: 0.6,
        radiusBottom: 0.7,
        height: 0.8,
        radialSegments: 12
    },
    
    // 材质
    material: {
        type: 'MeshLambertMaterial',
        color: 0xFFCC00,       // 亮黄色
        flatShading: true
    },
    
    // 眼睛
    eyes: {
        radius: 0.15,
        color: 0xFFFFFF,       // 白色
        pupilRadius: 0.08,
        pupilColor: 0x000000,
        offset: { x: 0.3, y: 0.3, z: 0.35 },
        spacing: 0.25
    },
    
    // 舌头
    tongue: {
        enabled: true,
        basePosition: { x: 0, y: 0.2, z: -0.5 },
        maxLength: 1.2,
        minLength: 0.1,
        forkAngle: 0.3,        // 弧度
        width: 0.06
    },
    
    // 缩放
    scale: { x: 1, y: 0.8, z: 1.2 }
};
```

### 4.2 蛇身段
```javascript
const SNAKE_BODY_CONFIG = {
    // 每段几何体
    segment: {
        type: 'CylinderGeometry',
        radiusTop: 0.45,
        radiusBottom: 0.5,
        height: 0.6,
        radialSegments: 10
    },
    
    // 连接球体
    joint: {
        type: 'SphereGeometry',
        radius: 0.5,
        segments: 8
    },
    
    // 材质
    material: {
        type: 'MeshLambertMaterial',
        color: 0xFFCC00,
        flatShading: true
    },
    
    // 间距
    spacing: 0.7,
    
    // 跟随参数
    follow: {
        lerpFactor: 0.15,      // 基础插值
        lerpIncrement: 0.02    // 每段递增
    },
    
    // 初始长度
    initialLength: 5,
    
    // 最大长度
    maxLength: 50
};
```

### 4.3 蛇尾
```javascript
const SNAKE_TAIL_CONFIG = {
    // 几何体 (锥形)
    geometry: {
        type: 'ConeGeometry',
        radius: 0.4,
        height: 0.8,
        radialSegments: 8
    },
    
    // 材质
    material: {
        type: 'MeshLambertMaterial',
        color: 0xFFCC00,
        flatShading: true
    },
    
    // 位置
    offset: 0.3
};
```

---

## 5. 舌头动画规格

### 5.1 动画状态机
```
┌─────────────────────────────────────────────┐
│                   IDLE                      │
│  - 舌头收起或微颤                           │
│  - 持续时间: 随机 3-5 秒                     │
│  - 触发: timer >= idleDuration              │
└────────────────────┬────────────────────────┘
                     │ trigger
                     ▼
┌─────────────────────────────────────────────┐
│               EXTENDING                     │
│  - 舌头从 minLength 伸出到 maxLength        │
│  - 伸出速度: extendSpeed (0.15/帧)          │
│  - 触发: length >= maxLength               │
└────────────────────┬────────────────────────┘
                     │ complete
                     ▼
┌─────────────────────────────────────────────┐
│               RETRACTING                    │
│  - 舌头从 maxLength 缩回到 minLength        │
│  - 缩回速度: retractSpeed (0.2/帧)          │
│  - 触发: length <= minLength               │
└────────────────────┬────────────────────────┘
                     │ complete
                     ▼
              (回到 IDLE)
```

### 5.2 舌头参数
```javascript
const TONGUE_CONFIG = {
    // 几何
    geometry: {
        type: 'BufferGeometry',    // 动态生成
        widthBase: 0.06,           // 底部宽度
        widthTip: 0.02,            // 顶部宽度
        segments: 8                // 细分段数
    },
    
    // 材质
    material: {
        type: 'MeshBasicMaterial',
        color: 0xFF3333,           // 红色
        side: THREE.DoubleSide
    },
    
    // 动画
    animation: {
        extendSpeed: 0.15,          // 伸出速度
        retractSpeed: 0.2,          // 缩回速度
        maxLength: 1.2,            // 最大长度
        minLength: 0.1,            // 最小/收起长度
        flickerSpeed: 0.3,         // 颤抖速度
        flickerAmount: 0.02        // 颤抖幅度
    },
    
    // 形态
    shape: {
        forkAngle: 0.3,           // 分叉角度 (弧度)
        curveAmount: 0.1           // 弯曲程度
    },
    
    // 触发
    trigger: {
        idleDurationMin: 3,        // 最小空闲时间 (秒)
        idleDurationMax: 5,        // 最大空闲时间 (秒)
        alwaysOut: false           // 是否始终伸出
    },
    
    // 位置 (相对于蛇头)
    position: { x: 0, y: 0.2, z: -0.5 }
};
```

### 5.3 舌头渲染细节
```javascript
// V形舌头几何体生成
function createTongueGeometry(length, forkAngle, width) {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const midZ = -length * 0.5;  // 分叉开始的位置
    
    // 左半边
    for (let i = 0; i <= 8; i++) {
        const t = i / 8;
        const z = -length * t;
        const w = t < 0.5 ? width : width * (1 - t);
        vertices.push(-w, 0, z);
    }
    
    // 右半边 (镜像)
    for (let i = 8; i >= 0; i--) {
        const t = i / 8;
        const z = -length * t;
        const w = t < 0.5 ? width : width * (1 - t);
        vertices.push(w, 0, z);
    }
    
    // 分叉部分
    // ... (省略)
    
    geometry.setAttribute('position', 
        new THREE.Float32BufferAttribute(vertices, 3));
    geometry.computeVertexNormals();
    return geometry;
}
```

---

## 6. 食物规格

### 6.1 苹果
```javascript
const APPLE_CONFIG = {
    // 几何体组合
    parts: {
        body: {
            type: 'SphereGeometry',
            radius: 0.4,
            widthSegments: 10,
            heightSegments: 8
        },
        stem: {
            type: 'CylinderGeometry',
            radiusTop: 0.03,
            radiusBottom: 0.05,
            height: 0.2,
            radialSegments: 6
        },
        leaf: {
            type: 'SphereGeometry',
            radiusX: 0.15,
            radiusY: 0.08,
            radiusZ: 0.04
        }
    },
    
    // 材质
    material: {
        body: {
            type: 'MeshLambertMaterial',
            color: 0xFF3333,
            flatShading: true
        },
        stem: {
            type: 'MeshLambertMaterial',
            color: 0x886633
        },
        leaf: {
            type: 'MeshLambertMaterial',
            color: 0x44CC44
        }
    },
    
    // 位置偏移
    offsets: {
        stem: { x: 0, y: 0.35, z: 0 },
        leaf: { x: 0.12, y: 0.4, z: 0.05 }
    },
    
    // 动画
    animation: {
        bobSpeed: 2,              // 上下浮动速度
        bobAmount: 0.05,         // 浮动幅度
        rotateSpeed: 0.5         // 旋转速度
    },
    
    // 生成
    spawn: {
        minDistance: 5           // 离蛇头最小距离
    }
};
```

---

## 7. 障碍物规格

### 7.1 树桩
```javascript
const STUMP_CONFIG = {
    geometry: {
        body: {
            type: 'CylinderGeometry',
            radiusTop: 0.8,
            radiusBottom: 1.0,
            height: 1.5,
            radialSegments: 8
        },
        top: {
            type: 'CircleGeometry',
            radius: 0.8,
            segments: 8
        }
    },
    
    material: {
        body: {
            type: 'MeshLambertMaterial',
            color: 0x886644,
            flatShading: true
        },
        top: {
            type: 'MeshLambertMaterial',
            color: 0xDDAA55,
            flatShading: true
        }
    },
    
    shadow: {
        cast: true,
        receive: true
    }
};
```

### 7.2 石块
```javascript
const ROCK_CONFIG = {
    geometry: {
        type: 'DodecahedronGeometry',
        radius: 0.6,
        detail: 0              // 0 = 低多边形
    },
    
    material: {
        type: 'MeshLambertMaterial',
        color: 0xAAAAAA,
        flatShading: true
    },
    
    rotation: {
        x: Math.random() * 0.3,
        y: Math.random() * Math.PI * 2,
        z: Math.random() * 0.3
    }
};
```

### 7.3 生成规则
```javascript
const OBSTACLE_SPAWN_CONFIG = {
    // Obstacle 模式
    obstacleMode: {
        initialCount: 5,         // 初始障碍物数量
        maxCount: 15,            // 最大数量
        spawnInterval: 30,       // 每多少分生成一个新
        types: ['stump', 'rock'],
        weights: [0.6, 0.4]     // 概率权重
    },
    
    // 通用
    worldPadding: 5,            // 世界边缘内边距
    minDistanceFromSnake: 3,   // 离蛇最小距离
    minDistanceFromFood: 2    // 离食物最小距离
};
```

---

## 8. 地面规格

### 8.1 草地
```javascript
const GROUND_CONFIG = {
    geometry: {
        type: 'PlaneGeometry',
        width: 100,
        height: 100,
        widthSegments: 50,
        heightSegments: 50
    },
    
    material: {
        type: 'MeshLambertMaterial',
        color: 0x228822,
        flatShading: true
    },
    
    // 高度变化 (可选)
    heightVariation: {
        enabled: true,
        maxHeight: 0.3,
        frequency: 0.1
    },
    
    rotation: {
        x: -Math.PI / 2         // 旋转为水平
    }
};
```

### 8.2 地面棋盘格纹理 (可选)
```javascript
const GROUND_TEXTURE_CONFIG = {
    enabled: false,             // 暂时禁用简化
    colors: {
        light: 0x44AA44,
        dark: 0x228822
    },
    cellSize: 2                // 每格大小
};
```

---

## 9. 游戏逻辑规格

### 9.1 游戏状态
```javascript
const GAME_STATES = {
    MENU: 'menu',              // 菜单
    PLAYING: 'playing',        // 游戏中
    PAUSED: 'paused',          // 暂停
    GAME_OVER: 'gameOver'      // 游戏结束
};
```

### 9.2 蛇移动
```javascript
const SNAKE_MOVEMENT_CONFIG = {
    // 移动速度 (单位/秒)
    speed: 5,
    
    // 方向
    directions: {
        UP: { x: 0, z: -1 },
        DOWN: { x: 0, z: 1 },
        LEFT: { x: -1, z: 0 },
        RIGHT: { x: 1, z: 0 }
    },
    
    // 输入
    input: {
        type: 'discrete',       // discrete = 方向变化
        queueSize: 2            // 方向队列大小
    }
};
```

### 9.3 碰撞检测
```javascript
const COLLISION_CONFIG = {
    // 检测类型
    checkWall: true,           // 撞墙
    checkSelf: true,           // 撞自己
    checkObstacle: true,       // 撞障碍物
    checkFood: true,           // 吃食物
    
    // 检测半径
    headRadius: 0.6,
    bodyRadius: 0.4,
    foodRadius: 0.4,
    obstacleRadius: 0.8,
    
    // 边界
    bounds: {
        minX: -48, maxX: 48,
        minZ: -48, maxZ: 48
    }
};
```

---

## 10. 游戏模式规格

### 10.1 经典模式 (Classic)
```javascript
const CLASSIC_MODE = {
    name: '经典',
    icon: '🎮',
    timeLimit: null,           // 无限时间
    obstacles: false,          // 无障碍物
    speedIncrease: false       // 不加速
};
```

### 10.2 限时模式 (Time Attack)
```javascript
const TIME_MODE = {
    name: '限时',
    icon: '⏱️',
    timeLimit: 60,             // 60秒
    obstacles: false,
    speedIncrease: true,       // 每50分加速
    speedIncrement: 0.5,        // 每次加速增量
    maxSpeed: 10               // 最大速度
};
```

### 10.3 障碍模式 (Obstacle)
```javascript
const OBSTACLE_MODE = {
    name: '障碍',
    icon: '🧱',
    timeLimit: null,
    obstacles: true,
    initialObstacles: 5,
    spawnInterval: 30          // 每30分生成一个
};
```

---

## 11. 计分规格

### 11.1 分数规则
```javascript
const SCORING_CONFIG = {
    eatFood: 10,               // 吃一个苹果 +10
    surviveTime: 5,            // 每存活10秒 +5 (仅限时模式)
    bonusMultiplier: 1         // 暂时禁用倍数
};
```

### 11.2 最高分
```javascript
const HIGH_SCORE_CONFIG = {
    storage: 'localStorage',   // 存储位置
    key: 'snakeV3_highscores',
    perMode: true              // 按模式存储
};
```

---

## 12. UI 规格

### 12.1 HUD 布局
```
┌─────────────────────────────────────────────┐
│ 🎮 经典    分数: 1250      ⏱️ --           │
│                                             │
│                                             │
│              [3D 游戏画面]                   │
│                                             │
│                                             │
│                                             │
└─────────────────────────────────────────────┘
```

### 12.2 HUD 样式
```javascript
const HUD_CONFIG = {
    position: 'top',
    background: 'rgba(0,0,0,0.5)',
    color: '#FFFFFF',
    fontFamily: 'Arial, sans-serif',
    fontSize: '20px',
    padding: '10px 20px',
    borderRadius: '10px',
    scorePrefix: '分数: ',
    timePrefix: '⏱️ '
};
```

### 12.3 菜单
```javascript
const MENU_CONFIG = {
    // 标题
    title: {
        text: '🐍 贪食蛇 3D 🐍',
        fontSize: '48px',
        color: '#FFCC00',
        shadow: '0 0 20px #FF8800'
    },
    
    // 按钮
    buttons: [
        { text: '▶ 开始游戏', action: 'startGame', primary: true },
        { text: '🏆 最高分', action: 'showHighScores', primary: false }
    ],
    
    // 按钮样式
    buttonStyle: {
        width: '240px',
        height: '60px',
        fontSize: '24px',
        borderRadius: '30px',
        background: 'linear-gradient(180deg, #55DD55, #22AA22)',
        color: '#FFFFFF',
        border: 'none',
        cursor: 'pointer'
    }
};
```

### 12.4 游戏结束弹窗
```javascript
const GAME_OVER_CONFIG = {
    title: {
        text: '💀 游戏结束 💀',
        fontSize: '48px',
        color: '#FF4444'
    },
    showFinalScore: true,
    showNewRecord: true,
    buttons: [
        { text: '🔄 再来一局', action: 'restart' },
        { text: '📜 返回菜单', action: 'menu' }
    ]
};
```

---

## 13. 输入规格

### 13.1 键盘
```javascript
const KEYBOARD_INPUT = {
    // 方向键
    ArrowUp: 'UP',
    ArrowDown: 'DOWN',
    ArrowLeft: 'LEFT',
    ArrowRight: 'RIGHT',
    
    // WASD
    KeyW: 'UP',
    KeyS: 'DOWN',
    KeyA: 'LEFT',
    KeyD: 'RIGHT',
    
    // 其他
    Space: 'PAUSE',
    Escape: 'PAUSE'
};
```

### 13.2 触摸
```javascript
const TOUCH_INPUT = {
    enabled: true,
    swipeThreshold: 30,       // 触发滑动的最小距离
    deadzone: 10               // 不响应的区域
};
```

---

## 14. 音效规格 (可选)

### 14.1 音效列表
```javascript
const AUDIO_CONFIG = {
    enabled: false,            // 默认关闭
    volume: 0.5,
    
    sounds: {
        eat: 'eat.wav',
        wallHit: 'wall.wav',
        gameOver: 'gameover.wav',
        menuClick: 'click.wav'
    }
};
```

---

## 15. 项目文件清单

```
snake-game-v3/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.js              # 入口
│   ├── Game.js              # 游戏主类
│   ├── Snake.js             # 蛇逻辑
│   ├── SnakeMesh.js         # 蛇 3D 渲染
│   ├── Tongue.js            # 舌头动画
│   ├── Food.js              # 食物逻辑 & 渲染
│   ├── Obstacle.js          # 障碍物逻辑 & 渲染
│   ├── Camera.js            # 相机系统
│   ├── Environment.js       # 地面、天空
│   ├── Input.js              # 输入处理
│   ├── UI.js                # UI 管理
│   ├── Audio.js             # 音效 (可选)
│   └── utils/
│       └── helpers.js
├── styles/
│   └── main.css
└── public/
    └── (静态资源)
```

---

## 16. 测试清单

### 16.1 功能测试
- [ ] 游戏开始/结束
- [ ] 蛇移动方向控制
- [ ] 吃食物得分
- [ ] 蛇身增长
- [ ] 撞墙游戏结束
- [ ] 撞自己游戏结束
- [ ] 障碍物碰撞
- [ ] 三种游戏模式切换
- [ ] 暂停/继续
- [ ] 最高分保存/读取

### 16.2 渲染测试
- [ ] 3D 场景加载
- [ ] 相机跟随平滑
- [ ] 蛇模型正确显示
- [ ] 舌头动画正常
- [ ] 食物和障碍物渲染
- [ ] 阴影正确显示
- [ ] 帧率稳定 60FPS

### 16.3 交互测试
- [ ] 键盘控制
- [ ] 触摸控制
- [ ] 移动端适配

---

## 17. 已知限制

1. **低多边形风格限制** - 模型简单，视觉不如高精度 3D
2. **性能限制** - 不支持过多粒子效果
3. **无网络功能** - 纯客户端游戏
4. **无存档** - 仅 localStorage 存储最高分

---

## 18. 未来扩展 (不在本版本范围)

- [ ] 多人联机
- [ ] 更多皮肤/蛇模型
- [ ] 关卡系统
- [ ] 道具系统
- [ ] 音效和音乐
- [ ] 成就系统

---

*Specification Version 5.0 - True 3D Snake Game*
*Last Updated: 2026-03-26*
