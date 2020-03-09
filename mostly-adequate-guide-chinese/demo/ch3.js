// 函数是否是纯函数，是一个针对参数的概念。
var xs = [1, 2, 3, 4, 5];
// 纯的
xs.slice(0, 3);
//=> [1,2,3]
console.log('1', xs)
console.log('1', xs.slice(0, 3))

xs.slice(0, 3);
//=> [1,2,3]
console.log('2', xs)
console.log('1', xs.slice(0, 3))

xs.slice(0, 3);
//=> [1,2,3]
console.log('3', xs)
console.log('1', xs.slice(0, 3))

// // 不纯的
// xs.splice(0, 3);
// //=> [1,2,3]

var xs1 = [1, 2, 3, 4, 5];
// 有一种冻结这里变量内部数据的办法，也可以间接达到纯函数的目的，但是这里我试过了，没有找到合适的冻结数组的办法。
console.log('不纯的1', xs1)
console.log('不纯的2', xs1.splice(0, 3))
console.log('不纯的3', xs1)
console.log('不纯的4', xs1.splice(0, 3))
console.log('不纯的5', xs1)
console.log('不纯的6', xs1.splice(0, 3))
console.log('不纯的7', xs1)

// xs.splice(0, 3);
// //=> [4,5]

// xs.splice(0, 3);
// //=> []

// 这里要学习的重点是：如何确定什么是不纯的，什么是纯的，并且能够将不纯的函数，转化为纯函数，这里就设计函数参数的提取问题。例如以下就可以将上面不纯的函数转为纯函数。

function f(a, b) {
  var arr = [1, 2, 3, 4, 5];
  return arr.splice(a, b)
}

console.log('纯的2', f(0, 3))
console.log('纯的4', f(0, 3))
console.log('纯的6', f(0, 3))


var memoize = function (f) {
  var cache = {};

  return function () {
    var arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
};
var squareNumber = memoize(function (x) { return x * x; });

squareNumber(4);
//=> 16
console.log(squareNumber(4));
console.log(squareNumber(4));

squareNumber(4); // 从缓存中读取输入值为 4 的结果
//=> 16

squareNumber(5);
//=> 25

squareNumber(5); // 从缓存中读取输入值为 5 的结果
//=> 25
console.log(squareNumber(5));
console.log(squareNumber(5));

// 以下为纯函数和不纯函数的伪代码
// 不纯的
// var signUp = function(attrs) {
//   var user = saveUser(attrs);
//   welcomeUser(user);
// };

// var saveUser = function(attrs) {
//     var user = Db.save(attrs);
//     ...
// };

// var welcomeUser = function(user) {
//     Email(user, ...);
//     ...
// };

// // 纯的
// var signUp = function(Db, Email, attrs) {
//   return function() {
//     var user = saveUser(Db, attrs);
//     welcomeUser(Email, user);
//   };
// };

// var saveUser = function(Db, attrs) {
//     ...
// };

// var welcomeUser = function(Email, user) {
//     ...
// };
// 区分纯函数和不纯函数 以及 正确的转化纯函数是函数式编程的基础。
// class Player {
//   constructor(name, team, hp) {
//     this.name = name
//     this.team = team
//     this.hp = hp
//   }
//   set() {
//     this.hp = this.hp - 1
//   }
// }

var Immutable = require('./immutable');

var decrementHP = function (player) {
  return player.set("hp", player.hp - 1);
};

var isSameTeam = function (player1, player2) {
  return player1.team === player2.team;
};

var punch = function (player, target) {
  if (isSameTeam(player, target)) {
    return target;
  } else {
    return decrementHP(target);
  }
};

var jobe = Immutable.Map({ name: "Jobe", hp: 20, team: "red" });
var michael = Immutable.Map({ name: "Michael", hp: 20, team: "green" });
// let jobe = new Player()
// let michael = new Player()
punch(jobe, michael);
// console.log(punch(jobe, michael));
console.log(jobe.hp);
console.log(michael.hp);
// 这里不清楚为什么打印不出来 map解构。

//=> Immutable.Map({name:"Michael", hp:19, team: "green"})

