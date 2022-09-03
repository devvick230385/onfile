const express = require("express");
const getData = require("../controller/getData");
const login = require("../controller/login");
const register = require("../controller/register");

const Router = express.Router();

Router.post("/register", register);
Router.post("/login", login);
Router.get("/getData", getData);

module.exports = Router;
