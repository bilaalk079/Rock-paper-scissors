const choices = ["Rock", "Paper", "Scissors"]
const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const gameResult = document.getElementById("gameResult")
const displayplayerScore = document.getElementById("playerScore");
const displaycomputerScore = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0

function playGame(playerChoice) {
    const computerChoices = choices[Math.floor(Math.random() * 3)]
    let result = "";

    if (playerChoice === computerChoices) {
        result = "It's a tie"
    }
    else {
        switch (playerChoice) {
            case "Rock":
                result = (computerChoices == "Scissors") ? "You Win" : "You Lose"
                break;
            case "Paper":
                result = (computerChoices == "Rock") ? "You Win" : "You Lose"
                break;
            case "Scissors":
                result = (computerChoices == "Paper") ? "You Win" : "You Lose"
                break;
        }

        switch (result) {
            case "You Win":
                playerScore++
                displayplayerScore.textContent = `PlayerScore: ${playerScore}`
                break;
            case "You Lose":
                computerScore++
                displaycomputerScore.textContent = `ComputerScore: ${computerScore}`
        }


    }
    playerResult.textContent = `Player's Choice: ${playerChoice}`;
    computerResult.textContent = `Computer's Choice: ${computerChoices}`;
    gameResult.textContent = result


}
function restart(){
    playerResult.textContent = ""
    computerResult.textContent = ""
    gameResult.textContent = ""
    displayplayerScore.textContent = `PlayerScore: 0`
    displaycomputerScore.textContent = `ComputerScore: 0`
}
