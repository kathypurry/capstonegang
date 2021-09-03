const gameStatsController = require("./controllers/gameStatsController");

const express = require("express");
const users = express.Router({ mergeParams: true });
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,

} = require("../queries/users.js");

module.exports = users;