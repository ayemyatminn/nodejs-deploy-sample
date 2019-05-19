const express = require("express");

const route = express.Router();
const sql = require('../utilities/mysql');
const departmentRoute = require("./apiRoute/department");
const authRoute = require("./apiRoute/auth");
const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const key = require("../utilities/key");



route.use("/departments",departmentRoute);
route.use("/auth",authRoute);


module.exports = route;