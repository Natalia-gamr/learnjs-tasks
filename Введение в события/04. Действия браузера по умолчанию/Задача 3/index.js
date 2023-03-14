// Галерея изображений
// важность: 5
// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
// P.S. Используйте делегирование.

let largeImg = document.querySelector('#largeImg')
let thumbs = document.querySelector('#thumbs')

thumbs.addEventListener('click', (e) => {
    let target = e.target.closest('a')

    if (!target) return;
    e.preventDefault()

    largeImg.src = target.href
    largeImg.title = target.title
})