
var fs = require('fs')
// register helpers
function helpers () {};
// autoload
(helpers.prototype.autoload = function () {
  fs.readdir('./helpers', (err, files) => {
    files.forEach(file => {
      if (file.substring(file.length - 3) === '.js' &&
          file !== 'index.js'
          ) {
        console.log('including helper ' + file.substring(0, file.length - 3) )
        module.exports = require('./' + file )
      }
    })
  })
})()

module.exports = helpers
