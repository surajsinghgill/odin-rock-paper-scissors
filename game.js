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

