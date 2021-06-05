window.onload = randomImage;

var myImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var randomImageLeft = document.querySelector(".img1");
var randomImageRight = document.querySelector(".img2");

var randomNumber1 = Math.floor(Math.random() * myImages.length);
var randomNumber2 = Math.floor(Math.random() * myImages.length);

function randomImage() {
    randomImageLeft.setAttribute("src", myImages[randomNumber1]);
    randomImageRight.setAttribute("src", myImages[randomNumber2]);
}

function changeH1() {
        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "🏆Player 1 Wins!";
        } else if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
        } else {
            document.querySelector("h1").innerHTML = "Player 2 Wins!🏆";
        }
    }
changeH1();
 
