const mongoose = require('mongoose');

const User = mongoose.model("users",{
    name:String,
    position:String,
    uname:String,
    password:String,
    teamleader:String,
    department:String,
    createdAt:{
        type:Date,
        default:Date.now
    },
});

module.exports = User;