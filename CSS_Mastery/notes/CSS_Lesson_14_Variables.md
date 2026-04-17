# Lesson 14: CSS 变量 - 一键换肤的秘密

## 1. CSS 变量概述

CSS 变量（也称为自定义属性）是 CSS3 引入的一项功能，允许我们定义可重用的值，并在整个样式表中引用它们。

### 1.1 为什么使用 CSS 变量

- **可维护性**：集中管理样式值，修改一处即可影响全局
- **灵活性**：可以在运行时动态修改
- **可读性**：使用有意义的名称代替硬编码值
- **主题切换**：轻松实现深色模式、浅色模式等主题切换
- **响应式设计**：在媒体查询中修改变量值

## 2. CSS 变量的基本语法

### 2.1 变量定义

```css
:root {
  --primary-color: #3b82f6;
  --font-size: 16px;
}
```

- 变量名必须以 `--` 开头
- 变量值可以是任何有效的 CSS 值
- 通常在 `:root` 伪类中定义全局变量

### 2.2 变量使用

```css
.element {
  color: var(--primary-color);
  font-size: var(--font-size);
}
```

- 使用 `var()` 函数引用变量
- 可以为变量提供默认值：`var(--primary-color, #000)`

## 3. CSS 变量的作用域

### 3.1 全局作用域

在 `:root` 中定义的变量具有全局作用域，可以在整个文档中使用。

```css
:root {
  --primary-color: #3b82f6;
}

/* 可以在任何元素中使用 */
button {
  background-color: var(--primary-color);
}
```

### 3.2 局部作用域

在特定选择器中定义的变量只在该选择器及其后代中有效。

```css
.container {
  --container-bg: #f8fafc;
  background-color: var(--container-bg);
}

/* 子元素可以使用 */
.container .item {
  border-color: var(--container-bg);
}

/* 非子元素不能使用 */
.sidebar {
  /* 这里无法访问 --container-bg */
}
```

### 3.3 变量继承

子元素会继承父元素中定义的变量。

```css
.parent {
  --text-color: #1e293b;
}

.child {
  /* 继承父元素的 --text-color */
  color: var(--text-color);
}
```

### 3.4 变量覆盖

当子元素中定义了与父元素同名的变量时，会覆盖父元素的变量值。

```css
.parent {
  --text-color: #1e293b;
}

.child {
  --text-color: #64748b; /* 覆盖父元素的变量 */
  color: var(--text-color); /* 使用子元素的变量值 */
}
```

## 4. CSS 变量的高级特性

### 4.1 变量计算

可以使用 `calc()` 函数与变量一起进行计算。

```css
:root {
  --base-font-size: 16px;
  --heading-font-size: calc(var(--base-font-size) * 1.5);
}

h1 {
  font-size: var(--heading-font-size);
}
```

### 4.2 变量的级联

CSS 变量遵循 CSS 的级联规则，后定义的变量会覆盖先定义的变量。

```css
:root {
  --primary-color: #3b82f6;
}

/* 后面的定义会覆盖前面的 */
:root {
  --primary-color: #2563eb;
}
```

### 4.3 变量与媒体查询

可以在媒体查询中修改变量值，实现响应式设计。

```css
:root {
  --font-size: 16px;
}

@media (max-width: 768px) {
  :root {
    --font-size: 14px;
  }
}

body {
  font-size: var(--font-size);
}
```

### 4.4 变量与动画

CSS 变量可以与 `transition` 和 `animation` 一起使用。

```css
:root {
  --primary-color: #3b82f6;
}

.button {
  background-color: var(--primary-color);
  transition: background-color 0.3s ease;
}

.button:hover {
  --primary-color: #2563eb;
}
```

## 5. 使用 JavaScript 操作 CSS 变量

### 5.1 获取变量值

```javascript
// 获取根元素的变量值
const rootStyles = getComputedStyle(document.documentElement);
const primaryColor = rootStyles.getPropertyValue('--primary-color');
console.log(primaryColor); // 输出: #3b82f6

// 获取特定元素的变量值
const element = document.querySelector('.element');
const elementStyles = getComputedStyle(element);
const elementColor = elementStyles.getPropertyValue('--element-color');
```

### 5.2 设置变量值

```javascript
// 设置根元素的变量值
document.documentElement.style.setProperty('--primary-color', '#ef4444');

// 设置特定元素的变量值
const element = document.querySelector('.element');
element.style.setProperty('--element-color', '#10b981');

// 移除变量
 element.style.removeProperty('--element-color');
```

### 5.3 动态主题切换示例

```javascript
// 主题切换函数
function setTheme(theme) {
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.style.setProperty('--bg-color', '#0f172a');
    root.style.setProperty('--text-color', '#f8fafc');
    root.style.setProperty('--primary-color', '#60a5fa');
  } else if (theme === 'light') {
    root.style.setProperty('--bg-color', '#f8fafc');
    root.style.setProperty('--text-color', '#1e293b');
    root.style.setProperty('--primary-color', '#3b82f6');
  }
}

// 事件监听
document.querySelector('.theme-dark').addEventListener('click', () => setTheme('dark'));
document.querySelector('.theme-light').addEventListener('click', () => setTheme('light'));
```

## 6. CSS 变量的最佳实践

### 6.1 命名规范

