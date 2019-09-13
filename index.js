var posthtmlify = require('posthtmlify')

module.exports = function () {
  return function (opts) {
    return posthtmlify(opts)
  }
}
