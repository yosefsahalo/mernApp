const express = require('express');
const {MongoClient,ObjectId} = require('mongodb');
const dotenv = require('dotenv')
dotenv.config();
const path = require('path')
const PORT = process.env.PORT || 8080;
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

app.get('/API',(req,res)=>{
    res.send("Listen On Port 8080");
    // connectAndAdd(res)
})

//***********************************************************************/
if(process.env.NODE_ENV === 'production'){
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing 
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname, '../client/build','index.html'))
    })
}
//***********************************************************************/