// Карусель
// важность: 4
// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.

let ul = document.querySelector('ul')
let li = ul.querySelectorAll('li')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

let position = 0;
let count = 3;
let width = 130;

prev.onclick = function () {
    position += +width * +count;
    position = Math.min(position, 0)

    ul.style.marginLeft = position + 'px';
}

next.onclick = function () {
    position -= width * count;
    console.log(+li.length)
    position = Math.max(position, -width * (+li.length - count));
    ul.style.marginLeft = position + 'px';
};