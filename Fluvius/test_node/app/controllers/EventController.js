/*
*   EventController.js
*
*/

//  Models
const eventModel = require('../models/Event');

module.exports = {

    /**
    * @api {GET}         /api/events   getEvents()
    * @apiDescription                  get events
    * @apiGroup                        EventController
    */
    async getEvents (req, res) {
      let records = await eventModel.find({}, (err, docs) => {
        if (err) console.log(err)
        // docs.forEach
        // console.log(docs)
        return docs
      })

      res.send(records)
    },


    /**
    * @api {PUT}         /api/event    updateEvent()
    * @apiDescription                  update event
    * @apiGroup                        EventController
    */
    updateEvent (req, res) {
      let {id, name, date} = req.body 

      // check if data not empty
      if (!name || !date) {
        res.send({success:0, message: 'Fail to update event. Name or Date is empty'})  
        return
      }
  
      delete req.body.id

      eventModel.update({_id: id}, req.body, {upsert: true}, (err) => { 
        if (err) {
          console.log(err)
          res.send({success:0, message: 'Fail to update evenet.'}) 
        }

        res.send({success:1, message: 'Event updated successfuly'}) 
      })
    },


    /**
    * @api {POST}         /api/event    addEvent()
    * @apiDescription                   add event
    * @apiGroup                         EventController
    */
    addEvent (req, res) {
      let {name, date} = req.body 

      // check if data not empty
      if (!name || !date) {
        res.send({success:0, message: 'Fail to add evenet. Name or Date is empty'})  
        return
      }

      // check if date valid
      date = new Date(date)
      if (date instanceof Date && isNaN(Number(date))) {
        console.log('HERE')
        res.send({success:0, message: 'Fail to add evenet. Date is invalid'}) 
        return
      } 

      // create item
      eventModel.create(req.body, (err, item) => {
        if (err) { 
          console.log(err) 
          res.send({success:0, message: 'Fail to add evenet'})
        }
        res.send({success:1, message: 'Event successfuly created', id: item._id})
      })
    },


    /**
    * @api {DELETE}     /api/event     deleteEvent()
    * @apiDescription                  get events
    * @apiGroup                        EventController
    */
    deleteEvent (req, res) {
      let { ids } = req.body
      for (let id of ids) {
        eventModel.find({ _id: id }).remove((err) => console.log(err))
      }
      res.send({success:1, message: 'Items deleted succcessfuly'}) 
    },
  
  }
  