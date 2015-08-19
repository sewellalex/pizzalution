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
    $(".build-two").css("visibility", "hidden");
    $(".buy").css("visibility", "visible");
  });

  $(".place").click(function() {
    $(".buy").css("visibility", "hidden");
    $(".thanks").css("visibility", "visible");
  });

  $(".duplicate").click(function() {
    $('html,body').animate({scrollTop: $(window).scrollTop() + 500
  });
    $(".build-two").css("visibility", "visible");
  });

  $("#remove").click(function() {
    $('html,body').animate({scrollTop: $(window).scrollTop() + -330
    });
    $(".build-two").css("visibility", "hidden");
  });

});

