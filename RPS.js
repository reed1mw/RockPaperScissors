function computerPlay(computerChoices) {
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

let computerChoices = ["rock", "paper", "scissors"];

console.log(computerPlay(computerChoices));


const playerPlay = (window.prompt("What is your choice, Rock, Paper, or Scissors?",""));

let playerPlayLowercase = playerPlay.toLowerCase();

console.log(playerPlayLowercase);

if (computerChoices > playerPlayLowercase) {
    console.log("You win!")
} else {
        console.log("You lose!")
    }
