//function computerPlay(computerChoices) {
//    let ComputerResult = computerChoices[Math.floor(Math.random()*computerChoices.length)];
//    console.log(ComputerResult);
//}

//computerChoices = ["rock", "paper", "scissors"];

//Working code below:
let button = document.querySelector('#btn');
const computerOptions = ["rock", "paper", "scissors"];
const computerAnswer = computerOptions[Math.floor(Math.random() * 3)];
//const computerAnswer = computerOptions[Math.floor(Math.random() * 3)];

button.addEventListener("click", function(){ prompt("Make your choice, rock paper or scissors!"); });

//function computerPlay() {
//    computerOptions = ["rock", "paper", "scissors"];
//    const computerAnswer = computerOptions[Math.floor(Math.random() * 3)];
//    console.log(computerAnswer);
//}




console.log(computerAnswer);

//Trying new cpu function


let playerPlay = (window.prompt("What is your choice, Rock, Paper, or Scissors?",""));

let playerPlayLowercase = playerPlay.toLowerCase();

console.log(playerPlayLowercase);
//console.log(typeof playerPlayLowercase);
//console.log(typeof computerAnswer);


if (computerAnswer === playerPlayLowercase) {
    alert("You tied!");
}

else if (computerAnswer === "rock") {
    if (playerPlayLowercase === "paper") {
        alert("You win, paper beats rock!")
    } else {
        alert ("You lose, rock beats scissors!")
    }
}

else if (computerAnswer === "paper") {
    if (playerPlayLowercase === "scissors") {
        alert("You win, scissors beats paper!")
    } else {
        alert("You lose, paper beats rock!")
    }
}

else {
    if (playerPlayLowercase === "rock") {
        alert("You win, rock beats scissors!")
    } else {
        alert("You lose, scissors beats paper!")
    }
}





