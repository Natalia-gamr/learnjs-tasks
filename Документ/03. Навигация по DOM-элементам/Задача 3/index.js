// Выделите ячейки по диагонали
// важность: 5
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';

let table = document.querySelector('table')

for (let i = 0; i < table.rows.length; i++) {
  let td = table.rows[i].cells[i];
  td.style.backgroundColor = 'red';
}



