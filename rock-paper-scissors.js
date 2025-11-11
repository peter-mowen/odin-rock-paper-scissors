const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const PAPER_BEATS_ROCK = `${PAPER} covers ${ROCK}`;
const ROCK_BEATS_SCISSORS = `${ROCK} smashes ${SCISSORS}`;
const SCISSORS_BEATS_PAPER = `${SCISSORS} cut ${PAPER}`;

const WINNING_SCORE = 5;

let roundNumber = 0;  // the number of the current round of play

let humanScoreElement = document.querySelector('#human-score');
let computerScoreElement = document.querySelector('#computer-score');

let humanScore = Number(humanScoreElement.textContent);
let computerScore = Number(computerScoreElement.textContent);

let buttonPanel = document.querySelector('#button-panel');

buttonPanel.addEventListener('click', (event) => {
  roundNumber++;
  let target = event.target;

  switch (target.id) {
    case 'rock-button':
      playRound(ROCK, getComputerChoice());
      break;
    case 'paper-button':
      playRound(PAPER, getComputerChoice());
      break;
    case 'scissors-button':
      playRound(SCISSORS, getComputerChoice());
      break;
    case 'play-again-button':
      window.location.reload();
      break;
  }
});

function playRound(humanChoice, computerChoice) {
  const roundMessage = updateScoreboardAndGetRoundMessage(humanChoice, computerChoice);

  let roundTitle = document.createElement('p');
  roundTitle.textContent = `--- Round ${roundNumber}`;

  let roundPreamble = document.createElement('p');
  roundPreamble.textContent = 'Rock...Paper...Scissors...Shoot!';

  let roundBlankLine = document.createElement('p');

  let roundResults = document.createElement('p');
  roundResults.textContent = `You threw ${humanChoice} and the computer threw ${computerChoice}`;

  let roundPostScript = document.createElement('p');
  roundPostScript.textContent = roundMessage;

  let roundDiv = document.createElement('div');
  roundDiv.appendChild(roundTitle);
  roundDiv.appendChild(roundPreamble);
  roundDiv.appendChild(roundBlankLine);
  roundDiv.appendChild(roundResults);
  roundDiv.appendChild(roundPostScript);

  let gameHistory = document.querySelector('#game-history-body');

  gameHistory.insertBefore(roundDiv, gameHistory.firstChild);

  if ((humanScore === WINNING_SCORE) || (computerScore == WINNING_SCORE)) {
    let finalMessageDiv = getFinalMessageDiv();

    gameHistory.insertBefore(finalMessageDiv, gameHistory.firstChild);

    let rockButton = document.querySelector('#rock-button');
    let paperButton = document.querySelector('#paper-button');
    let scissorsButton = document.querySelector('#scissors-button');
    let playAgainButton = document.querySelector('#play-again-button');

    rockButton.classList.add('invisible');
    paperButton.classList.add('invisible');
    scissorsButton.classList.add('invisible');
    playAgainButton.classList.remove('invisible');
  }
}

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

function updateScoreboardAndGetRoundMessage(humanChoice, computerChoice) {
  let roundMessage = "";

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

  updateScoreboard();

  return roundMessage;
}

function buildRoundMessage(win, phrase)
{
  let winOrLose = win ? "win" : "lose";
  return `${phrase}! You ${winOrLose} this round!`;
}

function updateScoreboard() {
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
}

function getFinalMessageDiv() {
  let finalMessage = document.createElement('p');
  finalMessage.textContent = `Final score - You: ${humanScore}, Computer: ${computerScore}`;

  let finalMessageBlankLine = document.createElement('p');

  let finalMessageResult = document.createElement('p');
  if (humanScore === 5) {
    finalMessageResult.textContent = "Congratulations, you win!";
  } else {
    finalMessageResult.textContent = "Better luck next time, you lose!";
  }

  let finalMessageDiv = document.createElement('div');
  finalMessageDiv.appendChild(finalMessage);
  finalMessageDiv.appendChild(finalMessageBlankLine);
  finalMessageDiv.appendChild(finalMessageResult);

  return finalMessageDiv;
}
