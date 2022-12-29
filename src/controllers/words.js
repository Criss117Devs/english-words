
const { createWord, updateWord, getAllWords } = require("../models/words");

const create = async (req, res, next) => {

    const {
        idUser = 25,
        word = "",
        meaning = "",
        adjective = "",
        noun = "",
        added = "",
        status = "active"
    } = req.body;

    const addUser = await createWord(idUser, word, meaning, adjective, noun, added, status);

    res.status(200).json({
        ok: "ok"
    });

    next();

}

const update = await = async(req, res, next) => {

    const {
        id = 2,
        idUser = 25,
        word = "",
        meaning = "",
        adjective = "",
        noun = "",
        added = "",
        status = "active"
    } = req.body;

    const [success]= await updateWord(id, idUser, word, meaning, adjective, noun, added, status);

    console.log(success);

    res.status(200).json({
        ok: "ok",
        body:{
            data: success[0]
        }
    });

    next();
}

const getAll = async (req, res, next) => {

    //const {idUser = 25} = req.body;

    const allRows = await getAllWords(25);

    res.status(200).json({
        ok: "ok",
        body: {
            allRows
        }

    })

    next();

}

module.exports = {
    create,
    update,
    getAll
}