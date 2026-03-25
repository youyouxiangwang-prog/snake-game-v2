# 贪食蛇 3D - 部署文档

## 部署状态

**生产环境**: https://snake-v2.soul-cap.space

## 架构

```
snake-game-v2/
├── index.html          # 游戏主文件 (单文件部署)
├── .github/
│   └── workflows/
│       └── deploy.yml  # CI/CD 自动化部署
├── tests/
│   └── game.test.js    # Playwright 测试
└── .specify/           # 设计规范文档
```

## 部署方式

### 方式 1: 手动部署

```bash
# 构建
npm run build

# 上传到服务器
scp -r dist/* user@server:/var/www/snake-v2/
```

### 方式 2: GitHub Actions (推荐)

推送到 `master` 分支自动触发部署：

```yaml
# .github/workflows/deploy.yml
on:
  push:
    branches: [master]
```

**注意**: 需要 GitHub Token 具有 `workflow` 权限才能推送 Actions 密钥。

## 测试

```bash
# 安装依赖
npm install

# 运行测试
npm test

# 浏览器测试
npx playwright test --headed
```

## 环境要求

- Node.js >= 18
- npm >= 9
- Playwright (测试用)

## 生产环境

- Web 服务器: Nginx / Apache / Vercel / Netlify
- SSL 证书: 自动配置
- 域名: snake-v2.soul-cap.space

## 更新日志

| 版本 | 日期 | 更新内容 |
|------|------|----------|
| 4.0 | 2026-03-25 | 增强 3D 效果 (光影、投影、边缘光) |
| 3.0 | 2026-03-25 | 全新 3D 卡通风格 |
| 2.0 | 2026-03-25 | 多游戏模式 |
| 1.0 | 2026-03-25 | 初始版本 |

## 常见问题

### Q: 部署后没有更新？
清除浏览器缓存或强制刷新 `Ctrl+Shift+R`

### Q: GitHub Actions 部署失败？
检查 token 权限是否包含 `workflow`

### Q: 游戏无法加载？
检查浏览器控制台是否有跨域错误
