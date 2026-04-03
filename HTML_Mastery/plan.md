# HTML 工业级精通之路 (Mastery Roadmap) - Architect Edition

## 🟢 第一阶段：核心基础与资源管理 (The Foundation & Meta)
> **目标**：掌握网页的“基因”与资源引入机制，确保页面结构稳固且资源加载高效。
- [x] **01. HTML5 核心骨架与元数据**：`DOCTYPE`、`html`、`head`、`body`、`meta` (charset, viewport, SEO TDK 基础)。
- [x] **02. 外部资源与样式脚本引入**：`link` (CSS/Favicon)、`style` (内部样式)、`script` (JS 引入及其 `async`/`defer` 加载策略)。
- [x] **03. 超链接与路径深度解析**：`<a>` 标签全解（锚点、协议链接、target、Security rel）、相对路径与绝对路径的实战陷阱。

## 🟡 第二阶段：内容语义化与文本精雕 (The Content & Semantics)
> **目标**：编写符合 Web 标准的语义化内容，确保 SEO 友好且具备极高的可访问性 (A11y)。
- [x] **04. 块级文本结构**：`div`、`h1-h6`、`p`、`hr`、`blockquote`、`pre`。
- [x] **05. 行内语义与文本强调**：`span`、`strong`、`em`、`mark`、`code`、`ins`、`del`、`br`。
- [x] **06. 列表布局与描述性数据**：`ul`、`ol`、`li`、`dl`、`dt`、`dd` (列表嵌套与导航场景转换)。

## 🟠 第三阶段：多媒体、组件与表单交互 (Multimedia & Interaction)
> **目标**：掌握复杂内容的嵌入与用户交互的核心机制。
- [x] **07. 图像资源引入与性能优化**：`<img>` 标签、`alt` 意义、`srcset`/`sizes` 响应式图片方案。
- [x] **08. 核心表单组件与校验**：`form` 机制、`input` 全类型、`button`、`label` (显式/隐式)、`fieldset`、`legend`。
- [x] **09. 交互式组件**：`select`、`option`、`optgroup`、`textarea`、`datalist`。
- [x] **10. 多媒体与嵌入式安全**：`<video>`、`<audio>` 原生控制、`<iframe>` 安全沙箱 (sandbox)。

## 🔵 第四阶段：现代布局与工业级规范 (Modern Layout & Standards)
> **目标**：对齐大厂标准，构建符合现代浏览器解析逻辑的大型应用结构。
- [x] **11. HTML5 语义化布局进阶**：`header`、`nav`、`main`、`footer`、`section`、`article`、`aside`。
- [x] **12. 结构化数据表格**：`table`、`thead`、`tbody`、`tfoot`、`caption`、单元格合并技巧。
- [x] **13. Web 可访问性 (A11y) 实战**：`aria-*` 角色、屏幕阅读器优化、键盘导航。
- [x] **14. 客户端存储与性能优化策略**：`LocalStorage`、`SessionStorage`、资源预加载 (`preload`/`prefetch`)。

## ⚪ 第五阶段：扩展视野与实验性技术 (Future & Beyond)
- [ ] **15. Canvas 2D 与图形绘制基础** (已跳过)。
- [x] **16. SVG 矢量图形原理与实战**。
- [ ] **17. Web Components 入门** (选修/已跳过)。
- [x] **18. 现代原生交互标签**：`details`/`summary`、`dialog`、`progress`。

---
**导师执行指令**：
1. 每一章教学必须在 `exercises/` 产生代码。
2. 每一章结束后必须在 `notes/` 生成格式为 `Lesson_{编号}_{知识点}.md` 的笔记。
3. 只有通过查验测试，才可将 `[ ]` 修改为 `[x]`。
