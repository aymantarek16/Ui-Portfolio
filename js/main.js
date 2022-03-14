// Js
let navbar = document.querySelector(".nav").querySelectorAll("a");
// _________________________________________________________

// Jquery

// Loading Page Befor Load Main Page
$(window).on("load", function () {
  $(".loader").fadeOut("2000");
  $(".content").fadeIn("2000");
});


$(document).ready(function () {

  $(".nav a").click(function (e) { 
      $(".nav a").removeClass("active");
      $(this).addClass("active");
  });


  

});

