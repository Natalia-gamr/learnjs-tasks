// Создать раскрывающееся меню
// важность: 5
// Создать меню, которое по нажатию открывается либо закрывается:

let arrows = document.querySelectorAll('.arrow')
let ul = document.querySelector('ul')
let button = document.querySelector('#button')

button.addEventListener('click', () => {
    ul.classList.toggle('close')
    arrows.forEach((arrow) => {
        arrow.classList.toggle('open')
    })
})