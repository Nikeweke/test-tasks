/*
*  User.js
*
*  Model of "users"
*/
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  // id: Schema.ObjectId,
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// hashing a password before saving it to the database
userSchema.pre('save', function (next) {
  let user = this

  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

module.exports = mongoose.model('users', userSchema)