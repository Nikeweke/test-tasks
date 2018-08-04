/*
*   AuthController.js
*
*/
const bcrypt = require('bcrypt') 
const TokenGenerator = require('uuid-token-generator');
const userModel = require('../models/User')
const emailHelper = require('../helpers/Email')

module.exports = {

    /**
    * @api {GET}         /api/auth     checkUser()
    * @apiDescription                  check user if exist in db, if true - return token
    * @apiGroup                        AuthController
    */
    async checkUser (req, res) {

      let {email, password} = req.body

      // - Проверять, есть ли пользователь в базе и генерировать токен. 

      // check email for valid
      if (!emailHelper.validateEmail(email)) {
        return res.send({success: 0, message: 'Email is invalid'})
      }

      // searching for user in db by email
      let foundedUser = await userModel.findOne({ email }, (err) => {
        if (err) console.log(err)
      })

      // if no user found
      if (!foundedUser) {
        return res.send({success: 0, message: 'No user found'})
      }

      // check password
      bcrypt.compare(password, foundedUser.password,  (err, result) => {
        let resMsg = {}
        if (result === true) {
          const token = (new TokenGenerator()).generate() // Default is a 128-bit token encoded in base58
          resMsg = {success: 1, message: 'Well done! You logged in successfuly', token}
        } else {
          resMsg = {success: 0, message: 'Email or password is wrong'}
        }
        return res.send(resMsg)
      })
    },


    /**
    * @api {POST}         /api/register     registerUser()
    * @apiDescription                   create new user
    * @apiGroup                         AuthController
    */
    registerUser (req, res) {
       // create item
       userModel.create(req.body, (err, item) => {
        if (err) { 
          console.log(err) 
          res.send({success:0, message: 'Fail to add user'})
        }
        res.send({success:1, message: 'User successfuly created', id: item._id})
      })
    }
  
  }
  