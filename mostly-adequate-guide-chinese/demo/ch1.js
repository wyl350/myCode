// 第一种 ES6声明类形式:
class Flock {
  constructor(n) {
    this.seagulls = n;
  }
  conjoin(other) {
    this.seagulls += other.seagulls;
    this.print()
    return this;
  };
  breed(other) {
    this.seagulls = this.seagulls * other.seagulls;
    this.print()
    return this;
  };
  print() {
    console.log('this.seagulls', this.seagulls);
  };
};

// 第二种：ES5构造函数形式
// var Flock = function (n) {
//   this.seagulls = n;
// };

// Flock.prototype.conjoin = function (other) {
//   this.seagulls += other.seagulls;
//   this.print()
//   return this;
// };

// Flock.prototype.breed = function (other) {
//   this.seagulls = this.seagulls * other.seagulls;
//   this.print()
//   return this;
// };

// Flock.prototype.print = function () {
//   console.log(this.seagulls);
// };


// 测试代码：
var flock_a = new Flock(4); // 4
var flock_b = new Flock(2); // 2
var flock_c = new Flock(0); // 0

var result = flock_a.conjoin(flock_c) // 已经在操作内部属性了，只是没有发生变化。 4+0=4
  .breed(flock_b)//注意，这步的时候，属性已经被更改为了：4*2=8
  .conjoin(flock_a.breed(flock_b)).seagulls; // 括号内部的 flock_a.breed(flock_b) 是更深一步的执行栈，结果是8*2=16 ，然后执行 .conjoin 函数，结果就是 16。注意：前面的 flock_a 对象的 属性值已经变为了 16，所以，最后的步骤就是 16+16=32 。
// 综合以上，每一次代码运行都会修改 flock_a 属性值的值，所以，flock_a 对象的状态是非常难以跟踪的。
// 4+0=4  flock_a.conjoin(flock_c)
// 4*2=8  flock_a.conjoin(flock_c).breed(flock_b)
// 8+(8)=16


var conjoin = function (flock_x, flock_y) { return flock_x + flock_y };
var breed = function (flock_x, flock_y) { return flock_x * flock_y };

var flock_a = 4;
var flock_b = 2;
var flock_c = 0;

var result = conjoin(breed(flock_b, conjoin(flock_a, flock_c)), breed(flock_a, flock_b));
console.log('result', result);

//=>16
// 本质上是：(a+c)*b+(a*b)=(4+0)*2+(4*2)=16


var add = function (x, y) { return x + y };
var multiply = function (x, y) { return x * y };

var flock_a = 4;
var flock_b = 2;
var flock_c = 0;

var result = add(multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b));
console.log('result', result);
//=>16
// 以上版本的压缩写法：
var fa = (x, y) => x + y
var fm = (x, y) => x * y
var a = 4;
var b = 2;
var c = 0;
var r = fa(fm(b, fa(a, c)), fm(a, b));
console.log('r', result);

// // 结合律（assosiative）
// add(add(x, y), z) == add(x, add(y, z));

// // 交换律（commutative）
// add(x, y) == add(y, x);

// // 同一律（identity）
// add(x, 0) == x;

// // 分配律（distributive）
// multiply(x, add(y,z)) == add(multiply(x, y), multiply(x, z));
// // 原有代码
// add(multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b));

// // 应用同一律，去掉多余的加法操作（add(flock_a, flock_c) == flock_a）
// add(multiply(flock_b, flock_a), multiply(flock_a, flock_b));

// // 再应用分配律
// multiply(flock_b, add(flock_a, flock_a));

