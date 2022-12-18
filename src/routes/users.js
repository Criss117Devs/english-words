const { Router } = require("express");
const { check } = require('express-validator');
const { signIn } = require( "../controllers/users");

const routerUsers = Router();

routerUsers.post("/signin", signIn);

module.exports = {
    routerUsers
}