// Создайте новый объект с помощью уже существующего
// важность: 5
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, 
// но хотелось бы создать ещё один объект такого же типа.
// Можем ли мы сделать так?

// let obj2 = new obj.constructor();

// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. 
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.

// function Obj(val) {
//   this.val = val;
// }

// let obj = new Obj('John');
// let obj2 = new obj.constructor('Pete'); //Вызов сработает

// console.log( obj.val ); 
'use strict'

function User(name) {
  this.name = name;
}

User.prototype = {};

let user = new User('John');
let user2 = new user.constructor('Pete'); //Вызов не сработает

console.log( user2.name ); //undefined