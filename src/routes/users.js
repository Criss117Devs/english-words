const { Router } = require("express");
const { check } = require('express-validator');
const { signIn, loginUser } = require( "../controllers/users");

const routerUsers = Router();

routerUsers.post("/signin", signIn);
routerUsers.post("/login", loginUser);

module.exports = {
    routerUsers
}