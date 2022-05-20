let chest = 0
let bomb = 0
let gameOver = false
let youWin = false
let clickedOn = []

onload = function() {
  clickedOn = []

  while (chest == bomb) {
    chest = Math.floor(Math.random() * 24) 
    bomb = Math.floor(Math.random() * 24)
  }
  document.getElementById("counter").innerHTML = 10 - clickCounter
}

let clickCounter = 0

treasure = (num) => {
  // If user has not clicked on selection before,
  // save selection, then continue function
  if (clickedOn.includes(num) ===  false) {
    clickedOn.push(num)

    if (num === chest) {
      document.getElementById(num).innerHTML = "&#x1f308"
      youWin = true
    }else if (num === bomb) {
      document.getElementById(num).innerHTML = "&#x2620"
      gameOver = true
    } else {
      document.getElementById(num).innerHTML = "&#x1f332"
    }

    clickCounter++
    if (clickCounter > 9) {
      gameOver = true
      alert("Game over!")
    }
  }
}

