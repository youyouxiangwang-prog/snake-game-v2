# Plan - Snake Game V2

**Project**: Snake Game V2
**Date**: 2026-03-25
**Status**: Ready for Implementation

---

## Implementation Phases

### Phase 1: Foundation (核心基础)

#### Step 1: 创建项目结构和HTML模板
- [ ] 创建 `index.html` 基础结构
- [ ] 设置 CSS 变量（颜色、尺寸）
- [ ] 创建 Canvas 元素
- [ ] 引入 Google Fonts

#### Step 2: 实现游戏状态机
- [ ] 定义游戏状态枚举 (MENU, PLAYING, PAUSED, GAME_OVER)
- [ ] 创建状态管理变量
- [ ] 实现状态切换函数

#### Step 3: 实现蛇的移动
- [ ] 蛇身数据结构（数组，每个元素{x, y}）
- [ ] 移动方向管理 (dx, dy)
- [ ] 键盘/触摸输入处理
- [ ] 游戏循环 (requestAnimationFrame)

#### Step 4: 实现食物系统
- [ ] 食物随机生成
- [ ] 吃食物检测
- [ ] 蛇身增长逻辑
- [ ] 分数增加

#### Step 5: 实现碰撞检测
- [ ] 撞墙检测
- [ ] 撞自己检测
- [ ] Game Over 触发

---

### Phase 2: Game Modes (游戏模式)

#### Step 6: Classic Mode
- [ ] 基础模式完整实现
- [ ] 无时间限制
- [ ] 无道具

#### Step 7: Time Attack Mode
- [ ] 60秒倒计时
- [ ] 计时器显示
- [ ] 时间耗尽 Game Over
- [ ] 速度递增逻辑

#### Step 8: Obstacle Mode
- [ ] 障碍物生成
- [ ] 障碍物碰撞检测
- [ ] 障碍物渲染

---

### Phase 3: Power-ups & Effects (道具与特效)

#### Step 9: 道具系统
- [ ] 道具数据结构
- [ ] 道具生成逻辑
- [ ] 道具效果实现
- [ ] 道具消失机制

#### Step 10: 视觉效果
- [ ] 食物发光动画
- [ ] 道具旋转动画
- [ ] 碰撞屏幕闪烁
- [ ] 粒子效果（可选）

---

### Phase 4: UI & Polish (界面与完善)

#### Step 11: 主菜单 UI
- [ ] 标题动画
- [ ] 按钮样式
- [ ] 粒子背景

#### Step 12: 游戏内 UI
- [ ] 分数显示
- [ ] 模式显示
- [ ] 道具状态图标

#### Step 13: 游戏结束 UI
- [ ] 分数展示
- [ ] 重玩/菜单按钮
- [ ] 高分比较

#### Step 14: 音效系统
- [ ] Web Audio API 封装
- [ ] BGM 循环
- [ ] 音效播放

#### Step 15: 本地存储
- [ ] 高分榜存储
- [ ] 设置存储
- [ ] 皮肤解锁存储

---

### Phase 5: Advanced Features (高级功能)

#### Step 16: 蛇皮肤系统
- [ ] 皮肤数据结构
- [ ] 皮肤渲染
- [ ] 解锁逻辑
- [ ] 渐变效果

#### Step 17: 移动端优化
- [ ] 响应式布局
- [ ] 触摸控制
- [ ] 触控区方向按钮

---

## File Structure (最终)

```
index.html  (单一文件，包含所有代码)
├── <style> CSS样式
├── <canvas> 游戏画布
├── <div> UI元素
└── <script>
    ├── 常量定义
    ├── 游戏状态
    ├── 渲染函数
    ├── 游戏逻辑
    ├── 输入处理
    ├── UI管理
    └── 音效处理
```

---

## opencode 命令

完成 Phase 1-3 后使用：
```bash
opencode run 'Implement snake movement and collision detection'
opencode run 'Implement food and scoring system'
opencode run 'Add game modes (Classic, Time Attack, Obstacle)'
opencode run 'Implement power-up system'
opencode run 'Add UI screens (menu, game over)'
opencode run 'Add sound effects'
opencode run 'Implement snake skins'
```

---

*Plan Ready: Awaiting Implementation*
