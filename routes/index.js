let apis = require('./api')

module.exports = (app) => {

  app.use('/api', apis)

  // 處理例外 routes
  app.get('*', (req, res) => res.send("This route doesn't exist"))
}