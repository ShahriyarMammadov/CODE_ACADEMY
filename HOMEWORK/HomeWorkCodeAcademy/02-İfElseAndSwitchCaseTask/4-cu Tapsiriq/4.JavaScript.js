/*4. 3 ədəd verilib. Bu ədədlərin birləşməsindən yaranan ən böyük və ən kiçik 3 rəqəmli ədədi tapan proqram tərtib edin. 
Proqramın qaytardığı cavab number tipində olmalıdır. Yəni ki, aldığımız cavabı başqa bir ədədlə toplaya, çıxa və s. edə bilərik.
Məsələn: a=4, b=5, c=6 daxil etdikdə cavab bu şəkildə olmalıdır:
Big number: 654 
Little number: 456 */


let a = 4
let b = 2
let c = 6

if (a > b && a > c && b > c) {
    console.log("Big number ;", a * 100 + b * 10 + c)
    console.log("Little number ;", c * 100 + b * 10 + a)
}
else if (a > b && a > c && b < c) {
    console.log("Big number ;", a * 100 + c * 10 + b)
    console.log("Little number ;", b * 100 + c * 10 + a)
}
else if (a < b && b > c && a > c) {
    console.log("Big number ;", b * 100 + a * 10 + c)
    console.log("Little number ;", c * 100 + a * 10 + b)
}
else if (a < b && b > c && a < c) {
    console.log("Big number ;", b * 100 + c * 10 + a)
    console.log("Little number ;", a * 100 + c * 10 + b)
}
else if (c > b && a < c && b > a) {
    console.log("Big number ;", c * 100 + b * 10 + a)
    console.log("Little number ;", a * 100 + b * 10 + c)
}
else if (c > b && a < c && a > b) {
    console.log("Big number ;", c * 100 + a * 10 + b)
    console.log("Little number ;", b * 100 + a * 10 + c)
}