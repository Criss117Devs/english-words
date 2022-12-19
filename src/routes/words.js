const { Router } = require("express");
const { create } = require( "../controllers/words");

const routerWords = Router();

routerWords.post("/create", create);

module.exports = {
    routerWords
}