/*
*  Сокеты
*
*  sockets.js
*/

const colors = require('colors')
const http = require('http')
const socketIo = require('socket.io')

// Sockets controllers
const Test = require('../app/sockets/Test.js')

module.exports = function (app) {
  const port = 2000

  const httpServer = http.createServer(app) // нужно для поднятия сервера. С вариантом app.listen() - не будет работать
  const io = socketIo.listen(httpServer) // sockets object

  /*
  *  Так вы можете указать способ транспортировки данных в сокетах на выбор - ['polling', 'websocket'],
  *  By default, a long-polling connection is established first, then upgraded to "better" transports (like WebSocket) - From Socket.IO Docs
  */
  // io.set('transports', ['websocket']);

  httpServer.listen(port, () => {
    console.log(colors.cyan.bold('Sockets') + ' is running on port: ' + colors.cyan.bold(port))
  })

  // Pass socket state "io" to controllers
  Test(io)
}
