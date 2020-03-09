const
  { readFileSync, writeFileSync } = require('fs'),
  { render } = require('art-template'),
  { curry } = require('./js/ramda.js')

const
  readFile = (inputPath) => {
    let content
    try {
      content = readFileSync(inputPath, 'utf8')
      console.log({
        massage: 'read file is completed.',
        err: null,
      });
    } catch (err) {
      console.log({
        massage: 'read file is not completed.',
        err: err
      });
    }
    return content
  },

  renderFile = (repalceJson, content) => {
    let contentRendered
    contentRendered = render(
      content,
      repalceJson,
    )
    return contentRendered
  },

  writeFile = (outputPath, contentRendered) => {
    try {
      writeFileSync(outputPath, contentRendered, 'utf8')
      console.log({
        massage: 'ok',
        err: null,
      });
    } catch (err) {
      console.log({
        massage: 'cannot find the output file.',
        err: err
      });
    }
  }

const
  readFileCurry = curry(readFile),
  renderFileCurry = curry(renderFile),
  writeFileCurry = curry(writeFile)

module.exports = {
  readFileCurry,
  renderFileCurry,
  writeFileCurry,
}
