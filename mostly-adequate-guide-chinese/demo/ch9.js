var fs = require('fs');
const { compose, curry, add, head,ap } = require('./ramda')
console.log(
  require('./ramda')

);

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

var map = curry(function (f, any_functor_at_all) {
  return any_functor_at_all.map(f);
});

class Maybe {
  constructor(x) {
    this.__value = x;
    // this.print()
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

  join () {
    return this.isNothing() ? Maybe.of(null) : this.__value;
  }
  // print() {
  //   console.log(this)  // 测试代码的时候用的
  // }
}

class IO {
  constructor(f) {
    this.__value = f;
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

// function add1(a){

// }

// console.log(
//   IO.of(1).map(add1).__value(),
//   IO.of(add1).map(add1).__value()
// );





//  readFile :: String -> IO String
var readFile = function (filename) {
  return new IO(function () {
    return fs.readFileSync(filename, 'utf-8');
  });
};

//  print :: String -> IO String
var print = function (x) {
  return new IO(function () {
    console.log(x);
    return x;
  });
}

// Example
// ===========================
//  cat :: IO (IO String)
var cat = compose(map(print), readFile);

console.log(
cat('./test.md')
) 


// // IO(IO("[core]\nrepositoryformatversion = 0\n"))

//  cat :: String -> IO (IO String)

//  catFirstChar :: String -> IO (IO String)
var catFirstChar = compose(map(map(head)), cat);
console.log(
  catFirstChar("./test.md")
)
// IO(IO("["))
