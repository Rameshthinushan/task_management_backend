const express = require('express');
const User = require('../models/user/user');
const router = express.Router();

router.get("/user", async(req, res) => {
    User.find({},(err,result)=>{
        res.send(result)
    })
});
router.post("/add_user", async(req, res) => {
    //console.log(req.body);
    try {
        const user = new User(req.body);
        const users = await user.save();
        res.json(users)
    } catch (error) {
        console.log(error);
    }
});
router.post("/edit_user", (req, res) => {
    res.send("user route is working")
});
router.post("/delete_user", (req, res) => {
    res.send("user route is working")
});

module.exports = router;