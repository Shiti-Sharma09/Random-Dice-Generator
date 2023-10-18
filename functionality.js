var randomNumber1 = Math.random();
var new1 = Math.floor(randomNumber1*6) + 1;
if (new1 == 1) {
    document.getElementById("die1").setAttribute('src','dice1.png');
}
else if (new1 == 2) {
    document.getElementById("die1").setAttribute('src','dice2.png');
}
else if (new1 == 3) {
    document.getElementById("die1").setAttribute('src','dice3.png');
}
else if (new1 == 4) {
    document.getElementById("die1").setAttribute('src','dice4.png');
}
else if (new1 == 5) {
    document.getElementById("die1").setAttribute('src','dice5.png');
}
else if (new1 == 6) {
    document.getElementById("die1").setAttribute('src','dice6.png');
}



var randomNumber2 = Math.random();
var new2 = Math.floor(randomNumber2*6) + 1;
if (new2 == 1) {
    document.getElementById("die2").setAttribute('src','dice1.png');
}
else if (new2 == 2) {
    document.getElementById("die2").setAttribute('src','dice2.png');
}
else if (new2 == 3) {
    document.getElementById("die2").setAttribute('src','dice3.png');
}
else if (new2 == 4) {
    document.getElementById("die2").setAttribute('src','dice4.png');
}
else if (new2 == 5) {
    document.getElementById("die2").setAttribute('src','dice5.png');
}
else {
    document.getElementById("die2").setAttribute('src','dice6.png');
}



if (new1>new2) {
    document.querySelector("h1").innerHTML = "Player 1 WON🚩";
}
else if (new1<new2) {
    document.querySelector("h1").innerHTML = "Player 2 WON🚩";
}
else {
    document.querySelector("h1").innerHTML = "DRAW Refresh ME!";
}
