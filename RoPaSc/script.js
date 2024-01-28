function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

let tie = "It's a tie, play again!";
let win = "You won, Congratulations!";
let lost = "You lost :(";

let playerScore = 0;
let computerScore = 0;


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

function game() {
    
    /// if someone gets a score of 3 break loop
    while ( playerScore < 3 || computerScore < 3 ) {
        let playerSelection = prompt("Type: rock, paper, or scissors");
        let computerSelection = getComputerChoice();
        
        playRound(playerSelection, computerSelection);
    }
}

game()


