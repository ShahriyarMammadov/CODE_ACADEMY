let headerInput = document.querySelector('#input')
let addBtn = document.querySelector('#addBtn')
let deleteBtn = document.querySelector('#deleteBtn')
let ulElement = document.querySelector('#ulElement')
let buttons = document.querySelector('.buttons')
let alerts = document.querySelector('.alert')


addBtn.addEventListener('click', function () {
    if (headerInput.value == '') {
        alert('task yazilmayib')
    } else {
        let li = document.createElement('li')
        li.innerText = headerInput.value;
        ulElement.append(li)
        headerInput.value = ''
        // button create

        let delBtn = document.createElement('button')
        delBtn.innerText = 'DELETE'
        ulElement.append(delBtn)
        delBtn.style.display = 'none'

        let editBtn = document.createElement('button')
        editBtn.innerText = 'EDIT'
        editBtn.style.display = 'none'
        let xElem = document.createElement('em')
        xElem.style.marginLeft = '10px'
        xElem.style.cursor = 'pointer'
        xElem.innerText = 'X'
        ulElement.append(xElem)
        ulElement.append(editBtn)
        ulElement.append(xElem)

        xElem.addEventListener('click', function () {
            if (editBtn.style.display == "none") {
                editBtn.style.display = 'inline'
            } else {
                editBtn.style.display = 'none'
            }
            if (delBtn.style.display == "none") {
                delBtn.style.display = 'inline'
            } else {
                delBtn.style.display = 'none'
            }
        })

        delBtn.addEventListener('click', function () {
            li.remove()
            delBtn.remove()
            editBtn.remove()
            xElem.remove()
        })

        editBtn.addEventListener('click', function () {
            headerInput.value = li.innerText;
            li.remove()
            delBtn.remove()
            editBtn.remove()
            xElem.remove()
        })
    }
})

deleteBtn.addEventListener('click', function () {
    alerts.style.display = 'block'
    setTimeout(() => {
        ulElement.innerHTML = ''
        headerInput.value = ''
        alerts.style.display = 'none'
    }, 2000);
})