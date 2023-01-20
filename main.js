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
            return "It's a tie!";
        } else if (computerSelection == "Paper") {
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            return "You win! Paper beats rock.";
        } else if (computerSelection == "Paper") {
            return "It's a tie!";
        } else {
            return "You lose! Scissors beat paper.";
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Rock") {
            return "You lose! Rock beats scissors";
        }
        else if (computerSelection == "Paper") {
            return "You win! Scissors beat paper.";
        }
        else {
            return "It's a tie!";
        }
    } else {
        return "You must choose rock, paper, or scissors.";
    }
}

function game () {
    // Call playRound function inside of game to play a 5 round game that keeps score and reports a winner or loser at the end.
    for (let i = 0; i < 5; i++) { // i is a variable, starting from 0. i < 5 is our condition for the loop. i++ is saying that we increment i by 1 every iteration.
        // your code here!
        playRound();
    }
}