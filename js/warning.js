$(document).ready(function() {
  $(".call-warning-msg").click(function() {
    event.preventDefault();
    $(".warning-message").css("display", "flex");
    $(".warning-message-btn").click(function () {
      $(".warning-message").css("display", "none");
    })
  });
});
