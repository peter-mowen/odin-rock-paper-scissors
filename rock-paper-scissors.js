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
