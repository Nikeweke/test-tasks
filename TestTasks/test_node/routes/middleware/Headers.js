/*
*   Headers.js
*
*  Headers middleware settings
*/

const Headers = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  // res.header('Content-Type', 'application/json')
  // res.header('Content-Type', 'application/x-wwww-form-urlencoded')
  // res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next()
}

module.exports = Headers
