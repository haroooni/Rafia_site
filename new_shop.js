
let cookiearrey = document.cookie.split(";")
user = cookiearrey[0].substring(cookiearrey[0].indexOf("=") + 1)
console.log(user)

let login_div = document.querySelector("#login")
let register_div = document.querySelector("#register")
let register_a = document.querySelector("#register_a")
let register_span = document.querySelector("#register_span")
let login_span = document.querySelector("#login_span")
let login_a = document.querySelector("#login_a")
let contect = document.querySelector("#contect")
let a_con = document.querySelector("#a_con")

    fetch("http://localhost:7124/home" , {
        method: "get", 
    }).then((res) => res.json())
    .then((data) => {
        let list = data
        console.log(data);
        for (let i = 0; i < data.length; i++) {
           if(data[i].user == user) {
                if(data[i].type == "admin") {
                    register_a.setAttribute("href" , "./dashbord_admin.html")
                } else {
                    register_a.setAttribute("href" , "./dashbord.html")             
                }
           }
            
        }

})


window.onload = function lda () {


    cookiearrey.some(cookie => {
        if(cookie.includes("user")) {
            login_span.innerHTML = "سبد خرید"
            register_a.setAttribute("href" , "file:///c%3A/Users/Zahra/Desktop/davato%20r/new_rafia/dashbord.html")
            login_a.setAttribute("href" , "./cart.html")
            register_span.innerHTML = "داشبورد"
            return true
        } else {
            contect.innerHTML = "سبد خرید"
            a_con.href = "./cart.html"
        }
    })
}

function new_pro (arrey) {
    let all_shop1 = document.querySelector("#all_shop")
    let all_shop2 = document.querySelector("#all_shop2")
    let all_shop3 = document.querySelector("#all_shop3")
    let all_shop4 = document.querySelector("#all_shop4")
    let all_shop5 = document.querySelector("#all_shop5")
    let body = document.querySelector("body")
    let div_asli = document.createElement("div")
    let div_galeb = document.createElement("div")
    let div_para = document.createElement("div")
    let btn = document.createElement("button")
    let div_parag = document.createElement("div")
    let img_prod = document.createElement("img")
    let h2_prod = document.createElement("h2")
    let a_btn = document.createElement("a")
    let span_btn = document.createElement("span")
    let p_prod = document.createElement("p")


    div_asli.setAttribute("class" , "peoducrtf")
    div_galeb.setAttribute("class" , "product")
    div_para.setAttribute("class" , "text_pro")
    div_parag.setAttribute("class" , "para")
    img_prod.setAttribute("class" , "img-product")
    img_prod.setAttribute("src" , arrey.img)
    h2_prod.setAttribute("class" , "title")
    h2_prod.innerHTML = arrey.name
    span_btn.innerHTML = "مشاهده بیشتر"
    a_btn.href = "./product?id="+Number(arrey.id)
    p_prod.innerHTML = arrey.price + "هزار تومان"

    console.log(arrey.id);


    body.append(div_asli)
    div_asli.append(div_galeb , div_para , btn , div_parag)
    div_galeb.append(img_prod)
    div_para.append(h2_prod)
    a_btn.append(span_btn)
    btn.append(a_btn)
    div_parag.append(p_prod)


    if(arrey.class == 1) {
        all_shop1.append(div_asli)
    }if(arrey.class == 2) {
        all_shop2.append(div_asli)
    }if(arrey.class == 3) {
        all_shop3.append(div_asli)
    }if(arrey.class == 4) {
        all_shop4.append(div_asli)
    }if(arrey.class == 5) {
        all_shop5.append(div_asli)
    }
    
}




fetch("http://localhost:7124/pro_list" , {
    method: "get",
}).then((res) => res.json())
.then((data) => {
    let list = data
    let name = "sdgsd"
    console.log(data[0].img);
for (let i = 0; i < data.length; i++) {
            new_pro(data[i])    

}

})



