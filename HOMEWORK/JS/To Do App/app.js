let input = document.getElementById("input")
let footer = document.getElementById("footer")
let add = document.getElementById("add")
let silmek_btn = document.getElementById("delete")
let ul = document.getElementById("ulList")
let li = document.querySelectorAll("li")

let animasiya = document.getElementById("animasiya2")
let sil_btn = document.getElementById("sil_btn")
let imtina_btn = document.getElementById("Imtina_btn")

// console.log(sil_btn.innerText)

ul.addEventListener("click", function (e) {
    if ("true") {
        e.target.remove();
    } else {
        alert('task silinmedi.')
    }
})



add.addEventListener("click", function () {
    let task = document.createElement("li")
    task.innerText = input.value;
    if (task.innerText === "") {
        alert("task bosdur")
    } else {
        ul.append(task)
        task.style.color = "tomato"
        ul.style.color = "green"
        input.value = ""
    }
})

silmek_btn.addEventListener("click", function () {
    ul.innerText = "";
})