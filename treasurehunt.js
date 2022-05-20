chest = 1
bomb = 0

treasure = (num) => {
  if (num === chest) {
    alert("treasure " + num)
  }else if (num === bomb) {
    alert("Bomb " + num)
  } else {
    document.getElementById(num).innerHTML = "&#x1f332"
  }

}

