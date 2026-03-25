# Plan - Snake Game V2 (Colorful Cartoon Edition)

**Project**: Snake Game V2
**Date**: 2026-03-25
**Status**: Ready for Implementation

---

## Implementation Phases

### Phase 1: Foundation (核心基础)

#### Step 1: 创建 HTML 结构和 CSS 样式
- [ ] HTML 骨架（状态栏、游戏区、按钮）
- [ ] CSS 变量定义（颜色、尺寸）
- [ ] 渐变背景和装饰星星
- [ ] 按钮样式（霓虹发光、悬停效果）
- [ ] 响应式布局

#### Step 2: Canvas 游戏区域
- [ ] Canvas 元素和样式
- [ ] 深蓝网格背景
- [ ] 金色边框和发光效果
- [ ] 坐标系统建立

#### Step 3: 蛇的渲染
- [ ] 蛇数据结构（数组）
- [ ] 蛇身圆角矩形渲染
- [ ] 蛇头眼睛（跟随方向）
- [ ] 蛇身颜色渐变

#### Step 4: 食物渲染
- [ ] 苹果形状（SVG/CSS）
- [ ] 脉冲发光动画
- [ ] 随机位置生成

#### Step 5: 游戏循环
- [ ] requestAnimationFrame 循环
- [ ] 键盘/触摸输入
- [ ] 蛇移动逻辑
- [ ] 碰撞检测

---

### Phase 2: Gameplay (游戏玩法)

#### Step 6: 计分系统
- [ ] 吃食物得分
- [ ] 分数显示动画
- [ ] 本地存储最高分

#### Step 7: 游戏状态机
- [ ] MENU → PLAYING → GAME_OVER → MENU
- [ ] 暂停功能（ESC/点击）

#### Step 8: 游戏模式
- [ ] Classic Mode
- [ ] Time Attack Mode（60秒计时）
- [ ] Obstacle Mode（障碍物）

---

### Phase 3: Polish (完善)

#### Step 9: 道具系统
- [ ] 道具生成逻辑
- [ ] 道具效果实现
- [ ] 道具状态显示

#### Step 10: 粒子效果
- [ ] 吃食物粒子爆发
- [ ] 道具获取特效
- [ ] 游戏结束屏幕震动

#### Step 11: UI 动画
- [ ] 菜单滑入动画
- [ ] 按钮悬停效果
- [ ] 分数增加弹跳

---

### Phase 4: Launch (发布)

#### Step 12: 音效（可选）
- [ ] Web Audio API 封装
- [ ] 音效播放
- [ ] 设置界面

#### Step 13: 测试和优化
- [ ] 移动端测试
- [ ] 性能优化
- [ ] 部署

---

## opencode 命令

```bash
opencode run 'Implement colorful cartoon snake game with particles and animations'
opencode run 'Add game modes and scoring system'
opencode run 'Polish UI with menu animations and effects'
```

---

*Plan Ready: Awaiting Implementation*
