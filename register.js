let cookiearrey = document.cookie.split(";")

window.onload = function lo () {
    cookiearrey.some(cookie => {
        if(cookie.includes("user")) {
            // alert("شما ورود کرده اید")
        
            // window.location.href = "file:///c%3A/Users/Zahra/Desktop/davato%20r/new_rafia/dashbord_admin.html"

            return true

        }else {
            alert("dfg")
        }
    })
}
let namef = document.querySelector("#name")
let phone = document.querySelector("#phone")
let user = document.querySelector("#user")
let pass = document.querySelector("#pass")
let btn = document.querySelector("#btn")

phone.addEventListener("blur" , sis_phone)
user.addEventListener("blur" , sis_user)
pass.addEventListener("blur" , sis_pass)
btn.addEventListener("click" , sis_btn)

function sis_phone () {
    if(phone.value.length == 11) {
        return true
    } else {
        alert("شماره خود را درست وارد کنید")
        console.log(phone.value.length);
    }
}

function sis_user () {
    if(user.value.length < 5) {
        alert(" نام کاربری باید بیشتر از پنج حرف باشد")
    } else {
        return true
    }
}

function sis_pass () {
    if(pass.value.length < 7) {
        alert("رمز عبور باید بیشتر از هفت حرف باشد ")
    } else {
        return true
    }
}

function sis_btn () {
    if (sis_phone ()) {
        console.log("fsdfsd");
        if (sis_user ()) {
            if (sis_pass ()) {
                let newuserobj = {
                    name: namef.value , 
                    phone: phone.value ,
                    user: user.value , 
                    pass: pass.value
                }

                console.log(newuserobj);

                fetch("http://localhost:7124/register" , {
                    method: "post",
                    body : JSON.stringify(newuserobj) ,
                    headers : {
                        "Content-Type" : "application/json"
                    } 
                }).then((res) => {
                    console.log(res.text());
                    let status = Number(res.headers.get("content-length"))
                    if(status == 0) {
                        window.location.href = "file:///c%3A/Users/Zahra/Desktop/davato%20r/new_rafia/dashbord.html"
                    } else {
                        window.location.href = "./eroor"
                    }
                }) 
                .then((data) => console.log(data))
                document.cookie = "user="+newuserobj.user+";path=/"
                document.cookie = "name="+newuserobj.name+";path=/"
                document.cookie = "class="+newuserobj.type+";path=/"
            }
        }
    }


}