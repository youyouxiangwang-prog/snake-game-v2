# Constitution - Snake Game V2

**Project**: Snake Game V2
**Created**: 2026-03-25

---

## Global Rules

### 技术栈
- **前端**: 纯 HTML5 + CSS3 + Vanilla JavaScript（无框架依赖）
- **渲染**: Canvas 2D API
- **构建**: 无需打包，single-file HTML 可直接运行
- **测试**: 浏览器原生调试

### 代码规范
- 所有变量/函数命名：**小驼峰** (camelCase)
- 常量命名：**大写下划线** (UPPER_SNAKE_CASE)
- 类名：**大驼峰** (PascalCase)
- 文件名：**小驼峰** (camelCase.html/css/js)

### 项目结构
```
snake-game-v2/
├── index.html          # 入口文件（单一HTML，包含所有CSS/JS）
├── SPEC.md             # 项目规范文档
├── .specify/
│   ├── CONSTITUTION.md  # 宪法（死规矩）
│   ├── SPEC.md          # 需求规范
│   ├── CLARIFY.md       # 澄清问答
│   └── PLAN.md          # 实施计划
└── assets/             # 静态资源（图片/音频）
```

### 核心原则
1. **性能优先**: 60fps 渲染，游戏逻辑与渲染分离
2. **移动优先**: 响应式设计，移动端触摸操作优先
3. **渐进增强**: 基础功能优先，音效/特效可禁用
4. **本地存储**: 高分榜/设置存储在 localStorage

### 禁止事项
- ❌ 禁止引入任何外部框架（React/Vue/jQuery 等）
- ❌ 禁止修改他人负责的模块
- ❌ 禁止在未澄清疑问前开始编码
- ❌ 禁止跳过任何 Phase 直接实现

### 决策权
- 任何业务逻辑变更必须经过 Clarify 阶段确认
- 技术实现可自行决定，但需符合 Constitution 规则
- 遇到冲突优先遵循 Constitution

---

*This constitution is binding for all contributors.*
