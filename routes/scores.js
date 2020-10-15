var express = require('express');
var router = express.Router();

const { addPlayer, getScores, getPlayerById, getPlayerByName, updatePlayerScoreByID } = require("../models/scores");

router.get("/", async function (req, res, next) {
  const scores = await getScores();
  res.json({ success: true, data: scores });
});

// router.get("/:id", function (req, res) {
//   const id = req.params.id;
//   console.log(req.params.id);
//   const joke = getJokeById(id);
//   res.json({ success: true, payload: joke });
// });

router.post("/", async function (req, res) {
  const { name, score } = req.body;
  const id = await addPlayer(name, score);
  res.json({ success: true, message: `${name} has been added with id ${id}` });
});

router.put("/:id/:score", async function (req, res) {
  const { id, score } = req.params;
  const result = await updatePlayerScoreByID(id, score);
  res.json({ success: true, message: result });
  // console.log(req.params)
});

module.exports = router;
