let usersBlog = document.querySelector('.users')

function dataUsers() {
    fetch(`${'http://localhost:8000/blogs'}`)
        .then(Response => Response.json())
        .then(data => 
            {
            data.forEach(element => {
            let array = element
            usersBlog.innerHTML += `
            <div class="${element.id}">
                <h3>${element.title}</h3>
                <p>${element.body}</p>
                <p>written by ${element.author}</p>
                <button id="${element.id}">Delete</button>
            </div>`
        })
        let delBtn = document.querySelectorAll('button')
        delBtn.forEach(del => {
            del.addEventListener('click', function () {
                fetch(`http://localhost:8000/blogs/${this.id}`, {
                  method: "DELETE"
                });
            })
        });
    }
        )
}

dataUsers()