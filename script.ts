
// let num1: number = 3
// let num2: number = 2
let btn: any = document.getElementsByClassName("btn");
let form: any = document.getElementsByClassName("formPlayer");


 const randomNumber: number = 
 Math.floor(Math.random() * (100 - 1) + 1);
console.log(randomNumber);

const getRandomNumber = function (): number
{
 return Math.floor(Math.random() * (100 - 1) + 1);
};



const checkWinner = function () {



 let Player1: number = getRandomNumber(); 
 console.log("Giocatore 1:", Player1);
 let Player2: number = getRandomNumber(); 
 console.log("Giocatore 2:", Player2);

 
// let num1: any = document.getElementsByClassName("num1");
// let num2: any = document.getElementsByClassName("num2");

//  let Player1: number = num1.value; 
//  console.log("Giocatore 1:", Player1);
//  let Player2: number = num2.value; 
//  console.log("Giocatore 2:", Player2);


const randomDiv = document.getElementById("randomDiv")

 const randomNumber1: any=
  document.getElementById("randomNumber")
 randomNumber1.innerHTML =   `<h2>${randomNumber}</h2>`
 randomNumber1.classList.add("center")
 console.log(randomNumber1)

const text = document.getElementById("text")
text.classList.add("text-center")



randomDiv.appendChild(randomNumber1)
randomDiv.appendChild(text)
console.log(randomDiv)




const diffPlayer1 : number = Math.abs(Player1 - randomNumber)
const diffPlayer2 : number = Math.abs(Player2 - randomNumber)

 if(Player1 === randomNumber) {
    console.log("il giocatore 1 ha indovinato")
    text.innerText = "il giocatore 1 ha indovinato"
 } else if (Player2 === randomNumber) {
    console.log("Il giocatore 2 ha indovinato")
    text.innerText = "Il giocatore 2 ha indovinato"
 } else if (diffPlayer1 < diffPlayer2) {
    console.log("Non avete azzeccato, ma il giocatore 1 si è avvicinato di più")
    text.innerText = "Non avete azzeccato, ma il giocatore 1 si è avvicinato di più"
 } else if (diffPlayer2 < diffPlayer1) {
    console.log("Non avete azzeccato, ma il giocatore 2 si è avvicinato di più")
    text.innerText = "Non avete azzeccato, ma il giocatore 2 si è avvicinato di più"
 }
};

checkWinner();

