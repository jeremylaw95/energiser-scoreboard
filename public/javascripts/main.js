// DOM elements
const table = document.querySelector("table");
const button = document.querySelector("button");
button.addEventListener("click", postScore);
const form = document.querySelector("#postData");
const inputName =  document.querySelector("#name").value;
const inputScore = document.querySelector("#score").value;

// Load scores into table
async function getScores() {
    const data = await fetch("http://localhost:3000/scores");
    const result = await data.json();
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

function postScore() {
    //body:JSON.stringify({tittle:tittle, body:body})
    const data = {name: inputName, score: inputScore};
    console.log(data)
}

postScore()

getScores()