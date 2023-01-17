require('dotenv').config()
const mongoose = require('mongoose')
const url = process.env.URL;
mongoose.set('strictQuery', true);
const connectDB = async()=>{
    try {
        const con = await mongoose.connect(url)
        console.log(`mongoDB connected at ${con.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
console.log(url);

module.exports = connectDB;