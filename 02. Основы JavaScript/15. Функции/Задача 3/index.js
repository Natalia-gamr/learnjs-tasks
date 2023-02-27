// Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min (a, b) {
    if (a > b) {
        console.log(b);
    } else if (a < b) {
        console.log(a);
    } else {
        console.log(a);
    }
}

min(2, 5);
min(3, -1);
min(1, 1);