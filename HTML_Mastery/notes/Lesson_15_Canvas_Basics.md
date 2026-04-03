# Lesson 15: Canvas 2D Basics (Canvas 2D 与图形绘制基础)

## 核心原理 (Principles)

### 1. `<canvas>` 容器
- **定义**：一个用于绘图的 HTML 标签。
- **分辨率与样式**：
    - `width` 和 `height` 属性定义画布的**逻辑分辨率**（像素数）。
    - CSS `width` 和 `height` 定义画布的**显示大小**。
    - **架构师警告**：两者不匹配会导致图像模糊或拉伸。

### 2. 2D 渲染上下文 (Context)
- **获取方式**：`canvas.getContext('2d')`。
- **作用**：提供所有绘图方法和属性。

### 3. 绘图流程
- **即时渲染**：绘图命令立即生效，不保留图形状态（与 SVG 不同）。
- **状态管理**：可以通过 `ctx.save()` 和 `ctx.restore()` 保存和恢复绘图状态（如颜色、变形等）。

---

## 常用 API (Common APIs)
- **矩形**：`fillRect`, `strokeRect`, `clearRect`。
- **路径**：`beginPath`, `moveTo`, `lineTo`, `closePath`, `stroke`, `fill`。
- **圆弧**：`arc(x, y, radius, startAngle, endAngle)`。
- **文本**：`fillText(text, x, y)`, `strokeText`, `font`。
- **样式**：`fillStyle`, `strokeStyle`, `lineWidth`, `lineCap`。

---

## 最佳实践 (Best Practices)
- **性能优化**：尽量减少绘图状态的切换。
- **清除画布**：在进行动画绘制时，每一帧都要先调用 `clearRect`。
- **辅助说明**：为 `<canvas>` 提供后备内容（标签对之间的文字），以增强可访问性。

---

## 浏览器解析机制简述
- 浏览器在解析 `<canvas>` 时会为其分配一块内存缓冲区（Bitmap）。
- 调用 JavaScript 绘图方法实际上是直接操作这块像素缓冲区。
- GPU 加速：现代浏览器通常会使用硬件加速来渲染 Canvas 内容。
