function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

const tie = "It's a tie, play again!";
const win = "You won, Congratulations!";
const lost = "You lost :(";

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const player = document.querySelector(".playerscore");
const computer = document.querySelector(".computerscore");

let div = document.querySelector("div");

function playRound(playerSelection, computerSelection) {
    
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    div.textContent = tie;
                    break;
                case "paper":
                    div.textContent = lost;
                    computerScore++;
                    computer.textContent = computerScore;
                    break;
                case "scissors":
                    div.textContent = win;
                    playerScore++;
                    player.textContent = playerScore;
                    break;
            }
            break;

        case "paper":
            switch (computerSelection) {
                case "rock":
                    div.textContent = win;
                    playerScore++;
                    player.textContent = playerScore;
                    break;
                case "paper":
                    div.textContent = tie;
                    break;
                case "scissors":
                    div.textContent = lost;
                    computerScore++;
                    computer.textContent = computerScore;
                    break;
            }
            break;

        case "scissors":
            switch (computerSelection) {
                case "rock":
                    div.textContent = lost;
                    computerScore++;
                    computer.textContent = computerScore;
                    break;
                case "paper":
                    div.textContent = win;
                    playerScore++;
                    player.textContent = playerScore;
                    break;
                case "scissors":
                    div.textContent = tie;
                    break;
            }
            break;

        default:
            div.textContent = "Invalid input. Please type: rock, paper, or scissors";
            break;
    }


}



rock.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playRound("rock", computerSelection)
} ) 
paper.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playRound("paper", computerSelection)
} ) 
scissors.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playRound("scissors", computerSelection)
} ) 

