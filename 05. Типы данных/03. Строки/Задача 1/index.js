// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

function ucFirst(str) {
    let newStr = str[0].toUpperCase() + str.slice(1);
    console.log(newStr);
}

ucFirst("вася");