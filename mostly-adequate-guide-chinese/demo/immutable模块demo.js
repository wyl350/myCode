// https://www.jianshu.com/p/c2d01a4f8a98
// cnpm install immutable

var Immutable = require('immutable');
var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50);
map1.get('b'); // 2
map2.get('b'); // 50
console.log(map1.get('b'))

