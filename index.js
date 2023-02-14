const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]


const boxOneEl = document.getElementById("boxOne-el")
const boxTwoEl = document.getElementById("boxTwo-el")

let passwordOne = ""
let passwordTwo = "" 
let hasPasswordOne = false
let hasPasswordTwo = false


function passMaker() {
    if (hasPasswordOne === false && hasPasswordTwo === false) {
        for (let i = 0; i < 15; i ++){
            let randomIndex = Math.floor(Math.random() * characters.length + 1 )
            passwordOne += characters[randomIndex]
   } for (let count = 0; count < 15; count ++) {
       let randomIndexTwo =  Math.floor(Math.random() * characters.length + 1 )
       passwordTwo += characters[randomIndexTwo]
   }
    }  
    boxOneEl.textContent = passwordOne
    boxTwoEl.textContent = passwordTwo
    hasPasswordOne = true
    hasPasswordTwo = true
} 