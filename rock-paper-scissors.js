let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random()*3);

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie!`);
  } else if ("rock" === humanChoice) {
    if ("paper" === computerChoice) {
      console.log("You lose! paper covers rock!");
      computerScore++;
    }
    else if ("scissors" === computerChoice) {
      console.log("You win! rock smashes scissors!");
      humanScore++;
    }
  } else if ("paper" === humanChoice) {
    if ("scissors" === computerChoice) {
      console.log("You lose! scissors cut paper!");
      computerScore++;
    } else if ("rock" === computerChoice) {
      console.log("You win! paper covers rock!");
      humanScore++;
    }
  } else if ("scissors" === humanChoice) {
    if ("rock" === computerChoice) {
      console.log("You lose! rocker smashes scissors");
      computerScore++;
    } else if ("paper" === computerChoice) {
      console.log("You win! scissors cut paper!")
      humanScore++;
    }
  }
  return;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log("Rock...Paper...Scissors...Shoot!");
console.log(`You threw ${humanChoice} and the computer threw ${computerChoice}`);
playRound(humanChoice, computerChoice);
console.log(`You: ${humanScore}, Computer: ${computerScore}`);
