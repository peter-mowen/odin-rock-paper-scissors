const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random()*3);

  if (0 === computerChoice) {
    return ROCK;
  } else if (1 === computerChoice) {
    return PAPER;
  } else if (2 === computerChoice) {
    return SCISSORS;
  } else {
    return null;
  }
}

const PAPER_BEATS_ROCK = `${PAPER} covers ${ROCK}`;
const ROCK_BEATS_SCISSORS = `${ROCK} smashes ${SCISSORS}`;
const SCISSORS_BEATS_PAPER = `${SCISSORS} cut ${PAPER}`;

function buildRoundMessage(bWinOrLoose, phrase)
{
  let winOrLose = bWinOrLoose ? "win" : "lose";
  return `${phrase}! You ${winOrLose} this round!`;
}

function playGame() {
  let roundMessage = "";

  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const roundMessage = updateScoreboardAndGetRoundMessage(humanChoice, computerChoice);

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

function updateScores(humanScore, computerScore) {
  document.querySelector('#human-score').textContent = humanScore;
  document.querySelector('#computer-score').textContent = computerScore;
}

function updateScoreboardAndGetRoundMessage(humanChoice, computerChoice) {
  let roundMessage = "";
  let humanScore = Number(document.querySelector('#human-score').textContent);
  let computerScore = Number(document.querySelector('#computer-score').textContent);

  if (humanChoice === computerChoice) {
    roundMessage = `It's a tie!`;
  } else if (ROCK === humanChoice) {
    if (PAPER === computerChoice) {
      roundMessage = buildRoundMessage(false, PAPER_BEATS_ROCK);
      computerScore++;
    }
    else if (SCISSORS === computerChoice) {
      roundMessage = buildRoundMessage(true, ROCK_BEATS_SCISSORS);
      humanScore++;
    }
  } else if (PAPER === humanChoice) {
    if (SCISSORS === computerChoice) {
      roundMessage = buildRoundMessage(false, SCISSORS_BEATS_PAPER);
      computerScore++;
    } else if (ROCK === computerChoice) {
      roundMessage = buildRoundMessage(true, PAPER_BEATS_ROCK);
      humanScore++;
    }
  } else if (SCISSORS === humanChoice) {
    if (ROCK === computerChoice) {
      roundMessage = buildRoundMessage(false, ROCK_BEATS_SCISSORS);
      computerScore++;
    } else if (PAPER === computerChoice) {
      roundMessage = buildRoundMessage(true, SCISSORS_BEATS_PAPER);
      humanScore++;
    }
  }

  updateScores(humanScore, computerScore);

  return roundMessage;
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const roundMessage = updateScoreboardAndGetRoundMessage(humanChoice, computerChoice);

  const historyText =
`<p>---</p>
<p>Rock...Paper...Scissors...Shoot!</p>
<p></p>
<p>You threw ${humanChoice} and the computer threw ${computerChoice}</p>
<p>${roundMessage}</p>`;

  let gameHistory = document.querySelector('#game-history-body');

  gameHistory.innerHTML = historyText + gameHistory.innerHTML;
}

let buttonPanel = document.querySelector('#button-panel');

buttonPanel.addEventListener('click', (event) => {
  let target = event.target;

  switch (target.id) {
    case 'rock-button':
      playRound(ROCK);
      break;
    case 'paper-button':
      playRound(PAPER);
      break;
    case 'scissors-button':
      playRound(SCISSORS);
      break;
  }
});

// playGame();
