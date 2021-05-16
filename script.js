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
        return "Draw";
    }
    else if(playerSelection=="rock" && computerSelection == "paper"){
        return "You lose!! Rock is beaten by Paper";
    }
    else if(playerSelection == "scissor" && computerSelection == "rock"){
        return "You lose!! Scissor is beaten by Rock";
    }
    else if(playerSelection == "paper" && computerSelection == "scissor"){
        return "You lose!!! Paper is beaten by scissor";
    }
    else{
        return "You win!!! Hurray!!!";
    }
}

function game(){
    
}
