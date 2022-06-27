let computerPlay = "";
let humanPlay = "";
let matchResult = "";


//Working user submission, coverts to lowercase
const humanPrompt = function() {
   humanPlay = prompt("What is your choice, Rock, Paper, or Scissors?").toLowerCase(); 
}

//Working random number 0, 1, or 2
function computerMathRandom(max){
    return Math.floor(Math.random()* max);
}
let computerRandomNumber = (computerMathRandom(3));

//Working else if that generates correct rock paper or scissors
if (computerRandomNumber == 0) {
    computerPlay = "rock";
} else if (computerRandomNumber == 1) {
    computerPlay = "paper";
} else {
    computerPlay = "scissors";
}


 humanPrompt();
 computerMathRandom();

 function playRound (humanPlay, computerPlay) {

    if (humanPlay === "rock") {
         if (computerPlay === "rock") {  
            alert("It's a tie, rock vs rock!")
        } else if (computerPlay === "scissors") {
            alert ("You win, rock beats scissors!")
        } else {
            alert ("you lose, paper beats rock!")
        }
    }

    else if (humanPlay === "paper") {
        if (computerPlay === "paper") {
            alert("It's a tie, paper vs paper!")
        } else if (computerPlay === "rock"){
            alert("You win, paper beats rock!")
        } else {
            alert ("You lose, scissors beats paper!")
        }
    }

    else {
        if (computerPlay === "scissors") {
            alert("It's a tie, scissors vs scissors!")
        } else if (computerPlay === "paper") {
            alert("You win, scissors beats paper!")
        } else {
            alert("You lose, rock beats scissors!")
        }
    }
 }

 playRound(humanPlay, computerPlay);

console.log(humanPlay);
console.log(computerRandomNumber);
console.log(computerPlay);



