let humanChoice = "rock";
let computerChoice = 0;
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    return (prompt("Rock, Paper or Scissors?", "Rock").toLowerCase());
}

function getComputerChoice() {
    return (Math.floor(Math.random() * 3));
}