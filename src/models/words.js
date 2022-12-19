const pool = require("../utils/db");

const wordsTable = "words";

const createWord = async (word, meaning, adjective, noun, added, status) => {
    const userAdded = await pool.query(
        `INSERT INTO ${wordsTable} (word, meaning, adjective, noun, added, status) VALUES (?, ?, ?, ?, ?, ?)`,
        [word, meaning, adjective, noun, added, status]
    );
    return createWord;
}

module.exports = {
    createWord
}