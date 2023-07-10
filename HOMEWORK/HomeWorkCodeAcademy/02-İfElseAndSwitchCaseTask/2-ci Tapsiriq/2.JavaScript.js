/*2. 3 ədəd verilib. Bu 3 ədəd içindən cəmləri ən böyük olan 2 ədədi qaytaran proqram tərtib edin. 
Məsələn: a=1, b=2, c=3 daxil etdikdə cavab bu şəkildə olmalıdır: Big sum result 2 and 3*/

let a = 180
let b = 18
let c = 101

if (a + b > a + c && a + b > b + c) {
    console.log("big sum result" + " " + a + " " + "and" + " " + b)
} else if (a + c > a + b && a + c > b + c) {
    console.log("big sum result" + " " + a + " " + "and" + " " + c)
} else if (b + c > a + b && b + c > a + c) {
    console.log("big sum result" + " " + b + " " + "and" + " " + c)
}