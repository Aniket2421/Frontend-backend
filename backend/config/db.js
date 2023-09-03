const mongoose = require('mongoose');
require('dotenv').config()


mongoose.connect(process.env.MONGOOSE_URI )
.then((res) => {
    console.log("Mongodb Connected")
})
.catch((err) => {
    console.log ("EROOR")
})