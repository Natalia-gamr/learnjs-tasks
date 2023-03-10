// Считаем потомков
// важность: 5
// У нас есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка <li>:
// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

let li = document.querySelectorAll('li');

for (let i of li) {
  let count = i.querySelectorAll('li').length;
  let title = i.firstChild.data.trim();
  alert(title + ': ' + count);
}