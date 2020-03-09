const { Maybe } = require('./Maybe')
const {
  handle_ReadFileSync,
} = require('./handles')

// 业务模块
let container = Maybe.of('./test.js')
  .map(handle_ReadFileSync) 



 

// readFileSync_curry

// // 切割文本为数组
// let split_curry = curry(
//   function (str, text) {
//     return text.split(str)
//   }
// )


// // 处理业务模块 针对不同的样式
// let h1 = function (arr) {
//   if (new Type().isArray(arr)) {
//     return arr.map(function (val) {
//       if (/^# $/ig.test(val)) {
//         return `<h1>${val}<h1>`
//       } else if (/^## $/ig.test(val)) {
//         return `<h2>${val}<h2>`
//       }
//     })
//   } else {
//     return arr
//   }
// }
// module.exports = { readFileSync_curry, split_curry, h1 }