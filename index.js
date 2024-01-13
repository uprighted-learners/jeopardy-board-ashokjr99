function myFunction(w) {
  alert(`Turn: ${w}`);
}

let playerNum = "Player 1";

myFunction(playerNum);

let clicky = document.getElementsByClassName("click");

clicky.addEventListener("click", () => {
  console.log("You have clicked me");
});
