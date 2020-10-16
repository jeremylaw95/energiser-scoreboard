// DOM elements
const table = document.querySelector("table");
const button = document.querySelector("button");
const inputName =  document.querySelector("#name");
const inputScore = document.querySelector("#score");

// Load scores into table
async function getScores() {
    const data = await fetch("http://localhost:3000/scores");
    const result = await data.json();
    console.log(result.data.rows);
    scores = result.data.rows;
    scores.sort((a, b) => b.score - a.score)
    for (let i = 0; i < scores.length; i++) {

        const row = table.insertRow(i+1);

        const position = row.insertCell(0);
        const name = row.insertCell(1);
        const score = row.insertCell(2);

        position.innerText = i + 1;
        name.innerText = scores[i].name;
        score.innerText = scores[i].score;

    }
}



getScores()