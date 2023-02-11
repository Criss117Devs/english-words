
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

module.exports = {
    isEmpty
}