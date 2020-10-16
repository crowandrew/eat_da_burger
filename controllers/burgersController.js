// Dependencies
// ===========================================================
const express = require("express");
const router = express.Router();

// Importing the model burger.js to use the database functions
// ===========================================================
const burger = require("../models/burger");

// Create all our routes and set up logic 
// ===========================================================
router.get("/", function(req, res) {
    burger.all(function(data) {
      const handleBarsObject = {
        burgers: data
      };
      console.log(handleBarsObject);
      res.render("index", handleBarsObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burger.create([
      "name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  


// Exporting the routes for server.js
module.exports = router;