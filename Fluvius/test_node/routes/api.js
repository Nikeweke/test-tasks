/*
*   api.js
*
*   API Routes
*
*/

// controllers
const EventCtrl =  require('../app/controllers/EventController')
const AuthCtrl =  require('../app/controllers/AuthController')

// middlewares
const LoggedIn = require('./middleware/LoggedIn')
const middlewares = []

module.exports = function (app) {
   app.group("/api", (router) => {
     
     // Events
     router.get(   '/events', middlewares, (res, req) =>  EventCtrl.getEvents(res, req))
     router.post(  '/event',  middlewares, (res, req) =>  EventCtrl.addEvent(res, req))
     router.put(   '/event',  middlewares, (res, req) =>  EventCtrl.updateEvent(res, req))
     router.delete('/event',  middlewares, (res, req) =>  EventCtrl.deleteEvent(res, req)) 

     // Auth
     router.post('/register', (res, req) =>  AuthCtrl.registerUser(res, req)) 
     router.post('/auth',     (res, req) =>  AuthCtrl.checkUser(res, req)) 
  })
}
