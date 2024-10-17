let icon = document.querySelector(".links .icon-header");
let small_icon = document.querySelector(".header .links .icon-header span:nth-child(2)");
let links_ul = document.querySelector(".links ul");

links_ul.style.display = "none";

icon.onclick = function () {
  if (links_ul.style.display == "none") {
    links_ul.style.display = "block";
    small_icon.style.width = "100%";
  } else {
    links_ul.style.display = "none";
    small_icon.style.width = "60%";
  }
}
links_ul.onclick = function () {
  this.style.display = "none";
}
icon.onmouseenter = function () {
  small_icon.style.width = "100%";
}
icon.onmouseleave = function () {
  small_icon.style.width = "60%";
}


let up = document.querySelector("button.button-up");

onscroll = function () {
  if (scrollY >= 800) {
    up.style.display = "flex";
  } else {
    up.style.display = "none";
  }
}


up.onclick = function () {
  scroll({
    left: 0,
    top: 0,
  })
}