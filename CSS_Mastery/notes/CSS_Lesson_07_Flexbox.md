# Lesson 07: Flexbox - 现代一维布局核心

## 1. 什么是 Flexbox？
Flexbox 用来处理**一维布局**：要么按行（row）排，要么按列（column）排。

- **Flex Container**：父元素，设置 `display: flex`。
- **Flex Items**：子元素，自动成为弹性项。

## 2. 两条轴的概念
- **主轴 (Main Axis)**：默认是水平（`row`）。
- **交叉轴 (Cross Axis)**：默认是垂直方向。

常用属性：
- `justify-content`：控制主轴对齐
- `align-items`：控制交叉轴对齐
- `gap`：控制项目间距
- `flex-wrap`：是否换行

## 3. 最常用的组合
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
```

## 4. 视觉挑战题 (Visual Challenge)

打开 `exercises/07_Flexbox/`，完成：
1. 任务 A：三个块水平+垂直居中。
2. 任务 B：Logo / Nav / Profile 两端对齐且垂直居中。
3. 任务 C：让 6 个方块在窄屏自动换行。

> 用 DevTools 观察 `flex` 徽章和容器辅助线，理解项目如何分布。

## 5. 实践代码示例

### 任务 A：横向居中布局
```css
.task-a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
```
**视觉效果**：三个项目在容器中水平居中 + 垂直居中，项目间距 12px。

### 任务 B：两端对齐布局
```css
.task-b {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
```
**视觉效果**：项目均匀分布在主轴两端（首尾贴边），在 50px 高的容器中垂直居中。

### 任务 C：自动换行布局
```css
.task-c {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
```
**视觉效果**：项目在容器宽度不足时自动换行，行列间距均为 10px。

## 6. 核心记忆点
- `justify-content` 控制主轴分布，常用 `center`、`space-between`
- `align-items` 控制交叉轴对齐，常用 `center`
- `gap` 替代传统的 `margin` 设置间距，更简洁
- `flex-wrap: wrap` 是实现响应式流式布局的基础
