// Создайте календарь в виде таблицы
// важность: 4
// Напишите функцию createCalendar(elem, year, month).

// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. 
// У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

// Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:
// P.S. В этой задаче достаточно сгенерировать календарь, кликабельным его делать не нужно.

function createCalendar(elem, year, month) {
    let m = new Date(year, month - 1);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    function getDay(date) { 
      let day = date.getDay();
      if (day == 0) day = 7; 
      return day - 1;
    }

    for (let i = 0; i < getDay(m); i++) {
    table += '<td></td>';
    }

    while (m.getMonth() == month - 1) {
        table += '<td>' + m.getDate() + '</td>';

        if (getDay(m) % 7 == 6) { 
            table += '</tr><tr>';
        }

        m.setDate(m.getDate() + 1);
    }

    if (getDay(m) != 0) {
        for (let i = getDay(m); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';
    elem.innerHTML = table;
}

let year = +prompt('year?')
let month = +prompt('month?')

createCalendar(calendar,year, month)