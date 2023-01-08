const { createNote, updateNote, getAllNotes } = require("../models/notes");

const create = async(req, res, next) => {
    
    const {
        idUser = 25,
        note = "I love star wars",
        added = "01/01/2023",
        status = "active",
        topic = ""
    } = req.body;

    const addNote = await createNote(idUser, note, added, status, topic);

    res.status(200).json({
        ok: "ok"
    });

    next();
}

const update = (req, res, next) => {
    next();
}

const getAll = async(req, res, next) => {

    const records = await getAllNotes(25);

    res.status(200).json({
        ok: "ok",
        body: {
            records
        }

    })

    next();

}

module.exports = {
    create,
    update,
    getAll
}
