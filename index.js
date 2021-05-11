const express = require('express')
const app = express()
const port = 3000
const nunjucks = require('nunjucks');

app.set('view engine', '.njk');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('home', {title:"FVNKY FIND"});
});

//routes
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/movies', (req, res) => {
    res.send('<h1>This will become a list of movies</h1>')
  });

  app.get('/movies/:movieId/:slug', (req, res) => {
    res.send(`<h1>This will become a detail page for ${req.params.slug}</h1>`)
  });

  app.use(function (req, res, next) {
      res.status(404).send("Sorry can't find that!")
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
