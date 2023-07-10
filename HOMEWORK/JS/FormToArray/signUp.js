let form = document.querySelector('form')
let userName = document.querySelector('#username')
let firstName = document.querySelector('#name')
let password = document.querySelector('#password')
let email = document.querySelector('#email')
let sbmButton = document.querySelector('#sbmButton')


let allUsersData = JSON.parse(localStorage.getItem('usersData')) == null
    ? []
    : JSON.parse(localStorage.getItem('usersData'))

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (userName.value == '' || firstName.value == '' || password.value == '' || email.value == '') {
        alert("hamisini doldurun!!!")
    } else {


        let userObj = {
            userName: '',
            name: '',
            email: '',
            password: '',
        }

        userObj.userName = userName.value;
        userObj.name = firstName.value;
        userObj.email = email.value;
        userObj.password = password.value;

        allUsersData.push(userObj);

        localStorage.setItem('usersData', JSON.stringify(allUsersData))

        userName.value = ''
        firstName.value = ''
        email.value = ''
        password.value = ''
    }
})