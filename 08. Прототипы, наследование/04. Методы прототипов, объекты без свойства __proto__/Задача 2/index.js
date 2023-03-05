// Разница между вызовами
// важность: 5
// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // в this rabbit => Rabbit
Rabbit.prototype.sayHi(); // в this Rabbit => undefined
Object.getPrototypeOf(rabbit).sayHi(); // в this Rabbit => undefined
rabbit.__proto__.sayHi(); // в this Rabbit => undefined