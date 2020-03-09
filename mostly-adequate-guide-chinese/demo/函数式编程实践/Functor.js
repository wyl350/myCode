const { curry } = require('../ramda')

class Container {
  constructor(val) {
    this.__value = val;
  }
  static of(val) {
    return new Container(val)
  }
  map(f) {
    return Container.of(f(this.__value))
  }
}
class Maybe {
  constructor(val) {
    this.__value = val;
  }
  static of(val) {
    return new Maybe(val)
  }
  _isNothing() {
    return (this.__value === null || this.__value === undefined);
  }
  map(f) {
    return this._isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
  }
}
class Left {
  constructor(x) {
    this.__value = x;
  }
  static of(x) {
    return new Left(x);
  }
  map(f) {
    return this;
  }
}
class Right {
  constructor(x) {
    this.__value = x;
  }
  static of(x) {
    return new Right(x);
  }
  map(f) {
    return Right.of(f(this.__value));
  }
}

class Either {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  static of(left, right) {
    return new Either(left, right)
  }
  map(f) {
    return this.right ?
      Either.of(this.left, f(this.right)) :
      Either.of(f(this.left), this.right);
  }
}

// 一、 函子>函子  map
// 1. map 函子>函子  map
var map = curry(function (f, any_functor_at_all) {
  return any_functor_at_all.map(f);
});
// 2.  增加 没有返回值 副作用 f 副作用
// 函子>函子  map
var map_f = curry(function (f, any_functor_at_all) {
  any_functor_at_all.map(f)
  return any_functor_at_all
});
// 3. either 函子>函数
// 选择性打包，紧跟left和right打包的函子
var either = curry(function (f, g, e) {
  switch (e.constructor) {
    case Left: return f(e.__value);
    case Right: return g(e.__value);
  }
});
var maybe = curry(function (x, f, m) {
  return m.isNothing() ? x : f(m.__value);
});

module.exports = {
  Container,
  Maybe,
  Left,
  Right,
  Either,
  map,
  map_f,
  either,
  maybe,
}



// class Ap {
//   constructor(val) {
//     this.__value = val
//   }
//   static of(val) {
//     return new Ap(val)
//   }
//   map(f) {
//     return Ap.of(f(this.__value))
//   }
//   ap(F) {
//     return Ap.of(this.__value(F.val));
//   }
// }


// class IO {
//   constructor(val) {
//     this.__value = val
//   }
//   static of(val) {
//     return new IO(val)
//   }
//   map(f) {
//     return IO.of(f(this.__value))
//   }
//   join() {
//     return this.val;
//   }
//   flatMap(f) {
//     return this.map(f).join();
//   }
// }
// var fs = require('fs');

// var readFile = function (filename) {
//   return new IO(function () {
//     return fs.readFileSync(filename, 'utf-8');
//   });
// };




