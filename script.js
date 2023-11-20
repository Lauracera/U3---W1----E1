// let num1: number = 3
// let num2: number = 2
var Player1 = document.getElementsByClassName(".num1");
var Player2 = document.getElementsByClassName(".num2");
var btn = document.getElementsByClassName(".btn");
var form = document.getElementsByClassName(".formPlayer");
// form.onsubmit(); { 
//     if (Player1.value === "" && Player2.value === "") {
//         alert("Inserisci un numero")
//     } 
// }
var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var randomDiv = document.getElementById("randomDiv");
var randomNumber = document.getElementById("randomNumber");
randomNumber.value = Math.abs(randomNumber);
console.log(randomNumber);
randomDiv.appendChild(randomNumber);
console.log(randomDiv);
console.log(getRandomNumber(1, 100));
