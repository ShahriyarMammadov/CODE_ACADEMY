/* 1. 1-dən 20-ə qədər cüt  ədədləri çap edən proqram tərtib edin.(Mütləq for-dan istifadə edin. For bir-bir artmalıdır. 
İf-in içində console(log və ya writeline) istifadə etmək olmaz */
let a;

for (i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        a = i++
    }
    console.log(a)
}