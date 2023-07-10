// "use strict";
// function select(e) {
//   let x = document.querySelector(".page-container-movies-name");
//   let z = `<i class="fa-regular fa-circle-check"></i>`;
//   let arr = [];
//   arr = x;
//   if (e.target.children.length == 0) {
//     e.target.insertAdjacentHTML("beforeend", z);
//     e.target.setAttribute("class", "activeName");
//   } else {
//     e.target.children[0].remove();
//     e.target.classList.remove("activeName");
//   }
//   for (let i = 0; i < x.children.length; i++) {
//     if (e.target !== x.children[i] && x.children[i].children.length !== 0) {
//       x.children[i].children[0].remove();
//       x.children[i].classList.remove("activeName");
//     }
//   }
// }

// function createFilm() {
//   let x;
//   if (event.keyCode == 13) {
//     x = document.querySelector("input");
//     let a = `<p onclick="select(event)">${x.value}</p>`;
//     if (x.value !== "") {
//       document
//         .querySelector(".page-container-movies-name")
//         .insertAdjacentHTML("beforeend", a);
//       x.value = "";
//     } else {
//       alert("Film adı daxil edin");
//     }
//   }
// }

// ////////////////////////////////////////////////////////////////
// let addBtn = document.querySelector(".addBtn");
// let editBtn = document.querySelector(".editBtn");
// let deleteBtn = document.querySelector(".deleteBtn");

// let addInput = document.querySelector(".addInput");
// let arr = [];
// editBtn.addEventListener("click", function () {
//   let arr = JSON.parse(localStorage.getItem("array"));

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == addInput.value) {
//       arr[i] = "salam";
//       console.log("saasflsfhalsh");
//       console.log(arr[i]);
//     }
//   }
//   console.log(arr);
//   localStorage.setItem("array", JSON.stringify(arr));
// });
// deleteBtn.addEventListener("click", function () {});

// addBtn.addEventListener("click", function () {
//   // console.log("salam");
//   // localStorage.setItem("ad", "addInput.value");
//   // localStorage.setItem("name", "Kenan");
//   // sessionStorage.setItem("yas", "28");

//   arr.push(addInput.value);
//   console.log(arr);
//   localStorage.setItem("array", JSON.stringify(arr));
// });

// console.log(JSON.parse(localStorage.getItem("array")));
// localStorage.removeItem("ad");
// localStorage.clear();
// let arr = JSON.parse(localStorage.getItem("array"));
let filmInput = document.querySelector(".filmName");
let filmEdit = document.querySelector(".filmEdit");
let filmBox = document.querySelector(".filmBox");
let editBtn = document.querySelector(".editBtn");
let deleteBtn = document.querySelector(".deleteBtn");

// console.log(arr);
let array = [];

// create ui

// filmArr.forEach((element) => {
//   let p = document.createElement("p");
//   p.innerText = element;
//   filmBox.appendChild(p);
// });

JSON.parse(localStorage.getItem("array"))?.forEach((element) => {
  let p = document.createElement("p");
  p.innerText = element;
  filmBox.appendChild(p);
});

// add film
filmInput.addEventListener("keypress", function (event) {
  filmBox.innerHTML = "";

  if (event.key === "Enter") {
    event.preventDefault();
    // console.log("salam");
    array.push(filmInput.value);
    // console.log(array);
    localStorage.setItem("array", JSON.stringify(array));

    JSON.parse(localStorage.getItem("array")).forEach((element) => {
      let p = document.createElement("p");
      p.innerText = element;
      filmBox.appendChild(p);
    });
  }
});
// Edit film
editBtn.addEventListener("click", function () {
  // console.log("salam");

  let filmArr = JSON.parse(localStorage.getItem("array"));
  // filmArr.map((element) => {
  //   console.log(element);

  //   if (element == filmInput.value) {
  //     element = "guri777";
  //     console.log("guri777");
  //   }
  // });
  for (let i = 0; i < filmArr.length; i++) {
    if (filmArr[i] == filmInput.value) {
      filmArr[i] = filmEdit.value;
    }
  }
  console.log(filmArr);
  localStorage.setItem("array", JSON.stringify(filmArr));
  filmArr.forEach((element) => {
    let p = document.createElement("p");
    p.innerText = element;
    filmBox.appendChild(p);
  });
});

// delete

deleteBtn.addEventListener("click", function () {
  let filmArr = JSON.parse(localStorage.getItem("array"));
  // console.log("salam");
  console.log(filmArr);
  for (let i = 0; i < filmArr.length; i++) {
    if (filmArr[i] == filmInput.value) {
      filmArr.splice(i, 1);
    }
  }
  localStorage.setItem("array", JSON.stringify(filmArr));
  JSON.parse(localStorage.getItem("array")).forEach((element) => {
    let p = document.createElement("p");
    p.innerText = element;
    filmBox.appendChild(p);
  });
});

// localStorage.clear();
