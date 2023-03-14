// Редактируемый div
// важность: 5
// Создайте <div>, который превращается в <textarea>, если на него кликнуть.

// <textarea> позволяет редактировать HTML в элементе <div>.

// Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.
let view = document.querySelector('#view')
let textarea = null

view.onclick = function () {
    textarea = document.createElement('textarea')
    textarea.classList.add('edit')
    textarea.value = view.innerHTML

    textarea.onkeydown = function (e) {
        if (e.key == 'Enter') {
            this.blur()
        }
    }

    textarea.onblur = function () {
        view.innerHTML = textarea.value
        textarea.replaceWith(view)
    }

    view.replaceWith(textarea)
    textarea.focus()
}