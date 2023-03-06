
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
        msj: "Get all words.",
        body: {
            records: selectAll.records
        }
    });
}

const ramdomWords = async (req, res) => {

    const { id = "" } = req.body;

    const words = await getAllWords(25);

    if(words.code !== 200) return res.status(500).json(words.error);

    let answers = [];

    const listAswers = [];

    let record = {};

    const total = words.records.length;

    for (record of words.records) {

        answers = ramdomItem(words.records, record, record.id, total);

        listAswers.push({ words: answers});
    }

    return res.status(200).json({
        msj: "Riddles.",
        body: {
            records: listAswers
        }
    });
}

const ramdomItem = (array, record, id, total) => {

    let list = [];

    list.push(record);

    let ramdom = 0;
    let word;
    
    while (list.length < 5) {

        ramdom = ramdomId(total -1);

        if(id !== ramdom) {

            word = array.find(x => x.id === ramdom);

            list.push(word);
        }
    }

    return list;

}

const ramdomId = (total) => { return Math.floor((Math.random() * (total - 0 + 1)) + 0); }


module.exports = {
    create,
    update,
    getAll,
    ramdomWords
}