

const ol = document.querySelector("ol");

async function getScores() {
    const data = await fetch("http://localhost:3000/scores");
    const result = await data.json();
    console.log(result.data.rows);
    scores = result.data.rows;
    for(let i = 0; i<scores.length; i++) {
        const li = document.createElement("li");
        li.innerText = `${scores[i].name}: ${scores[i].score}`;
        ol.appendChild(li);
    }
}

getScores()