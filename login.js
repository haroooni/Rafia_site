let cookiearrey = document.cookie.split(";")

window.onload = function lo () {
    cookiearrey.some(cookie => {
        if(cookie.includes("user")) {
            alert("شما ورود کرده اید")
        
            window.location.href = "file:///c%3A/Users/Zahra/Desktop/davato%20r/new_rafia/dashbord_admin.html"

            return true

        } else {
            alert("dgdf")
        }
    })
}
let inp_pgone = document.querySelector("#phone")
let inp_pass = document.querySelector(".pass")
let btn_sub = document.querySelector("#submit1")

inp_pgone.addEventListener("blur" , inp_phon)
btn_sub.addEventListener("click" , btn_subs)

function inp_phon () {
    if(inp_pgone.value.length == 11) {
    } else {
        alert("شماره خود را درست وارد کنید")
        return true
    }
}

function btn_subs () {
    if(inp_phon ()) {
    } else {

        let newuserobj = {
            user : inp_pgone.value ,
            pass : inp_pass.value
        }
        fetch("http://localhost:7124/login_send" , {
            method: "post",
            body: JSON.stringify(newuserobj) ,
            headers : {
                "Content-Type" : "application/json"
            } 
        }).then((res) => res.json())
        .then((data) => {
            let list = data
            if(data.length == 1) {
                if(data[0].pass == newuserobj.pass) {
                    document.cookie = "user="+data[0].user+";path=/"
                    document.cookie = "name="+data[0].name+";path=/"
                    document.cookie = "class="+data[0].type+";path=/"
                    window.location.href = "file:///c%3A/Users/Zahra/Desktop/davato%20r/new_rafia/dashbord_admin.html"
                } else {
                    alert("رمز عبور اشتباه است")
                }
            } else {
                alert("نام کاربری اشتباه است ") 
            }

    })

        
    }
}
