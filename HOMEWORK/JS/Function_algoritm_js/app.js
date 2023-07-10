// 1. Tam ad funksiyasını elan edin və tam adınızı çap edin. 

function tamAd() {
    name = "Shahriyar"
    surname = "Mammadov"
    console.log(`1- ${name} ${surname}`)
}

tamAd()

// 2. Tam Ad funksiyasını elan edin və indi parametr kimi firstName, LastName götürür və o, tam adınızı qaytarır.

function tamAdWithParameters(name, surname) {
    console.log(`2- ${name} ${surname}`)
}

tamAdWithParameters("Shahriyar", "Mammadov")

// 3. addNumbers funksiyasını elan edin və o, iki iki parametr alır və cəmi qaytarır.

function addNumbers(a, b) {
    return a + b;
}

console.log("3-", addNumbers(8, 7))

// 4. Düzbucaqlının sahəsini hesablayan areaOfRectangle funksiyanı yazın. en ve uzunluq parametrlərini alır.

function areaOfRectangle(en, uzunluq) {
    return en * uzunluq
}

console.log("4-", areaOfRectangle(4, 5))

// 5. Düzbucaqlının perimetrini hesablayan perimeterOfRectangle funksiyanı yazın. en ve uzunluq parametrlərini alır.

function perimeterOfRectangle(en, uzunluq) {
    return (en ** 2) + (uzunluq ** 2)
}

console.log("5-", perimeterOfRectangle(8, 10))

// 6. Düzbucaqlı prizmanın həcmini hesablayan VolumOfRectPrism funksiyanı yazın. hündürlük, en ve uzunluq parametrlərini alır.

function VolumOfRectPrism(hundurluk, en, uzunluq) {
    return (en * uzunluq) * hundurluk
}
console.log("6-", VolumOfRectPrism(4, 5, 6))

// 7. Dairənin sahəsini hesablayan areaOfCircle funksiyasını yazın. radius parametrini alır.

function areaOfCircle(radius) {
    return Math.PI * radius ** 2
}

console.log("7-", areaOfCircle(4))

// 8. Bir dairənin çevrəsini hesablayan circumOfCircle funksiyasını yazın. radius parametrini alır.

function areaOfCircle(radius) {
    return 2 * Math.PI * radius
}

console.log("8-", areaOfCircle(8))

// 9. Maddənin sıxlığını hesablayan funksiyanı yazın. kutlə və həcm parametrlərini alır

function sixliq(kutle, hecm) {
    return kutle / hecm
}

console.log("9-", sixliq(10, 5))


// 10. Selsi-Fahrenheit-ə çevirən funksiyanı yazın.

function selsiFarenheyt(farenheyt) {
    return ((5 / 9) * (farenheyt - 32))
}

console.log("10-", selsiFarenheyt(150))


// 11. Bədən kütləsi indeksi (BMI) aşağıdakı kimi hesablanır: bmi = Kg ilə çəki / (hündürlük x boy) m2 ilə. bmi hesablayan funksiyanı yazın. 
// BKİ 20 yaş və ya daha böyük olan yetkinlərdə müxtəlif çəki qruplarını geniş şəkildə müəyyən etmək üçün istifadə olunur. 
// Aşağıda verilmiş məlumat əsasında şəxsin çəkisinin az, normal, artıq çəkisi və ya piylənməsini yoxlayın.

// Eyni qruplar həm kişilərə, həm də qadınlara aiddir.
// Az çəki: BMI 18,5-dən azdır
// Normal çəki: BMI 18,5 ilə 24,9 arasındadır
// Artıq çəki: BMI 25 ilə 29.9 arasındadır
// Obez: BMI 30 və ya daha çox

let bmi;
function bmiFunc(ceki, boy) {
    bmi = (ceki / (boy ** 2));
}


bmiFunc(72, 1.73)

if (bmi < 18.5) {
    console.log(`11- Az ceki: BMI 18.-den azdir`)
} else if (18.5 < bmi < 24.9) {
    console.log(`11- Normal ceki: BMI 18.5 ile 24.9 arasindadir`)
} else if (25 < bmi < 29.9) {
    console.log(`11- Artiq ceki: BMI 25 ile 29.9 daha coxdur`)
} else {
    console.log(`11- Obez: 30 ve ya daha cox`)
}


// 12. CheckSeason adlı funksiyanı yazın, bir ay parametr tələb edir və mövsümü qaytarır: Payız, Qış, Yaz və ya Yay.

function checkSeason(ay) {
    switch (ay) {
        case "sentyabr":
            console.log("12- payiz")
            break;
        case "oktyabr":
            console.log("12- payiz")
            break;
        case "noyabr":
            console.log("12- payiz")
            break;
        case "dekabr":
            console.log("12- qis")
            break;
        case "yanvar":
            console.log("12- qis")
            break;
        case "fevral":
            console.log("12- qis")
            break;
        case "iyun":
            console.log("12 -yay")
            break;
        case "iyul":
            console.log("12- yay")
            break;
        case "avqust":
            console.log("12- yay")
            break;
        case "mart":
            console.log("21- yaz")
            break;
        case "aprel":
            console.log("12- yaz")
            break;
        case "may":
            console.log("12- yaz")
            break;

        default:
            console.log("daxil edilen ay deyil!!")
            break;
    }
}

checkSeason("may")


// 13. max ən böyük arqumentini qaytarır. üç arqument götürən və onların maksimumunu çıxaran findMax funksiyasını yazın.

function mathMax(a, b, c) {
    return Math.max(a, b, c)
}

console.log("13- ", mathMax(4, 8, 50))


// 14. printArray adında arrayın elementlərini çap edən funksiya yazın

let printArray = [1, 2, 3, 4, 8, 9, 7, 10, 15, 80];

// function array(){
//     for(i=0 ; i<printArray.length;i++){
//         console.log(printArray[i])
//     }
// }
// array()

function array() {

    console.log("14- ", printArray.toString())
}

array()


// 15. reverseArray adında arrayin elementlərini tərsinə çevirən funksiya yaradın

const array110 = [1, 2, 3, 4, 8, 9, 7, 10, 15, 80]

function reverse() {
    let array = [1, 2, 3, 4, 8, 9, 7, 10, 15, 80];
    console.log("15- ", array.reverse().toString())
}

reverse()

// function reverseArray() {
//     for (i = array110.length - 1; i > 0; i--) {
//         console.log(array110[i])
//     }
// }

// reverseArray()


// 16. addItem adında arraya element daxil edən funksiya yazın

let array210 = [1, 2, 3, 4, 8, 9, 7, 10, 15, 80]

function addItem() {
    array210.push(12, 45, 76)
    console.log("16-", array210.toString())
}

addItem()


// 17. showDateTime adında tarixi və saatı göstərən funksiya yazın

function time() {
    const date = new Date();
    console.log("17- ", date)
}

time()



// 18

let input = document.getElementById("input12");
let btn = document.querySelector(".btn")

btn.addEventListener("click", function () {
    console.log("salam")
    input.value += btn.innerText
})


// 19


const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan']

const array1 = []

function defArray(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i].length == 5) {
            array1.push(array[i])
        }
    }
    console.log(array1)
}

defArray(countries)