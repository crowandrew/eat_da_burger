// Dependencies
// ===========================================================
const express = require("express");
const router = express.Router();

// Importing the model burger.js to use the database functions
// ===========================================================
const burger = require("../models/burger");

// Create all our routes and set up logic 
// ===========================================================
router.get("/", function (req, res) {
    burger.all(function (data) {
        const handleBarsObject = {
            burgers: data
        };
        console.log(handleBarsObject);
        res.render("index", handleBarsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;
    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Exporting the routes for server.js
module.exports = router;