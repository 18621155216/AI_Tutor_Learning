# Lesson 09: Interactive Components (交互式组件)

## 核心原理 (Principles)

### 1. `<textarea>`：多行文本 (Multi-line Text)
- **双标签结构**：内容写在标签对之间。
- **关键属性**：
    - `rows` / `cols`：控制初始显示大小。
    - `placeholder`：占位提示。
- **注意**：默认情况下用户可以自由调整大小，通常用 CSS `resize` 属性限制。

### 2. `<select>`：下拉列表 (Dropdowns)
- **子元素**：
    - `<option>`：具体选项。必须有 `value` 属性用于提交数据。
    - `<optgroup>`：逻辑分组标签，其 `label` 属性为组名。
- **优势**：节省空间，强制用户从预定义范围选择，数据更规整。

### 3. `<datalist>`：智能建议 (Input Suggestions)
- **原理**：与 `<input>` 绑定，提供一个“输入建议”列表。
- **绑定**：`<input list="list-id">` 对应 `<datalist id="list-id">`。
- **特点**：比 `select` 更灵活，允许用户输入列表之外的内容。

---

## 最佳实践 (Best Practices)
- **合理分组**：当选项超过 7-8 个时，务必使用 `optgroup` 进行分类，减少用户的视觉负担。
- **默认占位**：为 `select` 提供一个空的第一个选项（如 `<option value="">请选择...</option>`）并设置为 `disabled` 或 `hidden`。
- **字符实体提醒**：如果在 `textarea` 的默认内容中展示代码，务必使用 `&lt;` 等字符实体。
- **标签关联**：始终使用 `label` 关联这些组件，确保 A11y (可访问性) 达标。

---

## 浏览器解析机制简述
- 浏览器在渲染 `select` 时会调用系统的原生 UI 控件，因此在不同系统上的表现略有差异。
- `datalist` 的解析是按需触发的，当用户在输入框中输入字符时，浏览器会自动过滤匹配的 `option` 项并展示。
