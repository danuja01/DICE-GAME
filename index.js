shuffle();

function shuffle() {
  var num1 = Math.round(Math.random() * 5 + 1);
  var num2 = Math.round(Math.random() * 5 + 1);

  var dice1 = "dice" + num1 + ".png";
  var dice2 = "dice" + num2 + ".png";

  document.querySelector(".dice1").setAttribute("src", "./images/" + dice1);
  document.querySelector(".dice2").setAttribute("src", "./images/" + dice2);
}
