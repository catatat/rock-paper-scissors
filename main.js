function getComputerChoice() {
    let gameOptions = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    let randomChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            return "It's a tie!";
        } else if (computerSelection == "Paper") {
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return "You win! Paper beats rock.";
        } else if (computerSelection == "Paper") {
            return "It's a tie!";
        } else {
            return "You lose! Scissors beat paper.";
        }
    } else if (playerSelection == "Scissors") {
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