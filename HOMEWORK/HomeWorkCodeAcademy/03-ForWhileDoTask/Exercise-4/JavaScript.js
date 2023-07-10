let m = 8;
let n = 2;
let sum = m;
let a = 0;

for (i = m; i >= 1; i--) {
    sum = sum / n
    a++
    if (sum == 1) {
        console.log(`${m} ededi ${n} ededinin ${a}-ci dereceden quvvetidir`)
        console.log()
        break
    } if (i == 2) {
        console.log("deyil")
        break
    }
}