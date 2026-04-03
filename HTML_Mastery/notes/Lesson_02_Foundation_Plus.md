# Lesson 02: Foundation Plus (基础补课与架构视野)

## 核心原理 (Principles)

### 1. 资源引入策略 (Loading Strategy)
- **`<style>`**：用于 HTML 内部定义 CSS。
    - **语法基础**：`选择器 { 属性: 值; }`。例如：`body { background-color: skyblue; }`。
    - **引入三剑客**：
        1. **行内 (Inline)**：`<div style="...">` (耦合度高，不推荐)。
        2. **内部 (Internal)**：`<style>...</style>` (适合小项目)。
        3. **外部 (External)**：`<link rel="stylesheet" href="...">` (架构师推荐，生产环境标准)。
- **`<script>`**：引入 JS 代码。
    - **加载行为**：默认加载会阻塞 DOM 解析，导致页面白屏。
    - **优化方案**：使用 `async` 或 `defer` 属性，或将脚本置于 `</body>` 之前。

### 2. 文本语义深度增强 (Semantics Enhancement)
- **`<strong>`**：表示内容本身的重要性（语义加重）。
- **`<em>`**：表示强调（重音）。
- **`<blockquote>`**：定义长引用，具有默认缩进和特定的语义含义。
- **`<pre>`**：预格式化文本，保留原始空白和换行。常与 `<code>` 配合展示源代码。

### 3. SEO TDK 基础
- **Title (标题)**：最重要的 SEO 权重。
- **Description (描述)**：显示在搜索结果列表中的简介。
- **Keywords (关键词)**：辅助说明页面的核心词汇（虽然现在权重已降低，但仍是规范的一部分）。

---

## 最佳实践 (Best Practices)
- 始终为 `target="_blank"` 的链接添加 `rel="noopener noreferrer"` 以防安全风险。
- 合理使用语义化标签（如 `strong` 而不是 `b`），这不仅对 SEO 有利，更是 A11y (可访问性) 的核心。
- 将 `script` 置于页面底部是历史悠久的优化实践，但现代推荐使用 `defer` 属性以获得更好的性能。

---

## 浏览器解析机制简述
- 浏览器在解析 HTML 时，遇到 `<script>` 标签（且没有 `async`/`defer`）会停止 DOM 树的构建，转而下载并执行脚本。这就是为什么不当的脚本位置会拖慢网页显示速度。
