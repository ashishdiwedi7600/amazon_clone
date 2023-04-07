const {Schema , model} = require("mongoose");


const user_signup  = new Schema({
    
    username:{type:String ,required:true},
    phone:{type:String ,required:true},
    emailphone:{type:String,required:true},
    password:{type:String,required:true},
    verification_code:{type:Number},
    account_status:{type:String},
    created_on:{ type: Date, default: Date.now },
    // updated_on:new Date()
    caet_items:{
        type:[
            {
                cartItems:{type:Object},
                addOn:{ type: Date, default: Date.now }
            }
        ]
    }
    
})

module.exports.signup = model("userSignup" , user_signup )
