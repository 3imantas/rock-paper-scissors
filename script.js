
function getComputerChoice()
{
    let options = ["rock", "paper", "scissors"];
    let rand = options[Math.floor(Math.random() * 3)];
    return rand;
}

function playRound(player, computer, pcount, ncount){
    let result;
    if(player == computer)
    {
        result = "It's a tie! " + player + " ties with " + computer;
    }
    else if((player == "rock" && computer == "scissors") ||
      (player == "scissors" && computer == "paper") ||
      (player == "paper" && computer == "rock"))
    {
        result = "You won! " + player + " beats " + computer;
        pcount += 1;
    }
    else
    {
        result = "You lost! " + player + " is beaten by " + computer;
        ncount +=1
    }

    return [result, pcount, ncount];
}

let playerSelection;
let pcount=0;
let ncount=0;


const buttons = document.querySelectorAll('.options img');
const player = document.querySelector('.player img');
const npc = document.querySelector('.npc img');
const result_msg = document.querySelector('.result p');
const playerCount = document.querySelector('.player p')
const npcCount = document.querySelector('.npc p')

//console.log(player.src);

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        playerSelection = button.className;
        computerSelection = getComputerChoice();
        player.src = button.src;
        let npc_btn = document.querySelector('.' + computerSelection);
        npc.src = npc_btn.src;
        const [newResult, new_pcount, new_ncount] = playRound(playerSelection, computerSelection, pcount, ncount);
        result_msg.textContent = newResult;
        playerCount.textContent = 'Player: ' + new_pcount;
        npcCount.textContent = 'Computer: ' + new_ncount;
        pcount = new_pcount;
        ncount = new_ncount;
        //console.log(new_pcount + " " + new_ncount);
        setTimeout(function(){
            if(pcount == 5){
                playerCount.textContent = 'Player: ' + new_pcount;
                npcCount.textContent = 'Computer: ' + new_ncount;
                alert('You won!');
                pcount = 0;
                ncount = 0;
                playerCount.textContent = 'Player: ' + 0;
                npcCount.textContent = 'Computer: ' + 0;
            }
            if(ncount == 5){
                playerCount.textContent = 'Player: ' + new_pcount;
                npcCount.textContent = 'Computer: ' + new_ncount;
                alert('You lost!');
                ncount = 0;
                pcount = 0;
                playerCount.textContent = 'Player: ' + 0;
                npcCount.textContent = 'Computer: ' + 0;
            }
        
        }, 0);

    });

});
