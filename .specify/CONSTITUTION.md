# Constitution - Snake Game V2 (3D Cartoon Edition)

**Project**: Snake Game V2
**Style**: 3D Cartoon / Glossy & Playful
**Created**: 2026-03-25

---

## Global Rules

### 技术栈
- **前端**: 纯 HTML5 + CSS3 + Vanilla JavaScript
- **渲染**: Canvas 2D API（带3D模拟效果）
- **构建**: 单一 HTML 文件，可直接运行
- **资源**: 内联 SVG / CSS 绘制（无外部图片依赖）

### 3D 模拟技术
使用以下技术模拟 3D 效果：
- **径向渐变**: 模拟光泽和高光
- **CSS 阴影**: 模拟物体厚度和投影
- **多层叠加**: 前景/中景/背景分层
- **缩放透视**: 模拟远近效果
- **动画模糊**: 速度线效果

### 代码规范
- **变量/函数**: 小驼峰 (camelCase)
- **常量**: 大写下划线 (UPPER_SNAKE_CASE)
- **类名**: 大驼峰 (PascalCase)
- **文件名**: 小写 + 连字符 (kebab-case.html)

### 项目结构
```
snake-game-v2/
├── index.html          # 入口（单一文件）
├── SPEC.md             # 项目规范
├── .specify/
│   ├── CONSTITUTION.md # 宪法
│   ├── SPEC.md         # 需求规范
│   ├── CLARIFY.md      # 澄清
│   └── PLAN.md         # 实施计划
└── tests/              # 测试文件
```

### 核心原则
1. **3D 质感**: 光泽表面、圆润造型、高光与阴影
2. **卡通风格**: 大眼睛、夸张表情、鲜艳色彩
3. **速度感**: 动态模糊、速度线、粒子效果
4. **高饱和度**: 蓝/绿/红为主，饱和度高

### 禁止事项
- ❌ 暗色系/赛博朋克风格
- ❌ 扁平设计
- ❌ 跳过澄清直接实现

---

*This constitution is binding for all contributors.*
