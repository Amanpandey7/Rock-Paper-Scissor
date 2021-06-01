//function which determines computer's play
var playerScore=0, computerScore=0;
function computerPlay(){
    let i = Math.floor(Math.random()*3);
    const arr =["rock","paper","scissor"];
    return arr[i];
}

function round(playerSelection,computerSelection){
  //  playerSelection= playerSelection.toLowerCase();
  //  computerSelection= computerSelection.toLowerCase();
    if(playerSelection === computerSelection){
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

function imageUrl(par1){
switch(par1){
    case "paper":
        return "images/paper.png";
    case "rock":
        return "images/rock.png";
    case "scissor":
        return "images/scissor.png";
}

}

//game();
function choosePlay(par1,computer){
    
    if(round(par1,computer)>0){
        playerScore++;
    }
    else if(round(par1,computer)<0){
        computerScore++;
    }
    console.log(playerScore);

    if(playerScore>=5 || computerScore >= 5){
        const box = document.getElementById("bottom-content");
      //  var par2 = box.firstChild;
      //  par2.innerHTML="";
        const result = document.createElement("div");
        result.classList.add("result");
        if(playerScore>=5)
        result.textContent = "YOU WON";
        else
        result.textContent = "YOU LOST";
        
        box.innerHTML = "";
        box.appendChild(result);
     //   par2.innerHTML = "";
      //  box.innerHTML ="";
        
    }

}


function gameStart(e){
   // var player ="",computer;

    //setting the scoreboard
    document.body.classList.add("background");
    const scoreBox = document.getElementById("top");
    const player1 = document.createElement("div");
    player1.textContent= "Player :";
    player1.classList.add("player1")
    const computer1 = document.createElement("div");
    computer1.textContent="Computer :";
    computer1.classList.add("computer1");
    scoreBox.appendChild(player1);
    scoreBox.appendChild(computer1);
    

    //setting the playing field images here
    const currentPlay = document.getElementById("middle-content");
    currentPlay.innerHTML="";
    currentPlay.style.flexDirection = "row";
    currentPlay.style.justifyContent = "space-around";
    
    const playerImage = document.createElement("img");
    //playerImage.classList.add();
    const computerImage = document.createElement("img");
    currentPlay.appendChild(playerImage);
    currentPlay.appendChild(computerImage);
    computerImage.style.float = "right";
    playerImage.style.float = "left";

    //this div will contain your choice
    const yourPlay = document.getElementById("bottom-content");

    //rock image defined
    const rockImage = document.createElement("img");
    rockImage.src = "images/rock.png";
    rockImage.classList.add("imageButton");
    yourPlay.appendChild(rockImage);
    rockImage.addEventListener("click",() => {
        computer = computerPlay();
        
        playerImage.classList.add("vsImage");
        computerImage.classList.add("vsImage");

        computerImage.src = imageUrl(computer);
        playerImage.src = imageUrl("rock");
    
        choosePlay("rock",computer);
        player1.textContent = `Player : ${playerScore}`;
        computer1.textContent = `Computer : ${computerScore}`;

       
    });

    //paper image defined
    const paperImage = document.createElement("img");
    paperImage.src = "images/paper.png";
    paperImage.style.paddingLeft = "120px";
    paperImage.classList.add("imageButton");
    yourPlay.appendChild(paperImage);
    paperImage.addEventListener("click",() => {
        computer = computerPlay();
       
        playerImage.classList.add("vsImage");
        computerImage.classList.add("vsImage");
    
        computerImage.src = imageUrl(computer);
        playerImage.src = imageUrl("paper");

        choosePlay("paper",computer);
        player1.textContent = `Player : ${playerScore}`;
        computer1.textContent = `Computer : ${computerScore}`;

        
    });

    //scissor image defined
    const scissorImage = document.createElement("img");
    scissorImage.src = "images/scissor.png";
    scissorImage.style.paddingLeft = "120px";
    scissorImage.classList.add("imageButton");
    yourPlay.appendChild(scissorImage);
    scissorImage.addEventListener("click",() => {
        computer = computerPlay();
        
        playerImage.classList.add("vsImage");
        computerImage.classList.add("vsImage");

        computerImage.src = imageUrl(computer);
        playerImage.src = imageUrl("scissor");
    
        choosePlay("scissor",computer);
        player1.textContent = `Player : ${playerScore}`;
        computer1.textContent = `Computer : ${computerScore}`;

        
    });

    
    

    //starting the game
 //   var playerScore=0, computerScore=0;
   /**  while(playerScore<=5 && computerScore<=5){
        if(player != ""){
            computer=computerPlay();
            if(round(player,computer) === 1){
                playerScore++;
            }
            else if(round(player,computer) === -1){
                computerScore++;
            }
        }
      
    } */

    

    

//    game(box);
    //console.log(e);
}

const playButton = document.getElementById("playButton");

//console.log(playButton);
playButton.addEventListener("click",gameStart);
