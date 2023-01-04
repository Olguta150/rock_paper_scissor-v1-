let playerSc = 0;
let computerSc = 0;

function getComputerChoice() {
    arr = ['rock', 'paper', 'scissor'];
    let random = arr[Math.floor(Math.random() * arr.length)];
    console.log(random);
    return random;
}
 
// const player = 'paper';
// const computer = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    let message = document.querySelector('.message');
    let tie = 'tie', 
        playerWin = 'playerWin', 
        computerWin = 'computerWin';

    if(playerSelection === computerSelection) {
        message.textContent = "It's a tie";
        console.log("computerSc:", computerSc, "playerSc:", playerSc);
        return tie;
    } else if((playerSelection === 'rock' && computerSelection === 'scissor')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissor' && computerSelection === 'paper')) {
        message.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        playerSc = ++playerSc;
        console.log("computerSc:", computerSc, "playerSc:", playerSc);
        return playerWin;
    } else {
        computerSc = ++computerSc;
        console.log("computerSc:", computerSc, "playerSc:", playerSc);
        message.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        return computerWin;
    }
}


// function game() {
//     console.log(playRound(player, computer));
// }

// let playerSc = 0;
// let computerSc = 0;

// for(let i = 0; i < 5; i++) {
//     const player = 'paper';
//     // let roundResult = playRound(player, computer);
//     // game(roundResult);
//     // if(playerWin) {
//         //     playerSc++;
//         //     console.log('playerSc:', playerSc);
//         // } else if(computerWin) {
//             //     computerSc++;
//             //     console.log('computerSc:', computerSc);
//             // }
// }

const computer = getComputerChoice();

function playerChoice() {
    let buttons = document.querySelectorAll('button'); 
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let option = button.name;
            playRound(option, computer);
            // return option;
        })
    })
}

playerChoice();

// playRound(playerChoice, getComputerChoice);
        
// function game() {
//     buttons.forEach((button) => {
//         button.addEventListener('click', () => {
//             playRound(playerChoice, computer);
//         });
//     });
// }

// game();

// function game(result) {
//     let playerScore = document.getElementById('player-score');
//     let computerScore = document.getElementById('computer-score');
//     // let playerSc = 0;
//     // let computerSc = 0;
//     if(result === playerWin) {
//         playerSc++;
//         console.log("computerSc:", computerSc, "playerSc:", playerSc);
//         // console.log('playerSc:', playerSc);
//     } else if(result === computerWin) {
//         computerSc++;
//         console.log("computerSc:", computerSc, "playerSc:", playerSc);
//         // console.log('computerSc:', computerSc);
//     } else {
//         console.log("computerSc:", computerSc, "playerSc:", playerSc);
//         return computerSc, playerSc;
//     }

    // playerScore.textContent = `${playerSc}`;
    // computerScore.textContent = `${computerSc}`;
    // for(let i = 0; i < 5; i++) {
    //     playRound(player, computer);
    //     console.log(playRound(player, computer));
    // }
    // console.log(playRound(player, computer));
// }

// game();

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

