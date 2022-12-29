const pool = require("../utils/db");

const usersTable = "users";

const createUser = async (email, firstName, lastNameF, lastNameM, password, status, about) => {
    const userAdded = await pool.query(
        `INSERT INTO ${usersTable} (email, firstName, lastNameF, lastNameM, password, status, about) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [email, firstName, lastNameF, lastNameM, password, status, about]
    );
    return userAdded;
}
//const [row] = await pool.query("SELECT * FROM users WHERE key_value_string = ?", [email]);
const login = async (email, password) => {
    const access = await pool.query(`
        SELECT * FROM ${usersTable} WHERE email = ? && password = ?`,
        [email, password]
    );
    return access;
}

module.exports = {
    createUser,
    login
}