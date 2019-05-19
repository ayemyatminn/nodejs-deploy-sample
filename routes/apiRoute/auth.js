const express = require("express");
const route = express.Router();
const departmentRoute = require("../apiRoute/department");
const jwt = require("jsonwebtoken");
const key = require("../../utilities/key");
const UserModel = require("../../models/user");

route.post("/signin",(req,res)=>{
    console.log(req.body);
    const user = new UserModel();
    user.signIn(req.body.name,req.body.password)
    .then(isUserLogin => {
        if(isUserLogin){
            const token = jwt.sign({data:isUserLogin},key)
            res.status(200).send(token);
        }else{
            res.status(403).send("Access Denied");
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).send('Unexpectd Error');
    })    
    
})

route.post("/register",(req,res)=>{
    const user = new UserModel();
    user.register(req.body.name,req.body.email,req.body.password)
    .then(user => {
        res.status(200).send(user);
    })
    .catch(error => {
        console.log(error);
        res.status(400).send('Unexpectd Error');
    })
})

module.exports = route;
