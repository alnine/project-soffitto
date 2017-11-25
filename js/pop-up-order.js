/* script for open and close pop-up-order */
var orderButton = document.querySelector(".index-promo-option_item-link--order");
var orderPopUp = document.querySelector(".pop-up-order");
var orderPopUpClose = document.querySelector(".pop-up-order_close-btn");
var bodyOverlay = document.querySelector(".body-overlay");



orderButton.addEventListener("click", function(event) {
  event.preventDefault();
  orderPopUp.classList.add("pop-up-order--open");
  bodyOverlay.classList.add("body-overlay--open");
  bodyOverlay.classList.add("body-overlay--color");
});

orderPopUpClose.addEventListener("click", function(event) {
  event.preventDefault();
  if(orderPopUp.classList.contains("pop-up-order--open")) {
    orderPopUp.classList.remove("pop-up-order--open");
  }

  if(bodyOverlay.classList.contains("body-overlay--open")) {
    bodyOverlay.classList.remove("body-overlay--open");
  }

  if(bodyOverlay.classList.contains("body-overlay--color")) {
    bodyOverlay.classList.remove("body-overlay--color");
  }
});

window.addEventListener("keydown", function(event) {
	if(event.keyCode === 27) {
    if(orderPopUp.classList.contains("pop-up-order--open")) {
      orderPopUp.classList.remove("pop-up-order--open");
    }

    if(bodyOverlay.classList.contains("body-overlay--open")) {
      bodyOverlay.classList.remove("body-overlay--open");
    }

    if(bodyOverlay.classList.contains("body-overlay--color")) {
      bodyOverlay.classList.remove("body-overlay--color");
    }
	}
});

bodyOverlay.addEventListener("click", function(event) {
  if(orderPopUp.classList.contains("pop-up-order--open")) {
    orderPopUp.classList.remove("pop-up-order--open");
  }

  if(bodyOverlay.classList.contains("body-overlay--open")) {
    bodyOverlay.classList.remove("body-overlay--open");
  }

  if(bodyOverlay.classList.contains("body-overlay--color")) {
    bodyOverlay.classList.remove("body-overlay--color");
  }
});
