const express = require('express');
const Task = require('../models/task/task');
const router = express.Router();
//route checking
router.get("/",(req,res)=>{
    res.send("task route is working now");
});
//get all task
router.get("/task", async(req, res) => {
    Task.find({},(err,result)=>{
        res.send(result)
    })
});
//add new tak
router.post("/add_task",async(req,res)=>{
    console.log(req.body);
    try {
        const task = new Task(req.body);
        const tasks = await task.save();
        res.json(tasks)
    } catch (error) {
        console.log(error);
    }
});
//Edit task
router.put("/update/:id",async (req,res) =>{
    try {
        const task = await Task.findByIdAndUpdate(
            {_id:req.params.id},

            {
                task_name:req.body.task_name,
                task_type:req.body.task_type,
                start_date:req.body.start_date,
                end_date:req.body.end_date,
                teamleader:req.body.teamleader,
                department:req.body.department
            },
            {
                new:true
            }
        );
        res.json(task)
    } catch (error) {
        res.json(error+"error")
    }
    
    
});

module.exports =router;
