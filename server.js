// Dependencies
// ===========================================================
const express = require("express");

// Sets up the Express App
// ===========================================================
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname + '/public'));

// Sets up the Express app to handle data parsing
// ===========================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up Handlebars
// ===========================================================
const exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// ===========================================================
const routes = require("./controllers/burgersController.js");

app.use(routes);

// Listener
// ===========================================================
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });