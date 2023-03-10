// Случайное целое число от min до max
// важность: 2
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

function randomInteger(min, max) {
    let random = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(random);
}

console.log( randomInteger(1, 5) ); 
console.log( randomInteger(1, 5) ); 
console.log( randomInteger(1, 5) );