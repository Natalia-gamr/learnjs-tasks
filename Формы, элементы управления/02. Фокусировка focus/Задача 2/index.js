// Редактирование TD по клику
// важность: 5
// Сделайте ячейки таблицы редактируемыми по клику.

// По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. 
// Изменение размера ячейки должно быть отключено.
// Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
// Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.
// Таблица может иметь множество ячеек. Используйте делегирование событий.

let table = document.getElementById('bagua-table');

table.addEventListener('click', edit)

function edit(event) {
    let td = event.target.closest('td')
    if (!td) return
    if (!this.contains(td)) return

    table.removeEventListener('click', edit)

    let textarea = document.createElement('textarea')
    let coords = td.getBoundingClientRect()

    textarea.value = td.innerHTML
    textarea.classList = 'edit'
    textarea.style.width = coords.right - coords.left + 'px'
    textarea.style.height = coords.bottom - coords.top - 4 + 'px'

    td.replaceWith(textarea)
    textarea.focus()

    let wrapper = document.createElement('div')
    let ok = document.createElement('button')
    let cancel = document.createElement('button')

    ok.innerHTML = 'OK'
    cancel.innerHTML = 'CANCEL'

    wrapper.style.position = 'absolute'
    wrapper.style.left = coords.left + 'px'
    wrapper.style.top = coords.bottom + 'px'

    document.body.append(wrapper)
    wrapper.append(ok)
    wrapper.append(cancel)

    wrapper.addEventListener('click', confirmClick)

    function confirmClick(event) {
        if (event.target !== cancel && event.target !== ok) return

        if (event.target === ok) {
            td.innerHTML = textarea.value
        }

        wrapper.remove()
        textarea.replaceWith(td)
        table.addEventListener('click', edit)
    }
}