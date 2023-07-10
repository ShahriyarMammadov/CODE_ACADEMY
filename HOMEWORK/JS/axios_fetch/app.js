//bunu yaz


// let input1 = document.getElementById("input1")
// let input2 = document.getElementById("input2")
// let input3 = document.getElementById("input3")
// let btn1 = document.getElementById("btn-color")
// let btn2 = document.getElementById("btn-text")

// btn1.addEventListener("click", function () {
//     input1.style.color = input1.value;
// })

tbody = document.querySelector("tbody")
thead = document.querySelector("thead")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            tbody.innerHTML += `<tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].username}</td>
            <td>${data[i].email}</td>
            <td>${data[i].address.city}</td>
            <td>${data[i].address.geo.lat}</td>`
        }
    })