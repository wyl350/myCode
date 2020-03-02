let fs = require('fs')
let path = require('path')
let { curry } = require('./ramda');


class Type {
  constructor(val) {
    this._value = val
    this._types = ['Null',
      'Undefined',
      'Object',
      'Array',
      'String',
      'Number',
      'Boolean',
      'Function',
      'RegExp',
    ]
    this.setProperties()
  }
  getType(o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
  }
  setProperties() {
    let that = this
    that._types.forEach(
      function (t) {
        that['is' + t] = function (o) {
          return that.getType(o) === t.toLowerCase();
        };
      }
    );
  }
}

// 容器模块
class Functor {
  constructor(val) {
    this._value = val;
  }
  static of(val) {
    return new Functor(val)
  }
  map(f) {
    return Functor.of(f(this._value))
  }
  print() {
    console.log(this._value)
    return Functor.of(this._value)
  }
}
class Maybe extends Functor {
  constructor(val) {
    super(val)
  }
  static of(val) {
    return new Maybe(val)
  }

  _isNothing() {
    return (this._value === null || this._value === undefined);
  }

  map(f) {
    return this._isNothing() ? Maybe.of(null) : Maybe.of(f(this._value));
  }
}



// 正则表达式模块
let reg = {
  h1: {
    value: 'h1默认值',
    reg: /^# $/ig,
    return() {
      return `<h1>this.value</h1>`
    },
    css: {

    }
  },
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},

}

// 函数模块

// 读取文件
let readFileSync_curry = curry(
  function (str) {
    return fs.readFileSync(str, 'utf-8')
  }
)
// 切割文本为数组
let split_curry = curry(
  function (str, text) {
    return text.split(str)
  }
)


// console.log(typeof([1]))
h1 = function (arr) {
  if (new Type().isArray(arr)) {
    return arr.map(function (val) {
      if (/^# $/ig.test(val)) {
        return `<h1>${val}<h1>`
      } else if (/^## $/ig.test(val)) {
        return `<h2>${val}<h2>`
      }
    })
  } else {
    return arr
  }
}

let address = path.join(__dirname, 'test.txt')
Maybe.of(address) // 录入文件地址
  .map(readFileSync_curry) // 同步读取文件
  .map(split_curry('\r\n')) // 划分每一行并转为数组
  .print() // 打印
  .map(h1) // 划分每一行并转为数组
  // .map(h2) // 划分每一行并转为数组
  .print() // 打印

// // 函数组合模块
// let compose =
//   function (...ary) {
//     return function (x) {
//       return ary.reduceRight(function (res, cb) {
//         return cb(res)
//       }, x)
//     }
//   }
// var toUpperCase = function (x) { return x.toUpperCase(); };
// var exclaim = function (x) { return x + '!'; };
// var exclaim2 = function (x) { return x + '111'; };
// var exclaim3 = function (x) { return x + '222'; };
// compose(exclaim3, exclaim2, exclaim, toUpperCase)

// 还应该增加一个函数柯里化模块


