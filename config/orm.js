// Importing MySql connection
// ===========================================================
const connection = require("../config/connection.js");

// Creating a string of questions marks based on a inputted number
// ===========================================================
const printQuestionMarks = num => {
    const arr = [];
    for (const i of num) arr.push("?");
    return arr.toString();
}

// Convert an objects key/value pairs to SQL syntax
// ===========================================================
const objToSql = object => {
    const arr = [];
    for (const key of object) {
        let value = object[key];
        if (Object.hasOwnProperty.call(object, key))
            if (typeof value === "string" && value.indexOf(" ") >= 0)
                value = "'" + value + "'";
        arr.push(key + "=" + value);
    }
    return arr.toString();
}

