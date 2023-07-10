/* 2. Daxil edilən ədədin sadə ədəd olub olmadığını təyin edən proqram tərtib edin.
Məsələn a=3 cavab sadədir. a=81 cavab - mürəkkəbdir. */

const number = 6;

let b = 0;

if (number == 1) {
    console.log("daxil edilen eded 1-den boyuk olmalidir!!");
}
else if (number > 1) {
    for (let i = 2; i < number / 2; i++) {
        if (number % i == 0) {
            b = 1;
            break;
        }
    }
    if (b == 1) {
        console.log(`${number} ededi murekkeb ededdir`);
    }
    else {
        console.log(`${number} ededi sade ededdir`)
    }
}