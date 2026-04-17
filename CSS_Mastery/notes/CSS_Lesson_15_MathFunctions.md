# Lesson 15: 现代数学函数 - 让网页自动适应大小

## 1. 数学函数概述

CSS 现代数学函数是一组强大的工具，允许我们在 CSS 中进行各种计算，使样式更加灵活和响应式。

### 1.1 为什么使用数学函数

- **响应式设计**：根据屏幕尺寸自动调整值
- **灵活布局**：创建动态的、自适应的布局
- **减少媒体查询**：使用单个表达式替代多个断点
- **提高可维护性**：使代码更简洁、更易于理解
- **增强用户体验**：在各种设备上提供一致的视觉效果

## 2. calc() 函数

`calc()` 函数允许我们在 CSS 中执行数学计算，支持加减乘除四则运算。

### 2.1 基本语法

```css
property: calc(expression);
```

### 2.2 支持的运算符

- `+`：加法
- `-`：减法
- `*`：乘法（至少一个操作数必须是数字）
- `/`：除法（除数必须是数字）

### 2.3 混合单位

`calc()` 函数的强大之处在于它可以混合使用不同的单位：

```css
/* 混合百分比和像素 */
width: calc(100% - 20px);

/* 混合视窗单位和像素 */
font-size: calc(16px + 2vw);

/* 混合多个单位 */
padding: calc(10px + 2% + 0.5em);
```

### 2.4 优先级和括号

使用括号可以控制计算的优先级：

```css
/* 先计算括号内的内容 */
width: calc((100% - 40px) / 3);

/* 复杂表达式 */
height: calc((100vh - 100px) * 0.5);
```

### 2.5 实际应用

```css
/* 侧边栏和内容区布局 */
.sidebar {
  width: 250px;
}

.content {
  width: calc(100% - 250px);
  margin-left: 250px;
}

/* 居中元素 */
.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50%), calc(-50%));
}

/* 动态字体大小 */
body {
  font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1440 - 320)));
}
```

## 3. clamp() 函数

`clamp()` 函数创建一个在最小值和最大值之间的响应式值，它接受三个参数：最小值、首选值和最大值。

### 3.1 基本语法

```css
property: clamp(min, preferred, max);
```

- **min**：最小值，当首选值小于此值时使用
- **preferred**：首选值，通常是一个相对单位（如 vw）
- **max**：最大值，当首选值大于此值时使用

### 3.2 工作原理

`clamp()` 函数的工作原理相当于：

```css
max(min(preferred, max), min);
```

### 3.3 实际应用

```css
/* 响应式字体大小 */
h1 {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
}

/* 响应式容器宽度 */
.container {
  width: clamp(300px, 80%, 1200px);
}

/* 响应式间距 */
.section {
  padding: clamp(1rem, 5vw, 2.5rem);
}

/* 响应式边框半径 */
.card {
  border-radius: clamp(4px, 1vw, 12px);
}
```

### 3.4 与 calc() 结合使用

```css
/* 更复杂的响应式值 */
font-size: clamp(1rem, calc(1rem + 2vw), 2rem);

/* 基于视窗高度的响应式值 */
height: clamp(300px, calc(50vh + 100px), 800px);
```

## 4. min() 函数

`min()` 函数从多个值中选择最小的值。

### 4.1 基本语法

```css
property: min(value1, value2, ...);
```

### 4.2 实际应用

```css
/* 确保元素不会超过指定的最大宽度 */
.element {
  width: min(50%, 500px);
}

/* 响应式字体大小 */
body {
  font-size: min(18px, 5vw);
}

/* 响应式内边距 */
.container {
  padding: min(20px, 5%);
}
```

### 4.3 与其他函数结合

```css
/* 结合 clamp() 使用 */
width: clamp(200px, min(50%, 600px), 800px);

/* 结合 calc() 使用 */
font-size: min(24px, calc(16px + 2vw));
```

## 5. max() 函数

`max()` 函数从多个值中选择最大的值。

### 5.1 基本语法

```css
property: max(value1, value2, ...);
```

### 5.2 实际应用

