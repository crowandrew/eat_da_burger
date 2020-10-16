// Importing MySql connection
// ===========================================================
const connection = require("../config/connection.js");

// Creating a string of questions marks based on a inputted number
// ===========================================================
function printQuestionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }

// Convert an objects key/value pairs to SQL syntax
// ===========================================================
function objToSql(ob) {
    const arr = [];
    for (let key in ob) {
      let value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }

// orm object for all our SQL statement functions
// ===========================================================
const orm = {
    all: function (tableInput, callback) {
        connection.query(`SELECT * FROM ${tableInput};`, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    create: function (table, cols, values, callback) {
        connection.query(`INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(values.length)});`, values, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    update: function (table, objColValues, condition, callback) {
        connection.query(`UPDATE ${table} SET ${objToSql(objColValues)} WHERE ${condition};`, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    delete: function (table, condition, callback) {
        connection.query(`DELETE FROM ${table} WHERE ${condition};`, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

// Export the orm object for the model (burgers_model.js)
module.exports = orm;