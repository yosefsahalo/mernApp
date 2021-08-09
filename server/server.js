const express = require('express');
const {MongoClient,ObjectId} = require('mongodb');
const dotenv = require('dotenv')
dotenv.config();

const PORT = process.env.PORT
const cors = require('cors')
const studentRouter = require('./routers/studentRouter')
const dbCoonection = require('./DB/index')
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// dbCoonection.on('error',()=>{console.log('Connection Error')})

app.use('/students',studentRouter)

app.listen(PORT,()=>{
    console.log("Listen On Port 8080");
})

app.get('/',(req,res)=>{
    res.send("Listen On Port 8080");
    // connectAndAdd(res)
})