```css
/* 确保元素至少有指定的最小宽度 */
.element {
  width: max(300px, 30%);
}

/* 响应式字体大小 */
body {
  font-size: max(16px, 2vw);
}

/* 响应式高度 */
.hero {
  height: max(400px, 50vh);
}
```

### 5.3 与其他函数结合

```css
/* 结合 clamp() 使用 */
width: clamp(max(200px, 20%), 50%, 800px);

/* 结合 calc() 使用 */
font-size: max(16px, calc(12px + 1vw));
```

## 6. 数学函数的高级应用

### 6.1 网格布局

```css
/* 响应式网格 */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: clamp(16px, 3vw, 24px);
}

/* 自适应列数 */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(250px, 30%, 400px), 1fr));
  gap: clamp(12px, 2vw, 20px);
}
```

### 6.2 响应式排版

```css
/* 标题字体大小 */
h1 {
  font-size: clamp(1.5rem, 3vw + 1rem, 2.5rem);
}

h2 {
  font-size: clamp(1.25rem, 2.5vw + 0.5rem, 2rem);
}

h3 {
  font-size: clamp(1.125rem, 2vw + 0.25rem, 1.5rem);
}

/* 正文字体大小 */
body {
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: clamp(1.5, 2vw, 1.75);
}
```

### 6.3 响应式间距

```css
/* 容器间距 */
.container {
  padding: clamp(1rem, 4vw, 2rem);
  margin: clamp(1rem, 3vw, 1.5rem);
}

/* 元素间距 */
.element {
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

/* 内边距 */
.card {
  padding: clamp(1.5rem, 5vw, 2.5rem);
}
```

### 6.4 响应式布局组件

```css
/* 响应式导航栏 */
.navbar {
  height: clamp(60px, 10vh, 80px);
  padding: 0 clamp(1rem, 4vw, 2rem);
}

/* 响应式按钮 */
.button {
  padding: clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px);
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  border-radius: clamp(4px, 1vw, 8px);
}

/* 响应式卡片 */
.card {
  width: clamp(280px, 100%, 400px);
  padding: clamp(1.5rem, 4vw, 2rem);
  border-radius: clamp(8px, 2vw, 12px);
}
```

## 7. 数学函数与 CSS 变量

结合 CSS 变量使用数学函数，可以创建更加灵活和可维护的样式。

### 7.1 基本用法

```css
:root {
  --base-font-size: 16px;
  --spacing-unit: 1rem;
  --container-max-width: 1200px;
}

/* 使用变量和数学函数 */
body {
  font-size: var(--base-font-size);
  line-height: calc(var(--base-font-size) * 1.5);
}

.container {
  width: min(100%, var(--container-max-width));
  margin: 0 auto;
  padding: clamp(1rem, 3vw, 2rem);
}

.section {
  margin-bottom: calc(var(--spacing-unit) * 2);
}
```

### 7.2 动态修改变量

```javascript
// 获取根元素
const root = document.documentElement;

// 修改变量值
root.style.setProperty('--base-font-size', '18px');

// 数学函数会自动重新计算
// body 的 line-height 会自动更新为 18px * 1.5 = 27px
```

### 7.3 主题切换

```css
:root {
  --base-font-size: 16px;
  --spacing-unit: 1rem;
}

.theme-large {
  --base-font-size: 18px;
  --spacing-unit: 1.25rem;
}

body {
  font-size: var(--base-font-size);
  line-height: calc(var(--base-font-size) * 1.5);
}

.container {
  padding: clamp(1rem, 3vw, calc(var(--spacing-unit) * 2));
}
```

## 8. 性能考虑

### 8.1 计算性能

- **浏览器支持**：现代浏览器对数学函数的支持良好
- **计算开销**：数学函数的计算开销很小，不会影响性能
- **缓存**：浏览器会缓存计算结果，避免重复计算

### 8.2 最佳实践

- **合理使用**：只在需要时使用数学函数
- **简化表达式**：避免过于复杂的计算表达式
- **测试**：在不同设备和浏览器上测试计算结果
- **回退方案**：为不支持的浏览器提供回退样式

### 8.3 浏览器兼容性

