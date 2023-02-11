const { Router } = require("express");
const { check } = require('express-validator');
const { create, update, getAll} = require( "../controllers/notes");

const routerNotes = Router();

routerNotes.post("/create", create);
routerNotes.post("/update", update);
routerNotes.get("/getAll", getAll);

module.exports = {
    routerNotes
}