// Сортировка таблицы
// важность: 5

let table = document.querySelector('table');
let rows = table.rows;
let tbody = table.tBodies;

let sortedTable = Array.from(rows).slice(1)
  .sort((a, b) => a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1);

tbody[0].append(...sortedTable);
