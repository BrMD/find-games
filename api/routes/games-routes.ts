const Express = require("express");
const {addGame}  = require("../controllers/gamesController.ts");

const router = Express.Router();

router.post("/games", addGame);

module.exports = { routes: router };
