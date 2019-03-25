/*
*   Test.js
*
*   Test Socket
*
*/

// ........................................................... Models
// var myModel = require('../models/myModel');

module.exports = function (io) {
  // начало работы с объектом сокетов
  io.sockets.on('connection', function (socket) {
    /***********************************************************
       *  Получение сообщение
       *
       ***********************************************************/
    socket.on('send words', function (data) {
      //  console.log(data);
      var answer = ''

      if (data == 'hello') {
        answer = 'Hello, i am Socket, I have received your message. Well done!'
      } else {
        answer = 'You didnt say me hello and i am confused a little bit!'
      }

      socket.emit('socket message', answer)
    })

    /***********************************************************
        *  Отсоедение пользователя
        *
        ***********************************************************/
    // socket.on('disconnect', function()
    //  {
    //
    //  });
  })
}
