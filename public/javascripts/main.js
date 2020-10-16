

const ol = document.querySelector("ol");
const table = document.querySelector("table");

async function getScores() {
    const data = await fetch("http://localhost:3000/scores");
    const result = await data.json();
    console.log(result.data.rows);
    scores = result.data.rows;
    scores.sort((a, b) => b.score - a.score)
    for (let i = 0; i < scores.length; i++) {
        // const li = document.createElement("li");
        // li.innerText = `${scores[i].name}: ${scores[i].score}`;
        // ol.appendChild(li);

        // const tr = document.createElement("tr");
        const row = table.insertRow(i+1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        const position = row.insertCell(0);
        const name = row.insertCell(1);
        const score = row.insertCell(2);

        // Add some text to the new cells:
        position.innerText = i + 1;
        name.innerText = scores[i].name;
        score.innerText = scores[i].score;

        // const tdPos = document.createElement("td");
        // tdPos.innerText = i + 1;
        // tr.appendChild("tdPos");
        // const tdName = document.createElement("td");
        // tdName.innerText = scores[i].name;
        // tr.appendChild("tdName");
        // const tdScore = document.createElement("td");
        // tdScore.innerText = scores[i].score;
        // tr.appendChild("tdScore");



    }
}

getScores()