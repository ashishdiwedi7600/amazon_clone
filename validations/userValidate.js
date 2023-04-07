const { body, check } = require('express-validator');
const database = require("../models/userSchema")
const bcrypt = require('bcrypt')
const { userLogin } = require('../db_config/models')
exports.validateSignup = () => {
  return [

    body('emailphone').isEmail().withMessage('Invalid Email'),
    body('password').exists().withMessage('pasword is mandatory')
  ]

}

exports.userLogin =  () => {

  return [
    body('password', 'password is required')
      .custom((value, { req }) => {
        // console.log(req.body);
        return database.signup.findOne({ $or: [{ emailphone: req.body.emailphone }, { phone: req.body.emailphone }] }).then(async user =>  {
          console.log("password", user.password, req.body.password)

          const match=await bcrypt.compare(req.body.password, user.password)
            console.log("result", match);
            if(match){
                if (user.account_status == "verified") {
              req.foundUser = user;
                return true;
              } else {
                console.log("not verified user");

              }

            }
            throw new Error('User Does Not Exist')
          ;

        })
      })
  ];
}