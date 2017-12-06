$(document).ready(function(){

  /* ajax form handler for call-up-menu*/
  $(".call-up-menu_form").submit(function() {
    var form_data = $(this).serialize();
    $(".call-up-menu_form-btn").attr('disabled','disabled');
    $.ajax({
      type: "POST",
      url: "send-phone.php",
      data: form_data,
      success: function(data) {
        $(".call-up-menu_form").trigger('reset').removeClass("call-up-menu_form--visible");
        $(".call-up-menu_form-btn").removeAttr('disabled');
        $(".body-overlay").removeClass("body-overlay--open");
        $(".pop-up-message-btn").before(data);
        $(".pop-up-message").css("display", "flex");
      }
    });
    event.preventDefault();
    $(".pop-up-message-btn").click(function () {
      $(".pop-up-message").css("display", "none");
      $(".pop-up-message span").remove();
    })
  });

  /* ajax form handler for pop-up-order-menu*/
  $(".pop-up-order_form").submit(function() {
    var form_data = $(this).serialize();
    $(".pop-up-order_form-btn").attr('disabled','disabled');
    $.ajax({
      type: "POST",
      url: "send-order.php",
      data: form_data,
      success: function(data) {
        $(".pop-up-order").removeClass("pop-up-order--open");
        $(".pop-up-order_form").trigger('reset');
        $(".pop-up-order_form-btn").removeAttr('disabled');
        $(".body-overlay").removeClass("body-overlay--open body-overlay--color");
        $(".pop-up-message-btn").before(data);
        $(".pop-up-message").css("display", "flex");
      }
    });
    event.preventDefault();
    $(".pop-up-message-btn").click(function () {
      $(".pop-up-message").css("display", "none");
      $(".pop-up-message span").remove();
    })
  });

  /* ajax form handler for feedback-form */
  $(".feedback-form").submit(function() {
    var form_data = $(this).serialize();
    $(".feedback-form_btn--submit").attr('disabled','disabled');
    $.ajax({
      type: "POST",
      url: "send-feedback.php",
      data: form_data,
      success: function(data) {
        $(".feedback-form").trigger('reset');
        $(".feedback-form_btn--submit").removeAttr('disabled');
        $(".feedback-form-message-btn").before(data);
        $(".feedback-form-message").css("display", "flex");
      }
    });
    event.preventDefault();
    $(".feedback-form-message-btn").click(function () {
      $(".feedback-form-message").css("display", "none");
      $(".feedback-form-message span").remove();
    })
  });
});
