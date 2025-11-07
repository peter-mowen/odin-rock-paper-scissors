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

function buildRoundMessage(bWinOrLoose, phrase)
{
  let winOrLose = bWinOrLoose ? "win" : "lose";
  return `${phrase}! You ${winOrLose} this round!`;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundMessage = "";

  function scoreRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      roundMessage = `It's a tie!`;
    } else if ("rock" === humanChoice) {
      if ("paper" === computerChoice) {
        roundMessage = buildRoundMessage(false, paperBeatsRock);
        computerScore++;
      }
      else if ("scissors" === computerChoice) {
        roundMessage = buildRoundMessage(true, rockBeatsScissors);
        humanScore++;
      }
    } else if ("paper" === humanChoice) {
      if ("scissors" === computerChoice) {
        roundMessage = buildRoundMessage(false, scissorBeatsPaper);
        computerScore++;
      } else if ("rock" === computerChoice) {
        roundMessage = buildRoundMessage(true, paperBeatsRock);
        humanScore++;
      }
    } else if ("scissors" === humanChoice) {
      if ("rock" === computerChoice) {
        roundMessage = buildRoundMessage(false, rockBeatsScissors);
        computerScore++;
      } else if ("paper" === computerChoice) {
        roundMessage = buildRoundMessage(true, scissorBeatsPaper);
        humanScore++;
      }
    }
    return roundMessage;
  }

  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const roundMessage = scoreRound(humanChoice, computerChoice);

    alert(
`Rock...Paper...Scissors...Shoot!

You threw ${humanChoice} and the computer threw ${computerChoice}
${roundMessage}

Current score - You: ${humanScore}, Computer: ${computerScore}`
    );
  }

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  
  let finalMessage = "";

  if (humanScore > computerScore) {
    finalMessage = "Congratulations, you win!";
  } else if (humanScore === computerScore) {
    finalMessage = "It's a tie!";
  } else {
    finalMessage = "Better luck next time, you lose!";
  }

  alert(
`Final score - You : ${humanScore}, Computer: ${computerScore}
${finalMessage}`
  );

}

// playGame();
