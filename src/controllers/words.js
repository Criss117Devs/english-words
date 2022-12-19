
const { createWord } = require("../models/words");

const create = async (req, res, next) => {

    const {
        word = "",
        meaning = "",
        adjective = "",
        noun = "",
        added = "",
        status = "active"
    } = req.body;

    const addUser = await createWord(word, meaning, adjective, noun, added, status);

    res.status(200).json({
        ok: "ok"
    })

    next();

}

module.exports = {
    create
}