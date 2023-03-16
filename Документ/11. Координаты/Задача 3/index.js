// Покажите заметку около элемента (абсолютное позиционирование)
// важность: 5
// Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.

// Это предотвратит расхождение элементов при прокрутке страницы.

// Используйте решение предыдущего задания для начала. 
// Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">.

function positionAt(anchor, position, elem) {
    anchor.append(elem)
    elem.style.position = 'absolute'
    let top = anchor.getBoundingClientRect().top
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