// Dependencies
// ===========================================================
const util = require("util");
const mysql = require("mysql");

// Creating a connection to MySql Server
// ===========================================================
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "eat_da_burger_db"
    });
};


connection.connect();
connection.query = util.promisify(connection.query);

// Exporting this connection to be used in sql queries 
// ===========================================================
module.exports = connection;