/*
*   CheckRequest.js
*
*  Show info about request
*/

const colors = require('colors')

const CheckRequest = function (req, res, next) {
  console.log('---------------------------------------> Check Request')
  let method_clr = ''
  if (req.method == 'GET') { method_clr = 'green' } else if (req.method == 'POST') { method_clr = 'yellow' } else if (req.method == 'PUT') { method_clr = 'blue' } else if (req.method == 'DELETE') { method_clr = 'red' }
  console.log(colors.bold[method_clr](`{${req.method}} `) + colors.yellow(`"${req.route.path}"`))
  console.log('Body   = ' + JSON.stringify(req.body))
  console.log('Params = ' + JSON.stringify(req.params))
  console.log('Query   = ' + JSON.stringify(req.query))
  console.log('Content-type (Request) = ' + req.headers['content-type'])
  // console.log(req.session)
  console.log('--------------------------------------->')

  next()
}

module.exports = CheckRequest
