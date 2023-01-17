const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const userRoute = require('./routes/user');
const adminRoute = require('./routes/admin');
const taskRoute = require('./routes/task');
connectDB();
//allow body data to the server

const app = express();
app.use(express.json());
const port = process.env.PORT;
app.get("/",(req,res)=>{
    res.send("Hello world");
});
app.use('/user',userRoute);
app.use('/admin',adminRoute);
app.use('/task',taskRoute);


//console.log(process.env);

app.listen(port,()=>{
    console.log(`SERVER has been started at  ${port}`);
});