// Вставьте HTML в список
// важность: 5
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

// <ul id="ul">
//   <li id="one">1</li>
//   <li id="two">4</li>
// </ul>

let firstLi = document.querySelector('#one');
firstLi.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>')