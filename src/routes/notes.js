const { Router } = require("express");
const { check } = require('express-validator');
const { create, getAll} = require( "../controllers/notes");

const routerNotes = Router();

routerNotes.post("/create", create);
routerNotes.get("/getAll", getAll);

module.exports = {
    routerNotes
}