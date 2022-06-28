let computerPlay = "";
let humanPlay = "";
let computerScore = 0;
let playerScore = 0;

//Working user submission, coverts to lowercase
function humanPrompt () {
   humanPlay = prompt("What is your choice, Rock, Paper, or Scissors?").toLowerCase(); 
}

 //NEW FUNCTION FOR COMPUTER CHOICE:

 //Working random number 0, 1, or 2
function computerMathRandom(max){
    return Math.floor(Math.random()* max);    
}
let computerRandomNumber = (computerMathRandom(3));


//Working else if that generates correct rock paper or scissors

function computerDecision (){
    if (computerRandomNumber == 0) {
        computerPlay = "rock";
    } else if (computerRandomNumber == 1) {
        computerPlay = "paper";
    } else {
        computerPlay = "scissors";
    } 
}



 function compareResults (humanPlay, computerPlay) {

    if (humanPlay === "rock") {
         if (computerPlay === "rock") {  
            alert("It's a tie, rock vs rock!");           
        } else if (computerPlay === "scissors") {
            alert ("You win, rock beats scissors!");
            playerScore++; 
        } else {
            alert ("you lose, paper beats rock!");
            computerScore++;
        }
    }

    else if (humanPlay === "paper") {
        if (computerPlay === "paper") {
            alert("It's a tie, paper vs paper!");
        } else if (computerPlay === "rock"){
            alert("You win, paper beats rock!");
            playerScore++;
        } else {
            alert ("You lose, scissors beats paper!")
            computerScore++;
        }
    }

    else {
        if (computerPlay === "scissors") {
            alert("It's a tie, scissors vs scissors!");
        } else if (computerPlay === "paper") {
            alert("You win, scissors beats paper!");
            playerScore++;
        } else {
            alert("You lose, rock beats scissors!")
            computerScore++;
        }
    } 
 }

 function gameResults (playerScore, computerScore) {
    if (playerScore === computerScore) {
        alert(`It's a tie, your score was ${playerScore} vs computer score of ${computerScore}`);
    } else if (playerScore > computerScore) {
        alert(`You won! Your score was ${playerScore} vs computer score of ${computerScore}`);
    } else {
        alert(`You lost! Your score was ${playerScore} vs computer score of ${computerScore}`);
    }
 }
 
 //console.log(humanPlay);
 //console.log(computerRandomNumber);
 //console.log(computerPlay);

function game() {
    for(let i = 0; i < 5; i++) {
        humanPrompt();
        
        computerMathRandom();
        computerDecision();
        compareResults(humanPlay, computerPlay);       
        //console.log(humanPlay);
        //console.log(computerRandomNumber);
        //console.log(computerPlay); 
        //console.log(playerScore);
        //console.log(computerScore);  
        computerRandomNumber = (computerMathRandom(3)); 
   }
}

game();
gameResults(playerScore, computerScore);


