# Lesson 07: Image Resources & Performance Optimization (图像资源引入与性能优化)

## 核心原理 (Principles)

### 1. `<img>` 标签基础
- **`src`**：图像文件路径。
- **`alt`**：图像替代文本，用于 SEO 和 A11y。
- **`width` / `height`**：指定图像尺寸，避免布局抖动 (Layout Shift)。

### 2. 响应式图像 (Responsive Images)
- **`srcset`**：提供多张不同分辨率的图像，浏览器根据设备像素密度 (DPR) 和视口大小选择。
    - **单位**：`w` (图像实际宽度) 或 `x` (像素密度)。
- **`sizes`**：配合 `srcset`，声明图像在不同视口下会占据的宽度。
- **`<picture>` 标签**：更灵活的响应式方案，可根据媒体查询 (`media`) 或图像格式 (`type`) 提供不同图像。
    - **子元素**：`<source>` (提供不同资源) 和 `<img>` (回退)。

---

## 最佳实践 (Best Practices)
- **始终提供 `alt` 属性**：即使是装饰性图片，也应提供空 `alt=""`。
- **指定 `width` 和 `height`**：避免页面重排，提升用户体验。
- **优先使用 `srcset` 和 `sizes`**：实现响应式图像，节省带宽。
- **考虑使用 `<picture>`**：提供 WebP 等新格式，或针对不同视口提供艺术指导 (Art Direction)。
- **图像压缩**：在上传前对图像进行无损或有损压缩。

---

## 浏览器解析机制简述
- 浏览器会根据 `srcset` 和 `sizes` 属性，在下载图像之前，智能地选择最适合当前设备和视口的图像资源。
- `<picture>` 标签允许浏览器根据 `<source>` 标签的 `media` 和 `type` 属性进行条件判断，选择最合适的图像资源。
