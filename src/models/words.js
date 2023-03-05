const pool = require("../utils/db");

const wordsTable = "words";

const createWord = async (idUser, word, meaning, adjective, noun, adverb, added, status) => {

    try {

        const insert = await pool.query(
            `INSERT INTO ${wordsTable} (idUser, word, meaning, adjective, noun, adverb, added, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [idUser, word, meaning, adjective, noun, adverb, added, status]
        );

        return {
            code: 200,
            insert
        };

    } catch (error) {
        
        return {
            code: 500,
            error
        }
    }
}

const updateWord = async (id, idUser, word, meaning, adjective, noun, adverb, added, status) => {

    try {

        const update = await pool.query(
            `UPDATE ${wordsTable} SET word = ?, meaning = ?, adjective = ?, noun = ?, added = ?, adverb = ?, status = ? WHERE id = ? && idUSER = ?`,
            [word, meaning, adjective, noun, adverb, added, status, id, idUser]
        );

        return {
            code: 200,
            update
        };

    } catch (error) {

        return {
            code: 500,
            error,
        }
    }
}

const getAllWords = async (idUser) => {
    
    try {
        
        const records = await pool.query(`SELECT * FROM ${wordsTable} WHERE idUser = ?`, [idUser]);

        return {
            code: 200,
            records
        }

    } catch (error) {
        
        return {
            code: 500,
            error
        }
    }
}

module.exports = {
    createWord,
    updateWord,
    getAllWords
    
}

// advervio sustantivo