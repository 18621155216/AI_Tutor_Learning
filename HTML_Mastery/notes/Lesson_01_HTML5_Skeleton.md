# Lesson 01: HTML5 Core Skeleton (HTML5 核心骨架)

## 核心原理 (Principles)

### 1. DOCTYPE 声明
- **作用**：启用浏览器的 **标准模式 (Standards Mode)**。
- **缺失后果**：进入“怪异模式 (Quirks Mode)”，导致样式表现不一致。

### 2. `<html>` 根元素
- **`lang="zh-CN"`**：
    - **SEO**：帮助搜索引擎识别页面语言。
    - **A11y (可访问性)**：引导屏幕阅读器正确发音。

### 3. `<head>` 元数据区
- **`<meta charset="UTF-8">`**：万国码，防止中文显示乱码。
- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**：
    - **响应式基础**：设置视口宽度等于设备宽度，初始缩放比例为 1.0。
    - **没有它的表现**：移动设备会以 980px 等宽大的虚拟视口渲染页面，导致内容变得极小。

### 4. `<body>` 视图区
- 承载所有用户可见的内容（DOM 树的主体）。

---

## 最佳实践 (Best Practices)
- 始终包含 `lang` 属性。
- 始终包含 `charset` 和 `viewport` meta 标签。
- 标签名统一使用小写（虽然 HTML5 不强制，但这是工业界共识）。

---

## 浏览器解析机制简述
1. 浏览器接收到字节流。
2. 解码器将其转换为字符。
3. 令牌生成器 (Tokenizer) 识别标签。
4. 构建 DOM 树。
**提示**：正确的骨架能确保 DOM 树构建的第一步不走弯路。
