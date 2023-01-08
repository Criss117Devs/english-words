const pool = require("../utils/db");

const notesTable = "notes";

const createNote = async (idUser, note, added, status, topic) => {
    const insert = await pool.query(
        `INSERT INTO ${notesTable} (idUser, note, added, status, topic) VALUES (?, ?, ?, ?, ?)`,
        [idUser, note, added, status, topic]
    );
    return insert;
}

const updateNote = async (idUser, word, meaning, adjective, noun, added, status, topic) => {
    
}

const getAllNotes = async (idUser) => {
    const [allRows] = await pool.query(
        `SELECT * FROM ${notesTable} WHERE idUser = ?`,
        [idUser]
    );
    return allRows;
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