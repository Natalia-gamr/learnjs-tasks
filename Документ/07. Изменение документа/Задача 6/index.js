// Выведите список потомков в дереве
// важность: 5
// Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. 
// Узлы нижнего уровня, без детей – пропускайте.

let li = document.querySelectorAll('li');

for (let item of li) {
    let count = item.querySelectorAll('li').length;
    item.firstChild.data
    if (!count) continue;
    item.firstChild.data += ` [${count}]`
}