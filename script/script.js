var closee = document.getElementById("close")
var responsiveHeader = document.getElementById("responsiveHeader")
var menu = document.getElementById("menu")
var header = document.getElementById("header")
var main = document.getElementById("main")
var body = document.getElementById("body")
var full_page = document.getElementById("full_page")
var createAcc = document.getElementById("createAcc")

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

var checkScrollHeight=()=>{
    var top = body.getBoundingClientRect().top
    alert(top)
    if(top >= -8){
        createAcc.style.display = "none"
    }else{
        createAcc.style.display = "flex"
    }
}
