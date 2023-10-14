// Create an array with the choices rock, paper, and scissors.

const choices = ["rock", "paper", "scissors"]

let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

// Make getComputerChoice function to randomly return "rock", "paper", or "scissors".

function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}

// Write a function that gets the player's choice. Make sure it will only accept an appropriate answer.

function getPlayerChoice() {
    let playerSelection = parseInt(prompt(`Current Score - Player: ${playerScore}. Computer: ${computerScore}.\nChoose (1) for rock, (2) for paper, or (3) for scissors: `));
    if (playerSelection === 1) {
        return "rock";
    } else if (playerSelection === 2) {
        return "paper";
    } else if (playerSelection === 3) {
        return "scissors";
    } else {
        alert("Please make a valid selection");
        return getPlayerChoice();
    }
}

// Write a function that plays a single round of the game. It should take two parameters - playerSelection and computerSelection - and then
// return a string that declares the winner.

function round() {
    numberOfRounds = numberOfRounds + 1;
    let playerSelection = getPlayerChoice();
    console.log(`You chose ${playerSelection}.`);
    let computerSelection = getComputerChoice();
    console.log(`The computer chose ${computerSelection}.`)
    if (playerSelection === computerSelection) {
        numberOfRounds = numberOfRounds - 1;
        console.log("Draw!");
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore = computerScore + 1;
            console.log("Paper covers rock. Computer wins!");
        } else {
            playerScore = playerScore + 1;
            console.log("Rock breaks scissors. You win!");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore = playerScore + 1;
            console.log("Paper covers rock. You win!");
        } else {
            computerScore = computerScore + 1;
            console.log("Scissors cuts paper. Computer wins!");
        }
    } else {
        if (computerSelection === "rock") {
            computerScore = computerScore + 1;
            console.log("Rock breaks scissors. Computer wins!")
        } else {
            playerScore = playerScore + 1;
            console.log("Scissors cut paper. You win!")
        }
    }
}

// Write a function called game(). Put the previous function in this function to make it loop 5 times ( a five round game ), keep score,
// and declare a winner at the end.

function game() {
    while (numberOfRounds < 5) {
        round();
    }
    console.log(`Player Score is: ${playerScore}`);
    console.log(`Computer Score is: ${computerScore}`);
    if (playerScore === computerScore) {
        console.log("Draw! No winner.");
    } else if (playerScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }
}

game();
