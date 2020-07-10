const nunjucksDateFilter = require('nunjucks-date-filter')

module.exports = function date(val, param) {
  return nunjucksDateFilter(val, param)
}