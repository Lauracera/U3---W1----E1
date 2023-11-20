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
    var Player1 = getRandomNumber();
    console.log("Giocatore 1:", Player1);
    var Player2 = getRandomNumber();
    console.log("Giocatore 2:", Player2);
    // let num1: any = document.getElementsByClassName("num1");
    // let num2: any = document.getElementsByClassName("num2");
    //  let Player1: number = num1.value; 
    //  console.log("Giocatore 1:", Player1);
    //  let Player2: number = num2.value; 
    //  console.log("Giocatore 2:", Player2);
    var randomDiv = document.getElementById("randomDiv");
    var randomNumber1 = document.getElementById("randomNumber");
    randomNumber1.innerHTML = "<h2>".concat(randomNumber, "</h2>");
    randomNumber1.classList.add("center");
    console.log(randomNumber1);
    var text = document.getElementById("text");
    text.classList.add("text-center");
    randomDiv.appendChild(randomNumber1);
    randomDiv.appendChild(text);
    console.log(randomDiv);
    var diffPlayer1 = Math.abs(Player1 - randomNumber);
    var diffPlayer2 = Math.abs(Player2 - randomNumber);
    if (Player1 === randomNumber) {
        console.log("il giocatore 1 ha indovinato");
        text.innerText = "il giocatore 1 ha indovinato";
    }
    else if (Player2 === randomNumber) {
        console.log("Il giocatore 2 ha indovinato");
        text.innerText = "Il giocatore 2 ha indovinato";
    }
    else if (diffPlayer1 < diffPlayer2) {
        console.log("Non avete azzeccato, ma il giocatore 1 si è avvicinato di più");
        text.innerText = "Non avete azzeccato, ma il giocatore 1 si è avvicinato di più";
    }
    else if (diffPlayer2 < diffPlayer1) {
        console.log("Non avete azzeccato, ma il giocatore 2 si è avvicinato di più");
        text.innerText = "Non avete azzeccato, ma il giocatore 2 si è avvicinato di più";
    }
};
checkWinner();
