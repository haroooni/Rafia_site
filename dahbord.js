let cookiearrey = document.cookie.split(";")

let all_user_1 = document.querySelector("#all_1")
let all_user_2 = document.querySelector("#all_2")
let all_user_3 = document.querySelector("#all_3")
let all_user_4 = document.querySelector("#all_4")
let all_user_5 = document.querySelector("#all_5")
let contect = document.querySelector("#contect")
let a_con = document.querySelector("#a_con")

function create_user_list (arrey) {
    let div_user = document.createElement("div")
    let h_name = document.createElement("h1")
    let h_phone = document.createElement("h1")
    let h_pass = document.createElement("h1")

    div_user.setAttribute("class" , "div_user")
    h_name.setAttribute("class" , "name_user")
    h_phone.setAttribute("class" , "phone_user")
    h_pass.setAttribute("class" , "pass_user")

    h_name.innerHTML = arrey.name
    h_phone.innerHTML = arrey.phone
    h_pass.innerHTML = arrey.pass

    div_user.append(h_name , h_pass , h_phone)
    if (arrey.class == "1") {
        all_user_1.append(div_user)
    } if (arrey.class == "2") {
        all_user_2.append(div_user)
    } if (arrey.class == "3") {
        all_user_3.append(div_user)
    } if (arrey.class == "4") {
        all_user_4.append(div_user)
    } if (arrey.class == "5") {
        all_user_5.append(div_user)
    } 
}

function create_order_list (arrey) {
    let div_user = document.createElement("div")
    let h_name = document.createElement("h1")
    let h_phone = document.createElement("h1")
    let h_pass = document.createElement("h1")

    div_user.setAttribute("class" , "div_user")
    h_name.setAttribute("class" , "names_user")
    h_phone.setAttribute("class" , "phone_user")

    h_pass.setAttribute("class" , "pass_user")

    h_name.innerHTML = arrey.order 
    h_phone.innerHTML = arrey.name
    h_pass.innerHTML = arrey.phone

    div_user.append(h_name , h_pass , h_phone)
    if (arrey.class == "1") {
        all_user_1.append(div_user)
    } if (arrey.class == "2") {
        all_user_2.append(div_user)
    } if (arrey.class == "3") {
        all_user_3.append(div_user)
    } if (arrey.class == "4") {
        all_user_4.append(div_user)
    } if (arrey.class == "5") {
        all_user_5.append(div_user)
    } 
}


function create_prod_list (arrey) {
    let div_user = document.createElement("div")
    let div_img = document.createElement("div")
    let div_name = document.createElement("div")
    let div_price = document.createElement("div")
    let img_div = document.createElement("img")
    let h1_name = document.createElement("h1")
    let h1_price = document.createElement("h1")

    div_user.setAttribute("class" , "div_user")
    div_img.setAttribute("class" , "img")
    div_name.setAttribute("class" , "name_pro")
    div_price.setAttribute("class" , "price_pro")

    img_div.setAttribute("src" , arrey.img)
    h1_name.innerHTML = arrey.name
    h1_price.innerHTML = arrey.price + " هزار تومان "


    div_img.append(img_div)
    div_name.append(h1_name)
    div_price.append(h1_price)
    div_user.append(div_img , div_name , div_price)
    if (arrey.class == "1") {
        all_user_1.append(div_user)
    } if (arrey.class == "2") {
        all_user_2.append(div_user)
    } if (arrey.class == "3") {
        all_user_3.append(div_user)
    } if (arrey.class == "4") {
        all_user_4.append(div_user)
    } if (arrey.class == "5") {
        all_user_5.append(div_user)
    } 
    
}

window.onload = function load () {



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


        cookiearrey.some(cookie => {
            if(cookie.includes("user")) {
                return true
    
            }else {
                window/location.href("file:///c%3A/Users/Zahra/Desktop/davato%20r/new_rafia/register.html")
            }
        })

    cookiearrey.some(cookie => {
        if(cookie.includes("class")) {
            typeclass = cookie.substring(cookie.indexOf("=") + 1)
            return true
        } else {
            console.log("sdfdsfsd");
        }
    })

    if(typeclass == "0") {
        if(window.location.href === "file:///c%3A/Users/Zahra/Desktop/davato%20r/new_rafia/dashbord.html") {
        } else {
            window.location.href = "file:///c%3A/Users/Zahra/Desktop/davato%20r/new_rafia/dashbord.html"
        }
        
    } else {

    let named =  null
    let user =  null
    let heloo = document.querySelector("#heloo")

    cookiearrey.some(cookie => {
        if(cookie.includes("name")) {
            names = cookie.substring(cookie.indexOf("=") + 1)
            return true
        } else {
            console.log("fvfvddds");
        }
    })

    cookiearrey.some(cookie => {
        if(cookie.includes("user")) {
            user = cookie.substring(cookie.indexOf("=") + 1)
            return true
        } else {
            console.log("sdfdsfsd");
        }
    })

    cookiearrey.some(cookie => {
        if(cookie.includes("class")) {
            typeclass = cookie.substring(cookie.indexOf("=") + 1)
            return true
        } else {
            console.log("sdfdsfsd");
        }
    })

    console.log(names);
    console.log(user);

    heloo.innerHTML = "سلام "+names+""
    
    let list_user = document.querySelector("#list_user")
    let close_user = document.querySelector("#close_user")
    let pro_list = document.querySelector("#list_pro")
    let order_lists = document.querySelector("#order_list")
    list_user.addEventListener("click" , list_loader)
    close_user.addEventListener("click" , close_users)
    pro_list.addEventListener("click" , prod_list)
    order_lists.addEventListener("click" , order_list) 

    function close_users () {
        let divs = document.querySelectorAll(".div_user")
        divs.forEach(div => {
            div.remove()
        });
    }

    function prod_list () {
        fetch("http://localhost:7124/pro_list" , {
            method: "get",
        }).then((res) => res.json())
        .then((data) => {
            let list = data
            let name = "sdgsd"
        for (let i = 0; i < data.length; i++) {
            create_prod_list (data[i]) 
            console.log("sdfsd");
        }

    })

}
function list_loader () {
    fetch("http://localhost:7124/user_list" , {
        method: "get",
    }).then((res) => res.json())
    .then((data) => {
        let list = data
        let name = "sdgsd"
    for (let i = 0; i < data.length; i++) {
        create_user_list (data[i]) 
    }

})
}

function order_list () {
    fetch("http://localhost:7124/order_list" , {
        method: "get",
    }).then((res) => res.json())
    .then((data) => {
        let list = data
        let name = "sdgsd"
    for (let i = 0; i < data.length; i++) {
        create_order_list (data[i]) 
    }

})
}

}}