// Сумма с помощью замыканий
// важность: 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

function sum(a) {
    return function(b) {
        console.log(a + b)
    }
}

sum(1)(2) // 3
sum(5)(-1) // 4
sum(-7)(12) // 5

