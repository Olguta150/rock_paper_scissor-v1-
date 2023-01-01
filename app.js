function getComputerChoice() {
    arr = ['rock', 'paper', 'scissor'];
    let random = arr[Math.floor(Math.random() * arr.length)];
    console.log(random);
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

// console.log(playRound(()))