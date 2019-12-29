const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

// setup view engine
app.engine('.hbs', handlebars({
  extname: '.hbs',
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials',
  helpers: require('./config/handlebars-helpers')
}))

app.set('view engine', '.hbs')
app.use(express.static('public'))

// listening on port
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`)
})