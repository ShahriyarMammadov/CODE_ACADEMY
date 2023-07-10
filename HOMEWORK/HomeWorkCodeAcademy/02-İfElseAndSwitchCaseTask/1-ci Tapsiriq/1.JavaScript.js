/*1. Ayın adlarına uyğun olaraq neçə gündən ibarət olduğunu cavablandıran alqoritm tərtib edin. 
Alqoritm  Switch Case  vasitəsi ilə hər iki dildə yazılsın. Məsələn. month=january dedikdə cavab january has 31 days, 
month=february dedikdə cavab february has 28 days şəklində olsun*/

let month = "may";

switch (month) {
    case "january":
        console.log("january has 31 days");
        break;
    case "february":
        console.log("february has 28 days");
        break;
    case "march":
        console.log("march has 31 days");
        break;
    case "april":
        console.log("april has 30 days");
        break;
    case "may":
        console.log("may has 31 days");
        break;
    case "june":
        console.log("june has 30 days");
        break;
    case "july":
        console.log("july has 31 days");
        break;
    case "august":
        console.log("august has 31 days");
        break;
    case "september":
        console.log("september has 30 days");
        break;
    case "october":
        console.log("october has 31 days");
        break;
    case "november":
        console.log("november has 30 days");
        break;
    case "december":
        console.log("december has 31 days");
        break;
    default:
        console.log("elə bir ay yoxdur, düzgün və yenidən yazın!!")
}
