# Lesson 02: 盒子模型 (Box Model) - CSS 的灵魂

在 CSS 的世界里，**万物皆盒子**。无论是一个按钮、一张图片，还是整个网页，浏览器都会把它们看作是一个个矩形的“盒子”。理解这个盒子是怎么构成的，是掌握布局的关键。

## 1. 盒子的四个组成部分
想象你买了一面镜子，快递寄过来时：
1. **Content (内容)**：镜子本身。
2. **Padding (内边距)**：镜子和包装盒之间的泡沫塑料（让镜子不挨着盒子边缘）。
3. **Border (边框)**：包装盒的纸板。
4. **Margin (外边距)**：这个快递盒和其他快递盒之间的距离。

### CSS 属性对应：
- `width` / `height`：内容的宽高。
- `padding`：内容与边框之间的空间。
- `border`：包裹内容的线。
- `margin`：盒子与盒子之间的距离（它是透明的）。

## 2. 盒子的计算方式 (Box Sizing) - 重点！
这是新手最容易掉坑里的地方。默认情况下，如果你给一个盒子设置：
`width: 200px; padding: 20px; border: 5px solid black;`
这个盒子的**实际总宽度**会变成：`200 + 20*2 + 5*2 = 250px`！

为了不让 Padding 和 Border 撑大盒子，我们通常会加一行代码：
```css
box-sizing: border-box;
```
加了这行代码后，你设置 `width: 200px`，那么盒子总宽就是 `200px`，Padding 和 Border 会往**里面**挤，而不会把盒子撑大。

## 3. 常用属性写法
- **Padding/Margin**:
  - `padding: 20px;` (四周都是 20)
  - `padding: 10px 20px;` (上下 10，左右 20)
  - `padding: 10px 20px 30px 40px;` (上、右、下、左，顺时针方向)

---

## 4. 视觉挑战题 (Visual Challenge)

**任务**：亲手感受盒子的呼吸感。

1. 打开 `exercises/02_BoxModel/index.html`。
2. 在 `style.css` 中：
    - 给 `.box` 设置背景颜色。
    - 增加 `padding` 看看文字离边框是不是变远了。
    - 增加 `border` 给它穿上外壳。
    - 增加 `margin` 看看它离页面边缘是不是变远了。
    - **对比**：尝试开启和关闭 `box-sizing: border-box;`，看看盒子的大小变化。

**通过 Live Server 查看效果，你会发现你已经开始掌握“空间”的艺术了！**
