var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', function (request, response) {
  response.render('layouts/default', {
    view: 'index',
    title: 'Home',
    animals: animals,
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
        'master',
        'styles'
      ]
    })
  }
})

var animals = {
  seal: {
    name: 'Seal',
    img: '/img/seal.jpg',
    link: 'http://www.coolantarctica.com/gallery/seals/antarctica_seals1.php'
  },
  penguin: {
    name: 'Penguin',
    img: '/img/penguin.jpg',
    link: 'http://www.coolantarctica.com/Antarctica%20fact%20file/wildlife/Emperor-penguins.php'
  },
  whale: {
    name: 'Whale',
    img: '/img/whale.jpg',
    link: 'http://www.coolantarctica.com/Antarctica%20fact%20file/wildlife/whales/whales.php'
  }
}

app.listen(port)
