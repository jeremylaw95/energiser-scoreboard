const { query } = require("../db/index");

// Model Functions
// 1$      Add Player (with a score optional, 0 if no score given)
// 4&      Get all table - returns all the scores
// 2(      Get an individual players score by name/id
// 5%      Update Score (select a player and add)

// Moar things to do
// 3.3^    Update Player Name
// 7*      Get top 5


async function addPlayer(name, score = 0) {
    const result = await query("INSERT INTO scores(name, score) VALUES ($1,$2) RETURNING id;", [name, score]);
    //console.log(result);
    return result.rows[0].id;
}

async function getScores() {
    const result = await query("SELECT * FROM scores");
    //console.log(result);
    return result;
}

async function getPlayerById(id) {
    const result = await query("SELECT * FROM scores WHERE id = $1;", [id]);
    //console.log(result);
    return result;
}

async function getPlayerByName(name) {
    const result = await query("SELECT * FROM scores WHERE name = $1;", [name]);
    //console.log(result);
    return result;
}

async function updatePlayerScoreByID(id, score) {
    const result = await query("UPDATE scores SET score = $2 WHERE id = $1;", [id, score]);
    //console.log(result);
    return result;
}

module.exports = {
    addPlayer,
    getScores,
    getPlayerById,
    getPlayerByName,
    updatePlayerScoreByID
  };