// Require express
const express = require("express");

// Sets up Express App
const app = express();

// Require html and api route js files
require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allow use of static css file
app.use(express.static("public"));

// Starts server to begin listening
app.listen(PORT, () => {
  console.log("Server is listening on: http://localhost: " + PORT);
});
