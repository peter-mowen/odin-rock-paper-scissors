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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function scoreRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a tie!`);
    } else if ("rock" === humanChoice) {
      if ("paper" === computerChoice) {
        console.log("paper covers rock! You lose!");
        computerScore++;
      }
      else if ("scissors" === computerChoice) {
        console.log("rock smashes scissors! You win!");
        humanScore++;
      }
    } else if ("paper" === humanChoice) {
      if ("scissors" === computerChoice) {
        console.log("scissors cut paper! You lose!");
        computerScore++;
      } else if ("rock" === computerChoice) {
        console.log("paper covers rock! You win!");
        humanScore++;
      }
    } else if ("scissors" === humanChoice) {
      if ("rock" === computerChoice) {
        console.log("You lose! rocker smashes scissors");
        computerScore++;
      } else if ("paper" === computerChoice) {
        console.log("scissors cut paper! You win!")
        humanScore++;
      }
    }
    return;
  }

  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log("Rock...Paper...Scissors...Shoot!");
    console.log(`You threw ${humanChoice} and the computer threw ${computerChoice}`);
    scoreRound(humanChoice, computerChoice);
    console.log(`Current score - You: ${humanScore}, Computer: ${computerScore}`);
  }

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  
  console.log(`Final score - You : ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratualions! You win!");
  } else if (humanScore === computerScore) {
    console.log("It's a tie!");
  } else {
    console.log("Better luck next time! You lose!");
  }
}

playGame();
