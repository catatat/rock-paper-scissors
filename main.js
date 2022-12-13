function getComputerChoice () {
    let gameOptions = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    let randomChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return randomChoice;
}
console.log(getComputerChoice ());