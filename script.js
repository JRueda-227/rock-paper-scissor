let humanScore;
let compScore;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const index = Math.floor(Math.random() * choices.length);
    const compChoice = choices[index];
    return compChoice;
}

function getHumanChoice() {
    const humanChoice = prompt('Choose your weapon.')
    return humanChoice;
}

function playRound(humanChoice, compChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === 'rock' && compChoice === 'paper') {
        console.log('You lose! Paper beats Rock');
        compScore++;
    }
    else if (humanChoice === 'rock' && compChoice === 'scissor') {
        console.log('You win! Rock beats Paper');
        humanScore++;
    }
    else if (humanChoice === 'paper' && compChoice === 'scissor') {
        console.log('You lose! Scissor beats Paper');
        compScore++;
    }
    else if (humanChoice === 'paper' && compChoice === 'rock') {
        console.log('You win! Paper beats Rock');
        humanScore++;
    }
    else if (humanChoice === 'scissor' && compChoice === 'rock') {
        console.log('You lose! Rock beats Scissor');
        compScore++;
    }
    else if (humanChoice === 'scissor' && compChoice === 'paper') {
        console.log('You win! Scissor beats Paper');
        humanScore++;
    }
    else {
        console.log('Tie!')
    }
}

function playGame() {
    humanScore = 0;
    compScore = 0;

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const compSelection = getComputerChoice();

        playRound(humanSelection, compSelection);
    }

    if (humanScore > compScore) {
        console.log('You win the game');
    }
    else if (humanScore < compScore) {
        console.log('You lose the game');
    }
    else {
        console.log('Game tied!')
    }
}

