const choices = ['✊', '🖐', '✌'];
const buttons = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');
const playAgainButton = document.getElementById('play-again');

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a draw!';
    }
    if (
        (userChoice === '✊' && computerChoice === '✌') ||
        (userChoice === '🖐' && computerChoice === '✊') ||
        (userChoice === '✌' && computerChoice === '🖐')
    ) {
        return 'You win!';
    }
    return 'You lose!';
}

function handleChoice(event) {
    const userChoice = event.target.id;
    const computerChoice = getComputerChoice();

    userChoiceDisplay.textContent = `You chose: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
    winnerDisplay.textContent = determineWinner(userChoice, computerChoice);
}

function resetGame() {
    userChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
    winnerDisplay.textContent = '';
}

buttons.forEach(button => button.addEventListener('click', handleChoice));
playAgainButton.addEventListener('click', resetGame);
