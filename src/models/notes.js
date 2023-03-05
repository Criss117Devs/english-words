const pool = require("../utils/db");

const notesTable = "notes";

const createNote = async (idUser, note, added, status, topic) => {
    const insert = await pool.query(
        `INSERT INTO ${notesTable} (idUser, note, added, status, topic) VALUES (?, ?, ?, ?, ?)`,
        [idUser, note, added, status, topic]
    );
    return insert;
}

const updateNote = async (id, idUser, note, added, status, topic) => {
    try {

        const update = await pool.query(
            `UPDATE ${notesTable} SET  note = ?, added = ?, status = ?, topic = ? WHERE id = ? AND idUser = ?`,
            [note, added, status, topic, id, idUser]
        );

        logll

        return 200;

    } catch (error) {
        
        return {
            error: error
        }
    }
}

const getAllNotes = async (idUser) => {
    try {
        const [allRows] = await pool.query(
            `SELECT * FROM ${notesTable} WHERE idUser = ?`,
            [idUser]
        );
        return allRows;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createNote,
    updateNote,
    getAllNotes
    
}

/*

CREATE TABLE notes (
    id int NOT NULL AUTO_INCREMENT,
    idUser int(10) NOT NULL,
    note text NOt NULL,
    added varchar(10) NOT NULL,
    status varchar(10) NOT NULL,
    PRIMARY KEY (id)
);

*/