// Сортируемая таблица
// важность: 4
// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.
// В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, 
// ведь числа сортируются иначе, чем строки.
// Сортировка должна поддерживать только типы "string" и "number".
// P.S. Таблица может быть большой, с любым числом строк и столбцов.

let grid = document.querySelector('#grid')


grid.addEventListener('click', (e) => {
  let target = e.target
  if (target.tagName != 'TH') return;

  let type = target.dataset.type
  let tbody = grid.querySelector('tbody')
  let index = target.cellIndex
  let rows = Array.from(tbody.rows)
  let sortedGrid;


  if (type === 'number') {
    sortedGrid = rows.sort((rowA, rowB) => {
      return rowA.cells[index].innerHTML - rowB.cells[index].innerHTML;
    })
  }

  if (type === 'string') {
    sortedGrid = rows.sort((rowA, rowB) => {
      return rowA.cells[index].innerHTML > rowB.cells[index].innerHTML ? 1 : -1;
    })
  }

  tbody.append(...sortedGrid)
})