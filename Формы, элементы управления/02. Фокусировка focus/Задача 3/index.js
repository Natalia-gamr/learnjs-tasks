// Мышь, управляемая клавиатурой
// важность: 4
// Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать

// P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.
// P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом.

let mouse = document.querySelector('#mouse')
mouse.addEventListener('click', function (e) {
    mouse.tabIndex = 0;
    mouse.focus();
    mouse.style.position = 'absolute';

    mouse.addEventListener('keydown', function (e) {
        let coords = mouse.getBoundingClientRect()
        if (e.code == 'ArrowUp') {
            mouse.style.top = coords.top - mouse.offsetHeight + 'px';
        } else if (e.code == 'ArrowRight') {
            mouse.style.left = coords.left + mouse.offsetWidth + 'px';
        } else if (e.code == 'ArrowDown') {
            mouse.style.top = coords.top + mouse.offsetHeight + 'px';
        } else if (e.code == 'ArrowLeft') {
            mouse.style.left = coords.left - mouse.offsetWidth + 'px';
        };
    })
})