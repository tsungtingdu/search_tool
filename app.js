const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const swaggerDocument = require('./swagger/swaggerDoc')
const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// API Doc
swaggerDocument(app)

// setup view engine
app.engine('.hbs', handlebars({
  extname: '.hbs',
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials',
  helpers: require('./config/handlebars-helpers')
}))

app.set('view engine', '.hbs')

// setup app
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))

// listening on port
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`)
})

// routes
require('./routes/index')(app)