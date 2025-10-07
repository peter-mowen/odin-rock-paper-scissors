function getComputerChoice() {
  computerChoice = Math.floor(Math.random()*3);

  if (0 === computerChoice) {
    return "rock";
  } else if (1 === computerChoice) {
    return "paper";
  } else if (2 === computerChoice) {
    return "scissors";
  } else {
    return null;
  }
}

function getHumanChoice() {
  let humanChoice;
  const message = "Enter one of the following: rock, paper, scissors";
  humanChoice = prompt(message);
  return humanChoice.toLowerCase();
}

console.log(`Rock Paper Scissors`);

console.log(`computerChoice = ${getComputerChoice()}`);
console.log(`computerChoice = ${getComputerChoice()}`);
console.log(`computerChoice = ${getComputerChoice()}`);
console.log(`computerChoice = ${getComputerChoice()}`);
console.log(`computerChoice = ${getComputerChoice()}`);
console.log(`computerChoice = ${getComputerChoice()}`);
console.log(`computerChoice = ${getComputerChoice()}`);
console.log(`computerChoice = ${getComputerChoice()}`);
console.log(`computerChoice = ${getComputerChoice()}`);
console.log(`computerChoice = ${getComputerChoice()}`);

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

console.log(`humanScore = ${humanScore}, computerScore = ${computerScore}`);
