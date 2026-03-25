# Specification - Snake Game V2 (3D Cartoon Edition)

**Project**: Snake Game V2
**Style**: 3D Cartoon / Glossy & Playful
**Created**: 2026-03-25
**Status**: Pending Clarify

---

## 1. 视觉风格

### 1.1 参考风格
- 3D 卡通蛇（蓝色、光滑、有光泽）
- 大眼睛卡通表情
- 3D 苹果（红润、高光、绿色叶子）
- 绿色格子地面（棋盘格）
- 速度线效果（边缘放射线）
- 高饱和度色彩

### 1.2 色彩系统
| 用途 | 颜色 | Hex |
|------|------|-----|
| 蛇身体 | 明亮蓝色 | #00AAFF |
| 蛇高光 | 浅蓝 | #66DDFF |
| 蛇阴影 | 深蓝 | #0077CC |
| 苹果 | 鲜红 | #FF3333 |
| 苹果高光 | 粉红 | #FF8888 |
| 叶子 | 绿色 | #44CC44 |
| 地面深 | 深绿 | #228822 |
| 地面浅 | 浅绿 | #44DD44 |
| 速度线 | 白/透明 | rgba(255,255,255,0.3) |

### 1.3 3D 效果实现
```javascript
// 蛇身体的 3D 渐变效果
ctx.createRadialGradient(x, y, 0, x, y, radius)
// 中心: #66DDFF (高光)
// 边缘: #0077CC (阴影)

// 苹果的 3D 效果
ctx.createRadialGradient(appleX-3, appleY-3, 0, appleX, appleY, appleSize)
// 中心: #FF8888 (高光点)
// 边缘: #FF3333 (主体)
```

---

## 2. 游戏区域设计

### 2.1 布局结构
```
┌─────────────────────────────────────┐
│  🐍 贪食蛇 3D    分数: 1250  ⚙️   │  ← 顶部栏
├─────────────────────────────────────┤
│                                     │
│     ╭─────────────────────╮         │
│     │                     │         │
│     │   3D 游戏画布       │         │  ← 主游戏区
│     │   (绿色格子地面)    │         │
│     │   (速度线边框)     │         │
│     │                     │         │
│     ╰─────────────────────╯         │
│                                     │
├─────────────────────────────────────┤
│   [🎮 经典]  [⏱️ 限时]  [🧱 障碍]    │  ← 模式选择
└─────────────────────────────────────┘
```

### 2.2 地面设计
- 绿色格子棋盘格
- 每格 30x30 像素
- 深绿/浅绿交替
- 轻微 3D 阴影效果

### 2.3 速度线效果
- 画布边缘放射状线条
- 从角落向外延伸
- 白色半透明
- 动态闪烁

---

## 3. 蛇的设计

### 3.1 外观规格
| 部位 | 规格 |
|------|------|
| 身体颜色 | 明亮蓝色 #00AAFF |
| 身体形状 | 圆角矩形，横向排列 |
| 每节大小 | 25x25 像素 |
| 高光效果 | 径向渐变，中心亮 |
| 阴影效果 | 底部深色 |
| 连接方式 | 轻微重叠 |

### 3.2 蛇头设计
| 部位 | 规格 |
|------|------|
| 大小 | 30x30 像素（比身体大） |
| 眼睛 | 两个大圆形眼睛（占头部40%） |
| 眼白 | 白色 #FFFFFF |
| 瞳孔 | 黑色，上方看 |
| 嘴巴 | 微笑弧线 |
| 舌头 | 可选：红色分叉舌头（动画） |

### 3.3 蛇身渲染
```javascript
// 蛇身绘制
function drawSnakeSegment(x, y, isHead) {
    // 3D 渐变
    const gradient = ctx.createRadialGradient(
        x + SIZE/2, y + SIZE/2 - 3, 0,
        x + SIZE/2, y + SIZE/2, SIZE
    );
    gradient.addColorStop(0, '#66DDFF');  // 高光
    gradient.addColorStop(0.5, '#00AAFF');  // 主体
    gradient.addColorStop(1, '#0077CC');  // 阴影
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(x, y, SIZE, SIZE, 6);
    ctx.fill();
}

// 眼睛绘制
function drawEyes(x, y) {
    // 左眼
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(x + 8, y + 8, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(x + 9, y + 6, 3, 0, Math.PI * 2);
    ctx.fill();
    
    // 右眼
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(x + 20, y + 8, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(x + 21, y + 6, 3, 0, Math.PI * 2);
    ctx.fill();
}
```

---

## 4. 食物设计（苹果）

### 4.1 外观规格
| 部位 | 规格 |
|------|------|
| 形状 | 圆形，带轻微扁平 |
| 大小 | 25x25 像素 |
| 主体颜色 | 鲜红 #FF3333 |
| 高光 | 左上角白色圆点 |
| 叶子 | 右上角绿色椭圆 |
| 果梗 | 顶部棕色小条 |

### 4.2 苹果渲染
```javascript
function drawApple(x, y) {
    // 苹果主体 - 3D 渐变
    const gradient = ctx.createRadialGradient(
        x - 3, y - 3, 0,
        x, y, 15
    );
    gradient.addColorStop(0, '#FF8888');  // 高光
    gradient.addColorStop(0.6, '#FF3333');  // 主体
    gradient.addColorStop(1, '#CC2222');  // 阴影
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.fill();
    
    // 叶子
    ctx.fillStyle = '#44CC44';
    ctx.beginPath();
    ctx.ellipse(x + 5, y - 10, 5, 8, Math.PI/4, 0, Math.PI * 2);
    ctx.fill();
    
    // 果梗
    ctx.fillStyle = '#886633';
    ctx.fillRect(x - 2, y - 14, 4, 6);
    
    // 高光点
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.beginPath();
    ctx.arc(x - 4, y - 4, 3, 0, Math.PI * 2);
    ctx.fill();
}
```

---

## 5. 动效系统

### 5.1 速度线
- 画布四角向外发射
- 白色半透明线条
- 长度：50-100px
- 动态闪烁（透明度变化）

### 5.2 吃食物动画
- 食物消失时粒子爆发
- 分数弹出动画（+10）
- 轻微屏幕震动

### 5.3 移动动画
- 蛇身平滑移动（可选插值）
- 蛇头轻微摇晃
- 速度线随移动方向变化

---

## 6. 游戏模式

### 6.1 Classic Mode
- 无限时间
- 吃食物得分
- 无道具

### 6.2 Time Attack
- 60秒倒计时
- 速度递增

### 6.3 Obstacle
- 随机障碍物
- 障碍物有 3D 效果

---

## 7. UI 设计

### 7.1 顶部栏
- 标题 + 蛇图标
- 当前分数
- 设置按钮

### 7.2 模式选择
- 三个圆形按钮
- 选中状态有光泽效果
- 图标 + 文字

### 7.3 游戏结束弹窗
- 3D 边框效果
- 最终分数
- 新纪录提示
- 重玩/菜单按钮

---

## 8. 待澄清问题

（见 CLARIFY.md）

---

*Specification Version: 3.0 - 3D Cartoon Edition*
