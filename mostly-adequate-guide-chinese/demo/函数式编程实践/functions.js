const { readFileSync } = require('fs')
const { join } = require('path')
const { curry } = require('./../ramda')

// 函数模块 
// 获得绝对路径
let func_FileAddress = curry((str) => { return join(__dirname, str) })
// 同步读取文件内容
let func_ReadFileSync = curry((str) => { return readFileSync(str, 'utf-8') })


module.exports = {
  func_FileAddress,
  func_ReadFileSync,
}