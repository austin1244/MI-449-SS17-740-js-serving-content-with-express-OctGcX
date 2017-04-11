var express = require('express')
var Helpers = require('./helpers')
var app = express()
var port = process.env.PORT || 8080

app.use(express.static('public'))
app.locals.helpers = new Helpers()

app.set('view engine', 'ejs')

app.get('/', function (request, response) {
  response.render('layouts/default', {
    view: 'index',
    title: 'Home',
    scripts: [
      'script',
      'test'
    ],
    css: [
      'master',
      'home'
    ]
  })
})
app.get('/animal/:animal', function (request, response) {
  var name = request.params.animal

  if (!animals.hasOwnProperty(name)) {
    response.render('pages/404', { url: request.url })
  } else {
    response.render('layouts/default', {
      view: 'animal',
      title: animals[name].name,
      animal: animals[name],
      css: [
        'master'
      ]
    })
  }
})

var animals = {
  seal: {
    name: 'Seal',
    img: '/img/seal.jpg'
  },
  penguin: {
    name: 'Penguin',
    img: '/img/penguin.jpg'
  },
  whale: {
    name: 'Whale',
    img: '/img/whale.jpg'
  }
}

app.listen(port)
