var randomNumber1 = Math.floor(Math.random()*6) + 1;

var diceImage1 = "images/dice" + randomNumber1 + ".png";


document.getElementById("img1").setAttribute("src", diceImage1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;


var diceImage2 = "images/dice" + randomNumber2 + ".png";

document.getElementById("img2").setAttribute("src", diceImage2);

// If player 1 wins
if(randomNumber1>randomNumber2)
{
  document.getElementsByTagName("h1")[0].innerHTML="Player 1 won. <br> Hey! that rhymes!";
}
// If player 2 wins
if(randomNumber1<randomNumber2)
{
  document.getElementsByTagName("h1")[0].innerHTML="Player 2 won";
}
// If Draw
if(randomNumber1== randomNumber2)
{
  document.getElementsByTagName("h1")[0].innerHTML="Draw";
}
