let
  { curry, compose } = require('./js/ramda'),
  ramda = require('./js/ramda'),
  {
    readFileCurry,
    renderFileCurry,
    writeFileCurry,
  } = require('./function.js'),

  writeFromPrototype = (
    outputPath,
    repalceJson,
    inputPath,
  ) => {
    compose(writeFileCurry(outputPath), renderFileCurry(repalceJson), readFileCurry)(inputPath)
  }

writeFromPrototype = curry(writeFromPrototype)

module.exports = {
  writeFromPrototype,
}
// console.log(
//   ramda.
// );
