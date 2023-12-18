let inp_name = document.querySelector("#name_note")
let inp_num = document.querySelector("#num")
let btn = document.querySelector("#add")
let bod = document.querySelector("body")
let num_t = document.querySelector("#num_t")
let divlist1 = document.querySelector("#list1")
let divlist2 = document.querySelector("#list2")
let divlist3 = document.querySelector("#list3")

if (localStorage.getItem("num")){

} else {
    localStorage.setItem("scor" , 0)

localStorage.setItem("num" , 0)
}

 num_t.innerHTML = 0 

btn.addEventListener("click" , set_local)


function add_note (naem , scor , id , mood) {

    let div_note = document.createElement("div")
    let name_note = document.createElement("h2")
    let num_note = document.createElement("h3")
    let inp_note = document.createElement("input")
    let btn_del = document.createElement("button")
    let div_scor = document.createElement("div")
    let div_btn_check = document.createElement("div")
    let lable_inp = document.createElement("label")
    let img_del = document.createElement("img")
    let div_trans = document.createElement("div")
    let btn_add = document.querySelector("#add")

    div_scor.setAttribute("class" , "scor")
    div_btn_check.setAttribute("class" , "content")
    lable_inp.setAttribute("class" , "checkBox")
    div_trans.setAttribute("class" , "transition")
    btn_del.addEventListener("click" , delet)
    btn_del.setAttribute("class" , "button")
    img_del.setAttribute("src" , "../img/Delete.svg")
    img_del.setAttribute("class" , "hover")
    btn_del.addEventListener("mouseover" , hovesr)
    btn_del.addEventListener("mouseleave" , lives)
    name_note.innerHTML = naem
    num_note.innerHTML = scor 
    div_note.setAttribute("name" , "of")
    name_note.setAttribute("class" , "name_note")
    name_note.setAttribute("id" , scor )
    num_note.setAttribute("class" , "num")
    inp_note.setAttribute("class" , `${scor}`)
    inp_note.setAttribute("type" , `checkbox`)
    inp_note.addEventListener('click' , addnum)
    inp_note.type = "checkbox"
    div_note.setAttribute("id" , id )

    localStorage.setItem("num" , id )

    if(mood == true) {
        div_note.setAttribute("class" , `all_note on`)
        lable_inp.setAttribute("id" , "on_note")
        
    } else {
        div_note.setAttribute("class" , `all_note of`)
        lable_inp.setAttribute("id" , "")
    }


    btn_del.append(img_del)
    lable_inp.append(inp_note , div_trans)
    div_btn_check.append(lable_inp)
    div_scor.append(num_note)
    div_note.append( div_scor , div_btn_check , name_note , btn_del )
    // divlist1.append(div_note)

    if (id <= 4) {
         divlist1.append(div_note)
    }if(4 < id ) {
        divlist2.append(div_note)
    }if(8 < id ) {
        divlist3.append(div_note)
    }
    
     
}

function set_local () {
    let num_todo = localStorage.getItem("num")
    let num_all = Number(num_todo) + 1
    let all_todo = []
    let all_todo0 = JSON.parse(localStorage.getItem("all_todo"))
    let data = {
        name : inp_name.value , 
        scor : inp_num.value , 
        mood : false , 
        id :    num_all
    }

    all_todo0.push(data)

    localStorage.setItem("all_todo" , JSON.stringify(all_todo0))

        let data_local = localStorage.getItem("all_todo")
        let data_j_1 = JSON.parse(data_local)
        let data_j_2 = data_j_1[Number(num_all - 1)]

        console.log(data_j_2);

        add_note(data_j_2.name , Number(data_j_2.scor) , Number(data_j_2.id))

            
        localStorage.setItem("num" , num_all)
}

