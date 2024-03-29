
const { createWord, updateWord, getAllWords } = require("../models/words");
const { empty, generateRandomLetter } = require("../utils/helpers");

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

    let idCustom = "";

    const words = await getAllWords(25);

    if(words.code !== 200) return res.status(500).json(words.error);

    let sorted = null;

    let firstWord = null;

    let list = [];

    let answers = [];

    const listAswers = [];

    let record = {};

    const total = words.records.length;

    for (record of words.records) {

        answers = ramdomItem(words.records, record, record.id, total);

        listAswers.push({ words: answers});
    }

    
    for (let x=0; x<listAswers.length; x++) {

        for (let i=0; i<listAswers[x].words.length; i++) {
            
            try {
                
                if(empty(listAswers[x].words[i].meaning)) {
            
                    listAswers[x].words[i].sort = generateRandomLetter();
                    
                }

            } catch (error) {
                
            }
        }
    }

    for (let x=0; x<listAswers.length; x++) {

        list = listAswers[x].words;

        firstWord = list.shift();

        console.log(firstWord);

        sorted = list.sort((p1, p2) => (p1.sort < p2.sort) ? 1 : (p1.sort > p2.sort) ? -1 : 0);

        sorted.push(firstWord);

        sorted.reverse();

        listAswers[x].sorted
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

    list.push(record);

    return list;

}

const ramdomId = (total) => { return Math.floor((Math.random() * (total - 0 + 1)) + 0); }


module.exports = {
    create,
    update,
    getAll,
    ramdomWords
}