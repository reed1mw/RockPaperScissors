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
    computerPlay = "scissors"
}


 humanPrompt();
 computerMathRandom();

console.log(humanPlay);
console.log(computerRandomNumber);
console.log(computerPlay);


