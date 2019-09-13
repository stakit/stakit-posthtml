var posthtmlify = require('posthtmlify')
var minifier = require('posthtml-minifier')

module.exports = function () {
  return function (opts) {
    return posthtmlify({
      use: [[minifier, opts]]
    })
  }
}
