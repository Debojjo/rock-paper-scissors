let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  draws: 0,
};

updateScore();

function computerMove() {
  const randomNum = Math.random();
  let compMove = "";
  if (randomNum > 0 && randomNum < 1 / 3) {
    compMove = "ROCK";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    compMove = "PAPER";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    compMove = "SCISSORS";
  }
  return compMove;
}

function result(playerMove) {
  const compMove = computerMove();
  let result = "";

  if (playerMove === "SCISSORS") {
    if (compMove === "ROCK") result = "Computer Wins!";
    else if (compMove === "PAPER") result = "You Win!";
    else result = "Draw";
  }

  if (playerMove === "PAPER") {
    if (compMove === "ROCK") result = "You Win!";
    else if (compMove === "PAPER") result = "Draw";
    else result = "Computer Wins!";
  }

  if (playerMove === "ROCK") {
    if (compMove === "ROCK") result = "Draw";
    else if (compMove === "PAPER") result = "Computer Wins!";
    else result = "You Win!";
  }

  if (result === "You Win!") score.wins += 1;
  else if (result === "Computer Wins!") score.losses += 1;
  else if (result === "Draw") score.draws += 1;

  localStorage.setItem("score", JSON.stringify(score));

  updateScore();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-move").innerHTML = `You picked-${getIcon(
    playerMove
  )} Computer picked-${getIcon(compMove)}`;
}

function getIcon(move) {
  if (move === "ROCK") return "✊";
  if (move === "PAPER") return "✋";
  if (move === "SCISSORS")
    return '<span style="display:inline-block; transform: rotate(-90deg);">✌️</span>';
}

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;
}

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} , Losses: ${score.losses} , Draws: ${score.draws}`;
}
