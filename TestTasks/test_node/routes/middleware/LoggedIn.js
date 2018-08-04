/*
*   LoggedIn.js
*
*   IF user not logged in 
*/
const LoggedIn = (req, res, next) => {
 
  let user = req.cookies.user
    
  if (!user) {
    return res.send('You need to log in')
  }
  
  next()
}
 
module.exports = LoggedIn
 