// let playerSc = 0;
// let computerSc = 0;

function getComputerChoice() {
    arr = ['rock', 'paper', 'scissor'];
    let random = arr[Math.floor(Math.random() * arr.length)];
    console.log(random);
    return random;
}

function playRound(playerSelection, computerSelection) {
    let playerScore = document.getElementById('player-score');
    let computerScore = document.getElementById('computer-score');
    let message = document.querySelector('.message');

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
        playerSc++;
        playerScore.textContent = `${playerSc}`;
        computerScore.textContent = `${computerSc}`;
        return playerWin;
    } else {
        computerSc++;
        message.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        playerScore.textContent = `${playerSc}`;
        computerScore.textContent = `${computerSc}`;
        return computerWin;
    }
}

function playerChoice() {
    let buttons = document.querySelectorAll('button'); 

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const computer = getComputerChoice();
            let option = button.name;
            playRound(option, computer);
            if(playerSc === 5 || computerSc === 5) {
                endGame();
            }
        })
    })
}

function endGame() {
    let elem = document.querySelector('.elements');
    let try_again = document.querySelector('.try-again');
    let message = document.querySelector('.message');
    elem.style.display = 'none';
    try_again.style.display = 'inline-block';
    const retry = () => {
        // playerSc = 0;
        // computerSc = 0;
        try_again.addEventListener('click', () => {
            message.textContent = '';
            try_again.style.display = 'none';
            elem.style.display = 'flex';
        })
    }
    retry();
    playerSc = 0;
    computerSc = 0;
    playerChoice();
}

function game() {
    playerSc = 0;
    computerSc = 0;
    playerChoice();

}

game();