let blueColor = document.querySelector('.blue')
let redColor = document.querySelector('.red')
let size7 = document.querySelector('.size-7')
let size8 = document.querySelector('.size-8')
let size9 = document.querySelector('.size-9')
let size10 = document.querySelector('.size-10')
let size11 = document.querySelector('.size-11')
let chart = document.querySelector('#chart')
let order = document.querySelector('#order')
let clear = document.querySelector('#clear')
let sizes = document.querySelectorAll('.sizes')

let array = []

blueColor.addEventListener('click', function () {
    array.push('color: blue')
})
redColor.addEventListener('click', function () {
    array.push('color: red')
})

array.push('name: Air')

// name,color,size
size7.addEventListener('click', function () {
    size7.style.backgroundColor = 'green'
    size7.style.color = 'white'
    size8.style.backgroundColor = 'transparent'
    size9.style.backgroundColor = 'transparent'
    size10.style.backgroundColor = 'transparent'
    size11.style.backgroundColor = 'transparent'
    size8.style.color = 'black'
    size9.style.color = 'black'
    size10.style.color = 'black'
    size11.style.color = 'black'

    array.push(`size: ${size7.innerText}`)
})
size8.addEventListener('click', function () {
    size8.style.backgroundColor = 'green'
    size8.style.color = 'white'
    size7.style.backgroundColor = 'transparent'
    size9.style.backgroundColor = 'transparent'
    size10.style.backgroundColor = 'transparent'
    size11.style.backgroundColor = 'transparent'
    size7.style.color = 'black'
    size9.style.color = 'black'
    size10.style.color = 'black'
    size11.style.color = 'black'

    array.push(`size: ${size8.innerText}`)

})
size9.addEventListener('click', function () {
    size9.style.backgroundColor = 'green'
    size9.style.color = 'white'
    size7.style.backgroundColor = 'transparent'
    size8.style.backgroundColor = 'transparent'
    size10.style.backgroundColor = 'transparent'
    size11.style.backgroundColor = 'transparent'
    size7.style.color = 'black'
    size8.style.color = 'black'
    size10.style.color = 'black'
    size11.style.color = 'black'

    array.push(`size: ${size9.innerText}`)
})
size10.addEventListener('click', function () {
    size10.style.backgroundColor = 'green'
    size10.style.color = 'white'
    size7.style.backgroundColor = 'transparent'
    size8.style.backgroundColor = 'transparent'
    size9.style.backgroundColor = 'transparent'
    size11.style.backgroundColor = 'transparent'
    size7.style.color = 'black'
    size8.style.color = 'black'
    size9.style.color = 'black'
    size11.style.color = 'black'

    array.push(`size: ${size10.innerText}`)

})
size11.addEventListener('click', function () {
    size11.style.backgroundColor = 'green'
    size11.style.color = 'white'
    size7.style.backgroundColor = 'transparent'
    size8.style.backgroundColor = 'transparent'
    size9.style.backgroundColor = 'transparent'
    size10.style.backgroundColor = 'transparent'
    size7.style.color = 'black'
    size8.style.color = 'black'
    size9.style.color = 'black'
    size10.style.color = 'black'

    array.push(`size: ${size11.innerText}`)
})


chart.addEventListener('click', function () {
    localStorage.setItem('data', array)
})

clear.addEventListener('click', function () {
    localStorage.clear()
})