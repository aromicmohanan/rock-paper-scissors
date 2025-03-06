let humanChoice = "rock";
let computerChoice = 0;
let humanScore = 0;
let computerScore = 0;
let gameRound = 0;

function getHumanChoice() {
    return (prompt("Rock, Paper or Scissors?", "Rock").toLowerCase());
}

function getComputerChoice() {
    return (Math.floor(Math.random() * 3));
}

function playRound() {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    if (humanChoice == "rock" && computerChoice == 1) { computerScore++; }
    else if (humanChoice == "rock" && computerChoice == 2) { humanScore++; }
    else if (humanChoice == "paper" && computerChoice == 0) { humanScore++; }
    else if (humanChoice == "paper" && computerChoice == 2) { computerScore++; }
    else if (humanChoice == "scissors" && computerChoice == 0) { computerScore++; }
    else if (humanChoice == "scissors" && computerChoice == 1) { humanScore++; }
}

while (gameRound < 5) {
    playRound();
    console.log(`Your choice: ${humanChoice}\nComputer choice:${computerChoice}\n\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
    gameRound++;
}

if (computerScore < humanScore) { console.log("You Won!"); }
else if (computerScore == humanScore) { console.log("Tie"); }
else { console.log("You Lost"); }