const { curry, compose } = require('../ramda')
class Functor {
  constructor(val) {
    this.__value = val;
  }
  static of(val) {
    return new Functor(val)
  }
  map(f) {
    return Functor.of(f(this.__value))
  }
}

class Maybe extends Functor {
  constructor(val) {
    super(val)
    // this.__print()
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
  // __print() {
  //   console.log(this.__value)
  // }
}

class Either {
  constructor(left, right) {
    this.left = left;
    this.right = right;
    // this.__print()
  }
  static of(left, right) {
    return new Either(left, right)
  }
  map(f) {
    return this.right ?
      Either.of(this.left, f(this.right)) :
      Either.of(f(this.left), this.right);
  }
  // __print() {
  //   console.log(this.__value)
  // }
}

class Ap {
  constructor(val) {
    this.__value = val
  }
  static of(val) {
    return new Ap(val)
  }
  map(f) {
    return Ap.of(f(this.__value))
  }
  ap(F) {
    return Ap.of(this.__value(F.val));
  }
}


class IO {
  constructor(f) {
    this.__value = f
  }
  static of(x) {
    return new IO(function () {
      return x;
    });
  }
  map(f) {
    return new IO(compose(f, this.__value));
  }
}

// var io_window = new IO(function () { return window; })
var io_window = new IO(window)
console.log(
  io_window.map(function (win) { return win.innerWidth })
);

// // IO(1430)

// io_window.map(_.prop('location')).map(_.prop('href')).map(split('/'));
// // IO(["http:", "", "localhost:8000", "blog", "posts"])




module.exports = {
  Functor,
  Maybe,
  Either,
}