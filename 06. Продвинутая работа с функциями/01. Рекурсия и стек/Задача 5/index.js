// Вывод односвязного списка в обратном порядке
// важность: 5
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

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
//   let arr = [];

//   while(newList) {
//     arr.push(newList.value)
//     newList = newList.next;
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
//   }
// }

function printList(list) {
  if (list.next) {
    printList(list.next);
  }

  console.log(list.value);
}

printList(list);
