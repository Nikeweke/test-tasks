/*
*   ErrorCatcher.js
*
*   error catcher fns
*
*/

module.exports = {

  /*
       |--------------------------------------------------------------------------
       | Catch unhandled promise rejection and show in which line error occured
       | (UnhandledPromiseRejectionWarning)
       |--------------------------------------------------------------------------
       */
  catchPromiseRejection: function (url, method, postData) {
    process.on('unhandledRejection', (reason, p) => {
      console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
      // application specific logging, throwing an error, or other logic here
    })
  }

}
