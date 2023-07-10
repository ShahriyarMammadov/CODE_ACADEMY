let title = document.querySelector('#title')
let blogBody = document.querySelector('#blogBody')
let select = document.querySelector('#users');
let option = select.options[select.selectedIndex];
let addBlog = document.querySelector('#addBlog')
let option1 = document.querySelector('#option1')

addBlog.addEventListener('click', function () {
    function getOption() {
        let selectElement = select
        output = selectElement.value;
        option1.value = output
    }
    getOption()

    fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            title: `${title.value}`,
            body: `${blogBody.value}`,
            author: `${option.value}`,
        }),
    });
    window.location.href = 'home.html'
})