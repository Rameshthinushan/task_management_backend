const mongoose = require('mongoose');

const Task = mongoose.model("tasks",{
    task_name:String,
    task_type:Boolean,
    start_date:Date,
    end_date:Date,
    assign_by:String,
    assign_to:String,
    teamleader:String,
    department:String,
    //status:[],
    createdAt:{
        type:Date,
        default:Date.now
    },
});

module.exports = Task;