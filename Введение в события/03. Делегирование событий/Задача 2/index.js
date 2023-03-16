// Раскрывающееся дерево
// важность: 5
// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков
// Требования:
// Использовать только один обработчик событий (применить делегирование)
// Клик вне текста заголовка (на пустом месте) ничего делать не должен.

let tree = document.querySelector('.tree')
let span = document.createElement('span')
let li = tree.querySelectorAll('li')

li.forEach((item) => {
    let content = item.firstChild.textContent
    item.firstChild.textContent = ''
    item.insertAdjacentHTML('afterbegin', `<span>${content}</span>`)
})

tree.addEventListener('click', (e) => {
    let target = e.target
    if (target.tagName != 'SPAN') return

    let elem = target.parentNode.querySelector('ul')

    if (elem) {
        elem.style.display == 'none' ? elem.style.display = 'block' : elem.style.display = 'none'
    } else {
        return
    }
})