// Расположите заметку внутри элемента (абсолютное позиционирование)
// важность: 5
// Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): 
// научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

// Новые значения для аргумента position:

// top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
// top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.

function positionAt(anchor, position, elem) {
    anchor.append(elem)
    elem.style.position = 'absolute'
    let top = anchor.getBoundingClientRect().top
    let left = anchor.getBoundingClientRect().left
    switch (position) {
        case 'top-out':
            elem.style.top = top - elem.offsetHeight + 'px'
            elem.style.left =  left + 'px'
            break;
        case 'right-out':
            elem.style.top = top  + 'px'
            elem.style.left = left + anchor.offsetWidth + 'px'
            break;
        case 'bottom-out':
            elem.style.top = top + anchor.offsetHeight + 'px'
            elem.style.left =  left + 'px'
            break;
        case 'top-in':
            elem.style.top = top + 'px'
            elem.style.left =  left + 'px'
            break;
        case 'right-in':
            elem.style.top = top  + 'px'
            elem.style.left =  left + anchor.offsetWidth - elem.offsetWidth + 'px'
            break;
        case 'bottom-in':
            elem.style.top = top + anchor.offsetHeight - elem.offsetHeight + 'px'
            elem.style.left =  left + 'px'
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


showNote(blockquote, "top-out", 'note top-out');
showNote(blockquote, "top-in", 'note top-in');
showNote(blockquote, "bottom-in", 'note bottom-in');
showNote(blockquote, "bottom-out", 'note bottom-out');
showNote(blockquote, "right-in", 'note right-in');
showNote(blockquote, "right-out", 'note right-out');