var express = require('express');
var router = express.Router();

const { addPlayer, getScores, getPlayerById, getPlayerByName, updatePlayerScoreByID } = require("../models/scores");

router.get("/", async function (req, res, next) {
  const scores = await getScores();
  res.json({ success: true, data: scores });
});

router.get("/:id", async function (req, res) {
  const {id} = req.params;
  const player = await getPlayerById(id);
  res.json({ success: true, payload: player });
});

router.post("/name", async function (req, res) {
    const {name} = req.body;
    const player = await getPlayerByName(name);
    res.json({ success: true, payload: player });
});

router.post("/", async function (req, res) {
  const {name, score} = req.body;
  const id = await addPlayer(name, score);
  res.json({ success: true, message: `${name} has been added with id ${id}` });
});

router.put("/", async function (req, res) {
  const { id, score } = req.body;
  const result = await updatePlayerScoreByID(id, score);
  res.json({ success: true, message: `Player with id:${id} now has a score of ${score}` });
});

module.exports = router;
