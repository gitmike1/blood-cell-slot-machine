/*-------------------------------- Constants --------------------------------*/
const cellsArr = ['rbc','neutrophil', 'lymphocyte', 'monocyte', 'basophil', 'eosinophil', 'platelet', 'virus']
console.log(cellsArr)


/*-------------------------------- Variables --------------------------------*/
let amount 
let reels 
let randomCell

/*------------------------ Cached Element References ------------------------*/
let winnings = document.querySelector("#winnings")
let credits = document.querySelector("#credits")
let play = document.querySelector("#play")
let cashOut = document.querySelector("#cashOut")
let infuse = document.querySelector("#infuse")


/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
    reels = [null, null, null]
    winnings = null
    amount = 0
    // render()
    console.log(init)
  }
  
  // function render(){
  //   reels.forEach(function)
  // }

function updateCreditDisplay() {
  credits.innerText = "Credits = " + amount + "cc"
}

function generateCellIndex() {
   randomCellIndex = Math.floor(Math.random() * cellsArr.length)
  
  }
  generateCellIndex()
  console.log(randomCellIndex)

infuse.addEventListener('click', deposit) 
  function deposit(){
    amount+=100
    updateCreditDisplay()
  }
    console.log(typeof amount)


play.addEventListener('click', gamble) 
  function gamble(){

    if (amount < 100) {
      credits.innerText = "Please Infuse some blood to play"
    } else {
      amount = amount - 100
      updateCreditDisplay()
    }



  }
  console.log(credits)