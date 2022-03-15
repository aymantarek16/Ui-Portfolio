/* ========================== Java Script Code ========================== */

/* ========================== Typing animation ========================== */
var typed = new Typed(".typing", {
  strings: ["Front End", "Web Developer"],
  typeSpeed: 50,
  BackSpeed: 60,
  loop: true,
});

/* ========================== Jquery Code ========================== */

// Loading Page Befor Load Main Page
$(window).on("load", function () {
  $(".loader").fadeOut("2000");
  $(".content").fadeIn("2000");
});

$(document).ready(function () {
  // Add Active Class On links In NavBar
  $(".nav a").click(function (e) {
    $(".nav a").removeClass("active");
    $(this).addClass("active");
  });
});
