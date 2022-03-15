/* ========================== Java Script Code ========================== */

/* ========================== Typing animation ========================== */
var typed = new Typed(".typing", {
  strings: ["Front End", "Web Developer"],
  typeSpeed: 60,
  BackSpeed: 60,
  loop: true,
});

/* ========================== Aside ========================== */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  allSection = document.querySelectorAll(".section")
  
for (let i = 0; i < navList.length; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < allSection.length; i++) {
      allSection[i].classList.remove("back-section")
    }
    for (let j = 0; j < navList.length; j++) { 
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section")
      }
      navList[j].querySelector("a").classList.remove("active")
    }
    this.classList.add("active");
    showSection(this)
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn()
    }

  });
}

function showSection(elem){
  for (let i = 0; i < allSection.length; i++) {
    allSection[i].classList.remove("active")
  }
   const target = elem.getAttribute("href").split("#")[1] ;
   document.querySelector("#"+ target).classList.add("active")
}

const navTogglerBtn = document.querySelector(".nav-toggler") , 
      aside = document.querySelector(".aside")
      navTogglerBtn.addEventListener("click" , () =>{
        asideSectionTogglerBtn()
      })

      function asideSectionTogglerBtn(){
        aside.classList.toggle("open")
        navTogglerBtn.classList.toggle("open")
        for (let i = 0; i < allSection.length; i++) {
          allSection[i].classList.toggle("open")
          
        }
      }

/* ========================== Jquery Code ========================== */

// Loading Page Befor Load Main Page
$(window).on("load", function () {
  $(".loader").fadeOut("2000");
  $(".content").fadeIn("2000");
});