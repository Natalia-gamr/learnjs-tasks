// Объекты-константы?
// важность: 5
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// // это будет работать?
user.name = "Pete"; // Будет работать, так как const защищает саму переменную, а не её содержимое