# Lesson 10: Multimedia & Embeds (多媒体与嵌入式安全)

## 核心原理 (Principles)

### 1. 原生音视频 (`<video>` & `<audio>`)
- **浏览器支持**：HTML5 引入，不再依赖外部插件（如 Flash）。
- **关键属性**：
    - `controls`：显示播放、暂停、音量、进度等控件。
    - `autoplay`：自动播放（通常需要配合 `muted` 属性）。
    - `loop`：循环播放。
    - `poster` (仅 video)：加载中或播放前的预览图。
- **兼容性**：使用 `<source>` 标签提供多格式支持（mp4, webm, ogg），浏览器按需选择。

### 2. 内联框架 (`<iframe>`)
- **作用**：在当前网页内嵌入另一个完整的 HTML 页面。
- **架构师核心：安全沙箱 (`sandbox`)**：
    - `sandbox` 属性可以极大地限制被嵌入页面的行为，防止跨站攻击（XSS）等。
    - **常用参数**：
        - `allow-scripts`：允许运行 JavaScript。
        - `allow-same-origin`：允许访问同源 Cookie 等。
        - `allow-forms`：允许提交表单。
- **性能优化**：`loading="lazy"` (延迟加载，直到滚动到视口附近)。

---

## 最佳实践 (Best Practices)
- **多格式回退**：始终为视频提供多种格式源，并包含一段回退文本。
- **安全第一**：除非绝对信任，否则对所有 `iframe` 启用 `sandbox` 限制。
- **用户体验**：尽量避免无声自动播放（Autoplay），除非它是背景装饰。
- **语义化**：为 `iframe` 提供 `title` 属性，方便屏幕阅读器理解嵌入内容。

---

## 浏览器解析机制简述
- 浏览器在解析 `<video>`/`<audio>` 时，会根据 `<source>` 的 `type` 属性（MIME 类型）探测自身是否支持该格式。
- 对于 `iframe`，浏览器会为被嵌入页面创建一个独立的 **浏览上下文 (Browsing Context)**，使其拥有独立的 DOM 树、JavaScript 环境和样式，`sandbox` 属性正是作用于该环境的隔离机制。
