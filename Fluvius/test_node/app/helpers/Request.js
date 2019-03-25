/*
*   Request.js
*
*   Some requests method
*
*/

// packages
var axios = require('axios')

module.exports = {

  /*
       |--------------------------------------------------------------------------
       | Получить рандомное целочисельное
       |--------------------------------------------------------------------------
       */
  makeReq: function (url, method, postData) {
    var headers = {}
    // var headers = {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    // };

    method = method || 'get'
    postData = postData || {}

    return axios[method]
    (url, postData, {headers: headers})
      .then(res => { return res })
      .catch(err => console.log(error))
  }

}
