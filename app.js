function getComputerChoice() {
    arr = ['rock', 'paper', 'scissor'];
    let random = arr[Math.floor(Math.random() * arr.length)];
    console.log(random);
    return random;
}

const player = 'paper';
const computer = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let message = document.querySelector('.message');

    if(playerSelection === computerSelection) {
        message.textContent = "It's a tie";
        return tie;
    } else if((playerSelection === 'rock' && computerSelection === 'scissor')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissor' && computerSelection === 'paper')) {
        message.textContent = `${playerSelection} beats ${computerSelection}`;
        return playerWin;
    } else {
        message.textContent = `${computerSelection} beats ${playerSelection}`;
        return computerWin;
    }
}

let tie, playerWin, computerWin;

playRound(player, computer);

// function game() {
//     let playerScore = document.getElementById('player-score');
//     let computerScore = document.getElementById('computer-score');
    
//     let computerSc = 0;
//     let playerSc = 0;
    
//     if(playerWin) {
//         playerSc++;
//         console.log(playerSc);
//     }
//     else if(computerWin) {
//         computerSc++;
//         console.log(computerSc);
//     }
    
//     playerScore.textContent = `${playerSc}`;
//     computerScore.textContent = `${computerSc}`;
// }

// game();

// how to keep the score?

