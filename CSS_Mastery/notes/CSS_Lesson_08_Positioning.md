# Lesson 08: 定位 (Positioning) - 让元素"飘"起来

## 1. 什么是 CSS 定位？
定位是用来**控制元素在页面中的精确位置**的系统。它打破了“文档流”的限制，让元素可以“漂浮”在页面上。

## 2. 五种定位类型

| 定位类型 | 作用 | 使用场景 |
|----------|------|----------|
| `static` (静态) | 默认值，元素在文档流中 | 不需要特殊定位时 |
| `relative` (相对定位) | 相对于**自身原本位置**偏移 | 微调元素位置，不脱离文档流 |
| `absolute` (绝对定位) | 相对于**最近的非static父元素**定位 | 弹出层、下拉菜单、图标定位 |
| `fixed` (固定定位) | 相对于**浏览器视口**定位，不随滚动移动 | 固定导航栏、回到顶部按钮、悬浮广告 |
| `sticky` (粘性定位) | 在特定阈值内为`relative`，超过后变为`fixed` | 表格表头、分类导航 |

## 3. 核心属性
- `position`: 设置定位类型
- `top` / `right` / `bottom` / `left`: 偏移距离
- `z-index`: 控制堆叠顺序（数值越大越靠前）

## 4. 关键概念

### 4.1 文档流 (Document Flow)
默认情况下，元素按照 HTML 顺序从上到下、从左到右排列。`relative` **不脱离**文档流，`absolute`/`fixed` **脱离**文档流。

### 4.2 定位上下文 (Positioning Context)
- `absolute`: 相对于**最近的非static定位的祖先元素**
- 如果没有符合条件的祖先，则相对于**整个文档**（html元素）

### 4.3 堆叠上下文 (Stacking Context)
- `z-index` 只在**定位元素**上生效
- 数值大的盖住数值小的
- 默认值为 `auto`，继承父元素

## 5. 常见误区
1. **忘记设置父元素定位**：`absolute` 元素需要相对定位的父容器，否则会相对于整个页面定位
2. **过度使用 fixed**：移动端 fixed 有兼容性问题
3. **z-index 滥用**：过高的 z-index 值会导致维护困难

## 6. 视觉挑战题

打开 `exercises/08_Positioning/`，完成：
1. 任务 A：相对定位微调
2. 任务 B：绝对定位的弹出层
3. 任务 C：固定导航栏
4. 任务 D：粘性定位表头

> 使用 DevTools 调整偏移值，观察元素如何移动。

## 7. 实践代码示例

### 任务 A：相对定位 (Relative)
```css
.task-a .relative {
  position: relative;
  top: 20px;      /* 向下移动20px */
  left: 40px;     /* 向右移动40px */
  z-index: 1;     /* 提升堆叠层级 */
}
```
**视觉效果**：蓝色方块向右下偏移，覆盖在相邻灰色方块上（z-index生效）。

### 任务 B：绝对定位 (Absolute)
```css
.task-b .absolute {
  position: absolute;
  top: 10px;      /* 距离父容器顶部10px */
  right: 10px;    /* 距离父容器右侧10px */
}
```
**关键点**：父容器 `.container` 设置了 `position: relative`，为绝对定位提供上下文。

### 任务 C：固定定位 (Fixed)
```css
.task-c .fixed {
  position: fixed;
  top: 0;         /* 固定在视口顶部 */
  left: 0;
  width: 100%;    /* 占满视口宽度 */
  z-index: 1000;  /* 确保在最上层 */
}

/* 同时需要调整body避免内容被遮挡 */
body {
  padding-top: 60px;
}
```
**视觉效果**：橙色导航栏固定在浏览器顶部，滚动页面时不动。

### 任务 D：粘性定位 (Sticky)
```css
.task-d .sticky {
  position: sticky;
  top: 20px;      /* 滚动到距离容器顶部20px时固定 */
  width: 100%;    /* 占满容器宽度 */
}
```
**视觉效果**：紫色表头在滚动到指定阈值时变为固定定位。

## 8. 核心记忆点
1. **relative**：相对自身，不脱离文档流，常用于微调或创建定位上下文
2. **absolute**：相对最近的非static祖先，脱离文档流
3. **fixed**：相对浏览器视口，脱离文档流，适合全局固定元素
4. **sticky**：混合模式，到达阈值前relative，到达后fixed
5. **z-index**：控制堆叠顺序，只对定位元素生效