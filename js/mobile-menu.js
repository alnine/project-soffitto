/*script for open and close main menu on mobile version*/
var menuButton = document.querySelector(".hamburger");
var menuList = document.querySelector(".main-nav");

menuButton.addEventListener("click", function(event) {
  event.preventDefault();
  if(menuButton.classList.contains("hamburger--open")) {
    menuButton.classList.remove("hamburger--open");
    menuButton.classList.add("hamburger--close");
    menuList.classList.add("main-nav--visible")
  }else {
    menuButton.classList.add("hamburger--open");
    menuButton.classList.remove("hamburger--close");
    menuList.classList.remove("main-nav--visible")
  }
});
