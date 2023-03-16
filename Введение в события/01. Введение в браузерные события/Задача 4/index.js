// Передвиньте мяч по полю
// важность: 5
// Пусть мяч перемещается при клике на поле, туда, куда был клик
// Требования:
// Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;
// Заметки:

// Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.

let ball = document.querySelector('#ball')
let field = document.querySelector('#field')
let fieldCoords = field.getBoundingClientRect()

field.addEventListener('click', (e) => {
    let leftBall = e.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2;
    let topBall = e.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight / 2;

    if (leftBall < 0) leftBall = 0;

    if (topBall < 0) topBall = 0;

    if (leftBall + ball.offsetWidth / 2 > field.clientWidth) {
        leftBall = field.clientWidth - ball.offsetWidth
    }

    if (topBall + ball.offsetHeight / 2 > field.clientHeight) {
        topBall = field.clientHeight - ball.offsetHeight
    }

    ball.style.left = leftBall + 'px'
    ball.style.top = topBall + 'px'
})


