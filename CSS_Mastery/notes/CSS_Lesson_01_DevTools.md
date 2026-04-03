# Lesson 01: 准备工作与调试 (DevTools & Reset CSS)

## 1. Chrome DevTools (开发者工具)
这是 CSS 开发者的“显微镜”。按 `F12` 或 `Ctrl+Shift+I` (Mac: `Cmd+Opt+I`) 开启。

### 核心功能：
- **Elements 面板**：查看 HTML 结构和对应的 CSS 样式。
- **Styles 子面板**：
    - **实时编辑**：你可以点击任何属性并修改它，或者勾选/取消勾选来测试效果。
    - **添加样式**：点击 `+` 号为当前元素添加新的 CSS 规则。
    - **伪类模拟**：点击 `:hov` 可以强制模拟 `:hover`, `:active` 等状态。
- **Computed 面板**：查看浏览器最终计算出的样式（解决“样式冲突”的关键）。
- **Box Model 图解**：最下方可以看到当前元素的 Margin, Border, Padding, Content 实际尺寸。

## 2. Reset CSS (样式重置)
不同浏览器（Chrome, Safari, Firefox）对 HTML 标签有不同的默认样式（User Agent Styles）。
为了保证页面在所有浏览器里看起来一致，我们需要“重置”这些默认值。

### 为什么需要重置？
- `body` 默认有 `8px` 的外边距（Margin）。
- `h1`, `p` 等标签有默认的上下间距。
- `ul`, `ol` 有默认的左内边距（Padding）。

### 现代常用的重置方案 (Mini Reset)：
```css
/* 1. 统一盒模型计算方式（极其重要） */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. 移除默认间距 */
* {
  margin: 0;
  padding: 0;
}

/* 3. 基础页面设置 */
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased; /* 文字抗锯齿 */
}
```

## 3. 视觉挑战题 (Visual Challenge)
**任务**：创建一个简单的卡片，并使用 DevTools 调整它的外观。

1. 在 `exercises/01_DevTools/index.html` 中编写一个带标题和描述的卡片。
2. 在 `exercises/01_DevTools/style.css` 中添加基础重置。
3. 打开浏览器，使用 DevTools 将卡片的背景颜色改为淡蓝色 (`#e0f7fa`)，并给标题添加一个红色的边框。
