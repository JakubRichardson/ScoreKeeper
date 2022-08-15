const player1 = {
    score: 0,
    margin: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}
const player2 = {
    score: 0,
    margin: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});

let winningScore = 5;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.margin = player.score - opponent.score;
        opponent.margin = opponent.score - player.score;
        if (player.margin >= 2 && player.score >= winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

player1.button.addEventListener("click", function () {
    updateScores(player1, player2);
});

player2.button.addEventListener("click", function () {
    updateScores(player2, player1);
});

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }
};