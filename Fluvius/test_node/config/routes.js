/*
*  routes.js
*
*  Маршруты приложения
*/
const bodyParser = require('body-parser') // Body-parser
const cookieParser = require('cookie-parser') // cookieParser

module.exports = function (app) {
  // set middleware
  app.use(bodyParser.json()) // parse request data - application/json
  app.use(bodyParser.urlencoded({ extended: false })) // parse request data - application/x-www-form-urlencoded
  app.use(cookieParser())

  require('../routes/web')(app)
  require('../routes/api')(app)
}
