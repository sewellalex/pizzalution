/**
 * Created by alexsewell on 8/17/15.
 */
 // scroll page down when build pizza button is clicked
$(document).ready(function() {
  $("#begin").click(function() {
    $('html,body').animate({scrollTop: $(window).scrollTop() + 405
    });
  });

  $(".price").click(function() {
    $(".build").css("visibility", "hidden");
    $(".buy").css("visibility", "visible");
  });
});
