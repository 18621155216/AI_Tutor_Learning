# Lesson 03: Hyperlinks & Paths (超链接与路径管理)

## 核心原理 (Principles)

### 1. `<a>` 标签属性 (Anchor Tag)
- **`href` (Hypertext Reference)**：指向目标地址。
- **`target` 属性**：
    - `_self` (默认)：在当前窗口打开。
    - `_blank`：在新窗口/标签页打开。建议配合 `rel="noopener noreferrer"` 以防安全风险。
- **特殊协议链接**：
    - `mailto:user@example.com`：打开邮件客户端。
    - `tel:13800138000`：在移动设备上拨打电话。

### 2. 相对路径与绝对路径 (Paths)
- **绝对路径 (Absolute Path)**：
    - 包含完整的协议和域名（如 `https://google.com`）。
    - 无论当前文件位置如何，指向始终唯一。
- **相对路径 (Relative Path)**：
    - 相对于当前文件的位置。
    - `./`：当前目录（可省略）。
    - `../`：上一级目录。
    - `folder/`：进入子目录。

### 3. 页面内锚点 (Internal Anchors)
- **原理**：利用元素的 `id` 属性进行定位。
- **用法**：`<a href="#target-id">`。点击后页面将滚动到具有 `id="target-id"` 的元素位置。

---

## 最佳实践 (Best Practices)
- 链接文本应具备描述性，避免使用“点击这里”。
- 使用 `target="_blank"` 时，始终考虑安全风险，配合 `rel="noopener"`。
- 在大型项目中，推荐使用项目根路径或构建工具提供的路径解析方案，以避免复杂的相对路径带来的维护难题。
- 始终为 `<a>` 标签提供 `title` 属性（可选，但对 A11y 有利），增强用户体验。

---

## 浏览器解析机制简述
- 浏览器在点击 `<a>` 标签时，会根据 `href` 的协议（http, mailto, tel 等）调用相应的系统模块或发送 HTTP 请求。
- 如果是页面内锚点，浏览器会计算目标元素在视口中的偏移位置，并触发滚动行为。
