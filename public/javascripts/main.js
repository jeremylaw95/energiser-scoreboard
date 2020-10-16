// DOM elements
const table = document.querySelector("table");
const button = document.querySelector("button");
button.addEventListener("click", postScore);
const form = document.querySelector("#postData");
const inputName = document.querySelector("#name");
const inputScore = document.querySelector("#score");

const updateButton = document.querySelector("#updateScore")
updateButton.addEventListener("click", updateScore)
const dropDown = document.querySelector("select");
const newScore = document.querySelector("#newScore");

//💩

// Load scores into table
async function getScores() {
    const data = await fetch("http://localhost:3000/scores");
    const result = await data.json();
    scores = result.data.rows;
    scores.sort((a, b) => b.score - a.score)
    for (let i = 0; i < scores.length; i++) {

        const row = table.insertRow(i + 1);

        const position = row.insertCell(0);
        const name = row.insertCell(1);
        const score = row.insertCell(2);

        position.innerText = i + 1;
        name.innerText = scores[i].name;
        if(i === 0) {name.innerText += " 👑"}
        if(i === scores.length - 1) {name.innerText += " 💩"}
        score.innerText = scores[i].score;

        const option = document.createElement("option");
        option.text = scores[i].name;
        dropDown.add(option);

    }

}

// Add a new name and score
async function postScore() {

    const data = { name: inputName.value, score: inputScore.value };

    // Post data to our API
    const postData = await fetch('http://localhost:3000/scores', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    // For the console log
    const result = await postData.json();
    console.log(result);
}


// Add a new score to an existing name
async function updateScore() {

    const data = { name: dropDown.value, score: newScore.value };
    console.log(data)

    // Put data to our API
    const putData = await fetch('http://localhost:3000/scores', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    // For the console log
    const result = await putData.json();
    console.log(result);
}


getScores()