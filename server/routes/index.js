const express = require("express");
const deleteFile = require("../controller/delete");
const getData = require("../controller/getData");
const login = require("../controller/login");
const register = require("../controller/register");

const Router = express.Router();

Router.post("/register", register);
Router.post("/login", login);
Router.post("/deleteFile", deleteFile);
Router.get("/getData", getData);

module.exports = Router;
