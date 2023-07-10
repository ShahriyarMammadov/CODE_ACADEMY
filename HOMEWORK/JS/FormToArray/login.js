let forma = document.querySelector('#form2');
let formaninName = document.querySelector('#username2');
let formaninParolu = document.querySelector('#password2');
let formaninButonu = document.querySelector("#sbmButton2")

forma.addEventListener('submit', function (event) {
    event.preventDefault()
    let allUsersData = JSON.parse(localStorage.getItem('usersData'))
    // console.log(allUsersData)
    allUsersData.forEach(element => {
        allUsersData.name == element.name
            ? alert('dogrudur')
            : alert('yanlis')
    });
})