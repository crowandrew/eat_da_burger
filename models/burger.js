// Importing the ORM to interact with the database.
// ===========================================================
const orm = require("../config/orm");

// object to hold the CRUD functions
// ===========================================================
const burger = {
    all: function (callback) {
        orm.all("burgers", function (res) {
            callback(res);
        });
    },
    create: function (cols, values, callback) {
        orm.create("burgers", cols, values, function (res) {
            callback(res);
        });
    },
    update: function (objColValues, condition, callback) {
        orm.update("burgers", objColValues, condition, function (res) {
            callback(res);
        });
    },
    delete: function (condition, callback) {
        orm.delete("burgers", condition, function (res) {
            callback(res);
        });
    }
};

// Export the burger variable with functions for the burger controller 
// ===========================================================
module.exports = burger;

