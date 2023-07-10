/*3. 3 ədəd verilib. Bu ədədləri artan və azalan sıra ilə düzün. 
Məsələn: a=1, b=2, c=3 daxil etdikdə cavab bu şəkildə olmalıdır:
Artan sıra: 1, 2, 3 
Azalan sıra: 3, 2, 1 */

let a = 116
let b = 786
let c = 120

if (a > b && a > c && b > c) {
    console.log("Artan sıra: " + c + "," + b + "," + a)
    console.log("Azalan sıra: " + a + "," + b + "," + c)
} else if (a > b && a > c && c > b) {
    console.log("Artan sıra: " + b + "," + c + "," + a)
    console.log("Azalan sıra: " + a + "," + c + "," + b)
} else if (b > a && b > c && c > a) {
    console.log("Artan sıra: " + b + "," + c + "," + a)
    console.log("Azalan sıra: " + a + "," + c + "," + b)
} else if (b > a && b > c && a > c) {
    console.log("Artan sıra: " + c + "," + a + "," + b)
    console.log("Azalan sıra: " + b + "," + a + "," + c)
} else if (c > a && c > b && b > a) {
    console.log("Artan sıra: " + a + "," + b + "," + c)
    console.log("Azalan sıra: " + c + "," + b + "," + a)
} else if (c > a && c > b && a > b) {
    console.log("Artan sıra: " + b + "," + a + "," + c)
    console.log("Azalan sıra: " + c + "," + a + "," + b)
}