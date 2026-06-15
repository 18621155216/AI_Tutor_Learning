
分为四个层级：

- **必须掌握（初级到中级就业必备，日常 80–90% 场景）**
- **应该掌握（中级提升、面试常见、实际项目高频）**
- **加分项 / 现代特性（2024–2026 年逐渐成为标配，大厂/中大型项目看重）**
- **了解概念 / 选修方向（视岗位/兴趣决定深度）**

你可以对照这个清单标记自己掌握的程度（比如：已熟练 / 了解但不熟 / 完全没听过 / 模糊），然后挑出你觉得最薄弱或最想确认的 3–8 个点，我们再逐个深入讲解 + 代码示例。

### 1. 必须掌握（CSS 核心基础，写页面绕不开）

#### 选择器（你目前正在学）
- 基础选择器：标签、类、ID、通配符 `*`
- 关系选择器：后代、子代 `>`、相邻兄弟 `+`、通用兄弟 `~`
- 属性选择器：`[attr]`、`[attr="value"]`、`[attr*="value"]`、`^=`、`$=`、`~=`、`|=` 等
- 伪类：`:hover`、`:active`、`:focus`、`:focus-visible`、`:visited`、`:disabled`、`:checked`、`:first-child`、`:last-child`、`:nth-child()` / `:nth-of-type()`（包括公式写法 odd/even/2n+1 等）
- 伪元素：`::before`、`::after`、`::first-line`、`::first-letter`、`::selection`
- 常用组合写法与优先级计算（特异性 specificity）

#### 盒模型与布局基础
- `box-sizing: content-box` vs `border-box`（几乎都用 border-box）
- 外边距合并（margin collapsing）规则与常见场景
- 常见单位：px、%、em、rem、vw/vh、vmin/vmax、ch、ex
- 定位方式：`position: static / relative / absolute / fixed / sticky`
- 常见定位技巧：`top/right/bottom/left`、`z-index`、水平/垂直居中（多种写法）

#### 颜色与视觉效果
- 颜色表示法：命名色、hex、rgb/rgba、hsl/hsla、hwb()、lab/lch（了解趋势）
- `opacity` vs `rgba` 区别
- `background` 复合属性（color / image / position / size / repeat / attachment 等）
- 渐变：`linear-gradient()`、`radial-gradient()`、`repeating-`
- 阴影：`box-shadow`、`text-shadow`
- 边框：`border`、`border-radius`（包括椭圆 / 不规则角）

#### 字体与文本
- `font-family`、`font-size`、`font-weight`、`font-style`
- `line-height`（无单位写法推荐）
- `text-align`、`vertical-align`
- `text-decoration`、`text-transform`、`letter-spacing`、`word-spacing`
- `white-space`、`word-break`、`overflow-wrap` / `text-wrap`
- `text-overflow: ellipsis`

#### 常见显示与溢出
- `display: block / inline / inline-block / none`
- `visibility: visible / hidden`
- `overflow: visible / hidden / auto / scroll`
- `clip-path` 基础（了解）

### 2. 应该掌握（中级常考 & 项目常用）

#### 现代布局核心（2026 年就业基本标配）
- **Flexbox** 全家桶
  - `flex-direction`、`flex-wrap`、`justify-content`、`align-items`、`align-content`
  - `flex-grow`、`flex-shrink`、`flex-basis`、`flex` 缩写
  - `order`、`align-self`
  - 常见布局：圣杯、两栏、三栏、卡片均分、垂直居中
- **CSS Grid**（二维布局神器）
  - `grid-template-columns / rows`、`repeat()`、`fr` 单位、`minmax()`
  - `grid-template-areas`
  - `gap`、`row-gap`、`column-gap`
  - `justify-items`、`align-items`、`place-items`
  - `justify-content`、`align-content`
  - 常见布局：12 栏网格、卡片瀑布流（masonry 接近）、dashboard 布局
  - `grid-auto-flow`、`dense`

#### 响应式设计基础
- 媒体查询 `@media`（min-width / max-width / orientation / prefers-*）
- 移动优先写法 vs 桌面优先
- viewport meta 标签配合
- 图片响应式：`srcset`、`sizes`、`picture`、`loading="lazy"`

#### 过渡与动画基础
- `transition`（property duration timing-function delay）
- `animation` + `@keyframes`
- `will-change`（性能提示）

### 3. 加分项 / 现代特性（2024–2026 年逐渐普及，大厂面试/项目越来越看重）

- **原生嵌套（CSS Nesting）** —— 2023–2025 陆续稳定
- **:has() 选择器**（父选择器）
- **@layer**（级联层 / Cascade Layers）—— 控制样式顺序与第三方冲突
- **Container Queries**（@container）—— 组件根据父容器尺寸响应式（非视口）
  - 容器类型 `container-type: inline-size / size`
  - 容器名称 `container-name`
  - 样式查询 `@container style(--theme: dark)`
- **@scope**（范围限定，减少全局污染）
- **逻辑属性**（logical properties）：`margin-inline`、`padding-block`、`inset-inline-start` 等（适配 rtl/ltr）
- **subgrid**（子网格继承父网格轨道）
- **accent-color**、**color-scheme**（系统暗黑模式适配）
- **@property** 与自定义属性高级用法
- **scroll-driven animations**（滚动驱动动画）
- **anchor-positioning**（锚点定位，类似浮动菜单/tooltip）
- **view transitions**（页面切换动画，@view-transition）

### 4. 了解概念 / 选修方向

- CSS Houdini（paint API、自定义布局等）—— 极少数项目
- CSS 模块 / CSS-in-JS vs 原生（Tailwind、UnoCSS、Styled-components 等生态）
- 性能优化：`contain`、`content-visibility`、`will-change`
- 可访问性相关：`focus-visible`、`outline-offset`、`accent-color` 等
- 颜色新空间：Display P3、OKLCH、color-mix()
- Masonry 布局（grid + masonry 值，部分浏览器已支持）

### 自测快速问题（帮你定位薄弱点）

1. 你能写出 5 种以上水平垂直居中的写法吗？（包含 flex / grid / absolute）
2. `margin: 20px auto` 能居中什么？为什么有时失效？
3. Flexbox 中 `justify-content: space-between` 和 `space-around` 的区别？
4. Grid 中 `grid-template-columns: repeat(3, 1fr)` 和 `repeat(auto-fit, minmax(200px, 1fr))` 分别适合什么场景？
5. 你知道 `:has()` 能解决哪些以前必须用 JS 的场景吗？
6. 你写过 `@media (prefers-reduced-motion: reduce)` 吗？目的是什么？
7. `container-type` 和 `@container` 你见过/用过吗？

你可以直接回复：
- “我最不熟悉的是：Flexbox 细节、Grid 模板区域、:has()、Container Queries”
- 或者 “请详细讲讲 CSS Grid 的常见布局模式”
- 或者 “我对现代特性基本没概念，从哪里开始补？”

我们就从你最需要的地方开始深入。