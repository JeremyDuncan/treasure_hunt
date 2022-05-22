let chest = 0;
let bomb = 0;
let gameOver = false;
let youWin = false;
let clickedOn = [];

onload = function () {
  clickedOn = [];

  while (chest == bomb) {
    chest = Math.floor(Math.random() * 24);
    bomb = Math.floor(Math.random() * 24);
  }
  document.getElementById("counter").innerHTML = 15 - clickCounter;
};

let clickCounter = 0;

treasure = (num) => {
  // If user has not clicked on selection before,
  // save selection, then continue function
  if (clickedOn.includes(num) === false && youWin === false && gameOver === false) {
    clickedOn.push(num);

    if (num === chest) {
      document.getElementById(num).innerHTML = "<i class='fa-solid fa-gem fa-3x'></i>";
      youWin = true;
    } else if (num === bomb) {
      document.getElementById(num).innerHTML = "<i class='fa-solid fa-bomb fa-3x'></i>";
      gameOver = true;
    } else {
      document.getElementById(num).innerHTML = "<i class='fa-regular fa-circle-check fa-3x green'></i>";
    }

    clickCounter++;
    if (clickCounter > 14) {
      gameOver = true;
    }
    if (gameOver) {
      document.getElementById("announce").innerHTML = "<span class='fa-solid fa-bomb fa-3x announcement'><br/>YOU LOSE!</span><span onclick='location.reload()' class='retry'>RETRY</span>";
   
    }
    if (youWin) {
      document.getElementById("announce").innerHTML = "<span class='fa-solid fa-gem fa-3x announcement'><br/>YOU WIN!</span><span onclick='location.reload()' class='retry'>RETRY</span>";
    }
  }



  document.getElementById("counter").innerHTML = 15 - clickCounter;
};
