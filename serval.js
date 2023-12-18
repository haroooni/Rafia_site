let login_div = document.querySelector("#login")
let register_div = document.querySelector("#register")
let register_a = document.querySelector("#register_a")
let register_span = document.querySelector("#register_span")

window.onload = function lda () {


    if (document.cookie.split(";")[0] == "") {
        console.log("lkjsdfg");
    } else {
        login_div.style.display = "none" 
        register_a.setAttribute("href" , "")
        register_span.innerHTML = "داشبورد"
    } 
}