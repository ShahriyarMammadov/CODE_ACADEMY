let input = document.querySelector('#sual')
let cvb1 = document.querySelector('.cvb1')
let cvb2 = document.querySelector('.cvb2')
let cvb3 = document.querySelector('.cvb3')
let cvb4 = document.querySelector('.cvb4')
let btn = document.querySelector('#button')
let correct = document.querySelector('#correct')
let quizeBasla = document.querySelector('#quizeBasla')
let box = document.querySelector('.box')
let konsol = document.querySelector('#konsol')


let array = JSON.parse(localStorage.getItem("data")) ?? []


btn.addEventListener('click', function () {


    let obj = {
        sual: '',
        A: '',
        B: '',
        C: '',
        D: '',
        dogru: '',
    }

    obj.sual = input.value
    obj.A = cvb1.value
    obj.B = cvb2.value
    obj.C = cvb3.value
    obj.D = cvb4.value
    obj.dogru = correct.value

    input.value = ''
    cvb1.value = ''
    cvb2.value = ''
    cvb3.value = ''
    cvb4.value = ''
    correct.value = ''

    array.push(obj)

    localStorage.setItem("data", JSON.stringify(array))

    // console.log(array)
})

quizeBasla.addEventListener('click', function () {
    array?.forEach(element => {
        let html =
            `<h3>  ${element.sual}</h3>
            <p> <input type="radio"  name='test'> A: ${element.A} </p>
            <p> <input type="radio" name='test'> B: ${element.B} </p>
            <p> <input type="radio" name='test'> C: ${element.C} </p>
            <p> <input type="radio" name='test'> D: ${element.D} </p>
            <hr>
            `;
        box.insertAdjacentHTML("afterend", html);
    });
});

konsol.addEventListener('click', function () {
    console.log(JSON.parse(localStorage.getItem("data")))
})

// localStorage.clear()