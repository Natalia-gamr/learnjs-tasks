// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
    return str.split('-')
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');  
}

console.log(camelize("background-color")) ;
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