| 函数 | Chrome | Firefox | Safari | Edge |
|------|--------|---------|--------|------|
| calc() | 26+ | 19+ | 7+ | 12+ |
| clamp() | 79+ | 75+ | 11.1+ | 79+ |
| min() | 79+ | 75+ | 11.1+ | 79+ |
| max() | 79+ | 75+ | 11.1+ | 79+ |

## 9. 实际应用案例

### 9.1 响应式网格布局

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: clamp(16px, 3vw, 24px);
}

/* 响应式卡片 */
.card {
  background: white;
  padding: clamp(20px, 4vw, 32px);
  border-radius: clamp(8px, 2vw, 12px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
```

### 9.2 响应式英雄区域

```css
.hero {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  padding: clamp(40px, 10vw, 80px);
  min-height: clamp(400px, 60vh, 600px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: clamp(16px, 3vw, 24px);
}

.hero p {
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-bottom: clamp(24px, 4vw, 32px);
  max-width: 600px;
}

.hero-button {
  padding: clamp(12px, 3vw, 16px) clamp(24px, 5vw, 32px);
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  background: white;
  color: #3b82f6;
  border: none;
  border-radius: clamp(4px, 1vw, 8px);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
}
```

### 9.3 响应式表单

```css
.form {
  max-width: clamp(400px, 80%, 600px);
  margin: 0 auto;
  padding: clamp(24px, 5vw, 32px);
  background: white;
  border-radius: clamp(8px, 2vw, 12px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: clamp(16px, 3vw, 24px);
}

.form-label {
  display: block;
  margin-bottom: clamp(8px, 1.5vw, 12px);
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: clamp(10px, 2vw, 12px);
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  border: 1px solid #e2e8f0;
  border-radius: clamp(4px, 1vw, 8px);
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-button {
  width: 100%;
  padding: clamp(12px, 2.5vw, 16px);
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: clamp(4px, 1vw, 8px);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background: #2563eb;
}
```

## 10. 常见问题与解决方案

### 10.1 计算结果不符合预期

**原因**：
- 运算符前后没有空格
- 单位使用不当
- 浏览器兼容性问题

**解决方案**：
- 确保运算符前后有空格：`calc(100% - 20px)` 而不是 `calc(100%-20px)`
- 确保单位兼容：`calc(100px + 5em)` 是有效的，但 `calc(100px + 5)` 是无效的
- 为不支持的浏览器提供回退样式

### 10.2 性能问题

**原因**：
- 过于复杂的计算表达式
- 在大量元素上使用数学函数

**解决方案**：
- 简化计算表达式
- 避免在大量元素上使用复杂的数学函数
- 使用 CSS 变量存储计算结果

### 10.3 响应式设计问题

**原因**：
- 断点设置不合理
- 数学函数参数选择不当

**解决方案**：
- 测试不同屏幕尺寸下的效果
- 调整数学函数的参数
- 结合媒体查询使用

## 11. 视觉挑战题

打开 `exercises/15_MathFunctions/`，完成以下挑战：

1. **任务 A：calc() 函数**
   - 使用 calc() 函数进行各种计算
   - 混合不同单位进行计算
   - 尝试复杂的计算表达式

2. **任务 B：clamp() 函数**
   - 使用 clamp() 函数创建响应式值
   - 理解 clamp(min, preferred, max) 的工作原理
   - 应用于字体大小、宽度、间距等属性

3. **任务 C：min() 和 max() 函数**
   - 使用 min() 函数选择最小值
   - 使用 max() 函数选择最大值
   - 应用于不同的 CSS 属性

4. **任务 D：数学函数组合使用**
   - 组合使用 calc()、clamp()、min()、max() 函数
   - 创建复杂的响应式布局
   - 优化不同屏幕尺寸下的显示效果

5. **任务 E：数学函数与 CSS 变量**
   - 使用 CSS 变量定义基础值
   - 通过数学函数计算最终值
   - 使用 JavaScript 动态修改变量值

6. **任务 F：实际应用案例**
   - 使用数学函数实现响应式卡片布局
   - 创建自适应的英雄区域
   - 确保在各种屏幕尺寸下都有良好的显示效果

> 使用浏览器开发者工具检查数学函数的计算结果，调整浏览器窗口大小观察响应式效果。