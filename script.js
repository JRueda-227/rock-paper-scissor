let playerScore = 0;
let compScore = 0;
let output;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const index = Math.floor(Math.random() * choices.length);
    const compChoice = choices[index];
    return compChoice;
}

function playRound(playerChoice, compChoice) {
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === 'rock' && compChoice === 'paper') {
        output = 'You lose! Paper beats Rock';
        compScore++;
    }
    else if (playerChoice === 'rock' && compChoice === 'scissor') {
        output = 'You win! Rock beats Scissor';
        playerScore++;
    }
    else if (playerChoice === 'paper' && compChoice === 'scissor') {
        output = 'You lose! Scissor beats Paper';
        compScore++;
    }
    else if (playerChoice === 'paper' && compChoice === 'rock') {
        output = 'You win! Paper beats Rock';
        playerScore++;
    }
    else if (playerChoice === 'scissor' && compChoice === 'rock') {
        output = 'You lose! Rock beats Scissor';
        compScore++;
    }
    else if (playerChoice === 'scissor' && compChoice === 'paper') {
        output = 'You win! Scissor beats Paper';
        playerScore++;
    }
    else {
        output = ('Tie!')
    }
}

function resetGame() {
    playerScore = 0;
    compScore = 0;

}

function checkWinner() {
    let winner;
    if (playerScore === 5) {
        winner = 'Player Wins Game';
        gameCommentary.textContent = winner;
        resetGame();
    }
    else if (compScore === 5) {
        winner = 'Computer Wins Game';
        gameCommentary.textContent = winner;
        resetGame();
    }
}

let weapons = document.querySelector('.weapons');
const scoreBoard = document.querySelector('.score-board');

const playerScoreDisplay = document.createElement('div');
const compScoreDisplay = document.createElement('div');
const gameCommentary = document.createElement('div');

weapons.addEventListener('click', (event) => {
    const playerSelection = event.target.textContent;
    const compSelection = getComputerChoice();

    playRound(playerSelection, compSelection);

    playerScoreDisplay.textContent = playerScore;
    scoreBoard.appendChild(playerScoreDisplay);

    compScoreDisplay.textContent = compScore;
    scoreBoard.appendChild(compScoreDisplay);

    gameCommentary.textContent = output;
    scoreBoard.appendChild(gameCommentary);

    checkWinner();
});



