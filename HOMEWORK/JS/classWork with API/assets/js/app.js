const countriesAbout = "https://restcountries.com/v2/";
let cardBox = document.querySelector('.cardBox')
let darkModeBtn = document.querySelector('#darkMode')
let search = document.querySelector('#searchInput')
let card = document.querySelector('.card')
let body = document.querySelector('.body')
let counts = document.querySelector('counts')
let filterRegion = document.querySelector('.floatingSelect')
var modal = document.getElementById("myModal");
let modalContent = document.querySelector('.modal-content')
var span = document.getElementsByClassName("close")[0];
let yazi = document.querySelector('.yazi')

let selected2 = document.querySelector('#selected2')

// let selected1 = document.querySelector('#selected1')
// let selected3 = document.querySelector('#selected3')
// let selected4 = document.querySelector('#selected4')
// let selected5 = document.querySelector('#selected5')
// let selected6 = document.querySelector('#selected6')

function fetchCountries(endpoint) {
    fetch(`${countriesAbout}${endpoint}`)
        .then((response) => response.json())
        .then((data) => {
            let countriesData = data;

            data.forEach((element) => {
                if (element) {
                    cardBox.innerHTML += `
      <div class="col-sm-3 col-md-6 col-lg-3">
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${element.flags.svg}" alt="Card image cap">
      <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <h6 class="card-title">Population: ${element.population}</h6>
          <h6 class="card-title">Region: ${element.region}</h6>
          <h6 class="card-title">Capital: ${element.capital}</h6>
         
      </div>
  </div>
  
      </div>
      `;
                }
            });
            search.addEventListener("input", function () {
                let filterCountries = countriesData.filter((country) =>
                    country.name
                        .toLocaleLowerCase()
                        .includes(search.value.toLocaleLowerCase())
                );
                cardBox.innerHTML = "";
                filterCountries.forEach((element) => {
                    if (element) {
                        cardBox.innerHTML += `
            <div class="col-3">
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${element.flags.svg}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <h6 class="card-title">Population: ${element.population}</h6>
                <h6 class="card-title">Region: ${element.region}</h6>
                <h6 class="card-title">Capital: ${element.capital}</h6>
               
            </div>
        </div>
        
            </div>
            `;
                    }
                });
            })
            let cards = document.querySelectorAll('.card')
            cards.forEach(element => {
                element.addEventListener('click', function () {
                    let namesi = this.children[1].children[0].innerText
                    const BASE_URL_2 = "https://restcountries.com/v3.1/name/";

                    function fetchData(endpoint) {
                        fetch(`${BASE_URL_2}${endpoint}`)
                            .then((response) => response.json())
                            .then((data) => data.forEach((element) => {
                                modalContent.innerHTML += `    
                                <div class="conta">
                                    <div class="content">
                                        <div class="image">
                                            <img src="${element.flags.svg}" alt="img in country">
                                            <h4>${element.name.official}</h4>
                                        </div>
                                        <div class="proto">
                                        <div class='text'>
                                            <h5>Capital: ${element.capital}</h5>
                                            <h5>Phone IDD: ${element.idd.suffixes}</h5>
                                            <h5>Area: ${element.area} m2</h5>
                                            <h5>SubRegion: ${element.subregion}</h5>
                                            <a href="${element.maps.googleMaps}">Visit the Google Maps</a>
                                            <h5>Car Sign: ${element.car.signs}</h5>
                                            <h5>Time Zone: ${element.timezones}</h5>
                                            </div>
                                            <div class='coat'>
                                            <img src="${element.coatOfArms.svg}" alt="img in country">
                                            </div>
                                        </div>
                                    </div>
                                </div>`
                            }))
                            .catch((err) => console.log(err));
                    }
                    fetchData(namesi)
                    modalContent.innerHTML = ''
                    modal.style.display = "block";

                })
            });
        })
        .catch((err) => console.log(err));
}
fetchCountries('all');


darkModeBtn.addEventListener('click', function () {
    body.classList.toggle('dark')
})




span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}