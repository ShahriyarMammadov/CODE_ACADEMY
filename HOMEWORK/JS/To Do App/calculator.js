let btn = document.getElementById("btn")
let span = document.getElementById("span")
let count = span.innerText

btn.addEventListener("click", function () {
    count++
    span.innerText = count
})