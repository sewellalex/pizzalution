/**
 * Created by alexsewell on 8/17/15.
 */
$(document).ready(function() {
  $("#begin").click(function() {
    $(".button").css("display", "none");
    $(".order-options").css("display", "block");
    $(".build").css("display", "block");
    $(".name").css("display", "none");
    $(".slogan").css("display", "none");
    $(".info").css("display", "none");
    $(".opacity").css("opacity", "0.8");
  });

  $(".price").click(function() {
    $('html,body').animate({scrollTop: $(window).scrollTop() + 750
    });
    $(".pizza-options").css("display", "none");
    $(".build").css("display", "none");
    $(".build-two").css("display", "none");
    $(".buy").css("display", "block");
  });

  $(".place").click(function() {
    $(".buy").css("display", "none");
    $(".thanks").css("display", "block");
    $(".opacity").css("opacity", "0.8");
  });

  $(".pick-up, .delivery").click(function() {
    $(".order-options").css("display", "none");
    $(".pizza-size").css("display", "block");
  });

  $(".arrow").click(function() {
    $(".order-options").css("display", "block");
    $(".pizza-size").css("display", "none");
  });

  $(".small, .medium, .large, .x-large").click(function() {
    $(".pizza-size").css("display", "none");
    $(".pizza-sauce").css("display", "block");
  });

  $(".arrow-size").click(function() {
    $(".pizza-size").css("display", "block");
    $(".pizza-sauce").css("display", "none");
  });


  $(".marinara, .bbq, .ranch, .none").click(function() {
    $(".pizza-sauce").css("display", "none");
    $(".pizza-meats").css("display", "block");
  });

  $(".arrow-veggies").click(function() {
    $(".pizza-meats").css("display", "none");
    $(".pizza-veggies").css("display", "block");
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

  $(".arrow-back").click(function() {
    $(".pizza-options").css("display", "none");
    $(".pizza-veggies").css("display", "block");
  });

});

