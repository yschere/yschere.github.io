function toggleNav() {
  var elem = document.getElementById("nav");
  if (elem.style.display == "block") {
    document.getElementById("nav").style.display = "none";
  } else {
    document.getElementById("nav").style.display = "block";
  }
}

function sizeCheck() {
  if (window.innerWidth >= 689){
    document.getElementById("nav").style.display = "block";
  }
  else if (window.innerWidth < 689) {
    document.getElementById("nav").style.display = "none";
  }
}
