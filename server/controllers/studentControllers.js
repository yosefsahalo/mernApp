const studentModel = require("../models/student-model");
const {ObjectId} = require('mongodb');

async function getAllData(req, res) {
  try {
    await studentModel.find({}, (error, result) => {
      if (error) throw error;
      res.json({ massage: "success", data: result });
    });
  } catch (error) {
    res.json({ massage: "DataBase Problem", error: error });
  }
}

async function createNewData(req,res) {
    try {
        await studentModel.insertMany(req.body.student,(error,result)=>{
            if(error) throw error;
            res.json({massage:'success', data:result})
        });
    } catch (error) {
        res.json({massage:'DataBase Problem', error:error})
    }
}

async function getDataById(req,res){
    try {
        await studentModel.findById({_id:ObjectId(req.params._id)},(error,result)=>{
            if(error) throw error;
            res.json({massage:'succses',data:result})
        })
    } catch (error) {
        res.json({massage:'DataBase Problem', error:error})
    }
}

async function deleteDataByID(req,res) {
    try {
        await studentModel.findOneAndDelete({_id:ObjectId(req.params._id)},(error,result)=>{
            if(error) throw error;
            res.json({massage:'Success',data:result});
        });
    } catch (error) {
        res.json({massage:'DataBase Problem', error:error})
    }
}

async function updateData(req,res) {
    try {
        studentModel.findByIdAndUpdate({_id:ObjectId(req.params._id)} ,{$set:req.body.student},(error,result)=>{
            if(error) throw error;
            res.json({massage:'Success', data:result})
        });
    } catch (error) {
        res.json({massage:'DataBase Problem', error:error})
    }
}

module.exports = {
    getAllData,
    createNewData,
    getDataById,
    deleteDataByID,
    updateData
}