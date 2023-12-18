let cookiearrey = document.cookie.split(";")

let orders = null
let order_num = null
let order = null
let all = document.querySelector("#orders")
let total = document.querySelector("#total_price")
localStorage.setItem("total" , 0)
localStorage.setItem("mood" , "nof")
let contect = document.querySelector("#contect")
let a_con = document.querySelector("#a_con")

let btn_send = document.querySelector("#send")
let inp_name = document.querySelector("#name")
let inp_family = document.querySelector("#family")
let inp_addres = document.querySelector("#addres")
let inp_key_addres = document.querySelector("#key_addres")
let inp_phone = document.querySelector("#phone")
let all_inp1 = document.querySelector("#all_input_1")
let all_inp2 = document.querySelector("#all_input_2")
let btn_update = document.querySelector("#update")

btn_send.addEventListener("click" , send_data)

let oerders = []
cookiearrey.some(cookie => {
    if(cookie.includes("order_num")) {
        order_num = Number(cookie.substring(cookie.indexOf("=") + 1))
        console.log(order_num);
        return true
    }
})

for (let i = 1; i <= order_num; i++) {
    console.log(i);
    cookiearrey.some(cookie => {
        if(cookie.includes("order"+i+"")) {
            order = JSON.parse(cookie.substring(cookie.indexOf("=") + 1))
            oerders.push(order)
            return true
        }
    })
}


function create (arrey) {
    for (let i = 0; i < oerders.length; i++) {
        let doc = document
        
        let all_elem = doc.createElement("div")
        let div_num = doc.createElement("div")
        let div_price = doc.createElement("div")
        let h_div = doc.createElement("div")
        let inp_num = doc.createElement("input")
        let h_price = doc.createElement("h1")
        let h_titel = doc.createElement("h1")
        let d_div = doc.createElement("button")
        let d_h = doc.createElement("h1")

        all_elem.setAttribute("id" , "order" + (i + 1))
        all_elem.setAttribute("class" , "all_elem")
        div_num.setAttribute("class" , "div_num")
        div_price.setAttribute("class" , "div_price")
        h_div.setAttribute("class" , "h_div")
        inp_num.setAttribute("class" , "inp_num")
        h_price.setAttribute("class" , "h_price")
        h_titel.setAttribute("class" , "h_titel")
        h_titel.innerHTML = arrey[i].name
        h_price.innerHTML = arrey[i].price + "هزار تومان"
        h_price.setAttribute("id" , arrey[i].price)
        inp_num.setAttribute("value" , arrey[i].num)
        inp_num.setAttribute("type" , "number")
        d_div.setAttribute("class" , "del_div")
        d_div.addEventListener("click" , delet_order)
        d_h.setAttribute("class" , "del_h")
        d_h.innerHTML = "حذف"
        d_h.addEventListener("click" , function (event) {
            document.cookie = `${event.target.parentNode.parentNode.id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            document.cookie = `order_num=${Number(order_num) - 1};path=/`;
            event.target.parentNode.parentNode.remove()
            event.stopPropagation();
        })

        h_div.append(h_titel)
        div_price.append(h_price)
        div_num.append(inp_num)
        d_div.append(d_h)
        all_elem.append( d_div , div_num , div_price , h_div )
        all.append(all_elem)

        console.log(oerders);
        console.log(h_price.innerHTML);
    }
}



create(oerders)



function update () {
    localStorage.setItem("total" , 0)

    let name_h = document.querySelectorAll(".h_titel")
    let price_h = document.querySelectorAll(".h_price")
    let inp_numv = document.querySelectorAll(".inp_num")

    let total_pr = null
        oerders = []
    for (let i = 0; i < order_num; i++) {
        if (name_h == undefined) {

        } else {

        }
        let name = name_h[i].innerHTML
        let price = price_h[i].id
        let number_n = inp_numv[i].value
        let updateobj = {
            name : name , 
            price : price ,
            num : number_n
        }

        inp_numv[i].addEventListener("change" , chen)
        document.cookie = "order"+( Number(i) + 1)+"="+JSON.stringify(updateobj)+";path=/"
        console.log("order"+( Number(i) + 1));

        cookiearrey.some(cookie => {
            if(cookie.includes("order_num")) {
                order_num = Number(cookie.substring(cookie.indexOf("=") + 1))
                console.log(order_num);
                return true
            }
        })


        
        order = updateobj
        console.log(order);
        oerders.push(order)



        function chen () {
            localStorage.setItem("mood" , "nof")
        }
        if(localStorage.getItem("mood") == "nof") {
            let local = Number(localStorage.getItem("total"))
            total_pr = local + Number(price) * Number(number_n)

            localStorage.setItem("total" , total_pr)
            total.innerHTML =  "قیمت کل : " + total_pr
            console.log(i , oerders.length);
            } 
    }



}






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

function send_data () {
    // update ()
    let text_order = []
    let total_price_obj = []
    let order_text = [
        oerders.forEach(element => {
            let text = ` ${element.name} | با قیمت : ${element.price} |  تعداد : ${element.num}`
            text_order.push(text)
            console.log(text);
            let price = Number(element.price)
            total_price_obj.push(price)
            console.log(total_price_obj);
        })
    ]

    let total_price = 0;

    for (let i = 0; i < total_price_obj.length; i++) {
        if (typeof total_price_obj[i] === 'number') {
            total_price += total_price_obj[i];
        }
    }

    let data = {
        total_price : total_price + "0000" , 
    }

    console.log(data.total_price);

    let dataobj = 
        {
        name : JSON.stringify(inp_name.value) ,
        family : JSON.stringify(inp_family.value) ,
        phone : JSON.stringify(inp_phone.value) , 
        key : JSON.stringify(inp_key_addres.value) ,
        addres : JSON.stringify(inp_addres.value) ,
        order : JSON.stringify(text_order)
    }



    // fetch("http://localhost:7124/send_order" , {
    //     method: "post",
    //     body : JSON.stringify(dataobj)  ,
    //     headers : {
    //         "Content-Type" : "application/json"
    //     } 
    // }).then((res) => {
    //     console.log(res.text());
    //     let status = Number(res.headers.get("content-length"))
    //     if(status == 0) {
    //         window.location.href = "./ok"
    //     } else {
    //         window.location.href = "./eroor"
    //     }
    // }) 
    // .then((data) => console.log(data))

    fetch("http://localhost:7124/ord" , {
        method: "post",
        body : JSON.stringify(data)  ,
        headers : {
            "Content-Type" : "application/json"
        } 
    }).then((res) => {return res.json(); }) 
    .then((res) => {
        if (res.status == 200) {
            window.location.href = `https://dargaah.com/sandbox/ird/startpay/${res.authority}`
        }
    })
}    

function delet_order (event) {
    console.log(event.target.parentNode.id);

document.cookie = `${event.target.parentNode.id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
document.cookie = `order_num=${Number(order_num) - 1};path=/`;
    event.target.parentNode.remove()


}

if(order_num == 0 || order_num == undefined ) {
    all_inp1.style.display = "none"
    all_inp2.style.display = "none"
    btn_send.style.display = "none"
    btn_update.style.display = "none"
}