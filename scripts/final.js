// finalQuestion = {
//   category: "Final",
//   question: "What name was the bootcamp formerly known as?",
//   answer: "Burlington Code Academy",
// };

let diag1 = document.getElementById("diag1");
let diag2 = document.getElementById("diag2");
let bet = document.getElementById("pcont1");
let userInput1 = document.getElementById("inp1");

//------------------------------------ local storage to make sure reloads do not erase data
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");

let score1Get = window.localStorage.getItem("player1");
let score2Get = window.localStorage.getItem("player2");

if (!isNaN(parseInt(score1Get))) {
  score1.textContent = score1Get;
}

if (!isNaN(parseInt(score2Get))) {
  score2.textContent = score2Get;
}
//--------------------------------

// let currentTurn = "Player 1";
// // Player Turn change function
// function changeTurn() {
//   if (currentTurn === "Player 1") {
//     currentTurn = "Player 2";
//   } else {
//     currentTurn = "Player 1";
//   }
//   alert(`It is ${currentTurn} turn.`);
// }

// Beginning alert, showing it is player 1's turn
// alert(`It is ${currentTurn} turn.`);

// show 1st modal instantly for player 1 bet
diag1.showModal();

// click function for bet
bet.addEventListener("click", () => {
  if (userInput1.value === Number) {
    bet1 = userInput1;
    console.log(userInput1);
    diag1.close();
  }
});

// show 1st modal instantly for player 2 bet
// diag2.showModal();

// show 1st modal instantly for player 1 score
// diag3.showModal();

// show 1st modal instantly for player 1 score
// diag4.showModal();
