# Lesson 00: 初识 CSS - 让网页不再是“裸体”

## 1. 什么是 CSS？
HTML 是网页的 **“骨架”**（内容），而 CSS 就是网页的 **“衣服”**（外观）。
CSS 的全称是 **Cascading Style Sheets**（层叠样式表）。

- **HTML** 告诉浏览器：“这里有一个标题，这里有一个段落。”
- **CSS** 告诉浏览器：“标题要是红色的，段落要有 20 像素的间距。”

## 2. CSS 的基本语法
CSS 的代码长得非常有规律，由三部分组成：**选择器**、**属性**、**属性值**。

```css
h1 {
  color: red;
  font-size: 24px;
}
```

- **h1 (选择器)**：告诉浏览器，“我要给所有的 `<h1>` 标签穿衣服”。
- **color (属性)**：我要改什么？（比如颜色）。
- **red (属性值)**：我要改成什么样？（红色）。
- **注意**：每个属性后面要加分号 `;`，所有规则包在大括号 `{ }` 里。

## 3. 如何把 CSS 引入 HTML？
有三种方式，但**最推荐**的是第三种：

### A. 内联样式 (Inline) - 不推荐
直接写在 HTML 标签里。
```html
<h1 style="color: blue;">我是蓝色的</h1>
```

### B. 内部样式 (Internal) - 练习时可用
写在 HTML 文件的 `<head>` 标签里的 `<style>` 标签内。
```html
<style>
  h1 { color: green; }
</style>
```

### C. 外部样式 (External) - 工业级标准
把 CSS 写在一个独立的文件里（比如 `style.css`），然后在 HTML 里引用它。
```html
<link rel="stylesheet" href="style.css">
```

---

## 4. 视觉挑战题 (Visual Challenge)
**任务**：手动把 CSS 衣服穿在 HTML 骨架上。

1. 打开 `exercises/00_Basics/index.html`，你会看到一个光秃秃的网页。
2. 创建一个 `style.css` 文件。
3. 在 HTML 的 `<head>` 里使用 `<link>` 标签引入 `style.css`。
4. 在 `style.css` 里写一段代码，让 `<h1>` 标签变成紫色 (`purple`)。
5. **自己点击 Live Server 查看效果！**