function addnum (event) {
    let fath = event.target.parentNode.parentNode.parentNode
    let num = Number(event.target.className)
    let data_1 = JSON.parse(localStorage.getItem("all_todo"))
    let data_2 = data_1[fath.id]
    let new_data = null
    

    if(event.target.parentNode.id == "on_note") {
        // num_t.innerHTML = Number(num_t.innerHTML) + Number(num)
        console.log(event.target.parentNode.id);
        event.target.parentNode.setAttribute("id" , "")
        lover (Number(num) , num_t , "no")
        fath.setAttribute("class" , "all_note of")
        new_data = {
            name : data_2.name , 
            scor : data_2.scor , 
            mood : false , 
            id : data_2.id
        }
        
    } else {
        console.log(event.target.parentNode.id);
        // num_t.innerHTML = Number(num_t.innerHTML) - Number(num)
        lover (Number(num) , num_t , "ok")
        fath.setAttribute("class" , "all_note on")
        event.target.parentNode.setAttribute("id" , "on_note")
        new_data = {
            name : data_2.name , 
            scor : data_2.scor , 
            mood : true , 
            id : data_2.id
        }
    }
    let local = JSON.parse(localStorage.getItem("all_todo"))
    local.push(new_data)
    localStorage.setItem("all_todo", JSON.stringify(local))

    console.log(event.target.parentNode);


}

function hovesr (event) {
   event.target.children[0].style.display = "none"
}

function lives (event) {
    event.target.children[0].style.display = "block"
}

function delet (event) {
    let num = event.target.previousElementSibling.id
    let father = event.target.parentNode.className
    let id_of_note = event.target.parentNode.id
    let father_obj = father.split(" ")
    let num_of_note = localStorage.getItem("num")
    let scor_of_note = localStorage.getItem("scor")
    let num_of_god = num_of_note - id_of_note

    let list_child = divlist1.children

    for (let i = 0; i < list_child.length; i++) {
        list_child[i].remove()
    }

    let all = [
        "ali" , 
        "mamad", 
        "sdfsd" , 
    ]

    console.log(all.splice(2 , 2) , all);

    event.target.parentNode.remove()

    localStorage.setItem("num" , Number(num_of_note) - 1)
    let data1 = JSON.parse(localStorage.getItem("all_todo"))
    let data2 = data1[id_of_note - 1]
    for (let i = 0; i < data1.length; i++) {
        const element = data1[i];


    }
    let number_del = if

    data1.splice(number_del , number_del)

    console.log(data1);
    console.log(father_obj[1]);


        if(father_obj[1] == "on") {
        lover(Number(num) , num_t , "no")  
        console.log("sdfsd");  
        localStorage.setItem("scor" , Number(scor_of_note) - Number(num))  
    }

    console.log(num_of_note);
    localStorage.setItem("all_todo" , JSON.stringify(data1))
    if(num_of_note -1 == 0) {
        localStorage.setItem("all_todo" , JSON.stringify([]))
        console.log("sdfds");
    }

}

function lover (num ,elemnt , mood) {

    let scor = Number(localStorage.getItem("scor"))

    if (mood == "ok") {
        let num_min = 0
        setInterval(() => {
            if(  num > num_min) {
                num_t.innerHTML = Number(elemnt.innerHTML) + 1
                num_min = num_min + 1
            }
        }, 50);
        scor = scor + num
        localStorage.setItem("scor" , scor)
    }if (mood == "no") {
        setInterval(() => {
            if(  num > 0) {
                num_t.innerHTML = Number(elemnt.innerHTML) - 1
                num = num - 1
            }
            console.log(num_t.innerHTML);
        }, 50);
        scor = scor - num
        localStorage.setItem("scor" , scor)
    }

    console.log(scor);


}


window.onload = function () {
    let num = Number(localStorage.getItem("num"))
    let local = JSON.parse(localStorage.getItem("all_todo"))
    for (let i = 0; i < Number(num); i++) {
        let data_1 = JSON.parse(localStorage.getItem("all_todo"))
        let data_2 = data_1[i]
        console.log(data_1);
        add_note(data_2.name , data_2.scor , data_2.id , data_2.mood)
    }
    num_t.innerHTML = localStorage.getItem("scor")
    console.log(JSON.parse(localStorage.getItem("all_todo")))
    if(JSON.parse(localStorage.getItem("all_todo")) == null) {     
        localStorage.setItem("all_todo" , JSON.stringify([]))  
    }
    console.log(local);
    localStorage.setItem("num" , local.length)
} 