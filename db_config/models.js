const { default: mongoose } = require("mongoose");
const database = require("../models/userSchema")

exports.insertRecord = async (records) => {
    // console.log(records);
    const { username,phone, emailphone, password, verification_code,account_status } = records

    return new Promise(async(resolve, reject) => {
        const newuser = new database.signup({ username,phone, emailphone, password,verification_code,account_status });
         await database.signup.insertMany([newuser])
            .then(r => {
                
                resolve({ status: 200, msg: 'added successfully' })
                
            })
            .catch(e => { reject(e)})
    })
}


// exports.userLogin = async (records) => {


//     console.log(records,'aaa');
//     const {email,password}=records 
//     return new Promise((resolve, reject) => {
//         database.signup.findOne({'email':email,'password':password})
//             .then(r => { 
//                 console.log(r,'oooo')
//                 resolve({ status: 200,data:r, msg: 'added successfully' })
                
//             })
//             .catch(e => {console.log(e,'eeee'), reject({status:404,data:e,msg:'invalid user'}) })
//     })
// }