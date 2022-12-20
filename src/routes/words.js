const { Router } = require("express");
const { create, getAll } = require( "../controllers/words");

const routerWords = Router();

routerWords.post("/create", create);

routerWords.get("/getAll", getAll);

module.exports = {
    routerWords
}