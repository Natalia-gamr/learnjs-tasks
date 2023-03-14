// Спрятать себя
// важность: 5
// Создайте кнопку, которая будет скрывать себя по нажатию.

let button = document.querySelector('#hider')

button.onclick = function() {
    this.hidden = true
}