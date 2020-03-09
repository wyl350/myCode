let
  { join } = require('path'),

  repalceJson = {
    文章标题: 'my',
    本文关键词: [1, 2,],
    作者: 'wyl350',
    日期: new Date().toLocaleString()
  },

  dir = 'md',
  inputFile = `index.md`,
  outputFile = `${repalceJson.文章标题}.md`,
  
  inputPath = join(__dirname, dir, inputFile),
  outputPath = join(__dirname, dir, outputFile)

let
  { writeFromPrototype,
  } = require('./conduct_File')

writeFromPrototype(outputPath, repalceJson, inputPath)
