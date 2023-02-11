const { createNote, updateNote, getAllNotes } = require("../models/notes");

const { isEmpty } = require("../utils/helpers");

const create = async (req, res, next) => {
    
    const { idUser = 25, note = ".", added = "01/01/2023", status = "active", topic = "" } = req.body;

    const addNote = await createNote(idUser, note, added, status, topic);

    res.status(200).json({
        ok: "ok",
        body: {}
    });

    next();
}

const update = async (req, res, next) => {

    const { id = "", idUser = "", note = "", added = "", status = "", topic = "" } = req.body;

    const fields = isEmpty({ id, idUser, note, added, status, topic });

    if(!fields.continue) {
        return res.status(401).json({
            error: 1,
            code: 401,
            body: {
                emptyFiedls: fields
            }
        });
    }
   
    const update = await updateNote(id, idUser, note, added, status, topic);

    if(update != 200) return res.json({
        error: 1,
        msg: update
    });

    return res.status(200).json({
        ok: "update - ok",
        body: {}
    });
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
