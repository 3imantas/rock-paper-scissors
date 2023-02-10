let playerSelection;
let score = [0,0];
const unknownImg = "images/unknown.png";

const buttons = document.querySelectorAll('.options img');
const player = document.querySelector('.player img');
const npc = document.querySelector('.npc img');
const result_msg1 = document.querySelector('.result .p1');
const result_msg2 = document.querySelector('.result .p2');
const playerCount = document.querySelector('.player p')
const npcCount = document.querySelector('.npc p')

function getComputerChoice()
{
    let options = ["rock", "paper", "scissors"];
    let rand = options[Math.floor(Math.random() * 3)];
    return rand;
}

function playRound(player, computer, arr){
    if(player == computer)
    {
        result_msg1.textContent = "It's a tie!"
        result_msg2.textContent = player + " ties with " + computer;
    }
    else if((player == "rock" && computer == "scissors") ||
      (player == "scissors" && computer == "paper") ||
      (player == "paper" && computer == "rock"))
    {
        result_msg1.textContent = "You won!"
        result_msg2.textContent = player + " beats " + computer;
        arr[0] += 1;
    }
    else
    {
        result_msg1.textContent = "You lost!" 
        result_msg2.textContent = player + " is beaten by " + computer;
        arr[1] +=1
    }
}

function playAgain()
{   
    const optionsDiv = document.querySelector('.options');
    const buttons = document.querySelectorAll('.options img')

    console.log(buttons);

    buttons.forEach(function(button){
        optionsDiv.removeChild(button);
    });
    
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('button-container');
    const btnMsg = document.createElement('p');
    btnMsg.textContent = 'GAME OVER!';
    const replayBtn = document.createElement('button');
    replayBtn.textContent = 'Play Again';
    btnDiv.appendChild(btnMsg);
    btnDiv.appendChild(replayBtn);
    optionsDiv.appendChild(btnDiv);

    replayBtn.addEventListener('click', function(){

        replayBtn.id = "clicked";
        setTimeout(function(){
            replayBtn.id = null;

            optionsDiv.removeChild(btnDiv);

            buttons.forEach(function(button){
                optionsDiv.appendChild(button);
            });

            playerCount.textContent = 'Player: ' + score[0];
            npcCount.textContent = 'Computer: ' + score[1];
            player.src = unknownImg;
            npc.src = unknownImg;
            result_msg1.textContent = 'Choose your weapon below';
            result_msg2.innerHTML= "<br>";
        },0.03*1000);

    });
}


function startGame()
{
    let score = [0,0];

    playerCount.textContent = 'Player: ' + score[0];
    npcCount.textContent = 'Computer: ' + score[1];

    buttons.forEach(function(button){
        button.addEventListener('click', function(){

            console.log(button);

            button.id = "clicked"
            setTimeout(function(){
                button.id = null;
            }, 0.07 * 1000);

            playerSelection = button.className;
            computerSelection = getComputerChoice();

            player.src = button.src;
            let npc_btn = document.querySelector('.' + computerSelection);
            npc.src = npc_btn.src;

            playRound(playerSelection, computerSelection, score);
            playerCount.textContent = 'Player: ' + score[0];
            npcCount.textContent = 'Computer: ' + score[1];

            if(score[0] == 5 || score[1] == 5){
                //alert('You won!');
                score = [0,0];
                playAgain();
            }
        });

    });
}

startGame();