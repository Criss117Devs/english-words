
const { createUser } = require("../models/users");

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

    console.log(addUser);

    next();

}

module.exports = {
    signIn
}