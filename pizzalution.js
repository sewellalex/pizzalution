/**
 * Created by alexsewell on 8/17/15.
 */
 // scroll page down when build pizza button is clicked
$(document).ready(function() {
  $("#begin").click(function() {
    $('html,body').animate({scrollTop: $(window).scrollTop() + 758
    });
    $(".button").css("display", "none");
    $(".order-options").css("display", "block");
    $(".build").css("display", "block");
  });

  $(".price").click(function() {
    //$('html,body').animate({scrollTop: $(window).scrollTop() + 500
    //});
    $(".pizza-options").css("display", "none");
    $(".build").css("display", "none");
    $(".build-two").css("display", "none");
    $(".buy").css("display", "block");
  });

  $(".place").click(function() {
    $(".buy").css("display", "none");
    $(".thanks").css("display", "block");
  });

  $(".duplicate").click(function() {
    $('html,body').animate({scrollTop: $(window).scrollTop() + 500
  });
    $(".build-two").css("display", "block");
  });

  $("#remove").click(function() {
    $('html,body').animate({scrollTop: $(window).scrollTop() + -330
    });
    $(".build-two").css("display", "none");
  });

  $(".pick-up, .delivery").click(function() {
    //$('html,body').animate({scrollTop: $(window).scrollTop() + 90
    //});
    $(".order-options").css("display", "none");
    $(".pizza-size").css("display", "block");
  });

  $(".small, .medium, .large, .x-large").click(function() {
    //$('html,body').animate({scrollTop: $(window).scrollTop() + 90
    //});
    $(".pizza-size").css("display", "none");
    $(".pizza-sauce").css("display", "block");
  });

  $(".marinara, .bbq, .ranch, .none").click(function() {
    //$('html,body').animate({scrollTop: $(window).scrollTop() + 90
    //});
    $(".pizza-sauce").css("display", "none");
    $(".pizza-meats").css("display", "block");
  });

  $(".arrow-veggies").click(function() {
    //$('html,body').animate({scrollTop: $(window).scrollTop() + 90
    //});
    $(".pizza-meats").css("display", "none");
    $(".pizza-veggies").css("display", "block");
  });

  $(".arrow").click(function() {
    $(".order-options").css("display", "block");
    $(".pizza-size").css("display", "none");
  });

  $(".arrow-size").click(function() {
    $(".pizza-size").css("display", "block");
    $(".pizza-sauce").css("display", "none");
  });

  $(".arrow-sauce").click(function() {
    $(".pizza-sauce").css("display", "block");
    $(".pizza-meats").css("display", "none");
  });

  $(".arrow-meats").click(function() {
    $(".pizza-meats").css("display", "block");
    $(".pizza-veggies").css("display", "none");
  });

  $(".arrow-options").click(function() {
    $(".pizza-options").css("display", "block");
    $(".pizza-veggies").css("display", "none");
  });




});