- **使用有意义的名称**：`--primary-color` 而不是 `--color1`
- **使用连字符**：`--font-size-large` 而不是 `--fontSizeLarge`
- **使用前缀**：为避免冲突，可以使用项目前缀，如 `--myapp-primary-color`
- **组织变量**：按功能或类型组织变量

### 6.2 变量组织

```css
:root {
  /* 颜色变量 */
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  --color-accent: #f59e0b;
  
  /* 字体变量 */
  --font-family: system-ui, sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  
  /* 间距变量 */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  
  /* 边框变量 */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.375rem;
  --border-radius-lg: 0.5rem;
  
  /* 阴影变量 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### 6.3 性能考虑

- **变量查找**：CSS 变量的查找速度比硬编码值稍慢，但差异很小
- **过度使用**：不要为每个值都创建变量，只对重复使用的值创建变量
- **嵌套变量**：可以使用变量定义其他变量，但不要过度嵌套

### 6.4 浏览器兼容性

- **现代浏览器**：Chrome 49+, Firefox 31+, Safari 9.1+, Edge 15+ 支持 CSS 变量
- **旧版浏览器**：IE 11 及以下版本不支持 CSS 变量
- **降级方案**：可以为不支持 CSS 变量的浏览器提供后备样式

## 7. CSS 变量的实际应用

### 7.1 主题切换

```css
/* 浅色主题 */
:root {
  --bg-color: #f8fafc;
  --text-color: #1e293b;
  --primary-color: #3b82f6;
}

/* 深色主题 */
.theme-dark {
  --bg-color: #0f172a;
  --text-color: #f8fafc;
  --primary-color: #60a5fa;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

button {
  background-color: var(--primary-color);
  color: white;
}
```

### 7.2 响应式设计

```css
:root {
  --container-width: 1200px;
  --font-size: 16px;
  --spacing: 1rem;
}

@media (max-width: 1200px) {
  :root {
    --container-width: 95%;
  }
}

@media (max-width: 768px) {
  :root {
    --font-size: 14px;
    --spacing: 0.75rem;
  }
}

.container {
  width: var(--container-width);
  font-size: var(--font-size);
  padding: var(--spacing);
}
```

### 7.3 组件样式

```css
.card {
  --card-bg: white;
  --card-text: #1e293b;
  --card-border: #e2e8f0;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  background-color: var(--card-bg);
  color: var(--card-text);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  border-radius: 0.5rem;
  padding: 1rem;
}

.card:hover {
  --card-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
```

## 8. CSS 变量与预处理器的对比

### 8.1 CSS 变量 vs SASS/LESS 变量

| 特性 | CSS 变量 | SASS/LESS 变量 |
|------|----------|----------------|
| 运行时修改 | ✅ 支持 | ❌ 不支持 |
| 作用域 | ✅ 支持 | ❌ 不支持 |
| 继承 | ✅ 支持 | ❌ 不支持 |
| 与 JavaScript 交互 | ✅ 支持 | ❌ 不支持 |
| 浏览器原生支持 | ✅ 支持 | ❌ 需要编译 |
| 语法 | `--variable` | `$variable` |

### 8.2 何时使用 CSS 变量

- **需要运行时修改**：如主题切换、用户偏好设置
- **需要作用域控制**：不同组件使用不同的变量值
- **需要与 JavaScript 交互**：动态修改变量
- **简单项目**：不需要预处理器的复杂功能

### 8.3 何时使用预处理器变量

- **需要复杂的计算**：如 SASS 的函数和混合器
- **需要条件逻辑**：如 SASS 的 if/else 语句
- **需要循环**：如 SASS 的 for/each 循环
- **大型项目**：需要更强大的组织和管理能力

## 9. 常见问题与解决方案

### 9.1 变量未生效

**原因**：
- 变量名拼写错误
- 变量作用域问题
- 浏览器不支持

**解决方案**：
- 检查变量名拼写
- 确保变量在正确的作用域内定义
- 为不支持的浏览器提供后备样式

### 9.2 变量计算错误

**原因**：
- `calc()` 函数使用不当
- 单位不匹配

**解决方案**：
- 正确使用 `calc()` 函数：`calc(var(--width) * 2)`
- 确保单位一致：`var(--width, 100px)`

### 9.3 性能问题

**原因**：
- 过度使用变量
- 复杂的变量嵌套

**解决方案**：
- 只对重复使用的值创建变量
- 避免过度嵌套变量
- 合理组织变量结构

## 10. 视觉挑战题

打开 `exercises/14_Variables/`，完成以下挑战：

1. **任务 A：基本变量定义与使用**
   - 在 :root 中定义变量
   - 在元素中使用 var() 函数
   - 尝试变量计算

2. **任务 B：变量作用域**
   - 理解变量的继承规则
   - 观察变量覆盖效果

3. **任务 C：动态修改变量**
   - 使用 JavaScript 修改变量
   - 观察变量变化对元素的影响

4. **任务 D：主题切换**
   - 切换不同主题
   - 观察主题变化效果

5. **任务 E：变量与响应式设计**
   - 调整浏览器窗口大小
   - 观察响应式变量的变化

6. **任务 F：变量最佳实践**
   - 学习变量的组织和命名
   - 理解变量的最佳使用方式

> 使用浏览器开发者工具检查变量的应用情况。