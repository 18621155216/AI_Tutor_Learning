# JavaScript 变量与数据类型

## 核心概念

### 变量声明方式

| 特性 | var | let | const |
|------|-----|-----|-------|
| 作用域 | 函数作用域 | 块级作用域 | 块级作用域 |
| 变量提升 | 会被提升 | 不会被提升（但存在暂时性死区） | 不会被提升（但存在暂时性死区） |
| 重复声明 | 允许 | 不允许 | 不允许 |
| 重新赋值 | 允许 | 允许 | 不允许（但对象属性可以修改） |

### 数据类型分类

**基本数据类型**（值类型）：
- `Number`：数字（整数、浮点数、NaN、Infinity）
- `String`：字符串
- `Boolean`：布尔值（true/false）
- `Null`：空值
- `Undefined`：未定义
- `Symbol`：唯一标识符（ES6+）

**引用数据类型**：
- `Object`：对象
  - `Array`：数组
  - `Function`：函数
  - `Date`：日期
  - `RegExp`：正则表达式
  - 等等

### 堆栈内存概念

**基本类型**：存储在栈内存中，直接存储值。
- 优点：访问速度快
- 缺点：存储容量有限

**引用类型**：存储在堆内存中，栈内存中存储的是堆内存的地址。
- 优点：存储容量大
- 缺点：访问速度相对较慢

### 类型转换

**隐式转换**：
- 字符串拼接：`'5' + 5 // '55'`
- 算术运算：`'5' - 5 // 0`
- 比较运算：`'10' > 5 // true`

**显式转换**：
- `Number()`：转换为数字
- `String()`：转换为字符串
- `Boolean()`：转换为布尔值
- `parseInt()`/`parseFloat()`：解析字符串为数字

## 代码示例

### 变量声明示例

```javascript
// var 声明
function testVar() {
  console.log(a); // undefined（变量提升）
  var a = 10;
  if (true) {
    var a = 20; // 同一个作用域，覆盖了外部的 a
    console.log(a); // 20
  }
  console.log(a); // 20（被内部的 a 覆盖）
}

// let 声明
function testLet() {
  // console.log(b); // 报错：Cannot access 'b' before initialization
  let b = 10;
  if (true) {
    let b = 20; // 块级作用域，与外部的 b 无关
    console.log(b); // 20
  }
  console.log(b); // 10（保持原值）
}

// const 声明
function testConst() {
  const c = 10;
  // c = 20; // 报错：Assignment to constant variable
  const obj = { name: 'Alice' };
  obj.age = 20; // 允许修改对象属性
  console.log(obj); // { name: 'Alice', age: 20 }
}
```

### 基本类型与引用类型示例

```javascript
// 基本类型（值传递）
let num1 = 10;
let num2 = num1;
num2 = 20;
console.log(num1); // 10（不受影响）
console.log(num2); // 20

// 引用类型（地址传递）
let obj1 = { name: 'Alice' };
let obj2 = obj1;
obj2.name = 'Bob';
console.log(obj1.name); // Bob（受影响，因为指向同一个对象）
console.log(obj2.name); // Bob
```

### 类型转换示例

```javascript
// 隐式转换
console.log('5' + 5); // '55'（字符串拼接）
console.log('5' - 5); // 0（算术运算）
console.log('10' > 5); // true（比较运算）

// 显式转换
console.log(Number('123')); // 123
console.log(String(123)); // '123'
console.log(Boolean(0)); // false
console.log(parseInt('123abc')); // 123
```

## 常见误区

1. **var 变量提升**：使用 var 声明的变量会被提升到函数顶部，可能导致意外的行为。

2. **引用类型的赋值**：引用类型的赋值是地址传递，修改一个变量会影响另一个变量。

3. **隐式类型转换**：隐式类型转换可能导致意外的结果，如 `'0' == false // true`。

4. **const 对对象的作用**：const 声明的对象不能重新赋值，但对象的属性可以修改。

5. **typeof null**：`typeof null // 'object'` 是一个历史遗留问题，null 实际上是一个基本类型。

6. **NaN 的特性**：`NaN` 是一个特殊的数字值，表示"不是一个数字"，但 `typeof NaN // 'number'`。

7. **数字精度问题**：JavaScript 中的数字是浮点数，可能存在精度问题，如 `0.1 + 0.2 // 0.30000000000000004`。

## 最佳实践

1. **使用 let 和 const**：优先使用 let 和 const 声明变量，避免使用 var。

2. **使用 const 优先**：对于不需要重新赋值的变量，使用 const 声明，提高代码的可维护性。

3. **深拷贝对象**：当需要复制对象且不希望修改原对象时，使用深拷贝，如 `JSON.parse(JSON.stringify(obj))`。

4. **使用严格比较**：使用 `===` 进行严格比较，避免隐式类型转换带来的问题。

5. **明确类型转换**：当需要类型转换时，使用显式转换，提高代码的可读性。

6. **合理命名变量**：使用有意义的变量名，遵循驼峰命名法，提高代码的可读性。