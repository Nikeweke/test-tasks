/*
*   IndexController.js
*
*   Controller as a Object
*
*/

//  Models
// const userModel = require('../models/User');

module.exports = {

  /**
    * @api {GET}         /          Index()
    * @apiDescription               Main page
    * @apiGroup                     IndexController
    */
  Index (req, res) {
    let viewArgs = {
      greeting: 'Bullz is greeting you!',
      words: 'Makes problems run'
    }

    res.render('index', viewArgs)
  },

  
  /**
    * @api [ANY]          /t        Test()
    * @apiDescription               Test api
    * @apiGroup                     IndexController
    */
  Test (req, res) {
    let response = {
      Method: req.method,
      Body: JSON.stringify(req.body),
      Params: JSON.stringify(req.params),
      Query: JSON.stringify(req.query),
      'Content-type (Request)': req.headers['content-type']
    }

    res.send(response)
  }

}
