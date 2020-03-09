// var curry = require('./lodash').curry;
var { curry } = require('./lodash');
// 以下为查找模块-操作字符串
// 一、字符串操作：
var match = curry(function (what, str) {
  return str.match(what);
});
console.log(// 测试
  match(/\s+/g, "hello world"),// [ ' ' ]
  match(/\s+/g)("hello world"),// [ ' ' ]
);

var hasSpaces = match(/\s+/g);
// function(x) { return x.match(/\s+/g) }
console.log(// 测试
  hasSpaces("hello world"),// [ ' ' ]   
  hasSpaces("spaceless"),// null
)

// 以下为替换模块-操作字符串
var replace = curry(function (what, replacement, str) {
  return str.replace(what, replacement);
});
var noVowels = replace(/[aeiou]/ig);
// function(replacement, x) { return x.replace(/[aeiou]/ig, replacement) }
var censored = noVowels("*");
// function(x) { return x.replace(/[aeiou]/ig, "*") }
// 测试
console.log(
  censored("Chocolate Rain"),// 'Ch*c*l*t* R**n'
);





// 二、数组操作：
// 以下为过滤模块-操作数组
var filter = curry(function (f, ary) {
  return ary.filter(f);
});
var findSpaces = filter(hasSpaces);
// function(xs) { return xs.filter(function(x) { return x.match(/\s+/g) }) }
// 测试
console.log(
  filter(hasSpaces, ["tori_spelling", "tori amos"]),// ["tori amos"]
  findSpaces(["tori_spelling", "tori amos"]),// ["tori amos"]
);


// 以下为map映射模块-操作数组
var map = curry(function (f, ary) {
  return ary.map(f);
});
var getChildren = function (x) {
  return x.childNodes;
};
var allTheChildren = map(getChildren);
