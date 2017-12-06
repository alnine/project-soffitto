/*==============

  SCRYPT PART

===============*/

/*script for open and close main menu on mobile version*/


var menuButton = document.querySelector(".hamburger");
var menuList = document.querySelector(".main-nav");

menuButton.addEventListener("click", function(event) {
  event.preventDefault();
  if(menuButton.classList.contains("hamburger--open")) {
    menuButton.classList.remove("hamburger--open");
    menuButton.classList.add("hamburger--close");
    menuList.classList.add("main-nav--visible");
  }else {
    menuButton.classList.remove("hamburger--close");
    menuButton.classList.add("hamburger--open");
    menuList.classList.remove("main-nav--visible");
  }
});

/*===================================================*/


/* script for open and close call-up-form */
var callUpButton = document.querySelector(".call-up-menu--callback");
var callUpForm = document.querySelector(".call-up-menu_form");
var bodyOverlay = document.querySelector(".body-overlay");

callUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  if(callUpForm.classList.contains("call-up-menu_form--visible")) {
    callUpForm.classList.remove("call-up-menu_form--visible");
    bodyOverlay.classList.remove("body-overlay--open");
  }
  else {
    callUpForm.classList.add("call-up-menu_form--visible");
    bodyOverlay.classList.add("body-overlay--open");
  }
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
/*===================================================*/


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
/*===================================================*/

/*==============

  JQUERY PART

===============*/

/* mask for phone input field */
$(function() {
  //заполнитель с помощью параметра placeholder
  $(".phone-mask").mask("+38(099)999-99-99", {placeholder: "+38(0__)___-__-__" });
});
/*===================================================*/

/* settings for datepicker scrypt */
$('[data-toggle="datepicker"]').datepicker({
  autoHide: true,
  autoPick: true,
  language: 'ru-RU',
  format: 'dd.mm.yyyy'
});
/*===================================================*/
