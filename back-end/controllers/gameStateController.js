const express = require("express");
const gameState = express.Router({ mergeParams: true });
const {
  getAllGameStates,
  getGameState,
  createGameState,
  updateGameState,
  deleteGameState,


} = require("../queries/gameState.js");

module.exports = gameState;