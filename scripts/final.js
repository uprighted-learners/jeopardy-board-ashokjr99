import placeholderQuestions from "./placeholder-questions.js";

const finalQuestion = placeholderQuestions.at(-1);
console.log(finalQuestion);

// grabbing p tag from 3rd and 4th modal
let finalQuestionLoader = document.getElementsByClassName("finalQuestion");
// transform finalQuestionLoader into an array so that i can run a forEach on it
finalQuestionLoader = Array.from(finalQuestionLoader);
console.log(finalQuestionLoader);
finalQuestionLoader.forEach((i) => (i.textContent = finalQuestion.question));

let modal1 = document.getElementById("diag1");
let modal2 = document.getElementById("diag2");
let betForFirstPlayer = document.getElementById("pcont1");
let betForSecondPlayer = document.getElementById("pcont2");
let userInput1 = document.getElementById("inp1");
let userInput2 = document.getElementById("inp2");

//3rd modal
let modal3 = document.getElementById("diag3");
let finalQuestionFirstPlayer = document.getElementById("pcont3");
let answerInput1 = document.getElementById("inp3");

// 4th modal
let modal4 = document.getElementById("diag4");
let finalQuestionSecondPlayer = document.getElementById("pcont4");
let answerInput2 = document.getElementById("inp4");

// Bets that are captured for each player
let playerOneBet = 0;
let playerTwoBet = 0;

// Final score for each player
let playerOneFinalScore = 0;
let playerTwoFinalScore = 0;

// Grabbing ahold of final round element so it can display the winner at the end of the game
let callWinner = document.getElementById("fq");

//------------------------------------ local storage to make sure reloads do not erase data
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");

let score1Get = window.localStorage.getItem("player1");
let score2Get = window.localStorage.getItem("player2");
// gets number from local machine

if (!isNaN(parseInt(score1Get))) {
  // makes sure score1Get is a number from the localstorage in our machine
  score1.textContent = score1Get;
  // updates html so that it displays current score2 to user
}

if (!isNaN(parseInt(score2Get))) {
  score2.textContent = score2Get;
}

//? show 1st modal instantly for player 1 bet
modal1.showModal();

// click function for bet
betForFirstPlayer.addEventListener("click", () => {
  try {
    const numberInputForPlayer1 = validateNumberInput(userInput1.value);
    // console.log(numberInputForPlayer1, parseInt(score1));
    if (
      numberInputForPlayer1 > 0 &&
      numberInputForPlayer1 < parseInt(score1.textContent)
    ) {
      playerOneBet = numberInputForPlayer1;
      console.log(playerOneBet, "hehehehe");
      modal1.close();

      //? show 2nd modal instantly for player 1 bet
      modal2.showModal();
    }
  } catch (err) {
    console.log(err);
  }
});

// click function for bet for player 2
betForSecondPlayer.addEventListener("click", () => {
  try {
    const numberInputForPlayer2 = validateNumberInput(userInput2.value);
    console.log(numberInputForPlayer2);
    if (
      numberInputForPlayer2 > 0 &&
      numberInputForPlayer2 < parseInt(score2.textContent)
    ) {
      playerTwoBet = numberInputForPlayer2;
      console.log(playerTwoBet, "hehehehe");
      modal2.close();
      modal3.showModal();
    }
  } catch (err) {
    console.log(err);
  }
});

// first players answer to final question
finalQuestionFirstPlayer.addEventListener("click", () => {
  try {
    if (answerInput1) {
      modal3.close();
      modal4.showModal();
    }
  } catch (err) {
    console.log(err);
  }
});

// second players answer to final question
finalQuestionSecondPlayer.addEventListener("click", () => {
  try {
    if (answerInput2) {
      modal4.close();
      whoWon();
    }
  } catch (err) {
    console.log(err);
  }
});

// logic for what happens after all of the modals and posting who has won
const whoWon = () => {
  console.log(answerInput1.value, "answerinput1");
  console.log(answerInput2.value, "answerinput2");
  console.log(finalQuestion.answer);
  if (answerInput1.value === finalQuestion.answer) {
    playerOneFinalScore = playerOneBet + parseInt(score1.textContent);
    //parseint takes score1.textcontent and turns it into a number SO that playeronebet can add to it.
    // console.log(playerOneFinalScore);
    console.log("win");
  } else {
    console.log("wrong");
  }

  if (answerInput2.value === finalQuestion.answer) {
    playerTwoFinalScore = playerTwoBet + parseInt(score2.textContent);
    // console.log(playerTwoFinalScore);
    console.log("win");
  } else {
    console.log("wrong");
  }

  // compare and contrast player 1 and player 2 scores
  if (playerOneFinalScore > playerTwoFinalScore) {
    console.log("player one wins");
    console.log(callWinner);
    callWinner.textContent = "Player 1 Wins";
  } else if (playerOneFinalScore < playerTwoFinalScore) {
    console.log("player two wins");
    callWinner.textContent = "Player 1 Wins";
  } else {
    console.log(draw);
    callWinner.textContent = "Draw";
  }
};

// function used to make sure bet is a number only
const validateNumberInput = (input) => {
  const numberCheck = parseInt(input);
  if (isNaN(numberCheck)) {
    throw new Error("Error: Numbers Only");
  }
  return numberCheck;
};
