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

// orm object for all our SQL statement functions.
// ===========================================================
const orm = {
    all: function (tableInput, callback) {
        connection.query(`SELECT * FROM ${tableInput};`, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    create: function (table, cols, vals, callback) {
        connection.query(`INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`, vals, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    delete: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};


// Export the orm object for the model (burgers_model.js).
module.exports = orm;