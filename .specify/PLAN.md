# PLAN.md - Snake Game V3 (True 3D)

**Project**: 贪食蛇 3D 版
**Date**: 2026-03-26
**Status**: Ready for Implementation
**Constitution**: CONSTITUTION.md
**Specification**: SPEC.md

---

## Implementation Phases

### Phase 1: 项目初始化 (Setup)

#### Step 1.1: 初始化项目
```bash
# 创建项目目录结构
mkdir -p snake-game-v3/src/{game,3d,ui,utils}
mkdir -p snake-game-v3/styles
mkdir -p snake-game-v3/public

# 初始化 package.json
npm init -y

# 安装依赖
npm install three vite
npm install -D playwright
```

#### Step 1.2: 创建入口文件
- [ ] `index.html` - HTML 入口
- [ ] `src/main.js` - 主入口
- [ ] `vite.config.js` - Vite 配置
- [ ] `styles/main.css` - 基础样式

---

### Phase 2: 3D 场景基础 (Scene Foundation)

#### Step 2.1: Three.js 场景初始化
- [ ] 创建 Scene
- [ ] 设置 PerspectiveCamera (60 FOV)
- [ ] 配置 WebGLRenderer (antialias, shadows)
- [ ] 添加 AmbientLight (0x404040, 0.6)
- [ ] 添加 DirectionalLight (0xFFFFAA, 1.0, 投射阴影)

#### Step 2.2: 相机系统
- [ ] 创建 `src/3d/Camera.js`
- [ ] 实现 `Camera.follow(target)` 方法
- [ ] 实现 `Camera.update()` 平滑跟随
- [ ] 设置相机偏移 `{x:0, y:15, z:15}`
- [ ] 设置 45 度俯视角度

#### Step 2.3: 环境
- [ ] 创建 `src/3d/Environment.js`
- [ ] 实现草地 (PlaneGeometry, 100x100)
- [ ] 配置 flatShading 材质
- [ ] 草地颜色 (0x228822)

---

### Phase 3: 蛇的实现 (Snake Implementation)

#### Step 3.1: 蛇模型
- [ ] 创建 `src/3d/SnakeMesh.js`
- [ ] 创建蛇头 (CylinderGeometry, 扁平)
- [ ] 创建蛇身段 (CylinderGeometry + SphereGeometry 连接)
- [ ] 创建蛇尾 (ConeGeometry)
- [ ] 应用 flatShading 黄色材质

#### Step 3.2: 蛇眼睛
- [ ] 添加蛇头眼睛 (白色球体 + 黑色瞳孔)
- [ ] 眼睛位置偏移 (两侧对称)

#### Step 3.3: 蛇身移动
- [ ] 创建 `src/game/Snake.js`
- [ ] 实现 `Snake.move(direction)` 移动逻辑
- [ ] 实现 `Snake.update()` 每帧更新
- [ ] 蛇身段跟随算法 (lerp 插值)

---

### Phase 4: 舌头动画 (Tongue Animation)

#### Step 4.1: 舌头基础
- [ ] 创建 `src/3d/Tongue.js`
- [ ] 创建 V 形几何体
- [ ] 添加到蛇头
- [ ] 红色材质

#### Step 4.2: 舌头动画
- [ ] 实现状态机 (EXTENDING / RETRACTING)
- [ ] 实现 `Tongue.update(deltaTime)`
- [ ] 总是伸出模式 (简化)
- [ ] 轻微颤抖效果

---

### Phase 5: 食物和障碍物 (Food & Obstacles)

#### Step 5.1: 苹果
- [ ] 创建 `src/3d/Food.js`
- [ ] 球体主体 (红色)
- [ ] 茎 (小圆柱, 棕色)
- [ ] 叶子 (小球, 绿色)
- [ ] 浮动动画 (上下 + 旋转)

#### Step 5.2: 障碍物
- [ ] 创建 `src/3d/Obstacle.js`
- [ ] 树桩模型 (CylinderGeometry, 棕色)
- [ ] 岩石模型 (DodecahedronGeometry, 灰色)
- [ ] 随机生成逻辑

#### Step 5.3: 碰撞检测
- [ ] 墙壁碰撞
- [ ] 自身碰撞
- [ ] 障碍物碰撞
- [ ] 食物碰撞 (吃)

---

### Phase 6: 游戏循环 (Game Loop)

#### Step 6.1: 游戏状态
- [ ] 创建 `src/game/Game.js`
- [ ] 状态机 (MENU, PLAYING, PAUSED, GAME_OVER)
- [ ] 分数系统
- [ ] 时间系统 (限时模式)

#### Step 6.2: 游戏模式
- [ ] 经典模式
- [ ] 限时模式
- [ ] 障碍模式

