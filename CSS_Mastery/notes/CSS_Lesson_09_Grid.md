# Lesson 09: Grid - 二维网格布局系统

## 1. 什么是 CSS Grid？
Grid 是 CSS 的**二维布局系统**，可以同时控制**行和列**。相比 Flexbox（一维），Grid 更适合复杂的网格状布局。

## 2. 核心概念
- **Grid Container**：父元素，设置 `display: grid`
- **Grid Items**：直接子元素
- **Grid Lines**：网格线，分隔行和列
- **Grid Tracks**：行或列之间的空间
- **Grid Cells**：单个网格单元格
- **Grid Areas**：一个或多个单元格组成的区域

## 3. Grid 容器属性

### 3.1 定义网格
```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 1fr; /* 三列 */
  grid-template-rows: 100px 200px;        /* 两行 */
  gap: 20px;                              /* 行列间距 */
}
```

### 3.2 常用单位
- `px`：固定像素
- `fr`：剩余空间分配单位（fraction）
- `auto`：根据内容自动调整
- `minmax(100px, 1fr)`：最小100px，最大1fr

### 3.3 网格模板区域（高级）
```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

## 4. Grid 项目属性

### 4.1 项目定位
```css
.item {
  grid-column: 1 / 3;    /* 从第1列线到第3列线（跨越2列） */
  grid-row: 1 / 2;       /* 从第1行线到第2行线（跨越1行） */
}
```

### 4.2 简写写法
- `grid-column: span 2`：跨越2列
- `grid-row: 1`：放置在第1行
- `grid-area: 1 / 1 / 3 / 3`：行开始 / 列开始 / 行结束 / 列结束

## 5. Grid vs Flexbox 对比

| 特性 | Grid | Flexbox |
|------|------|---------|
| 维度 | 二维（行+列） | 一维（行或列） |
| 控制精度 | 单元格级控制 | 轴线级控制 |
| 适合场景 | 复杂网格布局、页面骨架 | 线性排列、导航栏、卡片列表 |
| 内容影响 | 网格定义优先 | 内容大小影响布局 |

## 6. 视觉挑战题

打开 `exercises/09_Grid/`，完成：
1. 任务 A：基础网格（3×3）
2. 任务 B：响应式网格（auto-fill）
3. 任务 C：网格模板区域（页面布局）
4. 任务 D：复杂项目定位

> 使用 DevTools 网格检查器（Grid Inspector）可视化网格线。