# Lesson 08: Form Basics (核心表单组件与校验)

## 核心原理 (Principles)

### 1. `<form>` 容器
- **`action`**：数据提交的目标 URL。
- **`method`**：提交方式。
    - `GET`：数据可见，适合搜索。
    - `POST`：数据不可见，适合敏感信息。

### 2. `<label>` 绑定 (Labeling)
- **显式绑定**：使用 `for` 属性关联 `input` 的 `id`。
- **隐式绑定**：将 `input` 直接包裹在 `label` 内部。
- **意义**：增加点击区域，提升 A11y (可访问性)。

### 3. `<input>` 全能选手
- **常用类型**：
    - `text`：文本。
    - `password`：掩码密码。
    - `radio`：单选（同组需共享同一个 `name`）。
    - `checkbox`：多选。
    - `submit`：提交。
- **关键属性**：
    - `name`：数据提交时的键（Key）。
    - `id`：用于 DOM 操作和 label 绑定。
    - `value`：提交的数据值。
    - `required`：原生必填校验。
    - `placeholder`：占位提示。

### 4. 逻辑分组
- **`<fieldset>`**：将相关输入项组合在一起。
- **`<legend>`**：为该组提供标题。

---

## 最佳实践 (Best Practices)
- **始终使用 `<label>`**：这是提升表单可用性的第一步。
- **合理的 `name` 命名**：与后端接口保持一致（如 `username`, `pwd`）。
- **原生校验优先**：利用 `required`、`minlength` 等属性，减少不必要的 JavaScript。
- **按钮类型明确**：在 `form` 内部的按钮，默认就是 `submit` 类型。如果需要普通按钮，应明确指定 `type="button"`。

---

## 浏览器解析机制简述
- 当点击 `submit` 按钮时，浏览器会自动收集该表单内所有带有 `name` 属性的 `input` 的值。
- 如果是 `GET` 方法，浏览器会将数据编码为查询字符串（Query String）附加在 URL 之后。
- 如果是 `POST` 方法，浏览器会将数据编码并放入 HTTP 请求的主体（Body）中。
