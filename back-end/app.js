// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const codeSnippetController = require("./controllers/codeSnippetController");
//const usersController = require("./controllers/usersController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

app.use("/code", codeSnippetController);
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();;
// });
// ROUTES

app.get("/", (req, res) => {
  res.send("Codesnip and Userinfo API");
});

//app.use("/users", usersController);

app.get("*", (req, res) => {
  res.status(404).send("404: Page not found");
});

// EXPORT
module.exports = app;
