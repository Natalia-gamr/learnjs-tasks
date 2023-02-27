// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

let calculator = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    sum() {
        return `Сумма чисел ${this.a} и ${this.b} равна ${this.a + this.b}`;
    },
    mul() {
        return `Произведение чисел ${this.a} и ${this.b} равно ${this.a * this.b}`;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );