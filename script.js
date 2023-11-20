// let num1: number = 3
// let num2: number = 2
var Player1 = document.getElementsByClassName(".num1");
var Player2 = document.getElementsByClassName(".num2");
var btn = document.getElementsByClassName(".btn");
var form = document.getElementsByClassName(".formPlayer");
// form.onsubmit(); { 
//     if (Player1.value === "" && Player2.value === "") {
//         alert("Inserisci un numero")
// //     } 
// // }
//     const getRandomNumber = function (min: number, max : number): number {
//     return Math.floor(Math.random() * (max - min)+ min) 
// }
// const randomDiv = document.getElementById("randomDiv")
//  const randomNumber: any= document.getElementById("randomNumber")
//  randomNumber.innerHTML = 
//  console.log(randomNumber)
// randomDiv.appendChild(randomNumber)
// console.log(randomDiv)
//  console.log(getRandomNumber(1, 100))
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
