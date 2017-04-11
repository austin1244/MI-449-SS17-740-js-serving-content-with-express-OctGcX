var helpers = module.parent.exports

helpers.prototype.loadCSS = function (css) {
  var cssLinks = ''
  css.forEach(function (el) {
    cssLinks += '<link rel=\'stylesheet\' href=\'/css/' + el + '.css\'>'
  })
  return cssLinks
}

module.exports = helpers
