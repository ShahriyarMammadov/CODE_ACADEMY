// const catsAPI = "https://api.thecatapi.com/v1/breeds";
// let cardBox = document.querySelector('.cardBox')

// function fetchData() {
//     fetch(`${catsAPI}`)
//         .then((response) => response.json())
//         .then((data) => data.forEach(element => {
//             if (element) {
//                 cardBox.innerHTML += `
//     <div class="col-4">
//     <div class="card" style="width: 18rem;">
//     <img class="card-img-top" src="${element.image.url}" alt="Card image cap">
//     <div class="card-body">
//         <h5 class="card-title">${element.name}</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
//             content.</p>
//         <a href="${element.wikipedia_url}" class="btn btn-primary">Go somewhere</a>
//     </div>
// </div>

//     </div>


//     `}
//         }))
//         .catch((err) => console.log(err));


// }

// fetchData();

// delete

// const BASE_URL_2 = "https://northwind.vercel.app/api/";

// function fetchData(endpoint) {
//     fetch(`${BASE_URL_2}${endpoint}`)
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err));
// }

// fetchData("suppliers");

// function deleteById(endpoint, id) {
//     fetch(`${BASE_URL_2}${endpoint}/${id}`, {
//         method: "DELETE",
//     });
// }

// POST

// let supplierObj = {
//     companyName: "Test",
//     contactName: "Code Academy",
//     contactTitle: "Manager",
//     address: {
//         street: "28 may yaxinligi",
//         city: "London",
//         region: "Absseron",
//         postalCode: 1532,
//         country: "GE",
//         phone: "1532",
//     },
// };

// supplierObj.contactName = "Programming";
// supplierObj.contactName = "FrontEnd Programming";

// function postNewSupplier(endpoint, obj) {
//     fetch(`${BASE_URL_2}${endpoint}`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(obj),
//     });
// }


// put

// function updateById(endpoint, id) {
//     fetch(`${BASE_URL_2}${endpoint}/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(supplierObj),
//     });
// }

// updateById("customers", "BERGS");

// -------------------------------

let box = document.querySelector('.cardBox')

// function usersData() {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//         .then((response) => response.json())
//         .then((data) => data.forEach(element => {
//             box.innerHTML += `
//         <div class="col-4">
//             <div class="card" style="width: 18rem;">
//             <h5 class="card-title">ID: ${element.id}</h5>
//             <h5 class="card-title">UserName: ${element.username}</h5>
//             <h5 class="card-title">Name: ${element.name}</h5>
//             <h5 class="card-title">Street: ${element.address.street}</h5>
//              <div class="card-title">
//                  <h5 class="card-title">Email: ${element.email}</h5>
//                  <p class="card-title">Phone: ${element.phone}</p>
//                  <a href="${element.website}" class="btn btn-primary">Go somewhere</a>
//              </div>
//             </div>

//         </div>`
//         }))
//         .catch((err) => console.log(err))
// }

// usersData()

let DATA_BASE = `https://jsonplaceholder.typicode.com/users`

function datasUsers() {
    fetch(`${DATA_BASE}`)
        .then((result) => {
            return result.json()
        }).then((data) => console.log(data.filter(d => d.name === 'Kurtis Weissnat')))
        .catch((err) => {
            console.log(err)
        });
}

datasUsers()

// const data = [
//     {
//         name: 'Bob',
//         gender: 'male',
//         age: 34,
//     },
//     {
//         name: 'Carol',
//         gender: 'female',
//     },
//     {
//         name: 'Ted',
//         gender: 'male',
//         age: 38,
//     },
//     {
//         name: 'Alice',
//         gender: 'female',
//         age: 40,
//     },
// ];

// const arr1 = data.filter(d => d.age > 37);
// console.log('arr1', arr1);

// const arr2 = data.filter(d => d.gender === 'female');
// console.log('arr2', arr2);

// const ageAndGender = d => d.age > 37 && d.gender === 'female';
// const arr3 = data.filter(ageAndGender);
// console.log('arr3', arr3);

// const arr4 = data.filter(l => l.name.length == 3)
// console.log('arr4', arr4)