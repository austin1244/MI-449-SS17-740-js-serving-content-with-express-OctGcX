var helpers = module.parent.exports

helpers.prototype.loadScripts = function (scripts) {
  var scriptsLinks = ''
  scripts.forEach(function (el) {
    scriptsLinks += '<script src=\'/js/' + el + '.js\'></script>'
  })
  return scriptsLinks
}

module.exports = helpers
