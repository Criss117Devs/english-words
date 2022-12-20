const pool = require("../utils/db");

const wordsTable = "words";

const createWord = async (idUser, word, meaning, adjective, noun, added, status) => {
    const userAdded = await pool.query(
        `INSERT INTO ${wordsTable} (idUser, word, meaning, adjective, noun, added, status) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [idUser, word, meaning, adjective, noun, added, status]
    );
    return userAdded;
}

const getAllWords = async (idUser) => {
    const [allRows] = await pool.query(
        `SELECT * FROM ${wordsTable} WHERE idUser = ?`,
        [idUser]
    );
    console.log(allRows);
    return allRows;
}

module.exports = {
    createWord,
    getAllWords
    
}