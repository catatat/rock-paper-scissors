function getComputerChoice() {
    let gameOptions = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    let randomSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return randomSelection;
}

function playRound() {

    let playerSelection = prompt("Choose rock, paper, or scissors");

    let computerSelection = getComputerChoice();

    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Rock") {
            alert("It's a tie!");
        } else if (computerSelection == "Paper") {
            alert("You lose! Paper beats rock.");
        } else {
            alert("You win! Rock beats scissors.");
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            alert("You win! Paper beats rock.");
        } else if (computerSelection == "Paper") {
            alert("It's a tie!");
        } else {
            alert("You lose! Scissors beat paper.");
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Rock") {
            alert("You lose! Rock beats scissors");
        }
        else if (computerSelection == "Paper") {
            alert("You win! Scissors beat paper.");
        }
        else {
            alert("It's a tie!");
        }
    } else {
        alert("You must choose rock, paper, or scissors.");
        let playerSelection = prompt("Choose rock, paper, or scissors"); // I'm not sure if I need this line.
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) { 
        playRound();
    }
}

console.log(game());