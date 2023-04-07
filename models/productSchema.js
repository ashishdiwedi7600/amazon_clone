const {Schema , model} = require("mongoose");

const productList = new Schema({

})
const mobileList = new Schema({

})
const laptops = new Schema({

})

module.exports.products=model("products",productList)
module.exports.mobiles=model("mobileList",mobileList)
module.exports.laptops=model("laptops",laptops)