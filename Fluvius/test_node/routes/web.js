/*
*   web.js
*
*   Web Routes
*
*/

// Define your Middleware here
const checkRequest = require('./middleware/CheckRequest')

// Define your controller here
const IndexCtrl = require('../app/controllers/IndexController')

const middlewares = [checkRequest]

module.exports = function (app) {
  //  main page
  app.get('/', middlewares, (res, req) => IndexCtrl.Index(res, req))

  // test your request
  app.all('/t', (res, req) => IndexCtrl.Test(res, req))

  //  catch form data
  app.post('/form', (req, res) => { res.send(req.body) })
}
