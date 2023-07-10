/*  8. Proqrama il, ay, gün adında məlumat daxil edilir. Daxil edilən məlumatın yaşadığımız ilə kimi olan tarix formatına 
uyğun olub olduğunu təyin edən proqram tərtib edin. Bütün ayların 31 gündən ibarət olduğunu qəbul edin.
Məsələn: year=1999 , month=2, day=31 yazdıqda cavab bu şəkildə olmalıdır:
Result: 31.2.1999
Məsələn: year=2099 , month=10, day=3 yazdıqda cavab bu şəkildə olmalıdır:

Result: Tarix uyğun deyil

Məsələn: year=2022 , month=10, day=43 yazdıqda cavab bu şəkildə olmalıdır:

Result: Tarix uyğun deyil  */

const year = 2022
const month = 12
const day = 35

if (year <= 2022 && month <= 12 && day <= 31) {
    console.log(day + "." + month + "." + year)
}else{
    console.log("Tarix uyğun deyil")
}