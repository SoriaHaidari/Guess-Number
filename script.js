"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;
document.querySelector(".score").textContent = score;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    displayMessage("No Number!");
  } else if (guessNumber === secretNumber) {
    displayMessage("Correct Number! 🏆");
    // document.querySelector(".number").textContent = secretNumber;
    // document.querySelector(".highscore").textContent = highscore;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30 rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNumber > secretNumber ? "📈 High" : "📉 Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lose the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
const selector = document.querySelector(".score");
console.log(selector);

// Homework 13

// When click Again botton:

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
