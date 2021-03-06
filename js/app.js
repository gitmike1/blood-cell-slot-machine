/*-------------------------------- Constants --------------------------------*/
// const cellsArr = [{cell : 'rbc', prize: 1000}, {cell : 'neutrophil', prize: 700}, {cell : 'lymphocyte', prize: 600}, {cell : 'monocyte', prize: 500}, {cell : 'basophil', prize: 400}, {cell : 'eosinophil', prize: 300}, {cell : 'platelet', prize: 200}, {cell : 'virus', prize: -500}]

const cellsArr = [{cell : 'rbc', prize: 1000}, {cell : 'neutrophil', prize: 700}, {cell : 'platelet', prize: 600}, ]


/*-------------------------------- Variables --------------------------------*/
let amount 
let prize
let reels 
let randomCell

/*------------------------ Cached Element References ------------------------*/
let winnings = document.querySelector("#winnings")
let credits = document.querySelector("#credits")
let play = document.querySelector("#play")
let extract = document.querySelector("#extract")
let infuse = document.querySelector("#infuse")
let wheel1 = document.querySelector(`#wheel1`)
let wheel2 = document.querySelector(`#wheel2`)
let wheel3 = document.querySelector(`#wheel3`)


/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
    reels = [null, null, null]
    cellprize = 0
    amount = 0
    winnings.innerHTML = null
    // render()
    
  }
  
  // function render(){
  //   reels.forEach(function)
  // }

function updateCreditDisplay() {
  credits.innerText =  "Credits = " + amount   + "cc" 
  }



infuse.addEventListener('click', deposit) 
  function deposit(){
    amount+=100
    updateCreditDisplay()
  }
    


play.addEventListener('click', gamble) 
  function gamble(){
    winnings.innerHTML = null
    if (amount < 10) {
      credits.innerHTML = "Please Infuse some blood to play"
    } else {
      amount = amount - 10
      updateCreditDisplay()

      let randomCell1  = cellsArr[Math.floor(Math.random() * cellsArr.length)]

      let randomCell2  = cellsArr[Math.floor(Math.random() * cellsArr.length)]

      let randomCell3  = cellsArr[Math.floor(Math.random() * cellsArr.length)]



      wheel1.innerHTML = randomCell1.cell
      wheel2.innerHTML = randomCell2.cell
      wheel3.innerHTML = randomCell3.cell
      
      let case1 = (randomCell1 === randomCell2 && randomCell2 === randomCell3)
      let case2 = (randomCell1 === randomCell2 && randomCell3.cell === 'platelet')
      let case3 = (randomCell1 === randomCell3 && randomCell2.cell === 'platelet')
      let case4 = (randomCell2.cell === 'platelet' && randomCell3.cell === 'platelet')

      if (case1 || case2 || case3 || case4)
      {
        
        if (randomCell1.cell === "virus") {
          winnings.innerText = `Oh no! a ${randomCell1.cell} has caused a ${randomCell1.prize}cc hemmorhage!!`
        } else {
          winnings.innerText = `Congratulations! 3 ${randomCell1.cell}s wins ${randomCell1.prize}!!`
        }  

        amount =  amount + randomCell1.prize
          if (amount < 0) {
            amount = 0
          }
          
          
        updateCreditDisplay()
        }
      
    }
  }
  gamble()
  
  extract.addEventListener('click', cashOut) 
  function cashOut(){
    if (amount > 0){
    winnings.innerText = `Congratulations! Total of ${amount}cc extracted!!`
    amount = 0
    updateCreditDisplay()
    } else {
      winnings.innerText = null
  }
  }  