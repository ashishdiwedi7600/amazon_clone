const database = require("../models/userSchema")
const database1 = require("../models/productSchema")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { insertRecord } = require('../db_config/models')
const { sendMobileSMS } = require('../utils/TwilioSMS');
const SendConfirmationMail = require('../utils/NodemailerEmail')


exports.getuser = async (req, res) => {
    
    const data = await database.signup.find({});
    
    res.send({ data })
}
exports.getproducts = async (req, res) => {
    
    const data = await database1.products.find({});
    
    res.send({ data })
}

exports.signUser =  async (req, res ,next) => {
    const {  username, emailphone } = req.body
    req.body.phone="+91"+req.body.phone
    var val = Math.floor(1000 + Math.random() * 9000);
        req.body.verification_code=val
        req.body.account_status="not verified"
    const msg = `your verification code is <b>${val}</b>`
    
    try {
         bcrypt.hash(req.body.password, 10,async function(err, hash) {
            if(err) return new Error("somme error occurred");
            req.body.password=hash
            // Store hash in your password DB.
            // console.log(req.body.password);
            const result = await insertRecord(req.body);
        })
        // const emailResult = await SendConfirmationMail([emailphone], msg);
        const smsResult = await sendMobileSMS(msg, req.body.phone);
        res.status(200).send({msg: 'Successfully Sign up pLease verify it'}); 
    } catch (e) { next(e) }
    
    
}

exports.userLogin = async (req, res, next) => {
    // console.log('aaaa',req.foundUser);
    
    const {_id,username,phone,email,password}=req.foundUser
    try {
        const token = await jwt.sign({_id,username,phone,email,password}, "NarendraModi", { expiresIn:'24h' })
        res.status(200).send({msg: 'LOgged IN', data:{token,username}});
    } catch (e) { next(e)}

}
exports.verification = async (req, res, next) => {
    
    return database.signup.findOneAndUpdate({ email: req.body.emailphone,verification_code:req.body.verification_code },{account_status:"verified"}).then(user => {
        console.log(user);
        if (user) {
          
            
          res.status(200).send({msg:'verified Succesfully',data:user})
        } else {
            console.log('User Does Not Exist')
        }
      })
    

}