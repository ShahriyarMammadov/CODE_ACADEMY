let header = document.getElementById("header")
window.onscroll = function () { scrollFunction() };
function scrollFunction() {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        header.style.backgroundColor = 'white'
    } else {
        header.style.backgroundColor = "#F0EBDD"
    }
}