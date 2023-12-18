let cookiearrey = document.cookie.split(";")

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
        window.location.href = "file:///c%3A/Users/Zahra/Desktop/davato%20r/new_rafia/dashbord_admin.html"
    } 
}

window.onload = function load () {
    if(typeclass == "0") {
        if(window.location.href === "file:///c%3A/Users/Zahra/Desktop/davato%20r/new_rafia/dashbord.html") {
        } else {
            window.location.href = "file:///c%3A/Users/Zahra/Desktop/davato%20r/new_rafia/dashbord.html"
        }
} else {
    window.location.href = "file:///c%3A/Users/Zahra/Desktop/davato%20r/new_rafia/dashbord_admin.html"
}
}