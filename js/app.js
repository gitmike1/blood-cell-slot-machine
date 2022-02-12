/*-------------------------------- Constants --------------------------------*/
const cells = ['rbc','neutrophil', 'lymphocyte', 'monocyte', 'basophil', 'eosinophil', 'platelet', 'virus']


/*-------------------------------- Variables --------------------------------*/

let reels 

/*------------------------ Cached Element References ------------------------*/
let winnings = document.querySelector("#winnings")
let credits = document.querySelector("#credits")
let play = document.querySelector("#play")
let cashOut = document.querySelector("#cashOut")
let infuse = document.querySelector("#infuse")


/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
// init()

// function init() {
//     reels = [null, null, null]
//     winnings = null
//     credits = null
//     // render()
//     console.log(init)
//   }
  
  // function render(){
  //   reels.forEach(function)
  // }



  infuse.addEventListener('click', deposit) 
  let amount = 0
    function deposit(){
      credits.innerText = "Credits = " + (amount+=100) + "cc"
    }
    console.log(typeof amount)