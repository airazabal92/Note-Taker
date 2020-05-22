const express = require("express");
const http = require("http");

const app = express();
const PORT = process.env.PORT || 3000;

// // Create server
// const server = http.createServer(handleRequest);

// // Capture URL request is made to
// let path = req.url;

require("./routing/html-routes.js")(app);
require("./routing/api-routes.js")(app);

app.listen(PORT, () => {
  console.log("Server is listening on: http://localhost" + PORT);
});
