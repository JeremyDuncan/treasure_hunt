chest = 1
bomb = 0

treasure = (num) => {
  if (num === chest) {
    document.getElementById(num).innerHTML = "&#x1f308"
  }else if (num === bomb) {
    document.getElementById(num).innerHTML = "&#x2620 "
  } else {
    document.getElementById(num).innerHTML = "&#x1f332"
  }

}

