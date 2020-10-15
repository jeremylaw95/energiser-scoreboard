const { query } = require("../db/index");

// Model Functions
// 1$      Add Player (with a score optional, 0 if no score given)
// 4&      Get all table - returns all the scores
// 2(      Get an individual players score
// 7*      Get top 5
// 3.3^    Update Player Name
// 5%      Update Score (select a player and add 

async function addPlayer(name, score = 0) {
    const result = await query("INSERT INTO scores(name, score) VALUES ($1,$2) RETURNING id;", [name, score]);
    console.log(result);
    return result.rows[0].id;
}

addPlayer("Aftab", 5);