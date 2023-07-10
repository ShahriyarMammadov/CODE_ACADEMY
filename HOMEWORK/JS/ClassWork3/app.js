let deleteBtn = document.querySelector('#delete')
let editBtn = document.querySelector('#edit')
let inputText = document.querySelector('#inputText')
let box = document.querySelector('.box')

let array = JSON.parse(localStorage.getItem('film')) == null
    ? []
    : JSON.parse(localStorage.getItem('Film'))


inputText.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {

        let emElement = document.createElement('em')
        emElement.innerText = inputText.value
        array.push(emElement.innerText)
        localStorage.setItem('Film', JSON.stringify(array))
        inputText.value = ''

        // box.append(array[array.length - 1])

        box.append(array[array.length - 1])

        // let array2 = JSON.parse(localStorage.getItem('film'))
        // console.log(array2)
        // box.append(array2[array2.length - 1])
    }
});