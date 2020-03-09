const { compose, } = require('./../ramda')
const {
  func_FileAddress,
  func_ReadFileSync,
} = require('./functions')
// 同步读取文件
let handle_ReadFileSync = compose(
  func_ReadFileSync,
  func_FileAddress,
)

module.exports = {
  handle_ReadFileSync
}