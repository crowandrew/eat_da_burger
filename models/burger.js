// Importing the ORM to interact with the database.
// ===========================================================
const orm = require("../config/orm");

const burger = {
    all: function(callback) {
        orm.all("burgers", function(res) {
          callback(res);
        });
      },

};



// Export the burger variable with functions for the burger controller 
// ===========================================================
module.exports = burger;

