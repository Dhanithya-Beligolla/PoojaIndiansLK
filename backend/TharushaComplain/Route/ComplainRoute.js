const express = require('express');
const router = express.Router();

//Insert model
const Complain = require('../Model/ComplainModel');
//Inser complain controller
 const ComplainController = require('../Controllers/ComplainControl');

 router.get("/getComplain",ComplainController.getAllComplain);
 router.post("/createComplain",ComplainController.insertComplain);
 router.get("/:id",ComplainController.getById);
 router.put("/:id",ComplainController.updateComplain);
 router.delete("/:id",ComplainController.deleteComplain);


 //export router
 module.exports=router;

