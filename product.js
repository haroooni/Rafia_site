let cookiearrey = document.cookie.split(";")

window.onload = function () {
    console.log("sgs");
    cookiearrey.some(cookie => {
        if(cookie.includes("order_num")) {
            console.log("kjgy");
        } else {
            document.cookie = "order_num="+JSON.stringify(0)+";path=/"
        }
    })

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

let num_id =  new URLSearchParams(window.location.search) 
let h_titel = document.querySelector("#h_titel")
let p_para = document.querySelector("#p_para")
let h_price = document.querySelector("#h_price")
let imga = document.querySelector("#imga")
let a_this = document.querySelector("#a_this")
let btn_add = document.querySelector("#add_to_cart")
let a_go = document.querySelector("#a_cart")
let contect = document.querySelector("#contect")
let a_con = document.querySelector("#a_con")

btn_add.addEventListener("click" , add_cart )

cookiearrey.some(cookie => {
    if(cookie.includes("user")) {
        user = cookie.substring(cookie.indexOf("=") + 1)
        return true
    } else {
        console.log("sdfdsfsd");
    }
})

function setCookie(name, value, days) {

    var date = new Date();

    date.setDate(date.getDate() + days);

    var expires = "; expires=" + date.toGMTString();

    document.cookie = name + "=" + value + expires + "; path=/";
  }
  

function add_cart () {
    let name = h_titel.innerHTML
    let price = h_price.classList[0]
    let number = 1

    let neworderobj = {
        name : name ,
        price : price ,
        num : number
    }

    cookiearrey.some(cookie => {
        if(cookie.includes("order_num")) {
            numo = Number(cookie.substring(cookie.indexOf("=") + 1)) +1
            return true
        } else {
            console.log("sdfdsfsd");
        }
    })
    setCookie(`order${numo}`, JSON.stringify(neworderobj), 3);
    document.cookie = "order_num="+JSON.stringify(numo)+";path=/"

    console.log(neworderobj);

    btn_add.innerHTML = "به سبد خرید اضافه شد "

    setInterval(() => {
        btn_add.innerHTML = "رفتن به سبد خرید "
        a_go.setAttribute("href" , "./cart.html")
    }, 3000);

    btn_add.addEventListener("click" , go_cart )
}





function go_cart () {

}



fetch("http://localhost:7124/pro_list" , {
    method: "get",
}).then((res) => res.json())
.then((data) => {
    let list = data
    h_titel.innerHTML = data[num_id.get("id")].name
    p_para.innerHTML = data[num_id.get("id")].Description
    h_price.innerHTML = " هزار تومان " + data[num_id.get("id")].price 
    h_price.classList.add(data[num_id.get("id")].price )
    imga.setAttribute("src" ,  data[num_id.get("id")].img)
    h_titel.classList.add(data[num_id.get("id")].id)
    a_this.setAttribute("href" , data[num_id.get("id")].link)



})

