/*
*  Поднятие сервера
*
*  server.js
*/

const colors = require('colors')
const settings = require('./settings.js')

module.exports = function (app) {
  // что такое process.argv[...] ?
  // это просто параметры которые можно ловить с консоли - node  app  <modeName>
  //                                                        [0]   [1]  [2]

  // ловим 3 параметр с консоли (когда идет запуск приложения: nodemon app [....], [....], ... )
  let modeName = process.argv[2]
  let mode = {}

  // определяем порт (по ум. - 8000). в файле config/settings.js лежит массив ports в нем 3 режима(dev, prod, test)  с значениями (port & mode, colors)
  if (modeName === undefined) {
    mode = settings.modes.dev
  } else {
    mode = settings.modes[modeName]
  }

  // запуск сервера
  app.listen(mode.port, function () {
    let appMsg = colors.bold[mode.color]('App')
    let portMsg = colors.bold[mode.color](mode.port)
    let modeMsg = colors.bold[mode.color](mode.name)

    console.log(`${appMsg} is running on port: ${portMsg} (${modeMsg} mode)`)
  })
}
