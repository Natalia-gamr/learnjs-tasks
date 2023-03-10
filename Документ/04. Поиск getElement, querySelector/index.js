// Поиск элементов
// важность: 4
// Вот документ с таблицей и формой.
// Как найти?…

// Таблицу с id="age-table".
let table = document.querySelector('#age-table');

// Все элементы label внутри этой таблицы (их три).
let labels = table.getElementsByTagName('label');

// Первый td в этой таблице (со словом «Age»).
let firstTd = table.rows[0].cells[0];

// Форму form с именем name="search".
let form = document.getElementsByName('search');

// Первый input в этой форме.
let firstInput = form.querySelector('input');

// Последний input в этой форме.
let inputs = form.querySelectorAll('input')
let lastInput = inputs[inputs.length - 1]

// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.