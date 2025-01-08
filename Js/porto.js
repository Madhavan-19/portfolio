let menuIcon =document.querySelector('#main-icons');
let navbar =document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

}


let sections=document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= ()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset= sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id+']').classList.add('active');
            });
        };
    });


let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);


menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

// about
var aboutTitleLinks=document.getElementsByClassName("about-title-links")

var aboutTitleContents=document.getElementsByClassName("about-title-contents")

function opentab(tabname){
    for(aboutTitleLink of aboutTitleLinks)
    {

        aboutTitleLink.classList.remove("active-link")

    }
    for(aboutTitleContent of aboutTitleContents)
    {

        aboutTitleContent.classList.remove("active-content")

    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-content")
}