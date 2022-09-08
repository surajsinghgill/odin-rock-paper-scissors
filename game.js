function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection) {
    switch(true) {
        case (playerSelection === "rock" && computerSelection === "paper"):
            return "You lose! Paper beats Rock"
        case (playerSelection === "scissors" && computerSelection === "rock"):
            return "You lose! Rock beats Scissors"; 
        case (playerSelection === "paper" && computerSelection === "scissors"):
            return "You lose! Scissors beats Paper";
        case (playerSelection === "paper" && computerSelection === "rock"):
            return "You win! Paper beats Rock";
        case (playerSelection === "rock" && computerSelection === "scissors"):
            return "You win! Rock beats Scissors";
        case (playerSelection === "scissors" && computerSelection === "paper"):
            return "You win! Scissors beats Paper";
        case playerSelection === computerSelection:
            return "Draw";
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Enter your choice").toLowerCase();
        let result = playRound(playerChoice, getComputerChoice());
        console.log(result);
        if (result.startsWith("You win")) {
            scorePlayer++;
        }
        else if (result.startsWith("You lose")) {
            scoreComputer++;
        }
    }
    if (scorePlayer > scoreComputer) {
        console.log("You win");
    }
    else if (scorePlayer === scoreComputer) {
        console.log("Draw");
    }
    else {
        console.log("You lose");
    }
}

game();