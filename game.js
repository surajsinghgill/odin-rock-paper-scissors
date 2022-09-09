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

function playerImage(playerSelection) {
    const imagePlayer = document.querySelector("#player");
    switch(playerSelection) {
        case "rock":
            imagePlayer.setAttribute("src", "./images/fist.png");
            imagePlayer.setAttribute("alt", "rock");
            break;
        case "paper":
            imagePlayer.setAttribute("src", "./images/hand.png");
            imagePlayer.setAttribute("alt", "paper");
            break;
        case "scissors":
            imagePlayer.setAttribute("src", "./images/scissor.png");
            imagePlayer.setAttribute("alt", "scissors");
    }
}

function computerImage(computerSelection) {
    const imageComputer = document.querySelector("#computer");
    switch(computerSelection) {
        case "rock":
            imageComputer.setAttribute("src", "./images/fist.png");
            imageComputer.setAttribute("alt", "rock");
            break;
        case "paper":
            imageComputer.setAttribute("src", "./images/hand.png");
            imageComputer.setAttribute("alt", "paper");
            break;
        case "scissors":
            imageComputer.setAttribute("src", "./images/scissor.png");
            imageComputer.setAttribute("alt", "scissors");
    }
}

function reset() {
    const imagePlayer = document.querySelector("#player");
    const imageComputer = document.querySelector("#computer");
    imagePlayer.setAttribute("src", "./images/question-mark.png");
    imagePlayer.setAttribute("alt", "question mark");
    imageComputer.setAttribute("src", "./images/question-mark.png");
    imageComputer.setAttribute("alt", "question mark");
    document.querySelectorAll(".score").forEach(score => score.textContent = "0");
    document.querySelector("#flex-item-round p").textContent = "";
}

function updateScore(round){
    const scores = document.querySelectorAll(".score");
    let score1 = parseInt(scores[0].textContent);
    let score2 = parseInt(scores[1].textContent);
    if (round.startsWith("You win")) {
        score1++;
    }
    else if (round.startsWith("You lose")) {
        score2++;
    }
    scores[0].textContent = `${score1}`;
    scores[1].textContent = `${score2}`;

    if (score1 === 5) {
        document.querySelector(".content").textContent = "You won!"
        document.querySelector("#modal").style.display = "block";
        reset();
    }
    else if (score2 === 5) {
        document.querySelector(".content").textContent = "You lose!"
        document.querySelector("#modal").style.display = "block";
        reset();
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        let computerChoice = getComputerChoice();
        let round = playRound(button.id, computerChoice);  
        const roundResult = document.querySelector("#flex-item-round p");

        roundResult.textContent = round;

        playerImage(button.id);

        computerImage(computerChoice);

        updateScore(round);
})
});


document.querySelector(".close").addEventListener("click", function() {
    document.querySelector("#modal").style.display = "none";
});