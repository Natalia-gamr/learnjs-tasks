// Покажите заметку рядом с элементом
// важность: 5
// Создайте функцию positionAt(anchor, position, elem), 
// которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.

// Аргумент position – строка с одним из 3 значений:

// "top" – расположить elem прямо над anchor
// "right" – расположить elem непосредственно справа от anchor
// "bottom" – расположить elem прямо под anchor
// Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. 
// Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.

function positionAt(anchor, position, elem) {
    anchor.append(elem)
    let top = anchor.getBoundingClientRect().top
    let bottom = anchor.getBoundingClientRect().bottom
    let right = anchor.getBoundingClientRect().right
    let left = anchor.getBoundingClientRect().left
    switch (position) {
        case 'top':
            elem.style.top = top - elem.offsetHeight + 'px'
            elem.style.left = left + 'px'
            break;
        case 'right':
            elem.style.top = top + 'px'
            elem.style.left = left + anchor.offsetWidth + 'px'
            break;
        case 'bottom':
            elem.style.top = top + anchor.offsetHeight + 'px'
            elem.style.left = left + 'px'
            break;
    }
}

function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");