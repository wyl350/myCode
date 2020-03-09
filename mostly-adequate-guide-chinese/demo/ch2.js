// 1. 基础理论
// 函数也是一个值。
// 函数是映射关系，承担变量和值得关系。
// 函数的本质：形式上表现为，变量到函数变量调用的映射。
// 1. 函数：函数变量名
// 1. 变量：变量名
// 1. 函数变量调用： 函数变量名(变量名...)

// 1. 任何的函数都是可以进一步封装为新的函数的
// 新的函数可以增加函数参数，也可以减少函数参数。
// 1. 减少函数参数，那么原来函数的参数必须实例化
function h1减少(x, y, z) {
  return x + 2 * y + 3 * z
}
console.log(h1减少(1, 2, 3));

function h2减少(x, y) {
  return function (x, y, z) {
    return x + 2 * y + 3 * z
  }(x, y, 3)  // 这一步一定要调用，函数下包括的一定是调用。调用就是函数值。
  // return function (x, y) {
  //   return x + 2 * y + 3 * 3
  // }(x, y)  // 这一步一定要调用，函数下包括的一定是调用。调用就是函数值。
}
console.log('减少函数参数', h2减少(1, 2));
// 1. 增加函数参数，那么原来函数中的部分常量就需要参数化
function h1增加(x, y, z) {
  return x + 2 * y + 3 * z
}
console.log(h1增加(1, 2, 3));

function h2增加(x, y, z, a) {
  return function (x, y, z) {
    return x + a * y + 3 * z
  }(x, y, z)  // 这一步一定要调用，函数下包括的一定是调用。调用就是函数值。
}
console.log('增加函数参数', h2增加(1, 2, 3, 4));

// 1. 函数参数不变，原函数未发生变化。
// const BlogController = {
//   index(posts) { return Views.index(posts); },
//   show(post) { return Views.show(post); },
//   create(attrs) { return Db.create(attrs); },
//   update(post, attrs) { return Db.update(post, attrs); },
//   destroy(post) { return Db.destroy(post); },
// };
// 这个可笑的控制器（controller）99% 的代码都是垃圾。我们可以把它重写成这样：
// const BlogController = {
//   index: Views.index,
//   show: Views.show,
//   create: Db.create,
//   update: Db.update,
//   destroy: Db.destroy,
// };
// 分析：
// index(posts) {
//   return Views.index(posts);
// },
// 即：
// index = function (posts) {
//   return Views.index(posts);
// }
// 函数关系：Views.index
// 返回值： Views.index(posts)
// 函数变量：posts
// 一眼可以看出 Views.index(posts) 是一个函数调用，函数名为 Views.index 。
// 整体为：Views.index 调用后，Views.index(posts)，被包裹成了一个新的函数，函数名为 index。本质上的过程就是 函数参数（posts）为发生变化的函数包装。因此：

// function (posts) {
//   return Views.index(posts);
// } ===Views.index

// 所以以上的过程可以简写为：index=Views.index。
// 1. 写函数不要跟具体的业务挂钩。
// // 只针对当前的博客
// const validArticles = articles =>
//   articles.filter(article => article !== null && article !== undefined),

// // 对未来的项目更友好
// const compact = xs => xs.filter(x => x !== null && x !== undefined);