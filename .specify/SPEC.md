# Specification - Snake Game V2 (Enhanced 3D Cartoon)

**Version**: 4.0
**Date**: 2026-03-25
**Status**: Implementation

---

## Enhanced 3D Techniques

### 1. 光影系统 (Lighting System)
- **光源方向**: 左上方 (top-left)
- **高光**: 物体左上角
- **阴影**: 物体右下方
- **环境光**: 整体提亮

### 2. 高光材质 (Specular Highlights)
- 白色高光点 (直径 3-5px)
- 渐变高光带
- 边缘发光 (rim light)

### 3. 投影 (Drop Shadows)
- 物体下方椭圆形阴影
- 渐变透明 (中心深，边缘浅)
- 轻微偏移模拟高度

### 4. 色彩增强 (Color Enhancement)
- 饱和度提升 20%
- 对比度增强
- 色彩分层 (3层以上)

---

## 蛇的 3D 增强

### 蛇身
```
原: 单一径向渐变
新:
1. 主体渐变 (中心亮 → 边缘暗)
2. 高光带 (左上角白色条)
3. 投影 (右下方阴影)
4. 边缘光 (轮廓发光)
```

### 蛇头
```
增强:
1. 大眼睛带眼神光 (高光点)
2. 眼球层次 (外圈深，内圈白，瞳孔黑，高光点)
3. 微笑带阴影
4. 下巴阴影
5. 头顶高光
```

---

## 苹果的 3D 增强

```
原: 简单径向渐变
新:
1. 主体渐变 (偏红)
2. 左上高光 (白色渐变到透明)
3. 反射高光 (右侧小圆点)
4. 下方法线阴影
5. 底部接触阴影
6. 叶子带茎脉阴影
```

---

## 地面的 3D 增强

```
增强:
1. 每格带边缘高光 (顶边和左边亮)
2. 每格带右下阴影 (深色渐变)
3. 格间微间隙
4. 整体地毯效果
```

---

## 速度线增强

```
增强:
1. 多层速度线 (近/中/远)
2. 长度变化 (30-100px)
3. 透明度变化 (0.1-0.6)
4. 颜色渐变 (白→透明)
5. 动态模糊效果
```

---

## 粒子系统增强

```
增强:
1. 粒子带拖尾
2. 粒子大小渐变
3. 粒子旋转
4. 颜色从中心到边缘渐变
5. 重力效果 (轻微下落)
```

---

## 实现代码示例

### 高级渐变函数
```javascript
function createGlossyGradient(ctx, x, y, radius, color, lightDir = 'topLeft') {
    // 主体渐变
    const mainGrad = ctx.createRadialGradient(
        x - radius/3, y - radius/3, 0,
        x, y, radius
    );
    mainGrad.addColorStop(0, lighten(color, 40));  // 高光
    mainGrad.addColorStop(0.3, color);             // 主体
    mainGrad.addColorStop(1, darken(color, 30));   // 阴影
    
    return mainGrad;
}

function drawDropShadow(ctx, x, y, w, h, offset = 3) {
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(x + w/2, y + h + offset, w/2, h/6, 0, 0, Math.PI * 2);
    ctx.fill();
}

function drawRimLight(ctx, path, rimColor) {
    ctx.strokeStyle = rimColor;
    ctx.lineWidth = 2;
    ctx.stroke(path);
}
```

---

## 动画增强

### 呼吸效果
- 蛇身轻微膨胀/收缩
- 周期: 1s
- 幅度: 2-3%

### 眨眼效果
- 蛇头每3秒眨眼一次
- 下眼皮上升遮住瞳孔

### 舌头动画
- 吐舌头: 0.3s 伸出
- 缩回: 0.2s 返回
- 轻微摇摆

---

## 性能优化

- 使用 `willReadFrequently: false`
- 批量绘制减少状态切换
- 使用离屏 Canvas 预渲染静态元素
- requestAnimationFrame 同步

---

*Specification Version: 4.0 - Enhanced 3D*
