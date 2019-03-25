/*
*  jobs.js
*
*  Starts jobs
*/

// Cron Format - http://www.nncron.ru/help/RU/working/cron-format.htm
// Cron online maker - https://crontab.guru
/*
* * * * * *
| | | | | |
| | | | | +--- Годы       (диапазон: 1900-3000)
| | | | +----- Дни недели (диапазон: 1-7)
| | | +------- Месяцы     (диапазон: 1-12)
| | +--------- Дни месяца (диапазон: 1-31)
| +----------- Часы       (диапазон: 0-23)
+------------- Минуты     (диапазон: 0-59)
*/

// example
// '* * * * * *'    - каждую секунду (6 звезд)
// '*/30 * * * * *' - через каждые 30 сек запускать работу (6 звезд)
// '*/1 * * * *'    - через каждую мин. (5 звезд)
const colors = require('colors')

// Jobs
const NotifyJobs = require('./NotifyJobs')

module.exports = function () {
  console.log(colors.blue.bold('Jobs') + ' is running')

  // notify job
  NotifyJobs.MakeNotify()
}
