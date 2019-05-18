const express = require("express");

const route = express.Router();
const DepartmentController = require("../../controllers/department");
const departmentController = new DepartmentController();
const jwt = require("jsonwebtoken");
const key = require("../../utilities/key");
const auth = require("../../middlewares/auth");
route.use(auth);

route.get("/",(req,res)=>{
    departmentController.getAll(req,res);    
});

route.post("/",(req,res)=>{
    
    res.send("Create a departments");
});

route.put("/:id",(req,res)=>{
    res.send("Update departments");
});

route.delete("/:id",(req,res)=>{
    res.send("Delete departments");
});

module.exports = route;