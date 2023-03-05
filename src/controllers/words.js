
const { createWord, updateWord, getAllWords } = require("../models/words");

const create = async ( req, res) => {

    const {
        idUser = 25,
        word = "",
        meaning = "",
        adjective = "",
        noun = "",
        adverb = "",
        added = "",
        status = "active"
    } = req.body;

    const addWord = await createWord(idUser, word, meaning, adjective, noun, adverb, added, status);

    if(addWord.code !== 200) return res.status(500).json(addWord.error); // add custom msg.

    return res.status(addWord.code).json({ msj: "Word added." });
}

const update = await = async(req, res) => {

    const {
        id = 2,
        idUser = 25,
        word = "",
        meaning = "",
        adjective = "",
        noun = "",
        adverb = "",
        added = "",
        status = "active"
    } = req.body;

    const setWord = await updateWord(id, idUser, word, meaning, adjective, noun, adverb, added, status);

    if(setWord.code !== 200) return res.status(500).json(setWord.error);

    return res.status(setWord.code).json({ msj: "Update word." });
}

const getAll = async (req, res) => {

    const selectAll = await getAllWords(25);

    if(selectAll.code !== 200) return res.status(500).json(selectAll.error);

    return res.status(200).json({
        ok: "Get all words.",
        body: {
            records: selectAll.records
        }
    })
}

module.exports = {
    create,
    update,
    getAll
}