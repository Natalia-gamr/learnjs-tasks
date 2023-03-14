// Спрячьте сообщения с помощью делегирования
// важность: 5
// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.

// P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего.

let container = document.querySelector('#container')

container.addEventListener('click', (e) => {
    let target = e.target;
    if (target.className != 'remove-button') return;

    let pane = container.querySelector('.pane')
    pane.remove()
})