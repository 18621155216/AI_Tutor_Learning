# Lesson 13: 变换与动画 (Transforms & Animations) - 让元素动起来

## 1. 变换 (Transform) 概述

CSS `transform` 属性允许我们对元素进行旋转、缩放、平移和倾斜等操作，而不会影响文档流中的其他元素。

### 1.1 基本变换类型

| 变换函数 | 描述 | 示例 |
|---------|------|------|
| `rotate()` | 旋转元素 | `rotate(45deg)` |
| `scale()` | 缩放元素 | `scale(1.5)` |
| `translate()` | 平移元素 | `translate(50px, 20px)` |
| `skew()` | 倾斜元素 | `skew(10deg, 5deg)` |
| `matrix()` | 矩阵变换 | `matrix(1, 0, 0, 1, 0, 0)` |

## 2. 基本变换详解

### 2.1 旋转 (rotate)

```css
/* 顺时针旋转45度 */
.element {
  transform: rotate(45deg);
}

/* 逆时针旋转45度 */
.element {
  transform: rotate(-45deg);
}
```

### 2.2 缩放 (scale)

```css
/* 同时缩放宽度和高度 */
.element {
  transform: scale(1.5); /* 放大1.5倍 */
}

/* 分别缩放宽度和高度 */
.element {
  transform: scale(1.2, 0.8); /* 宽度放大1.2倍，高度缩小到0.8倍 */
}

/* 单独缩放宽度 */
.element {
  transform: scaleX(1.5);
}

/* 单独缩放高度 */
.element {
  transform: scaleY(0.8);
}
```

### 2.3 平移 (translate)

```css
/* 同时平移X和Y轴 */
.element {
  transform: translate(50px, 20px); /* 向右移动50px，向下移动20px */
}

/* 单独平移X轴 */
.element {
  transform: translateX(50px);
}

/* 单独平移Y轴 */
.element {
  transform: translateY(20px);
}
```

### 2.4 倾斜 (skew)

```css
/* 同时倾斜X和Y轴 */
.element {
  transform: skew(10deg, 5deg); /* X轴倾斜10度，Y轴倾斜5度 */
}

/* 单独倾斜X轴 */
.element {
  transform: skewX(10deg);
}

/* 单独倾斜Y轴 */
.element {
  transform: skewY(5deg);
}
```

### 2.5 组合变换

可以将多个变换函数组合使用，注意顺序会影响最终效果：

```css
/* 先旋转，再缩放，最后平移 */
.element {
  transform: rotate(15deg) scale(1.2) translate(20px, 10px);
}
```

## 3. 3D 变换

### 3.1 3D 变换基础

要使用3D变换，需要理解以下几个关键概念：

- **perspective**：设置透视点，模拟人眼观察物体的距离
- **transform-style: preserve-3d**：保持子元素的3D空间
- **backface-visibility**：控制元素背面是否可见

### 3.2 3D 变换函数

| 变换函数 | 描述 | 示例 |
|---------|------|------|
| `rotateX()` | 绕X轴旋转 | `rotateX(45deg)` |
| `rotateY()` | 绕Y轴旋转 | `rotateY(45deg)` |
| `rotateZ()` | 绕Z轴旋转 | `rotateZ(45deg)` |
| `translateZ()` | 沿Z轴平移 | `translateZ(50px)` |
| `scaleZ()` | 沿Z轴缩放 | `scaleZ(1.5)` |
| `perspective()` | 设置透视 | `perspective(1000px)` |

### 3.3 3D 立方体示例

```css
.stage {
  perspective: 1000px;
}

.cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(15deg) rotateY(30deg);
}

.face {
  position: absolute;
  width: 100px;
  height: 100px;
  backface-visibility: hidden;
}

.face.front {
  transform: translateZ(50px);
}

.face.back {
  transform: rotateY(180deg) translateZ(50px);
}

.face.right {
  transform: rotateY(90deg) translateZ(50px);
}

.face.left {
  transform: rotateY(-90deg) translateZ(50px);
}

.face.top {
  transform: rotateX(90deg) translateZ(50px);
}

.face.bottom {
  transform: rotateX(-90deg) translateZ(50px);
}
```

## 4. 过渡动画 (Transition)

### 4.1 过渡基础

`transition` 属性允许元素在状态变化时平滑过渡，而不是立即变化。

```css
.element {
  transition: property duration timing-function delay;
}
```

### 4.2 过渡属性详解

| 属性 | 描述 | 默认值 |
|------|------|--------|
| `transition-property` | 要过渡的CSS属性 | `all` |
| `transition-duration` | 过渡持续时间 | `0s` |
| `transition-timing-function` | 过渡时间函数 | `ease` |
| `transition-delay` | 过渡延迟时间 | `0s` |

