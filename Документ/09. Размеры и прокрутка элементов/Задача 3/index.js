// Поместите мяч в центр поля
// важность: 5

let field = document.querySelector('#field')
let ball = document.querySelector('#ball')
let widthBall = getComputedStyle(ball).width.slice(0, 2)
let heightBall = getComputedStyle(ball).height.slice(0, 2)
let heightField = field.clientHeight
let widthField = field.clientWidth

ball.style.top = heightField / 2 - heightBall / 2 + 'px'
ball.style.left = widthField / 2 - widthBall / 2 + 'px'

