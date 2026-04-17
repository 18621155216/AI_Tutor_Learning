# Lesson 10: 权重与层叠 (Specificity) - 深入理解

## 1. 回顾：CSS 层叠优先级

CSS 的全称是 **Cascading Style Sheets**，"层叠"是它的核心特性。当多个样式规则作用于同一个元素时，浏览器按照以下优先级决定哪个样式生效（从高到低）：

1. **!important 声明**（谨慎使用）
2. **内联样式**（HTML 标签中的 `style="..."`）
3. **ID 选择器**（`#id`）
4. **类选择器、属性选择器、伪类**（`.class`, `[type="text"]`, `:hover`）
5. **元素选择器、伪元素**（`div`, `h1`, `::before`）
6. **通配符、继承、浏览器默认样式**

## 2. 特异性（Specificity）精确计算

### 2.1 四位数权重系统
用 `(a, b, c, d)` 表示特异性权重：

| 部分 | 描述 | 示例 |
|------|------|------|
| **a** | 内联样式 | `style="color: red;"` |
| **b** | ID 选择器的数量 | `#header`, `#main` |
| **c** | 类、属性、伪类选择器的数量 | `.nav`, `:hover`, `[type="text"]` |
| **d** | 元素、伪元素选择器的数量 | `div`, `p`, `::before` |

### 2.2 计算示例
```css
/* 特异性: (0, 1, 2, 1) */
#header .nav li.active {}

/* 特异性: (0, 0, 3, 0) */
.nav .list .item {}

/* 特异性: (0, 0, 0, 2) */
div p {}
```

**比较规则**：从左到右逐位比较。例如 `(0, 1, 0, 0)` 比 `(0, 0, 10, 10)` 权重更高（因为第二位更大）。

## 3. !important 的真相

### 3.1 !important 的作用
`!important` 会**突破特异性限制**，强制让某条规则优先级最高。

```css
/* 即使 ID 选择器权重高，加了 !important 的类选择器也会赢 */
#header { color: red; }
.special { color: blue !important; } /* 这个生效 */
```

### 3.2 !important 的问题
1. **破坏可维护性**：滥用 !important 会导致样式难以调试
2. **!important 之间也有竞争**：如果两个 !important 冲突，还是比特异性
3. **无法被覆盖**：唯一的覆盖方法是使用更高特异性 + !important

**最佳实践**：除非绝对必要（如第三方库样式覆盖），否则避免使用 !important。

## 4. 继承（Inheritance）的细节

### 4.1 哪些属性会继承？
- **文字相关**：`color`, `font-family`, `font-size`, `line-height`, `text-align`, `text-decoration`
- **列表相关**：`list-style`, `list-style-type`
- **表格相关**：`border-collapse`, `border-spacing`

### 4.2 哪些属性不会继承？
- **盒子模型**：`margin`, `padding`, `border`, `width`, `height`
- **定位与显示**：`display`, `position`, `top`, `left`, `float`
- **背景与边框**：`background`, `background-color`, `border-radius`

### 4.3 控制继承
```css
.child {
  color: inherit;      /* 显式继承父元素的 color */
  background: initial; /* 使用属性的初始值 */
  border: unset;       /* 如果是继承属性就继承，否则用初始值 */
}
```

## 5. 层叠顺序（Stacking Order）

当特异性相同时，**源代码顺序**决定胜负：后出现的样式覆盖先出现的。

```css
/* 这两个特异性相同，都是 (0, 0, 1, 0) */
.blue { color: blue; }
.red { color: red; }  /* 这个生效，因为它在后面 */
```

## 6. 实际开发中的建议

### 6.1 保持低特异性
- 优先使用类选择器，避免过度嵌套
- 避免使用 ID 选择器写样式（只用于 JS 钩子）
- 使用 BEM 等命名规范

### 6.2 调试技巧
1. 使用浏览器 DevTools 查看应用了哪些样式
2. 查看哪些样式被划掉（被覆盖）
3. 查看每个选择器的特异性

### 6.3 现代解决方案
- **CSS Modules / CSS-in-JS**：自动生成唯一类名，避免特异性战争
- **CSS 自定义属性（变量）**：优先级遵循正常层叠规则

## 7. 视觉挑战题

打开 `exercises/10_Specificity/`，完成以下挑战：

1. **任务 A：特异性计算**
   - 不修改 HTML，只修改 CSS
   - 通过调整选择器的特异性，让目标元素显示指定颜色

2. **任务 B：!important 陷阱**
   - 体验 !important 的威力与问题
   - 学习如何合理使用 !important

3. **任务 C：继承控制**
   - 使用 `inherit`, `initial`, `unset` 控制继承行为

> 使用 DevTools 的"计算样式"面板查看最终应用的样式。