/*
*  Event.js
*
*  Model of "events"
*/

const mongoose = require('mongoose')
const { Schema } = mongoose

const eventSchema = new Schema({
//   id: Schema.ObjectId,
  name: String,
  date: Date
})

module.exports = mongoose.model('events', eventSchema)