const fs = require('fs')
const { parse } = require('flatted')

module.exports = function loadData(path) {
  return function () {
    return parse(fs.readFileSync(path))
  }
}