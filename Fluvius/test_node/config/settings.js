/*
*  Настройки
*
*  config.js
*/

module.exports = {

  /*
  |--------------------------------------------------------------------------
  | Modes
  |--------------------------------------------------------------------------
  */
  modes: {
    dev: {
      name: 'dev',
      port: 8000,
      color: 'yellow'
    },

    test: {
      name: 'test',
      port: 3000,
      color: 'magenta'
    },

    prod: {
      name: 'prod',
      port: 80,
      color: 'green'
    }
  }

}
