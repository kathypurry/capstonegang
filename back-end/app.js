// DEPENDENCIES
const cors = require("cors");
const express = require("express");
//git test 1
const codeSnippetController = require("./controllers/codeSnippetController");
//const usersController = require("./controllers/usersController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

app.use("/code", codeSnippetController);
// ROUTES

app.get("/", (req, res) => {
  res.send("Codesnip and Userinfo API");
});

//app.use("/users", usersController);

app.get("*", (req, res) => {
  res.status(404).send("404: Page not found");
});


app.get("*", (req, res) => {
  res.status(404).send("404: Page not found");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
const db = require("./db/dbConfig.js");

app.get("/test", async (req, res) => {
  try {
    const allDays = await db.any("SELECT * FROM test");
    res.json(allDays);
  } catch (err) {
    res.json(err);
  }
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////

// EXPORT
module.exports = app;
