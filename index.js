const navbar = document.querySelector("#navLinks");
const closee = document.getElementById("close");
const menu = document.getElementById("menu");

function showMenu (nav,menuItem) {
    menuItem.addEventListener("click", () => {
        nav.style.right = "0";
        nav.style.transition = "1s";
     }); 
};

function hideMenu (nav,closeItem) {
    closeItem.addEventListener("click", () => {
        nav.style.right = "-200px";      
     }); 
};

showMenu(navbar,menu);
hideMenu(navbar,closee);



