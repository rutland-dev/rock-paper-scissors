// Create an array with the choices rock, paper, and scissors.

const choices = ["rock-button", "paper-button", "scissors-button"];

let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

// Make getComputerChoice function to randomly return "rock", "paper", or "scissors".

function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
};

// Write a function that gets the player's choice. Make sure it will only accept an appropriate answer.

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const currentImage = document.querySelector('#result-container img');
        currentImage.remove();
        
        round(button.id);
    });
});


// Write a function that plays a single round of the game. It should take two parameters - playerSelection and computerSelection - and then
// return a string that declares the winner.

function round(choice) {
    numberOfRounds = numberOfRounds + 1;
    let playerSelection = choice;
    let computerSelection = getComputerChoice();
    console.log(`The computer chose ${computerSelection}.`)
    if (playerSelection === computerSelection) {
        const resultContainer = document.querySelector('#result-container');
        const resultImage = document.createElement('img');

        resultContainer.appendChild(resultImage);

        numberOfRounds = numberOfRounds - 1;
        console.log("Draw!");
    } else if (playerSelection === "rock-button") {
        if (computerSelection === "paper-button") {
            const resultContainer = document.querySelector('#result-container');
            const resultImage = document.createElement('img');
            
            resultImage.src = 'images/paper-covers-rock.png';
            resultContainer.appendChild(resultImage);
            
            computerScore = computerScore + 1;
            
            let computerScoreText = document.querySelector('#computer-score-number');
            computerScoreText.textContent = computerScore.toString();
            
            console.log("Paper covers rock. Computer wins!");
        } else {
            const resultContainer = document.querySelector('#result-container');
            const resultImage = document.createElement('img');
            
            resultImage.src = 'images/rock-breaks-scissors.png';
            resultContainer.appendChild(resultImage);

            playerScore = playerScore + 1;
            let playerScoreText = document.querySelector('#player-score-number');
            playerScoreText.textContent = playerScore.toString();

            console.log("Rock breaks scissors. You win!");
        }
    } else if (playerSelection === "paper-button") {
        if (computerSelection === "rock-button") {
            const resultContainer = document.querySelector('#result-container');
            const resultImage = document.createElement('img');
            
            resultImage.src = 'images/paper-covers-rock.png';
            resultContainer.appendChild(resultImage);

            playerScore = playerScore + 1;
            let playerScoreText = document.querySelector('#player-score-number');
            playerScoreText.textContent = playerScore.toString();

            console.log("Paper covers rock. You win!");
        } else {
            const resultContainer = document.querySelector('#result-container');
            const resultImage = document.createElement('img');
            
            resultImage.src = 'images/scissors-cut-paper.png';
            resultContainer.appendChild(resultImage);

            computerScore = computerScore + 1;
            let computerScoreText = document.querySelector('#computer-score-number');
            computerScoreText.textContent = computerScore.toString();

            console.log("Scissors cuts paper. Computer wins!");
        }
    } else {
        if (computerSelection === "rock-button") {
            const resultContainer = document.querySelector('#result-container');
            const resultImage = document.createElement('img');
            
            resultImage.src = 'images/rock-breaks-scissors.png';
            resultContainer.appendChild(resultImage);

            computerScore = computerScore + 1;
            computerScore = computerScore + 1;
            let computerScoreText = document.querySelector('#computer-score-number');
            computerScoreText.textContent = computerScore.toString();
            
            console.log("Rock breaks scissors. Computer wins!")
        } else {
            const resultContainer = document.querySelector('#result-container');
            const resultImage = document.createElement('img');
            
            resultImage.src = 'images/scissors-cut-paper.png';
            resultContainer.appendChild(resultImage);

            playerScore = playerScore + 1;
            playerScore = playerScore + 1;
            let playerScoreText = document.querySelector('#player-score-number');
            playerScoreText.textContent = playerScore.toString();

            console.log("Scissors cut paper. You win!")
        }
    }
};

// Write a function called game(). Put the previous function in this function to make it loop 5 times ( a five round game ), keep score,
// and declare a winner at the end.

// **** Replace game() function with this to restore 5 round game ****
// function game() {
//     while (numberOfRounds < 5) {
//         round();
//     }
//     console.log(`Player Score is: ${playerScore}`);
//     console.log(`Computer Score is: ${computerScore}`);
//     if (playerScore === computerScore) {
//         console.log("Draw! No winner.");
//     } else if (playerScore > computerScore) {
//         console.log("You win!");
//     } else {
//         console.log("Computer wins!");
//     }
// }
