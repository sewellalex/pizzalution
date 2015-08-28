///**
// * Created by alexsewell on 8/19/15.
// */
//var prices = {
//  "dominos":
//    {
//      "pick-up": 0,
//      "delivery": 1.99,
//      "small": 1,
//      "medium": 1.50,
//      "large": 2,
//      "x-large": 2.50,
//      "marinara": 0,
//      "bbq": 0,
//      "ranch": 0,
//      "none": 0,
//      "pepperoni": 0.1,
//      "ham": 0.1,
//      "bacon": 0.1,
//      "sausage": 0.1,
//      "spicy-sausage": 0.1,
//      "anchovies": 0.1,
//      "chicken": 0.1,
//      "mushrooms": 0.1,
//      "peppers": 0.1,
//      "pineapple": 0.1,
//      "olives": 0.1,
//      "tomatoes": 0.1,
//      "jalapenos": 0.1,
//      "onions": 0.1,
//
//
//    },
//
//  "papa-johns":
//  {
//    "pick-up": 0,
//    "delivery": 1.50,
//    "small": 1.25,
//    "medium": 1.40,
//    "large": 2.10,
//    "x-large": 2.30,
//    "marinara": 0,
//    "bbq": 0,
//    "ranch": 0,
//    "none": 0,
//    "pepperoni": 0.13,
//    "ham": 0.13,
//    "bacon": 0.13,
//    "sausage": 0.13,
//    "spicy-sausage": 0.13,
//    "anchovies": 0.13,
//    "chicken": 0.13,
//    "mushrooms": 0.13,
//    "peppers": 0.13,
//    "pineapple": 0.13,
//    "olives": 0.13,
//    "tomatoes": 0.13,
//    "jalapenos": 0.13,
//    "onions": 0.13,
//  },
//
//  "pizza-hut":
//  {
//    "pick-up": 0,
//    "delivery": 1.75,
//    "small": 1.2,
//    "medium": 1.3,
//    "large": 1.6,
//    "x-large": 2,
//    "marinara": 0,
//    "bbq": 0,
//    "ranch": 0,
//    "none": 0,
//    "pepperoni": 0.18,
//    "ham": 0.18,
//    "bacon": 0.18,
//    "sausage": 0.18,
//    "spicy-sausage": 0.18,
//    "anchovies": 0.18,
//    "chicken": 0.18,
//    "mushrooms": 0.18,
//    "peppers": 0.18,
//    "pineapple": 0.18,
//    "olives": 0.18,
//    "tomatoes": 0.18,
//    "jalapenos": 0.18,
//    "onions": 0.18,
//  },
//
//  "little-caesars":
//  {
//    "pick-up": 0,
//    "delivery": 1.50,
//    "small": 1,
//    "medium": 1.25,
//    "large": 1.50,
//    "x-large": 1.75,
//    "marinara": 0,
//    "bbq": 0,
//    "ranch": 0,
//    "none": 0,
//    "pepperoni": 0.11,
//    "ham": 0.11,
//    "bacon": 0.11,
//    "sausage": 0.11,
//    "spicy-sausage": 0.11,
//    "anchovies": 0.11,
//    "chicken": 0.11,
//    "mushrooms": 0.11,
//    "peppers": 0.11,
//    "pineapple": 0.11,
//    "olives": 0.11,
//    "tomatoes": 0.11,
//    "jalapenos": 0.11,
//    "onions": 0.11,
//  }
//};


var dominosSize = {
  small: 1,
  medium: 1.5
};

var papaSize = {
  small: 1.1,
  medium: 1.4
};

var getSize = function () {
  console.log(this.small);
};

dominosSize.showSize = getSize;
dominosSize.showSize();

papaSize.showSize = getSize;
papaSize.showSize();


function myFunction() {
  var x = document.getElementById("input").getAttribute("name");
  document.getElementById("demo").innerHTML = x;