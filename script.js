let menu = document.querySelector(".side-menu");
let open = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-times");

function openmenu(){
    menu.style.display = "flex";
    open.style.display = "none";
    close.style.display = "flex";
}
function closemenu(){  
    menu.style.display = "none";
    open.style.display = "flex";
    close.style.display = "none";
}