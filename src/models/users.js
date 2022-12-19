const pool = require("../utils/db");

const usersTable = "users";

const createUser = async (email, firstName, lastNameF, lastNameM, password, status, about) => {
    const userAdded = await pool.query(
        `INSERT INTO ${usersTable} (email, firstName, lastNameF, lastNameM, password, status, about) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [email, firstName, lastNameF, lastNameM, password, status, about]
    );
    return userAdded;
}

const login = async (email, password) => {
    const access = await pool.query(`
        SELECT * FROM ${usersTable} WHERE email = ${email} && password = ${password}`
        [email, password]
    );
}

module.exports = {
    createUser,
    login
}