
const { createUser, login } = require("../models/users");

const signIn = async (req, res, next) => {

    const {
        email = "",
        firstName = "",
        lastNameF = "",
        lastNameM = "",
        password = "",
        status = "",
        about = ""
    } = req.body;

    const addUser = await createUser(email, firstName, lastNameF, lastNameM, password, status, about);

    res.status(200).json({
        ok: "ok"
    })

    next();

}

const loginUser = async (req, res, next) => {
    
    const {
        email = "",
        password = ""
    } = req.body;

    const exist = await login(email, password);

    res.status(200).json({
        ok: "ok"
    });

    next();

}

module.exports = {
    signIn,
    loginUser
}