let arr = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]



// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin.


function tHerfi(array, herf) {
    let newArray = []
    array.forEach(e => {
        if (e.name[0] == herf) {
            return newArray.push(e.name)
        }
    });
    console.log(`1) ${herf} Herfi Ile Baslayan Name-ler:  ${newArray}`)
}
tHerfi(arr, "t")


// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin


function tHerfiyleBB(obj, herf) {
    let count = 0
    obj.forEach(e => {
        if (e.name[0] == herf && e.name[e.name.length - 1] == herf) {
            (count++)
        }
    });
    console.log(`2) ${herf} Herfi Ile Baslayin ${herf}-i ile biten obyektlerin sayi:  ${count}`)
}

tHerfiyleBB(arr, "t")


// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin


function keySum(key, herf) {
    let sum = 0
    key.forEach(e => {
        if (e.name[0] == herf && e.name[e.name.length - 1] == herf) {
            sum += e.key
        }
    });
    console.log(`3) ${herf} herfi ile baslayib ve biten obyektlerin keylerin cemi: ${sum}`)
}
keySum(arr, "t")


// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.


// function superDev(arr, herf) {
//     arr.forEach(e => {
//         if (e.name[e.name.length - 1] == herf) {
//             console.log("4)", e.name + " =>", e.name = "SuperDev")
//         }
//     });
// }
// superDev(arr, "e")


// 5) "name"-i en uzun olan obyektin key-i ni tapin


function maxName(array) {
    let max = 0
    array.forEach(e => {
        if (e.name.length > max) {
            max = e.name.length
        }
    });

    array.forEach(element => {
        if (element.name.length == max)
            console.log("5) en uzun name-i olan obyekt-in name-i:", element.name, "ve onun keyi:", element.key)
    });
}

maxName(arr)


// 6)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

function index(array) {
    let max = 0
    array.forEach(e => {
        if (e.name.length > max) {
            max = e.key
        }
    });

    array.forEach(element => {
        if (element.key == max)
            console.log("6) name-i en uzun olan obyekt-in name-i:", element.name, "ve indeksinin kvadrati:", max ** 2)
    });
}

index(arr)


// 7) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.


function nameLengthNewArray(name, uzunluq) {
    let yeniArray = []
    name.forEach(e => {
        if (e.name.length == uzunluq) {
            yeniArray.push(e.name)
        }
    });
    console.log(`7) uzunlugu ${uzunluq} e beraber olan obyektler:`, yeniArray)
}
nameLengthNewArray(arr, 4)


// 8)  en boyuk "key" - i olan obyektin "name"-i ni tapin


function maxKey(array) {
    let max = 0
    array.forEach(e => {
        if (e.key > max) {
            max = e.key
        }
    });

    array.forEach(element => {
        if (element.key == max)
            console.log("8) en boyuk key-i olan obyekt-in name-i:", element.name, "ve indeksi:", max)
    });
}

maxKey(arr)


// 9) terkibinde 2 kiçik 'L' herfi olan obyekt(ler)in index(ler)ini tapin.


function twoLWord(array) {
    array.forEach(i => {
        if (i.name[0] == "l") {
            if (i.name.includes("l", 1)) {
                console.log("9) name:", i.name)
            }
        } else if (i.name.includes("l", 2)) {
            console.log("9) name:", i.name)
        }
    }
    )
};
// const indeks = arr.findIndex(object => {
//     return object.name[0] == "l";
// });
// console.log(indeks)
twoLWord(arr)



// 10) terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.


function twoLWordKey(array) {
    array.forEach(i => {
        if (i.name[0] == "l") {
            if (i.name.includes("l", 1)) {
                console.log("10) key: ", i.key)
            }
        } else if (i.name.includes("l", 2)) {
            console.log("10) key: ", i.key)
        }
    }
    )
};
twoLWordKey(arr)


// 11) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq


function objSearch(array, reqem, herf) {
    array.forEach((e , i)=> {
        if (e.name[0] == herf) {
            if (e.key > reqem) {
                console.log("11) key>10-dan ve ilk herfi l olan obyektler: ", e)
            }
        }
    });
}

objSearch(arr, 10, "l",i)