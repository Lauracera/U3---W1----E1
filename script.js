// let num1: number = 3
// let num2: number = 2
var btn = document.getElementsByClassName("btn");
var form = document.getElementsByClassName("formPlayer");
var randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
console.log(randomNumber);
var getRandomNumber = function () {
    return Math.floor(Math.random() * (100 - 1) + 1);
};
var checkWinner = function () {
    //  let Player1: number = getRandomNumber(); 
    //  console.log("Giocatore 1:", Player1);
    //  let Player2: number = getRandomNumber(); 
    //  console.log("Giocatore 2:", Player2);
    var num1 = document.getElementsByClassName("num1");
    var num2 = document.getElementsByClassName("num2");
    var Player1 = num1.value;
    console.log("Giocatore 1:", Player1);
    var Player2 = num2.value;
    console.log("Giocatore 2:", Player2);
    var randomDiv = document.getElementById("randomDiv");
    var randomNumber = document.getElementById("randomNumber");
    randomNumber.value = 80;
    console.log(randomNumber);
    var text = document.getElementById("text");
    randomDiv.appendChild(text);
    randomDiv.appendChild(randomNumber);
    console.log(randomDiv);
    var diffPlayer1 = Math.abs(Player1 - randomNumber);
    var diffPlayer2 = Math.abs(Player2 - randomNumber);
    if (Player1 === randomNumber) {
        console.log("il giocatore 1 ha indovinato");
    }
    else if (Player2 === randomNumber) {
        console.log("Il giocatore 2 ha indovinato");
    }
    else if (diffPlayer1 < diffPlayer2) {
        console.log("Non avete azzeccato, ma il giocatore 1 si è avvicinato di più");
    }
    else if (diffPlayer2 < diffPlayer1) {
        console.log("Non avete azzeccato, ma il giocatore 2 si è avvicinato di più");
    }
};
checkWinner();
