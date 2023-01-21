function getComputerChoice() {
    let gameOptions = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    let randomSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return randomSelection;
}

let playerScore = 0;
let computerScore = 0;

function playRound() {

    let playerSelection = prompt("Choose rock, paper, or scissors");

    let computerSelection = getComputerChoice();

    let playerWin;

    let computerWin;

    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Rock") {
            alert("It's a tie!");
        } else if (computerSelection == "Paper") {
            alert("You lose! Paper beats rock.");
            return ++computerScore;
        } else {
            alert("You win! Rock beats scissors.");
            return ++playerScore;
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            alert("You win! Paper beats rock.");
            return ++playerScore;
        } else if (computerSelection == "Paper") {
            alert("It's a tie!");
        } else {
            alert("You lose! Scissors beat paper.");
            return ++computerScore;
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Rock") {
            alert("You lose! Rock beats scissors");
            return ++computerScore;
        }
        else if (computerSelection == "Paper") {
            alert("You win! Scissors beat paper.");
            return ++playerScore;
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
    for (let i = 0; i < 5; i++) { 
        playRound();
        alert(`Player: ${playerScore}. Computer: ${computerScore}`);
    }
}

console.log(game());