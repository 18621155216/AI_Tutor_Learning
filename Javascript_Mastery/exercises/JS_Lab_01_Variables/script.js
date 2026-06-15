// 1. 变量声明练习
function variableDeclaration() {
  console.log('=== 变量声明练习 ===');
  
  // var 声明
  console.log('--- var 声明 ---');
  console.log(a); // undefined（变量提升）
  var a = 10;
  if (true) {
    var a = 20; // 同一个作用域，覆盖了外部的 a
    console.log(a); // 20
  }
  console.log(a); // 20（被内部的 a 覆盖）
  
  // let 声明
  console.log('--- let 声明 ---');
  // console.log(b); // 报错：Cannot access 'b' before initialization
  let b = 10;
  if (true) {
    let b = 20; // 块级作用域，与外部的 b 无关
    console.log(b); // 20
  }
  console.log(b); // 10（保持原值）
  
  // const 声明
  console.log('--- const 声明 ---');
  const c = 10;
  // c = 20; // 报错：Assignment to constant variable
  const obj = { name: 'Alice' };
  obj.age = 20; // 允许修改对象属性
  console.log(obj); // { name: 'Alice', age: 20 }
}

// 2. 基本类型与引用类型练习
function typeDifference() {
  console.log('\n=== 基本类型与引用类型练习 ===');
  
  // 基本类型（值传递）
  console.log('--- 基本类型 ---');
  let num1 = 10;
  let num2 = num1;
  num2 = 20;
  console.log('num1:', num1); // 10（不受影响）
  console.log('num2:', num2); // 20
  
  // 引用类型（地址传递）
  console.log('--- 引用类型 ---');
  let obj1 = { name: 'Alice' };
  let obj2 = obj1;
  obj2.name = 'Bob';
  console.log('obj1.name:', obj1.name); // Bob（受影响，因为指向同一个对象）
  console.log('obj2.name:', obj2.name); // Bob
  
  // 数组也是引用类型
  console.log('--- 数组 ---');
  let arr1 = [1, 2, 3];
  let arr2 = arr1;
  arr2.push(4);
  console.log('arr1:', arr1); // [1, 2, 3, 4]
  console.log('arr2:', arr2); // [1, 2, 3, 4]
}

// 3. 类型转换练习
function typeConversion() {
  console.log('\n=== 类型转换练习 ===');
  
  // 隐式转换
  console.log('--- 隐式转换 ---');
  console.log('"5" + 5:', '5' + 5); // '55'（字符串拼接）
  console.log('"5" - 5:', '5' - 5); // 0（算术运算）
  console.log('"10" > 5:', '10' > 5); // true（比较运算）
  console.log('true + 1:', true + 1); // 2（布尔值转数字）
  console.log('false + 1:', false + 1); // 1（布尔值转数字）
  
  // 显式转换
  console.log('--- 显式转换 ---');
  console.log('Number("123"):', Number('123')); // 123
  console.log('String(123):', String(123)); // '123'
  console.log('Boolean(0):', Boolean(0)); // false
  console.log('Boolean("hello"):', Boolean('hello')); // true
  console.log('parseInt("123abc"):', parseInt('123abc')); // 123
  console.log('parseFloat("3.14abc"):', parseFloat('3.14abc')); // 3.14
}

// 4. 常见错误避免
function avoidMistakes() {
  console.log('\n=== 常见错误避免 ===');
  
  // 避免使用 var
  console.log('--- 避免使用 var ---');
  // 推荐使用 let 或 const
  
  // 避免引用类型的意外修改
  console.log('--- 避免引用类型的意外修改 ---');
  // 深拷贝对象
  const original = { name: 'Alice', age: 20 };
  const copy = JSON.parse(JSON.stringify(original));
  copy.name = 'Bob';
  console.log('original:', original); // { name: 'Alice', age: 20 }
  console.log('copy:', copy); // { name: 'Bob', age: 20 }
  
  // 避免隐式类型转换带来的问题
  console.log('--- 避免隐式类型转换问题 ---');
  // 使用 === 进行严格比较
  console.log('"0" == false:', '0' == false); // true（隐式转换）
  console.log('"0" === false:', '0' === false); // false（严格比较）
  
  // 避免 const 对对象的误解
  console.log('--- 理解 const 对对象的作用 ---');
  const person = { name: 'Alice' };
  // person = { name: 'Bob' }; // 报错：Assignment to constant variable
  person.name = 'Bob'; // 允许修改属性
  console.log('person:', person); // { name: 'Bob' }
}

// 执行所有练习
function runAllExercises() {
  variableDeclaration();
  typeDifference();
  typeConversion();
  avoidMistakes();
  
  // 在页面上显示结果
  const output = document.getElementById('output');
  output.innerHTML = '<p>请打开浏览器控制台查看练习结果（按 F12 键）</p>';
}

runAllExercises();