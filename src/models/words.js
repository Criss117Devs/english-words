const pool = require("../utils/db");

const wordsTable = "words";

const createWord = async (idUser, word, meaning, adjective, noun, added, status) => {
    const insert = await pool.query(
        `INSERT INTO ${wordsTable} (idUser, word, meaning, adjective, noun, added, status) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [idUser, word, meaning, adjective, noun, added, status]
    );
    return insert;
}

const updateWord = async (id, idUser, word, meaning, adjective, noun, added, status) => {
    const update = await pool.query(
        `UPDATE ${wordsTable} SET word = ?, meaning = ?, adjective = ?, noun = ?, added = ?, status = ? WHERE id = ? && idUSER = ?`,
        [word, meaning, adjective, noun, added, status, id, idUser]
    );
    return update;
}

const getAllWords = async (idUser) => {
    const [allRows] = await pool.query(
        `SELECT * FROM ${wordsTable} WHERE idUser = ?`,
        [idUser]
    );
    return allRows;
}

module.exports = {
    createWord,
    updateWord,
    getAllWords
    
}