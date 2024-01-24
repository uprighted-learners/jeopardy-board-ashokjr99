import placeholderQuestions from "./placeholder-questions.js";

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
let currentTurn = "Player 1";
// Player Turn change function
function changeTurn() {
  if (currentTurn === "Player 1") {
    currentTurn = "Player 2";
  } else {
    currentTurn = "Player 1";
  }
  alert(`It is ${currentTurn} turn.`);
}

// Beginning alert, showing it is player 1's turn
alert(`It is ${currentTurn} turn.`);

const reformatQuestions = placeholderQuestions.reduce((acc, question) => {
  // function to reformat imported questions into categories
  const category = question.category;
  if (acc[category] === undefined) {
    acc[category] = [question];
  } else {
    acc[category].push(question);
  }
  return acc;
}, {});
console.log("reformatQuestions", reformatQuestions);

let placeholderDig = null;

let duck = document.querySelectorAll(".click"); // duck is every question/box
duck.forEach((i) => {
  // i is each question/box
  i.addEventListener("click", () => {
    diag.showModal(); // shows my modal upon click

    let split = i.id.split("_"); // splits my id of question_cat

    let catChange = catSelector(split[1]); // runs my function through cat, which is my 1st index
    console.log(`Category number is ${catChange}`);
    let quesChange = questionSelector(split[0]); // runs my function through question, which is my 0 index
    console.log(`Question number is ${quesChange}`);

    let chosenCategory = Object.keys(reformatQuestions)[catChange]; // allows my to get into the object of reformatQuestions

    // console.log(reformatQuestions[chosenCategory][quesChange].question);
    placeholderDig = reformatQuestions[chosenCategory][quesChange]; //allows me to go deeper into object and items
    placeholderDig.points = quesChange * 200 + 200;
    console.log(placeholderDig);
    console.log(placeholderDig.points);
    diagquestion.textContent = placeholderDig.question; // replaces text with question
  });
});

let diag = document.getElementById("diag");
let diagquestion = document.getElementById("diagquestion");
let guess = document.getElementById("guess");
let pass = document.getElementById("pass");
let userInput = document.getElementById("user");

guess.addEventListener("click", () => {
  console.log(placeholderDig.question);
  console.log(userInput.value);

  if (userInput.value === placeholderDig.answer) {
    if (currentTurn === "Player 1") {
      score1.textContent = placeholderDig.points + parseInt(score1.textContent);
      diag.close();
      window.localStorage.setItem("player1", placeholderDig.points);
    } else {
      score2.textContent = placeholderDig.points + parseInt(score2.textContent);
      diag.close();
      window.localStorage.setItem("player2", placeholderDig.points);
    }
  } else {
    diag.close();
    changeTurn();
  }
});

pass.addEventListener("click", () => {
  // adding click feature to button if user passes
  diag.close();
  changeTurn();
});

function catSelector(splitCat) {
  // for loop to match cat id with actual integers
  console.log("split cat", splitCat);
  for (let i = 0; i < 7; i++) {
    console.log(i);
    if (splitCat === `cat${i}`) {
      return i - 1;
    }
  }
}

function questionSelector(splitQues) {
  // for loop to match question id with actual integers
  console.log("split ques", splitQues);
  for (let i = 5; i < 12; i++) {
    console.log(i);
    if (splitQues === `question${i}`) {
      return i - 1;
    }
  }
}

// const currentUrl = window.location.href;
// console.log(currentUrl);
