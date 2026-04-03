
- **必须掌握（初级 → 中级就业必备）** ≈ 日常写页面 80–90% 用到的
- **应该了解（中级提升 & 面试常考）**
- **加分项 / 现代实践（大型项目 / 可访问性 / SEO / 维护性）**
- **基本不要求深入（了解概念即可，除非做特定方向）**

你可以对照这个清单，标记出哪些你已经比较清楚，哪些完全没听过或很模糊，然后挑重点问我。

### 1. 必须掌握（核心基础）

#### 文档结构与基本规则
- `<!DOCTYPE html>`
- `<html lang="zh-CN">` 或其他语言代码
- `<head>` 内部必须/常用元素
  - `<meta charset="UTF-8">`
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - `<title>`
  - `<meta name="description">` / `<meta name="keywords">`（SEO 基础）
  - `<link rel="stylesheet" href="...">`
  - `<script src="..."></script>`（defer / async 的区别）
- 字符编码问题（UTF-8 vs GBK 等）

#### 文本与排版核心标签
- 标题：`<h1>`–`<h6>`（层级重要性 & SEO）
- 段落：`<p>`
- 强调：`<strong>`、`<em>`、`<b>`、`<i>`（语义 vs 视觉区别）
- 换行 & 分隔：`<br>`、`<hr>`
- 列表：
  - `<ul>` + `<li>`
  - `<ol>` + `<li>`（type、start、reversed）
  - `<dl>` + `<dt>` + `<dd>`
- 引用：`<blockquote>`、`<q>`、`<cite>`
- 其他：`<pre>`、`<code>`、`<kbd>`、`<samp>`、`<var>`

#### 超链接与导航
- `<a href="...">` 的各种写法
  - 绝对路径 vs 相对路径 vs 根路径
  - 锚点链接 `#id`
  - `target="_blank"` + `rel="noopener noreferrer"`
  - `download` 属性
  - `tel:`、`mailto:`、`sms:`
- `<nav>` 语义标签（常与 `<ul>` 配合）

#### 图片与多媒体
- `<img src="..." alt="必须写" loading="lazy" decoding="async" width height>`
- srcset + sizes（响应式图片）
- `<picture>` + `<source>`（艺术方向 / 格式选择）
- `<figure>` + `<figcaption>`
- `<audio>` 和 `<video>` 基本用法
  - controls、autoplay（muted）、loop、preload
  - source 标签 + 类型 fallback

#### 表格（table）
- `<table>`、`<thead>`、`<tbody>`、`<tfoot>`
- `<tr>`、`<th>`（scope="col/row"）、`<td>`
- colspan、rowspan
- caption
- 语义化：`<thead>`、`<tbody>` 重要性

#### 表单（form）——非常重要
- `<form action method>`（get vs post）
- 常用 input 类型（2025–2026 主流）
  - text、password、email、tel、url、number、search
  - date、time、datetime-local、month、week
  - checkbox、radio（name 相同实现互斥）
  - file（accept、multiple）
  - range、color
  - hidden
- `<label>`（for 与 id 关联、包裹式）
- `<button type="submit/reset/button">`
- `<select>` + `<option>` + `<optgroup>`
- `<textarea>`
- `<fieldset>` + `<legend>`
- 表单验证属性（HTML5）
  - required、pattern、min、max、minlength、maxlength
  - placeholder
  - autocomplete
  - form 属性（input 脱离 form 也能提交）

### 2. 应该了解（中级常考 & 实际项目常用）

#### 语义化标签（HTML5 核心升级）
- 页面结构（landmark roles）
  - `<header>`
  - `<nav>`
  - `<main>`（一个页面通常只一个）
  - `<article>`
  - `<section>`
  - `<aside>`
  - `<footer>`
- 其他语义元素
  - `<time datetime="...">`
  - `<address>`
  - `<details>` + `<summary>`
  - `<dialog>`
  - `<mark>`
  - `<progress>`、`<meter>`

