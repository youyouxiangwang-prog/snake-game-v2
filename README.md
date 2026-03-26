# 🐍 贪食蛇 3D (Snake Game V3)

> 真正的 3D 低多边形风格贪食蛇游戏

![Version](https://img.shields.io/badge/version-5.0-blue)
![Three.js](https://img.shields.io/badge/Three.js-r183-green)
![License](https://img.shields.io/badge/license-MIT-yellow)

## 🎮 预览

**即将推出**: 真正的 3D 贪食蛇游戏

### 特性亮点
- 🕹️ **Three.js 3D 渲染** - 真正的 3D 世界
- 📷 **相机跟随系统** - 平滑跟随蛇移动
- 👅 **舌头动画** - V形分叉舌头动画
- 🎨 **低多边形风格** - 复古 90 年代美感
- 📱 **移动端支持** - 触摸控制

## 📸 参考风格

基于低多边形复古风格的 3D 蛇游戏：

- 黄色蛇身 + 绿色草地
- 树桩和石块障碍物
- 流畅的相机滚动
- 动态舌头动画

## 🏗️ 技术栈

| 技术 | 用途 |
|------|------|
| [Three.js](https://threejs.org/) | 3D 渲染引擎 |
| [Vite](https://vitejs.dev/) | 开发服务器 & 构建 |
| JavaScript | 编程语言 |

## 📁 项目结构

```
snake-game-v2/
├── index.html              # 入口 HTML
├── src/
│   ├── main.js             # 主入口
│   ├── Game.js             # 游戏主循环
│   ├── Snake.js            # 蛇逻辑
│   ├── SnakeMesh.js        # 蛇的 3D 渲染
│   ├── Tongue.js           # 舌头动画
│   ├── Food.js             # 食物逻辑
│   ├── Obstacle.js         # 障碍物
│   ├── Camera.js           # 相机跟随系统
│   ├── Environment.js       # 地面、天空
│   ├── UI.js               # 分数 HUD
│   └── Input.js            # 输入控制
├── research/
│   └── 3D_TECHNOLOGY_RESEARCH.md  # 技术调研
├── .specify/              # 设计规范
│   ├── CONSTITUTION.md     # 设计原则
│   ├── SPEC.md             # 详细规范
│   ├── CLARIFY.md          # 澄清文档
│   └── PLAN.md             # 实施计划
└── styles/
    └── main.css
```

## 🚀 开发进度

### 已完成 (Phase 0-1)
- [x] 调研报告 (3D_TECHNOLOGY_RESEARCH.md)
- [x] 设计原则 (CONSTITUTION.md)

### 进行中
- [ ] SPEC.md (详细规范)
- [ ] CLARIFY.md (澄清问题)
- [ ] PLAN.md (实施计划)

### 待开发
- [ ] Three.js 场景初始化
- [ ] 相机跟随系统
- [ ] 3D 蛇模型 + 移动
- [ ] 舌头动画
- [ ] 食物和障碍物
- [ ] 游戏循环和碰撞检测
- [ ] UI (分数、HUD)
- [ ] 移动端触摸控制

## 🎯 核心特性

### 相机系统
```javascript
// 相机平滑跟随蛇头
const CAMERA_CONFIG = {
    offset: { x: 0, y: 15, z: 15 },
    lerpFactor: 0.08,
    lookAhead: 5
};
```

### 舌头动画
```javascript
// V形分叉舌头
const TONGUE_CONFIG = {
    maxLength: 1.2,
    forkAngle: 0.3,
    extendSpeed: 0.15,
    retractSpeed: 0.2
};
```

## 🎮 操作说明

### 键盘
| 按键 | 动作 |
|------|------|
| ↑ / W | 向上移动 |
| ↓ / S | 向下移动 |
| ← / A | 向左移动 |
| → / D | 向右移动 |
| Space | 暂停/继续 |

### 触摸
| 手势 | 动作 |
|------|------|
| 向上滑 | 向上移动 |
| 向下滑 | 向下移动 |
| 向左滑 | 向左移动 |
| 向右滑 | 向右移动 |

## 🕹️ 游戏模式

| 模式 | 描述 |
|------|------|
| 🎮 经典 | 无限时间，无尽模式 |
| ⏱️ 限时 | 60 秒倒计时，比速度 |
| 🧱 障碍 | 随机障碍物，增加难度 |

## 📦 安装和运行

```bash
# 克隆仓库
git clone https://github.com/youyouxiangwang-prog/snake-game-v2.git
cd snake-game-v2

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build
```

## 🧪 测试

```bash
# 运行 Playwright 测试
npm test
```

## 🌐 部署

**当前版本**: https://snake-v2.soul-cap.space

**旧版 V1**: https://snake.soul-cap.space/games/snake-game/

**新版 V3**: 即将部署...

## 📝 开发日志

| 日期 | 版本 | 更新内容 |
|------|------|----------|
| 2026-03-26 | 5.0 | 开始 V3 (True 3D) 开发 |
| 2026-03-25 | 4.0 | 增强 3D 效果 (假 3D) |
| 2026-03-25 | 3.0 | 3D 卡通风格 |
| 2026-03-25 | 2.0 | 多游戏模式 |
| 2026-03-25 | 1.0 | 初始版本 |

## 📚 参考资源

- [Three.js 官方文档](https://threejs.org/docs/)
- [Three.js 示例](https://threejs.org/examples/)
- [SimonDev Three.js 教程](https://simondev.io/)
- [低多边形建模技巧](https://styly.cc/tips/lowpoly_3d/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

**Made with 🐍 and Three.js**
