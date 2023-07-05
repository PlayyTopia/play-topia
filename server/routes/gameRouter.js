const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.post("/api/games", gameController.newGame);
router.get("/api/games" , gameController.allGames);
router.put("/api/games/:id" , gameController.updateGame);

module.exports = router;
