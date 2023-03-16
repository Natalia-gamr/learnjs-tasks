// Добавить кнопку закрытия
// важность: 5
// Есть список сообщений.

// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

let panes = document.querySelectorAll('.pane')
let button = document.querySelectorAll('.remove-button')

for (let pane of panes) {
    pane.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>')
    let button = pane.firstChild
    button.onclick = () => pane.remove()
}
