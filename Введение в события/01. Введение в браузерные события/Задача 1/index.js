// Скрыть элемент по нажатию кнопки
// важность: 5
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

let div = document.querySelector('#text')
let button = document.querySelector('#hider')

button.addEventListener('click', () => {
    div.style.display = 'none'
})