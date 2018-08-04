/*
*  bootstrap.js
*
*  Import of packages and setup of app
*/
// Set global config from './config.json'
const fs = require('fs')
global.config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

const express = require('express')
require('express-group-routes')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = require('./server.js')
const database = require('./database.js')
const reload = require('reload')
const jobs = require('../app/jobs/jobs.js')
const sockets = require('./sockets.js')

module.exports = function () {
  /*
  |--------------------------------------------------------------------------
  | Init app with express.js
  |--------------------------------------------------------------------------
  |
  */
  const app = express()


  /*
  |--------------------------------------------------------------------------
  | Connect to DB
  |--------------------------------------------------------------------------
  |  Can comment it if not using DB
  |
  */
  database.connect()


  /*
  |--------------------------------------------------------------------------
  | Set templater
  |--------------------------------------------------------------------------
  |
  */
  nunjucks.configure('views', { autoescape: true, express: app })
  app.set('view engine', 'njk')



  /*
  |--------------------------------------------------------------------------
  | Static files (СSS, JS)
  |--------------------------------------------------------------------------
  |
  */
  app.use(express.static('./public'))


  /*
  |--------------------------------------------------------------------------
  |  Jobs start
  |--------------------------------------------------------------------------
  |   Запуск здесь 'app / jobs / jobs.js'.
  |   Можно закоментировать - приложение будет работать
  |
  */
  if (global.config.jobs) { jobs() }


  /*
  |--------------------------------------------------------------------------
  | Sockets start
  |--------------------------------------------------------------------------
  |   Запуск здесь 'app / config / sockets.js', и там же можно изменить порт сокетов
  |
  |   Можно закоментировать - приложение будет работать
  |
  */
  if (global.config.sockets) { sockets(app) }


  /*
  |--------------------------------------------------------------------------
  | Routes
  |--------------------------------------------------------------------------
  |
  | Routes gather all routes in one file.
  | Routes lives in ./routes.
  |
  */
  routes(app)


  /*
  |--------------------------------------------------------------------------
  | Reload browser if javascript was changed, not views (for rerendering views use: npm i supervisor -g, npm start hrm)
  |--------------------------------------------------------------------------
  | OFF IT WHEN HAVE A FEW servers and WHEN IN PROD mode
  |
  */
 if (global.config.sockets) { reload(app) }


  /*
  |--------------------------------------------------------------------------
  | Up the server
  |--------------------------------------------------------------------------
  |
  | node app      -> :8000 in dev
  | node app dev  -> :8000 in dev
  | node app prod -> :8000 in prod
  |
  |  Can change port settings in config/settings.js
  |
  */
  server(app)
}

// app.set('view engine', 'ejs');                     // Установка шаблонизатора "EJS": 1) npm i ejs --save;    2) Uncomment this line;    3) create file index.ejs;    4) use it;
// app.set('views', path.join(__dirname, 'templates')); // установить папку для шаблоново по ум. это "views"
