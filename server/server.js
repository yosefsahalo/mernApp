const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 8080;
const cors = require('cors')
const studentRouter = require('./routers/studentRouter')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.listen(PORT,()=>{
    console.log("Listen On Port 8080");
})

app.use('/API/students',studentRouter)

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