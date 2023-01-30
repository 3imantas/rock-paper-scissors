
function getComputerChoice()
{
    let options = ["rock", "paper", "scissors"];
    let rand = options[Math.floor(Math.random() * 3)];
    return rand;
}

function playRound(player, computer){
    let result;
    if(player == computer)
    {
        result = "It's a tie! " + player + " ties with " + computer;
    }
    else if((player == "rock" && computer == "scissors") || (player == "scissors" && computer == "paper") || (player == "paper" && computer == "rock"))
    {
        result = "You won! " + player + " beats " + computer;
    }
    else
    {
        result = "You lost! " + player + " is beaten by " + computer;
    }

    return result;
}

const playerSelection = "rock";

for(let i=0; i<10; i++)
{
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}