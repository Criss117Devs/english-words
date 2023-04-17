const alphabet = "abcdefghijklmnopqrstuvwxyz";

const isEmpty = (object) => {

    const emptyFields = [];

    for (const [key, value] of Object.entries(object)) {
        if(value == "" || value == undefined || value == null) emptyFields.push({ key, value: "is empty" });
    }

    if (emptyFields.length > 0) {

        return {
            continue: false,
            emptyFields: emptyFields
        }

    } else {

        return {
            continue: true
        }
    }
}

const empty = (string) => {

    if(string != "" || string != undefined || string == null) return true;
}

const generateRandomLetter = () => { return alphabet[Math.floor(Math.random() * alphabet.length)] }

module.exports = {
    isEmpty,
    empty,
    generateRandomLetter
}