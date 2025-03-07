let humanChoice = "rock";
let computerChoice = "rock";
let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

let rockButton = document.querySelector(".button.rock");
let paperButton = document.querySelector(".button.paper");
let scissorsButton = document.querySelector(".button.scissors");

let playerChoiceText = document.querySelector(".choice.player");
let computerChoiceText = document.querySelector(".choice.computer");

let playerScoreText = document.querySelector(".score.player");
let computerScoreText = document.querySelector(".score.computer");

let resultText = document.querySelector(".result");

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice = "";
    switch (random) {
        case 0: choice = "rock"; break;
        case 1: choice = "paper"; break;
        case 2: choice = "scissors"; break;
    }
    return choice;
}

function playRound() {
    resultText.textContent = "";

    computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "paper") { computerScore++; }
    else if (humanChoice == "rock" && computerChoice == "scissors") { humanScore++; }
    else if (humanChoice == "paper" && computerChoice == "rock") { humanScore++; }
    else if (humanChoice == "paper" && computerChoice == "scissors") { computerScore++; }
    else if (humanChoice == "scissors" && computerChoice == "rock") { computerScore++; }
    else if (humanChoice == "scissors" && computerChoice == "paper") { humanScore++; }

    displayChoices();
    displayScores();

    if (computerScore == 5 || humanScore == 5) {
        if (computerScore > humanScore) { resultText.textContent = "You Lose"; }
        else if (computerScore < humanScore) { resultText.textContent = "You Win!"; }
        else { resultText.textContent = "Tie"; }

        computerScore = 0;
        humanScore = 0;
    }
}

function displayChoices() {
    playerChoiceText.textContent = `Your Last Choice: ${humanChoice.toUpperCase()}`
    computerChoiceText.textContent = `Computer Last Choice: ${computerChoice.toUpperCase()}`
}

function displayScores() {
    playerScoreText.textContent = `Your Score ${humanScore}`
    computerScoreText.textContent = `Computer Score: ${computerScore}`
}

rockButton.addEventListener("click", () => { humanChoice = "rock"; playRound(); });
paperButton.addEventListener("click", () => { humanChoice = "paper"; playRound(); });
scissorsButton.addEventListener("click", () => { humanChoice = "scissors"; playRound(); });