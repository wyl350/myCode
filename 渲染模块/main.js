let
  repalceJson = {
    文章标题: '00000',
    本文关键词: [1, 2,],
    作者: 'wyl350',
    日期: new Date().toLocaleString()
  }

let { fileName, writeFromPrototype } = require('./conduct_File')
let { inputPath, outputPath, } = fileName('md', 'index', '000000000')

writeFromPrototype(outputPath, repalceJson, inputPath)
