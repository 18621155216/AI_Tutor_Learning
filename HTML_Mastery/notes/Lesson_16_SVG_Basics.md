# Lesson 16: SVG 矢量图形原理与实战 (SVG Basics for Fullstack)

## 核心原理 (Principles)
- **什么是 SVG**：Scalable Vector Graphics (可缩放矢量图形)。它使用 XML 描述图形，因此它在 HTML 中是 **DOM 节点**。
- **与 Canvas 的区别**：
    - **SVG**：矢量图（无限放大不模糊）、基于 DOM（可以给每个形状绑定点击事件）、适合小图标/简单动画。
    - **Canvas**：位图（放大模糊）、基于像素、适合复杂动画/游戏。

## 常用标签与属性 (Common Elements)
- `<svg>`：容器标签，必须设置 `viewBox="0 0 width height"` (定义坐标系)。
- `<circle>`：圆，属性 `cx`, `cy` (圆心), `r` (半径)。
- `<rect>`：矩形，属性 `x`, `y`, `width`, `height`, `rx`/`ry` (圆角)。
- `<path>`：最强大的标签，通过 `d` 属性描述复杂路径。
- `<g>`：分组标签，用于统一设置样式。

## 样式控制 (Styling)
- **填充**：`fill` (对应 CSS 的 color/background)。
- **描边**：`stroke` (边框颜色), `stroke-width` (边框宽度)。
- **全栈技巧**：可以直接在 CSS 中通过 `path { fill: red; }` 修改图标颜色，这是 SVG 成为 Icon 标准的原因。

---

## 最佳实践 (Best Practices)
1. **内联使用**：直接将 `<svg>...</svg>` 粘贴到 HTML 中，减少 HTTP 请求并方便控制颜色。
2. **图标库**：全栈开发通常使用 `Lucide` 或 `Heroicons` 等库。
3. **性能**：不要在 SVG 中放入过于复杂的路径（如照片转矢量），会导致页面卡顿。
