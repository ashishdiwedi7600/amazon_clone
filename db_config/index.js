const mongoose = require('mongoose');

module.exports = {
    db_connect:(function () {
        mongoose.connect("mongodb+srv://diwediashish:1234@cluster0.rmrzj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
            .then(() => console.log("database connected successfully"))
            .catch((e) => console.log(e))
    })
}