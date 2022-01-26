var randomNumber1 = randomNumber();
var randomNumber2 = randomNumber();
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var h1 = document.querySelector("h1");

function randomNumber() {
    
    return Math.floor((Math.random() * 6) + 1);
}

img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "🚩Player 1 Wins!";
} 
else if (randomNumber1 < randomNumber2) {
    h1.innerHTML = "Player 2 Wins!🚩";
} else {
    h1.innerHTML = "Draw!";
}