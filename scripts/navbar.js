const navbtn = document.querySelector(".nav__button"); 
const nav = document.querySelector(".nav"); 

const links = document.querySelectorAll(".a");

navbtn.addEventListener('click', () => {
    if (navbtn.classList.contains('active')){
        nav.classList.remove('active');
        navbtn.classList.remove('active');
    } else {
        nav.classList.add('active');
        navbtn.classList.add('active');
    }
});

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        navbtn.classList.remove('active');
    })
})
