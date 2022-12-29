const { Router } = require("express");
const { create, update, getAll } = require( "../controllers/words");

const routerWords = Router();

routerWords.post("/create", create);

routerWords.put("/update", update);

routerWords.get("/getAll", getAll);

module.exports = {
    routerWords
}