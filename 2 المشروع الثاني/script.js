let toggle = document.querySelector(".toggle-menu"),
nav = document.querySelector(".toggle-menu + ul");

toggle.setAttribute("open", "");

toggle.onclick = function ()
{  
  if (this.hasAttribute("open")) {

    nav.style.display = "flex";
    nav.style.animation = "nav-in .3s" ;

    console.log("true");
  } else {

    nav.style.animation ="nav-out .3s" ;
    setTimeout(() => {
      nav.style.display = "none" ;
    }, 250);

    console.log("false");
    
  }
  toggle.toggleAttribute("open");
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

if (window.innerWidth <= 767) {
  nav.style.display = "none";
}
else {
  nav.style.display = "flex";
}

onresize = function () {
  if (window.innerWidth <= 768) {
    nav.style.display = "none";
    nav.onclick = function () {
      this.style.display = "none";
      toggle.toggleAttribute("open");
    }
  }
  else {
    nav.onclick = function () {
      nav.style.display = "flex";
    }
    nav.style.display = "flex";
  }
}