// Создайте дерево из объекта
// важность: 5
// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// Например:

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

// Выберите один из двух способов решения этой задачи:

// Создать строку, а затем присвоить через container.innerHTML.
// Создавать узлы через методы DOM.
// Если получится – сделайте оба.

// P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.

let tree = document.getElementById('container');

// function createTree(container, data) {
//     let list = (obj) => {
//       let li = '';
//       let ul;
//       for (let key in obj) {
//         li += '<li>' + key + list(obj[key]) + '</li>'
//       }
//       if(li) {
//         ul = '<ul>' + li +'</ul>'
//       }
//       return ul || ''
//     }
//     container.innerHTML = list(data)   
// }

function createTree(container, data) {

    let list = (obj) => {
      if (!Object.keys(obj).length) return;
      let ul = document.createElement('ul')

      for (let key in obj) {
        let li = document.createElement('li')
        li.innerHTML = key;
        let childrenUl = list(obj[key]);
        if (childrenUl) {
          li.append(childrenUl);
        }
        ul.append(li)
      }
      return ul
    }
    container.append(list(data))   
}

createTree(tree, data);


