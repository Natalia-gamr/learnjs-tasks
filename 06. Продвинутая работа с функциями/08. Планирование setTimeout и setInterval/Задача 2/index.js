// Что покажет setTimeout?
// важность: 5
// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление,
// для завершения которого требуется более 100 мс.

// Когда будет выполнена запланированная функция?

// setTimeout выполнится после завершения кода

// Что покажет alert?

// alert выведет последнее значение из цикла == 100000000

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}