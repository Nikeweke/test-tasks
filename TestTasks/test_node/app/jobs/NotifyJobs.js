/*
*  NotifyJobs.js
*
*  Example of jobs
*/
const { CronJob } = require('cron')

module.exports = {

  /*
  |--------------------------------------------------------------------------
  | Every 5 second output message in console
  |--------------------------------------------------------------------------
  */
  MakeNotify: function () {
    let job = new CronJob({
      cronTime: '*/5 * * * * *', // every 5 seconds
      onTick: function () {
        console.log('NotifyJob is ticking')
      },
      start: true // указавыает что не надо запускать job в время создание экземпляра, а запускать когда вызовут ( job.start() )
      // timeZone: 'Europe/Kiev'
    })
    return job
  }

}
