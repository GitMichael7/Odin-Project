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


function playRound(playerSelection, computerSelection) {
    
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    console.log(tie);
                    break;
                case "paper":
                    console.log(lost);
                    computerScore++;
                    break;
                case "scissors":
                    console.log(win);
                    playerScore++;
                    break;
            }
            break;

        case "paper":
            switch (computerSelection) {
                case "rock":
                    console.log(win);
                    playerScore++;
                    break;
                case "paper":
                    console.log(tie);
                    break;
                case "scissors":
                    console.log(lost);
                    computerScore++;
                    break;
            }
            break;

        case "scissors":
            switch (computerSelection) {
                case "rock":
                    console.log(lost);
                    computerScore++;
                    break;
                case "paper":
                    console.log(win);
                    playerScore++;
                    break;
                case "scissors":
                    console.log(tie);
                    break;
            }
            break;

        default:
            console.log("Invalid input. Please type: rock, paper, or scissors");
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

/*
While ...
if a button is clicked assign the value to playerselection

*/
