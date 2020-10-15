var express = require('express');
var router = express.Router();

const { addPlayer, getScores, getPlayerById, getPlayerByName, updatePlayerScoreByID } = require("../models/scores");

router.get("/", async function (req, res, next) {
  const jokes = await getAllJokes();
  res.json({ success: true, data: jokes });
});

router.get("/:id", function (req, res) {
  const id = req.params.id;
  console.log(req.params.id);
  const joke = getJokeById(id);
  res.json({ success: true, payload: joke });
});

router.post("/", async function (req, res) {
  const { joke } = req.body;
  const id = await addJoke(joke);
  res.json({ success: true, message: `joke has been created with id ${id}` });
});

module.exports = router;
