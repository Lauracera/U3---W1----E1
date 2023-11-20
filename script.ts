
// let num1: number = 3
// let num2: number = 2

let Player1: any = document.getElementsByClassName(".num1");
let Player2: any = document.getElementsByClassName(".num2");
let btn: any = document.getElementsByClassName(".btn");
let form: any = document.getElementsByClassName(".formPlayer");

// form.onsubmit(); { 
//     if (Player1.value === "" && Player2.value === "") {
//         alert("Inserisci un numero")

//     } 

// }



    const getRandomNumber = function (min: number, max : number): number {
    return Math.floor(Math.random() * (max - min)+ min) 
}

const randomDiv = document.getElementById("randomDiv")

 const randomNumber: any= document.getElementById("randomNumber")
 randomNumber.value = Math.abs()
 console.log(randomNumber)

randomDiv.appendChild(randomNumber)
console.log(randomDiv)

 console.log(getRandomNumber(1, 100))




