/*
*   CheckRequest.js
*
*   Provides info about your request
*
*/

module.exports = {

    Check (req, res) {
      let response = {
        Method: req.method,
        Body: req.body,
        Params: req.params,
        Query: req.query,
        'Content-type (Request)': req.headers['content-type']
      }
  
      res.send(response)
    }
  
  }
  