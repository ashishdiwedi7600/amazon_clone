const mongoose = require('mongoose');
require('dotenv').config()


module.exports = {
    db_connect:(function () {
        mongoose.connect(process.env.DB)
            .then(() => console.log("database connected successfully"))
            .catch((e) => console.log(e))
    })
}