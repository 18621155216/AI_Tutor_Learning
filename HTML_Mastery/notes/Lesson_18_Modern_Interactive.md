# Lesson 18: 现代交互标签 (Modern Interactive Tags)

## 1. `<details>` & `<summary>` (原生折叠面板)
- **作用**：创建一个可展开/折叠的组件，不需要任何 JavaScript。
- **结构**：
  ```html
  <details>
    <summary>点击展开详情</summary>
    <p>这里是隐藏的内容，默认不显示。</p>
  </details>
  ```
- **全栈应用**：常用于 FAQ 页面或“查看更多”功能。

## 2. `<dialog>` (原生模态框/弹窗)
- **作用**：HTML5.2 引入的原生弹窗组件。
- **核心方法**：
    - `dialog.showModal()`：显示模态框（带背景遮罩）。
    - `dialog.close()`：关闭弹窗。
- **样式伪类**：`::backdrop` 可以控制弹窗背后的半透明遮罩层颜色。

## 3. `<progress>` & `<meter>` (进度条与测量表)
- **`<progress>`**：任务进度，属性 `value` 和 `max`。
- **`<meter>`**：范围测量（如磁盘空间、电池电量），支持颜色反馈。

---

## 最佳实践 (Best Practices)
- **原生优先**：尽可能使用原生标签代替 JS 模拟组件，以获得更好的性能和 A11y。
- **SEO**：`<summary>` 中的内容会被搜索引擎爬虫优先抓取。
- **兼容性**：这些标签在现代浏览器中（Chrome, Edge, Safari, Firefox）支持度极好。
