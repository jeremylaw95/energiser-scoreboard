const { query } = require("../db/index");

// Model Functions
// 1$      Add Player (with a score optional, 0 if no score given)
// 4&      Get all table - returns all the scores
// 2(      Get an individual players score by name/score
// 7*      Get top 5
// 3.3^    Update Player Name
// 5%      Update Score (select a player and add 

async function addPlayer(name, score = 0) {
    const result = await query("INSERT INTO scores(name, score) VALUES ($1,$2) RETURNING id;", [name, score]);
    console.log(result);
    return result.rows[0].id;
}

async function getScores() {
    const result = await query("SELECT * FROM scores");
    console.log(result);
    return result;
}

async function getPlayerScoreById(id) {
    const result = await query("SELECT * FROM scores WHERE id = $1;", [id]);
    console.log(result);
    return result;
}



getPlayerScoreById(2);