| 标签          | 中文含义       | 主要作用（语义）              | 典型放什么内容                     | 页面中通常出现次数     | 常见位置建议                              | 不能随便嵌套的限制                                                   |
| ----------- | ---------- | --------------------- | --------------------------- | ------------- | ----------------------------------- | ----------------------------------------------------------- |
| `<header>`  | 头部 / 引言区   | 介绍性内容或导航区（不一定是页面最顶部）  | 网站 logo、标题、 slogan、搜索框、主要导航 | 一个页面可多个       | 页面顶部、`<article>` 或 `<section>` 内部开头 | 不能放在 `<footer>`、`<address>` 或另一个 `<header>` 里               |
| `<nav>`     | 导航区        | 主要的导航链接块              | 主菜单、侧边栏菜单、面包屑、页脚导航链接        | 一个页面可多个       | 页面顶部、侧边栏、页脚                         | 不是所有 `<a>` 都要包在里面，只包**主要**导航块                               |
| `<main>`    | 主要内容区      | 页面**独一无二的核心内容**（最重要！） | 文章列表、产品详情、仪表盘主体内容           | **一个页面只能有一个** | 通常在 `<header>` 和 `<nav>` 下面         | 不能嵌套在 `<article>`、`<aside>`、`<nav>`、`<header>`、`<footer>` 里 |
| `<footer>`  | 页脚 / 结尾区   | 结尾信息、版权、相关链接          | 版权声明、联系方式、二次导航、备案号          | 一个页面可多个       | 页面最底部、`<article>` 或 `<section>` 结尾  | —                                                           |
| `<aside>`   | 侧边栏 / 补充内容 | 与主内容相关但**非核心**的补充信息   | 广告、相关文章、作者简介、目录、热门标签        | 可多个           | 主内容旁边、文章结尾                          | —                                                           |
| `<article>` | 独立文章 / 条目  | 独立、可单独拿出来理解的内容        | 博客文章、新闻、论坛帖子、商品卡片           | 可多个           | 放在 `<main>` 里                       | 可以嵌套 `<header>`、`<footer>` 等                                |
| `<section>` | 主题分组 / 章节  | 按主题划分的内容块（要有标题才有意义）   | 章节、Tab 面板、评论区、FAQ 模块        | 可多个           | 放在 `<main>`、`<article>` 里           | 通常应该有标题（`<h2>`~`<h6>`）                                      |

|方面|用大量 div + class 的方式|用语义标签的方式|谁受益最多|
|---|---|---|---|
|**人类可读性**|必须看 class 名才知道这是什么区域|标签名本身就说明了这是页头/导航/主要内容|其他开发者、自己半年后回来看代码|
|**机器理解**|搜索引擎、屏幕阅读器几乎猜不到含义|浏览器、搜索引擎、辅助技术能直接知道含义|SEO、屏幕阅读器、无障碍用户|
|**维护性**|class 名不统一容易乱|标签有标准约定，团队协作更一致|大中型项目、长期维护|
|**默认行为**|几乎没有|部分标签有隐含的 landmark role（辅助技术用）|无障碍访问（accessibility）|
|**SEO 友好度**|一般|更好（搜索引擎更理解内容层级和重要性）|搜索引擎、网站流量|

#### 全局属性（几乎所有标签都能用）
- id、class、title
- style（内联，少用）
- lang、dir（rtl）
- data-* 自定义属性
- tabindex
- accesskey（少用）
- contenteditable
- draggable
- hidden
- spellcheck

#### 实体字符 & 特殊符号
- &lt; &gt; &amp; &quot; &apos;
- &nbsp; &copy; &reg; &euro; 等常用实体

### 3. 加分项 / 现代最佳实践（大厂 / 可访问性 / SEO 看重）

- 可访问性（Accessibility）基础
  - alt 文本质量（不写“图片”、描述功能/内容）
  - 语义化优先于 div 乱用
  - 正确的 heading 层级（不要跳级）
  - label 与控件关联
  - aria-* 属性简单了解（aria-label、aria-hidden 等）
- SEO 基础
  - 标题、描述、语义结构
  - h1 唯一性
  - 使用 `<time>` 而非纯文本日期
- 性能相关
  - loading="lazy"（图片、iframe）
  - decoding="async"
  - 避免阻塞渲染的 script（defer/async）
- 现代特性（HTML5.1/WHATWG Living Standard）
  - `<dialog>` 模态框
  - `<search>`（实验性）
  - popover API（button popovertarget）

### 4. 基本了解即可（除非特定方向）

- `<iframe>`（sandbox、allow）
- `<embed>`、`<object>`
- `<canvas>`（只了解标签，内容靠 JS）
- `<svg>` 内联 vs img（基本区别）
- `<map>` + `<area>`（图像热区，很少用）
- Microdata / RDFa / JSON-LD（结构化数据，SEO 高级）
- Manifest（PWA）
- `<template>`（JS 用得多）

