const { Router } = require("express");
const { create, update, getAll, ramdomWords } = require( "../controllers/words");

const routerWords = Router();

routerWords.post("/create", create);

routerWords.put("/update", update);

routerWords.get("/getAll", getAll);

routerWords.post("/ramdomWords", ramdomWords);

module.exports = {
    routerWords
}