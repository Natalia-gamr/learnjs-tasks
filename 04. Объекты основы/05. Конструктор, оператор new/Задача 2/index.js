// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

function Calculator() {
    this.read = () => {
        this.a = +prompt('a?', 0),
        this.b = +prompt('b?', 0)
    },
    this.sum = () => {
        return `Сумма чисел ${this.a} и ${this.b} равна ${this.a + this.b}`
    },
    this.mul = () => {
        return `Произведение чисел ${this.a} и ${this.b} равно ${this.a * this.b}`
    }
}


let calculator = new Calculator();
calculator.read();

alert( calculator.sum() );
alert( calculator.mul() );