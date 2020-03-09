const ramda = require('./ramda')
const { flip, curry, prop, match, add, compose, maybe, concat } = require('./ramda')

class functor {
  constructor(x) {
    this.__value = x
    this.print()
  }
  static of(x) {
    return new functor(x);
  }
  map(f) {
    return functor.of(f(this.__value))
  }
  print() {
    console.log(this.__value)  // 测试代码的时候用的
  }
}
class Maybe {
  constructor(x) {
    this.__value = x;
    this.print()
  }
  static of(x) {
    return new Maybe(x);
  }
  isNothing() {
    return (this.__value === null || this.__value === undefined);
  }
  map(f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
  }

  print() {
    console.log(this)  // 测试代码的时候用的
  }
}



class Either {
  constructor(left, right) {
    this.left = left;
    this.right = right;
    this.print()
  }
  static of(left, right) {
    return new Either(left, right);
  };
  map(f) {
    return this.right ?
      Either.of(this.left, f(this.right)) :
      Either.of(f(this.left), this.right);
  }
  print() {
    console.log(this)  // 测试代码的时候用的
  }
}

class Left extends Either {
  constructor(x) {
    super(x, null)
  }
  static of(x) {
    return new Left(x);
  }
  map(f) {
    return this;
  }
}
class Right extends Either {
  constructor(x) {
    super(null,x)
  }
  static of(x) {
    return new Right(x);
  }
  map(f) {
    return Right.of(f(this.right));
  }
}

Right.of("rain").map(function (str) { return "b" + str; });
// Right("brain")

// Left.of("rain").map(function(str){ return "b"+str; });
// // Left("rain")

// Right.of({host: 'localhost', port: 80}).map(_.prop('host'));
// // Right('localhost')

// Left.of("rolls eyes...").map(_.prop("host"));
// // Left('rolls eyes...')

