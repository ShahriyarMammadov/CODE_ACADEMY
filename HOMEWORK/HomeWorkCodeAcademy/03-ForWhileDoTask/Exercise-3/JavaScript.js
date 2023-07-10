/* 3. 1-dən 10-a kimi ədədlər dövrü olan for yaradın. Ədədləri çapa verin. 
Lakin 6-dan sonra ekrana heç bir ədəd yazılmasın və for döngüsündən çıxılsın. */

for (i = 1; i <= 10; i++) {
    console.log(i);
    if (i == 6) {
        break
    }
}