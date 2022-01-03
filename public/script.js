$(window).scroll(function(){
    if($(this).scrollTop()){
        $(".navbar").addClass("fixed");
    }else {
        $(".navbar").removeClass("fixed");
    }
});

// window.onscroll = function(){mySticky()};

// let navbar  = document.querySelector(".navbar");
// let sticky = navbar.offsetTop;

// function mySticky(){
//     if(window.pageYOffset > sticky){
//         navbar.className.add("sticky");
//     } else {
//         navbar.className.remove("sticky");
//     }
// }


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
// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// display menu

const menuBtn = document.querySelector('.menu-btn');
const menuImg = document.querySelector('.menu-img');
const menuText = document.getElementsByClassName('menu-text')

menuBtn.addEventListener('click', () => {
    menuImg.classList.toggle("active");
});

