const express = require("express");

const route = express.Router();
const sql = require('../utilities/mysql');
const departmentRoute = require("./apiRoute/department");
const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const key = require("../utilities/key");

route.post("/signin",(req,res)=>{
    console.log(req.body);
    const user = new UserModel();
    const isUserLogin = user.signIn(req.body.name,req.body.password);
    if(isUserLogin){
        const token = jwt.sign({data:isUserLogin},key)
        res.status(200).send(token);
    }else{
        res.status(403).send("Access Denied");
    }
    console.log(isUserLogin);
    
})

route.use("/departments",departmentRoute);


module.exports = route;