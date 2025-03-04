let nav = document.getElementById("nav"); // nav
let link = document.querySelectorAll(".navbar-nav .nav-link"); // ul > li
let navLogo = document.getElementById("navLogo"); // nav logo
let navIcon = document.getElementById("navbar-toggler"); // nav icon
window.onscroll = function () {
  if (window.scrollY >= window.innerHeight) {
    nav.style.cssText = `
    position: fixed;
    background-color: #fff;
    padding: 0 0 30px;
    box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.05);
`;
    navLogo.style.color = "#343434";
    for (let i = 0; i < link.length; i++) {
      link[i].style.color = "#111111";
    }
    navIcon.style.color = "#343434";
  } else {
    nav.style.cssText = `
    position: absolute;
    background-color: transparent;
    padding: 20px 0 30px;
    box-shadow: none;
`;
    navLogo.style.color = "#fff";
    for (let i = 0; i < link.length; i++) {
      link[i].style.color = "#fff";
    }
    navIcon.style.color = "#fff";
  }
};

navIcon.onclick = function () {
  navIcon.style.color = `#343434`;
  nav.style.backgroundColor = "#fff";
  navLogo.style.color = `#343434`;
  for (let i = 0; i < link.length; i++) {
    link[i].style.color = `#111111`;
  }
};
