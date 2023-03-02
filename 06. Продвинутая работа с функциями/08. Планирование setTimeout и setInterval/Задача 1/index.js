// Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

// function printNumbers(from, to) {
//     let num = from;

//     let timerId = setInterval(() => {
//         alert(num);
//         if (num == to) {
//             clearInterval(timerId)
//         }
//         num++;
//     }, 1000)
// }

// printNumbers(7, 12)

function printNumbers(from, to) {
    let num = from;

    setTimeout(function alertNum() {
        alert(num);
        if (num < to) {
           setTimeout(alertNum, 1000)
        }
        num++;
    }, 1000)
}

printNumbers(7, 12)

