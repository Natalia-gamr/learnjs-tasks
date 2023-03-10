// createTextNode vs innerHTML vs textContent
// важность: 5
// У нас есть пустой DOM-элемент elem и строка text.

// Какие из этих 3-х команд работают одинаково?  1 и 3, вставка происходит как текст

elem.append(document.createTextNode(text))  // *
elem.innerHTML = text // Вставка происходит как HTML
elem.textContent = text  // *