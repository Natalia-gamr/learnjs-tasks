// Вывод односвязного списка
// важность: 5
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// function printList(list) {
//   let newList = list;

//   while(newList) {
//     console.log(newList.value)
//     newList = newList.next;
//   }
// }

function printList(list) {
  console.log(list.value)

  if (list.next) {
    printList(list.next)
  }
}

printList(list);
