let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');
let message = document.querySelector('.message');
let elem = document.querySelector('.elements');

let playerSc = 0;
let computerSc = 0;

function getComputerChoice() {
    arr = ['rock', 'paper', 'scissor'];
    let random = arr[Math.floor(Math.random() * arr.length)];
    console.log(random);
    return random;
}

function playRound(playerSelection, computerSelection) {
    let tie = 'tie';
    let playerWin = 'playerWin';
    let computerWin = 'computerWin';
        
    if(playerSelection === computerSelection) {
        message.textContent = "It's a tie";
        playerScore.textContent = `${playerSc}`;
        computerScore.textContent = `${computerSc}`;
        return tie;
    } else if((playerSelection === 'rock' && computerSelection === 'scissor')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissor' && computerSelection === 'paper')) {
        message.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        playerSc += 1;
        playerScore.textContent = `${playerSc}`;
        computerScore.textContent = `${computerSc}`;
        return playerWin;
    } else {
        message.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerSc +=1;
        playerScore.textContent = `${playerSc}`;
        computerScore.textContent = `${computerSc}`;
        return computerWin;
    }
}

function playerChoice() {
    let buttons = document.querySelectorAll('.elem'); 

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const computer = getComputerChoice();
            let player = button.name;
            playRound(player, computer);
            if(playerSc === 5 || computerSc === 5) {
                endGame();
            }
        })
    })
}

function endGame() {
    let try_again = document.querySelector('.try-again');

    elem.style.display = 'none';
    try_again.style.display = 'inline-block';
    playerSc = 0;
    computerSc = 0;
    const retry = () => {
        try_again.addEventListener('click', () => {
            message.textContent = '';
            try_again.style.display = 'none';
            elem.style.display = 'flex';
            playerSc = 0;
            computerSc = 0;
            playerScore.textContent = `${playerSc}`;
            computerScore.textContent = `${computerSc}`;
        })
    }
    retry();
}

function game() {
    let description = document.querySelector('.description');
    let start = document.querySelector('.start');
    let score = document.querySelector('.score');

    start.addEventListener('click', () => {
        description.style.display = 'none';
        start.style.display = 'none';
        score.style.display = 'flex';
        elem.style.display = 'flex';
    })

    playerChoice();
}

game();