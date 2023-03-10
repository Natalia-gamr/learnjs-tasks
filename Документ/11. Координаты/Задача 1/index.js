// Найдите координаты точек относительно окна браузера
// важность: 5
// Ваш код должен при помощи DOM получить четыре пары координат:

// верхний левый, внешний угол (это просто).
// нижний правый, внешний угол (тоже просто).
// верхний левый, внутренний угол (чуть сложнее).
// нижний правый, внутренний угол (есть несколько способов, выберите один).
// Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

// P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.


let field = document.querySelector('#field')
let coords = field.getBoundingClientRect()
let offsetLeft = [coords.left, coords.top]
let offsetRight = [coords.right, coords.bottom]
let clientLeft = [coords.left + field.clientLeft, coords.top + field.clientTop]
let clentRight = [coords.left + field.clientLeft + field.clientWidth, coords.top + field.clientTop + field.clientTop]

console.log(coords)
console.log(offsetLeft)
console.log(offsetRight)
console.log(clientLeft)
console.log(clentRight)