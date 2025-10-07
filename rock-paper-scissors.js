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

  if (humanChoice) {
    return humanChoice.toLowerCase();
  } else {
    return "";
  }
}

const paperBeatsRock = "paper covers rock";
const rockBeatsScissors = "rock smashes scissors";
const scissorBeatsPaper = "scissors cut paper";

function logRoundResults(bWinOrLoose, phrase)
{
  let winOrLose = bWinOrLoose ? "win" : "lose";
  console.log(`${phrase}! You ${winOrLose} this round!`)
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function scoreRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a tie!`);
    } else if ("rock" === humanChoice) {
      if ("paper" === computerChoice) {
        logRoundResults(false, paperBeatsRock);
        computerScore++;
      }
      else if ("scissors" === computerChoice) {
        logRoundResults(true, rockBeatsScissors);
        humanScore++;
      }
    } else if ("paper" === humanChoice) {
      if ("scissors" === computerChoice) {
        logRoundResults(false, scissorBeatsPaper);
        computerScore++;
      } else if ("rock" === computerChoice) {
        logRoundResults(true, paperBeatsRock);
        humanScore++;
      }
    } else if ("scissors" === humanChoice) {
      if ("rock" === computerChoice) {
        logRoundResults(false, rockBeatsScissors);
        computerScore++;
      } else if ("paper" === computerChoice) {
        logRoundResults(true, scissorBeatsPaper);
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
    console.log("Congratulations, you win!");
  } else if (humanScore === computerScore) {
    console.log("It's a tie!");
  } else {
    console.log("Better luck next time, you lose!");
  }
}

playGame();
