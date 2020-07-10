const fs = require('fs')
const { parse } = require('flatted')

module.exports = function parseHome () {
  return parse(fs.readFileSync('./src/data/home.json'))
}