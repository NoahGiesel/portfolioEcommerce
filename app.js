const nav = document.querySelector('.nav');
const tenda = document.querySelector('.navigation');



nav.addEventListener('click', (event)=>{
    nav.classList.toggle('open');
     if(nav.classList.contains("open")) {
        tenda.style.transform = "translateY(0)";
    } else {
        tenda.style.transform = "translateY(100%)";

    }
});



// logic for json file

let index = 0 ; 






