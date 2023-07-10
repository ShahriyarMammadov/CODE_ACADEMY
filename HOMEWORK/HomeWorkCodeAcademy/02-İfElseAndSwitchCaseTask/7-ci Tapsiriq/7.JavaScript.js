/* 7. Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib. Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını 
yoxlayan proqram tərtib edin.
Məsələn: katet1=3, katet2=4, hipotenuz=5 yazdıqda cavab bu şəkildə olmalıdır:

Result: düzbucaqlı üçbucaqdır

Məsələn: katet1=3, katet2=3, hipotenuz=8 yazdıqda cavab bu şəkildə olmalıdır:

Result: düzbucaqlı üçbucaq deyil. */

let katet1 = 6
let katet2 = 8
let hipotenuz = 10

if ((katet1**2)+(katet2**2)==hipotenuz**2){
    console.log("düzbucaqlı üçbucaqdır")
}else{
    console.log("düzbucaqlı üçbucaq deyil!!")
}