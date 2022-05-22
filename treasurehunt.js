let chest = 0;
let bomb = 0;
let gameOver = false;
let youWin = false;
let clickedOn = [];

// On load and retry,
// establish where chest and bomb are on the board,
// and set click counter to display 15 to player
onload = function () {
  clickedOn = [];

  while (chest == bomb) {
    chest = Math.floor(Math.random() * 24);
    bomb = Math.floor(Math.random() * 24);
  }
  document.getElementById("counter").innerHTML = 15 - clickCounter;
};

let clickCounter = 0;

// Every time player clicks on box, this function triggers event to check player 
// selection number against bomb and chest number, change the board, 
//and adjust click counter display for player 
treasure = (num) => {
  // If player has not clicked on selection before And
  // If player has not won and has not lost,
  // save selection, then continue function
  if (
    clickedOn.includes(num) === false &&
    youWin === false &&
    gameOver === false
  ) {
    // Add button number to clickedOn array
    clickedOn.push(num);

    // If number selected matches chest number,
    // player wins
    if (num === chest) {
      document.getElementById(num).innerHTML =
        "<i class='fa-solid fa-gem fa-3x'></i>";
      youWin = true;
    // If number selected matches bomb number,
    // player loses  
    } else if (num === bomb) {
      document.getElementById(num).innerHTML =
        "<i class='fa-solid fa-bomb fa-3x'></i>";
      gameOver = true;
    // Else box = checkmark
    } else {
      document.getElementById(num).innerHTML =
        "<i class='fa-regular fa-circle-check fa-3x green'></i>";
    }
    // Adds to counter, gameOver if counter reaches 15
    clickCounter++;
    if (clickCounter > 14) {
      gameOver = true;
    }
    // On gameOver, triggers announce ID to display announcement display and retry box
    if (gameOver) {
      document.getElementById("announce").innerHTML =
        "<span class='fa-solid fa-bomb fa-3x announcement'><br/>YOU LOSE!</span><span onclick='location.reload()' class='retry'>RETRY</span>";
    }
    // On youWin, triggers announce ID to display announcement display and retry box
    if (youWin) {
      document.getElementById("announce").innerHTML =
        "<span class='fa-solid fa-gem fa-3x announcement'><br/>YOU WIN!</span><span onclick='location.reload()' class='retry'>RETRY</span>";
    }
  }
  // Displays clickCounter to player. Starts at 15 then subtracts per-click
  document.getElementById("counter").innerHTML = 15 - clickCounter;
};
