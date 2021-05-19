//function which determines computer's play
function computerPlay(){
    let i = Math.floor(Math.random()*3);
    const arr =["rock","paper","scissor"];
    return arr[i];
}

function round(playerSelection,computerSelection){
    playerSelection= playerSelection.toLowerCase();
    computerSelection= computerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return 0;
    }
    else if(playerSelection=="rock" && computerSelection == "paper"){
        return -1;
    }
    else if(playerSelection == "scissor" && computerSelection == "rock"){
        return -1;
    }
    else if(playerSelection == "paper" && computerSelection == "scissor"){
        return -1;
    }
    else{
        return 1;
    }
}

function game(){
    let playerScore=0;let computerScore=0;
    for(var i=0;i<5;i++){
        player=prompt("Enter your choice");
        computer=computerPlay();
        console.log(`Play is ${player} vs computer's ${computer}`);
        playerScore+=round(player,computer);
        computerScore-=round(player,computer);
    }
    console.log(`Your score is ${playerScore}`);
    if(playerScore>computerScore){
        console.log("You win");
    }
    else{
        console.log("Too bad");
    }
    
}
game();