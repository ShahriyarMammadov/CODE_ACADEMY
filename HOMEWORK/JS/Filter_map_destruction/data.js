let box = document.querySelector('.box')

// fetch("https://northwind.vercel.app/api/products")
//     .then(response => response.json())
//     .then(data => console.log(data.map(q => q.name = "Shahriyar")))


fetch('https://northwind.vercel.app/api/products/')
    .then((response) => response.json())
    .then((json) => {
        for (let element of json) {
            console.log(element.name = 'Shahriyar')
        }
    })