#### Step 6.3: 循环更新
- [ ] `Game.update()` 主循环
- [ ] `Game.render()` 渲染调用
- [ ] 帧率控制 (requestAnimationFrame)

---

### Phase 7: 输入系统 (Input System)

#### Step 7.1: 键盘输入
- [ ] 创建 `src/utils/Input.js`
- [ ] 方向键监听
- [ ] WASD 支持
- [ ] 暂停键 (Space, Escape)

#### Step 7.2: 触摸输入
- [ ] 触摸滑动检测
- [ ] 方向识别
- [ ] 移动端适配

---

### Phase 8: UI 系统 (UI System)

#### Step 8.1: HUD
- [ ] 创建 `src/ui/UI.js`
- [ ] 分数显示
- [ ] 时间显示 (限时模式)
- [ ] 当前模式显示

#### Step 8.2: 菜单
- [ ] 开始菜单
- [ ] 游戏结束弹窗
- [ ] 最高分显示

---

### Phase 9: 测试和修复 (Testing)

#### Step 9.1: 功能测试
- [ ] 游戏开始/结束
- [ ] 移动控制
- [ ] 吃食物得分
- [ ] 碰撞检测
- [ ] 相机跟随

#### Step 9.2: 渲染测试
- [ ] 3D 场景加载
- [ ] 阴影显示
- [ ] 帧率稳定

---

## opencode 命令

```bash
# Phase 2: 3D 场景基础
opencode run 'Create Three.js scene with camera follow system and environment'

# Phase 3: 蛇的实现
opencode run 'Implement 3D snake with head, body segments, tail and movement'

# Phase 4: 舌头动画
opencode run 'Add V-shaped tongue animation to snake head'

# Phase 5: 食物和障碍物
opencode run 'Implement apple food and obstacle models with collision'

# Phase 6-8: 游戏循环、输入、UI
opencode run 'Implement game loop, input handling and UI system'
```

---

## 文件创建顺序

```
1. index.html
2. vite.config.js
3. styles/main.css
4. src/main.js
5. src/utils/helpers.js
6. src/3d/Camera.js
7. src/3d/Environment.js
8. src/3d/SnakeMesh.js
9. src/3d/Tongue.js
10. src/3d/Food.js
11. src/3d/Obstacle.js
12. src/game/Snake.js
13. src/game/Game.js
14. src/utils/Input.js
15. src/ui/UI.js
```

---

## 关键代码片段

### 相机跟随
```javascript
// Camera.js
update() {
    // 目标位置 = 蛇头 + 偏移
    const targetX = this.target.position.x + this.offset.x;
    const targetZ = this.target.position.z + this.offset.z;
    
    // 平滑插值
    this.camera.position.x += (targetX - this.camera.position.x) * 0.08;
    this.camera.position.z += (targetZ + this.offset.z - this.camera.position.z) * 0.08;
    
    // 看向蛇头前方
    this.camera.lookAt(
        this.target.position.x,
        0,
        this.target.position.z + 5
    );
}
```

### 蛇身跟随
```javascript
// Snake.js - 每节跟随前一节
update(deltaTime) {
    for (let i = this.segments.length - 1; i > 0; i--) {
        const current = this.segments[i];
        const target = this.segments[i - 1];
        
        // 跟随前一节之前的位置
        current.position.lerp(target.position, 0.15 + i * 0.02);
    }
}
```

### V形舌头
```javascript
// Tongue.js
update(deltaTime) {
    // 总是伸出状态
    this.length = 1.0 + Math.sin(time * 3) * 0.05;
    this.updateGeometry(this.length);
}
```

---

## 成功标准

```
✅ Three.js 场景正确加载
✅ 相机平滑跟随蛇移动
✅ 蛇模型正确显示 (头+身+尾)
✅ V形舌头可见并动画
✅ 苹果食物显示并可吃
✅ 障碍物生成并可碰撞
✅ 分数正确增加
✅ 游戏可正常结束
✅ 60 FPS 稳定运行
```

---

## 预计时间

| Phase | 内容 | 时间 |
|-------|------|------|
| 1 | 项目初始化 | 10 min |
| 2 | 3D 场景基础 | 30 min |
| 3 | 蛇的实现 | 45 min |
| 4 | 舌头动画 | 20 min |
| 5 | 食物和障碍物 | 30 min |
| 6 | 游戏循环 | 30 min |
| 7 | 输入系统 | 15 min |
| 8 | UI 系统 | 20 min |
| 9 | 测试和修复 | 30 min |
| **Total** | | **~4 hours** |

---

*Plan Ready - Awaiting Implementation*
