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

    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Rock") {
            alert(`It's a tie! \nPlayer: ${playerScore}. Computer: ${computerScore}`);
        } else if (computerSelection == "Paper") {
            ++computerScore;
            alert(`You lose! \nPaper beats rock. Player: ${playerScore}. Computer: ${computerScore}`);
        } else {
            ++playerScore;
            alert(`You win! \nRock beats scissors. Player: ${playerScore}. Computer: ${computerScore}`);
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            ++playerScore;
            alert(`You win! \nPaper beats rock. Player: ${playerScore}. Computer: ${computerScore}`);
        } else if (computerSelection == "Paper") {
            alert(`It's a tie! \nPlayer: ${playerScore}. Computer: ${computerScore}`);
        } else {
            ++computerScore;
            alert(`You lose! \nScissors beat paper. Player: ${playerScore}. Computer: ${computerScore}`);
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Rock") {
            ++computerScore;
            alert(`You lose! \nRock beats scissors. Player: ${playerScore}. Computer: ${computerScore}`);
        }
        else if (computerSelection == "Paper") {
            ++playerScore;
            alert(`You win! \nScissors beat paper. Player: ${playerScore}. Computer: ${computerScore}`);
        }
        else {
            alert(`It's a tie! \nPlayer: ${playerScore}. Computer: ${computerScore}`);
        }
    } else {
        alert("You must choose rock, paper, or scissors.");
        playRound();
    }
}

function game () {
    for (let i = 0; i < 5; i++) { 
        playRound();
    }
    if (playerScore > computerScore) {
        alert(`You win the game! \nPlayer: ${playerScore}. Computer: ${computerScore}`);
    }
    else {
        alert(`Better luck next time. \nPlayer: ${playerScore}. Computer: ${computerScore}`);
    }
}

console.log(game());