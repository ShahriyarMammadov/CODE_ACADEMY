/* 1. Ölkələrin neçə hərfdən ibarət olduğunu çap edən proqram yazırsınız. Cavab konsolda bu şəkildə olmalıdır:
Afghanistan - 11
Albania - 7
Algeria -7
Andorra -7
və s.*/

for (i = 0; i < countries.length; i++) {
    console.log(`${countries[i]} -- ${countries[i].length}`)
}