let button = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    //vertical(Yuxaridan asagi)
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// let button2 = document.getElementById("button45")

// button2.addEventListener("click", (e) => {
//     console.log(e);
// });


let submitBtn = document.getElementById("submit-btn")
let nameİnput = document.getElementById("name")
let emailİnput = document.getElementById("email")

function submitClick() {
    if (nameİnput.value == "" || emailİnput.value == "") {
        alert("Sizinlə əlaqə saxlamağımız üçün Ad və Email nizi daxil edin!!")
    } else if (nameİnput.value == +nameİnput.value) {
        alert("Adınızı düzgün daxil edin!!!")
    }
    else {
        alert("Müraciətiniz qeydə alındı ən qısa zamanda sizinlə əlaqə saxlanılacaq,     Bizi seçdiyiniz üçün Təşəkkürlər!!")
    }
}