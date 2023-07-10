/* 5. 3 rəqəmli hər hansı bir ədəd verilib. Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram tərtib edin. 
Məsələn: number=652 daxil etdikdə  cavab bu şəkildə olmalıdır:
Result: 6, 5, 2 */


let number = 989

let b = number % 10 //------teklik
let c = ((number / 10) - (b / 10)) % 10 //-------onluq

let d = (number - ((c * 10) + b)) / 100 //-----yuzluk

console.log(d + "," + c + "," + b)