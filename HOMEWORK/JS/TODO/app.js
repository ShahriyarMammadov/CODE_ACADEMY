let addBtn = document.querySelector('.addbtn');
let deleteBtn = document.querySelector('.deletebtn');
let text = document.querySelector('.text');
let input = document.querySelector('#input')
let button = document.querySelector('.buttonslar')
let alerts = document.querySelector('.alert')
let h2 = document.querySelector('#h2')
let textInput = document.querySelector('.textInput')
let dark = document.querySelector('.dark')
let darkButton = document.querySelector('#darkbutton')
let body = document.querySelector('body')
let container = document.querySelector('.container')

let count = 0

addBtn.addEventListener('click', function () {
    if (input.value != '' && input.value.trim()) {
        count += 1
        let h3Element = document.createElement('h2');
        h3Element.innerText = count + ") " + input.value;
        textInput.append(h3Element)
        input.value = '';
        h2.style.display = 'none';

        // add btn

        let deleted = document.createElement('button')
        deleted.innerText = 'DELETE';
        deleted.style.display = 'none'
        textInput.append(deleted)

        deleted.addEventListener('click', function () {
            h3Element.innerText = ''
            deleted.remove()
            editBtn.remove()
            hamburger.className = ''
            count = 0;
        })

        // edit btn

        let editBtn = document.createElement('button');
        editBtn.innerText = 'EDIT'
        editBtn.style.display = "none"
        textInput.append(editBtn)

        editBtn.addEventListener('click', function () {
            editBtn.remove();
            deleted.remove();
            input.value = h3Element.innerText;
            h3Element.innerText = '';
            hamburger.className = '';
        })

        // hamburger created

        let hamburger = document.createElement('i')
        hamburger.className = 'fa-solid fa-bars'
        textInput.append(hamburger)

        hamburger.addEventListener('click', function () {
            if (editBtn.style.display == "none") {
                editBtn.style.display = 'inline'
            } else {
                editBtn.style.display = 'none'
            }
            if (deleted.style.display == "none") {
                deleted.style.display = 'inline'
            } else {
                deleted.style.display = 'none'
            }
        })

    } else {
        alert("Please Enter the Tasks!!!")
    }
})

deleteBtn.addEventListener('click', function () {
    setTimeout(() => {
        alerts.style.display = 'block'
    }, 100)

    setTimeout(() => {
        alerts.style.display = 'none'
        input.value = '';
        textInput.innerText = '';
        count = 0;
        h2.style.display = 'block'
    }, 2000)
})