$(window).scroll(function(){
    if($(this).scrollTop()){
        $(".navbar").addClass("fixed");
    }else {
        $(".navbar").removeClass("fixed");
    }
});

// const scroller = document.querySelector('.nav');

// window.onscroll = function(){
//     "use strict";
//     if (document.body.scrollTop) {
//       scroller.classList.add("fixed");
//     } else {
//       scroller.classList.remove("fixed");
//     }
// };

// window.addEventListener("scroll", ()=> {
    
// })

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}