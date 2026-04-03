# Lesson 02: 选择器与层叠性 (Specificity & Inheritance)

## 1. CSS 的“层叠 (Cascading)”
CSS 的全称是 **Cascading Style Sheets**。层叠意味着当多个样式作用于同一个元素时，浏览器会有一套规则来决定哪个样式最终生效。

### 规则优先级 (从高到低)：
1. **!important**：强制生效（除非另一个 !important 权重更高，极少使用）。
2. **内联样式 (Inline Styles)**：直接写在 HTML 标签上的 `style="..."`。
3. **ID 选择器**：`#id`。
4. **类选择器、属性选择器、伪类**：`.class`, `[type="text"]`, `:hover`。
5. **元素选择器、伪元素**：`div`, `h1`, `::before`。
6. **通配符、继承、浏览器默认样式**：`*`, 继承自父元素的样式。

## 2. 权重计算 (The specificity formula)
我们可以用四位数字来表示权重：`(Inline, ID, Class, Element)`。

| 选择器 | 示例 | 权重 |
| :--- | :--- | :--- |
| 内联样式 | `style="color: red;"` | (1, 0, 0, 0) |
| ID 选择器 | `#header` | (0, 1, 0, 0) |
| 类/伪类/属性 | `.nav`, `:hover` | (0, 0, 1, 0) |
| 元素/伪元素 | `div`, `p` | (0, 0, 0, 1) |

**例子：**
- `div.container #title` 的权重是：`1 个 ID + 1 个 Class + 1 个 Element = (0, 1, 1, 1)`。
- `.header .title` 的权重是：`2 个 Class = (0, 0, 2, 0)`。
- **结果**：第一个选择器的权重更高，样式会覆盖第二个。

## 3. 继承 (Inheritance)
有些属性会自动从父元素传递给子元素，有些则不会。
- **会自动继承的**：`color`, `font-family`, `font-size`, `line-height`, `text-align` 等（通常与文字相关的）。
- **不会继承的**：`margin`, `padding`, `border`, `width`, `height`, `background` 等（通常与盒子结构相关的）。

## 4. 视觉挑战题 (Visual Challenge)
**任务**：在不修改 HTML 的前提下，通过调整 CSS 的权重，让指定的文字变色。

1. 打开 `exercises/02_Specificity/index.html`。
2. 你会看到三组文字，每组都有多个冲突的 CSS 规则。
3. 你的目标是：
    - 让第一行文字变成 **绿色**。
    - 让第二行文字变成 **蓝色**。
    - 让第三行文字变成 **橙色**。
