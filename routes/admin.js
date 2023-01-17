const express = require('express');
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("Addmin route is working")
});

//For Super Admin
router.get("/add_admin",(req,res)=>{
    res.send("this is add page")
});
router.get("/add_admin",(req,res)=>{
    res.send("this is add page")
});
router.get("/add_admin",(req,res)=>{
    res.send("this is add page")
});
router.get("/add_admin",(req,res)=>{
    res.send("this is add page")
});
//Admin Login
router.get("/login_admin",(req,res)=>{
    res.send("this is add page")
});





module.exports = router;