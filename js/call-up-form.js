/* script for open and close pop-up-order */
var callUpButton = document.querySelector(".call-up-menu--callback");
var callUpForm = document.querySelector(".call-up-menu_form");
var bodyOverlay = document.querySelector(".body-overlay");



callUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  callUpForm.classList.add("call-up-menu_form--visible");
  bodyOverlay.classList.add("body-overlay--open");
});

window.addEventListener("keydown", function(event) {
	if(event.keyCode === 27) {
    if(callUpForm.classList.contains("call-up-menu_form--visible")) {
      callUpForm.classList.remove("call-up-menu_form--visible");
    }

    if(bodyOverlay.classList.contains("body-overlay--open")) {
      bodyOverlay.classList.remove("body-overlay--open");
    }
	}
});

bodyOverlay.addEventListener("click", function(event) {
  if(callUpForm.classList.contains("call-up-menu_form--visible")) {
    callUpForm.classList.remove("call-up-menu_form--visible");
  }

  if(bodyOverlay.classList.contains("body-overlay--open")) {
    bodyOverlay.classList.remove("body-overlay--open");
  }
});
