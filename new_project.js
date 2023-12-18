    let cookiearrey = document.cookie.split(";")
    user = cookiearrey[0].substring(cookiearrey[0].indexOf("=") + 1)
    console.log(user)

    let login_div = document.querySelector("#login")
    let register_div = document.querySelector("#register")
    let register_a = document.querySelector("#register_a")
    let register_span = document.querySelector("#register_span")
    let contect = document.querySelector("#contect")
    let a_con = document.querySelector("#a_con")
    let baner = document.querySelector("#baner")
    let i = 0

    let photo_arrey = [
        "../img/Frame 8.png" ,
        "../img/baner al.png" ,
        "../img/asdas.png" ,
    ]

    function chenge_photo (arrey , num) {
        baner.src = arrey[Number(num) - 1]
    }

setInterval(() => {
    if(photo_arrey.length > i ) {
        i++
        chenge_photo(photo_arrey , i)
    } else {
        i = 0
    }

}, 2500);
    
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
                login_a.setAttribute("href" , "./cart")
                register_span.innerHTML = "داشبورد"
                return true
            } else {
                contect.innerHTML = "سبد خرید"
                a_con.href = "./cart"
            }
        })
        
}