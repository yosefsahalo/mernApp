const studentRouter = require('express').Router();
const studentController = require('../controllers/studentControllers')

studentRouter.get('/',studentController.getAllData)

studentRouter.post('/',studentController.createNewData)

studentRouter.get('/:_id',studentController.getDataById)

studentRouter.delete('/:_id',studentController.deleteDataByID)

studentRouter.put('/:_id',studentController.updateData)

module.exports = studentRouter;