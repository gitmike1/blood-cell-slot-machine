/*-------------------------------- Constants --------------------------------*/
const cellsArr = [{cell : 'rbc', prize: 1000}, {cell : 'neutrophil', prize: 700}, {cell : 'lymphocyte', prize: 600}, {cell : 'monocyte', prize: 500}, {cell : 'basophil', prize: 400}, {cell : 'eosinophil', prize: 300}, {cell : 'platelet', prize: 200}, {cell : 'virus', prize: -500}]

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
let wheel1 = document.querySelector(`#wheel1`)
let wheel2 = document.querySelector(`#wheel2`)
let wheel3 = document.querySelector(`#wheel3`)


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



infuse.addEventListener('click', deposit) 
  function deposit(){
    amount+=100
    updateCreditDisplay()
  }
    console.log(typeof amount)


play.addEventListener('click', gamble) 
  function gamble(){

    if (amount < 100) {
      credits.innerHTML = "Please Infuse some blood to play"
    } else {
      amount = amount - 100
      updateCreditDisplay()

      
      let randomCell1 = cellsArr[Math.floor(Math.random() * cellsArr.length)]

      let randomCell2 = cellsArr[Math.floor(Math.random() * cellsArr.length)]

      let randomCell3 = cellsArr[Math.floor(Math.random() * cellsArr.length)]
      
      wheel1.innerHTML = randomCell1.cell
      wheel2.innerHTML = randomCell2.cell
      wheel3.innerHTML = randomCell3.cell


      if (randomCell1 === randomCell2 && randomCell2 === randomCell3.innerHTML) {
        console.log("you win!!")


      }





    }
    
    
    
  }
  gamble()
  
  