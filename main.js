let closeNav = document.getElementById("closeNav");
let showNav = document.getElementById("showNav");
let navList = document.getElementById("navList");

showNav.addEventListener("click",()=>{
    navList.classList.add("activeNav");
})
closeNav.addEventListener("click",()=>{
    navList.classList.remove("activeNav");
})

let allNav = document.getElementById("allNav");

window.addEventListener("scroll",()=>{
    if(window.scrollY > 120 ){
        allNav.classList.add("activeNavbg")
    }else{
        allNav.classList.remove("activeNavbg")
    }
})