### 4.3 常用时间函数

| 时间函数 | 描述 |
|---------|------|
| `ease` | 慢开始，然后变快，最后变慢 |
| `linear` | 匀速 |
| `ease-in` | 慢开始 |
| `ease-out` | 慢结束 |
| `ease-in-out` | 慢开始和慢结束 |
| `cubic-bezier()` | 自定义贝塞尔曲线 |

### 4.4 过渡示例

```css
.button {
  background-color: #3b82f6;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
}
```

## 5. 关键帧动画 (Animation)

### 5.1 关键帧定义

使用 `@keyframes` 规则定义动画的关键帧：

```css
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
```

### 5.2 动画属性

| 属性 | 描述 | 默认值 |
|------|------|--------|
| `animation-name` | 动画名称 | `none` |
| `animation-duration` | 动画持续时间 | `0s` |
| `animation-timing-function` | 动画时间函数 | `ease` |
| `animation-delay` | 动画延迟时间 | `0s` |
| `animation-iteration-count` | 动画重复次数 | `1` |
| `animation-direction` | 动画方向 | `normal` |
| `animation-fill-mode` | 动画结束后状态 | `none` |
| `animation-play-state` | 动画播放状态 | `running` |

### 5.3 动画方向

| 值 | 描述 |
|-----|------|
| `normal` | 正常方向 |
| `reverse` | 反向 |
| `alternate` | 交替（正向→反向→正向...） |
| `alternate-reverse` | 反向交替（反向→正向→反向...） |

### 5.4 动画填充模式

| 值 | 描述 |
|-----|------|
| `none` | 动画结束后回到初始状态 |
| `forwards` | 动画结束后保持最后一帧状态 |
| `backwards` | 动画开始前应用第一帧状态 |
| `both` | 同时应用 `forwards` 和 `backwards` |

### 5.5 动画示例

```css
.element {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

## 6. 动画性能优化

### 6.1 硬件加速

使用以下属性可以触发硬件加速，提高动画性能：

```css
.element {
  transform: translateZ(0); /* 触发硬件加速 */
  will-change: transform; /* 告诉浏览器元素将要变化 */
}
```

### 6.2 性能最佳实践

- **优先使用 transform 和 opacity**：这些属性不会触发重排
- **避免使用 position: absolute** 进行动画：可能会触发重排
- **使用 will-change**：提前告诉浏览器元素将要变化
- **限制动画元素数量**：避免同时动画太多元素
- **使用适当的动画持续时间**：不要太长或太短

### 6.3 检测动画性能

使用浏览器开发者工具的 Performance 面板检测动画性能，查看帧率和重排情况。

## 7. 常见动画效果

### 7.1 悬停效果

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
```

### 7.2 加载动画

```css
.loader {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(59, 130, 246, 0.2);
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### 7.3 卡片翻转

```css
.card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}
```

### 7.4 打字效果

```css
.typing {
  overflow: hidden;
  border-right: 3px solid #3b82f6;
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #3b82f6; }
}
```

## 8. 动画库推荐

### 8.1 常用动画库

- **Animate.css**：预设了大量动画效果
- **GreenSock (GSAP)**：高性能动画库，支持复杂动画
- **Framer Motion**：React 动画库
- **Motion One**：轻量级动画库

### 8.2 使用 Animate.css 示例

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

<div class="animate__animated animate__bounce">弹跳动画</div>
```

## 9. 浏览器兼容性

### 9.1 变换兼容性

- 大多数现代浏览器支持 `transform` 属性
- 旧版IE需要使用 `-ms-` 前缀
- 移动浏览器支持良好

### 9.2 动画兼容性

- `transition`：IE10+ 支持
- `@keyframes`：IE10+ 支持
- 3D变换：IE10+ 支持

## 10. 视觉挑战题

打开 `exercises/13_Transforms/`，完成以下挑战：

1. **任务 A：基本变换**
   - 尝试不同的变换效果
   - 组合多种变换
   - 为变换添加过渡效果

2. **任务 B：3D 变换**
   - 操作立方体旋转按钮，观察3D效果
   - 理解透视和3D空间

3. **任务 C：过渡动画**
   - 测试不同的过渡效果
   - 调整过渡时间和时间函数

4. **任务 D：关键帧动画**
   - 观察不同的动画效果
   - 尝试修改动画参数

5. **任务 E：动画组合**
   - 测试卡片翻转效果
   - 观察加载动画
   - 测试按钮动画效果

> 使用浏览器开发者工具的动画面板查看和调试动画效果。