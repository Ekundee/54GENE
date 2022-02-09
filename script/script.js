var closee = document.getElementById("close")
var responsiveHeader = document.getElementById("responsiveHeader")
var menu = document.getElementById("menu")
var header = document.getElementById("header")
var main = document.getElementById("main")

closee.addEventListener("click",()=>{
    responsiveHeader.style = "height:0px; transition : all .5s ease-in"
    setTimeout(() => {
        menu.style.display="flex"
        closee.style.display="none"
        header.style.display="flex"
        main.style="filter: brightness(100%);"
    }, 550);
})

menu.addEventListener("click",()=>{
    responsiveHeader.style = "height:370px; transition : all .5s ease-in"
    header.style.display="none"
    main.style="filter: brightness(80%);"
    setTimeout(() => {
        menu.style.display="none"
        closee.style.display="flex"
    }, 550);
})