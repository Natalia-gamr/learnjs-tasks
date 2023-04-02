// Наследование от SyntaxError

class FormatError extends SyntaxError {
    constructor(options) {
        super(options)
        this.name = 'FormatError'
    }
}


let err = new FormatError("ошибка форматирования");

alert(err.message); // ошибка форматирования
alert(err.name); // FormatError
alert(err.stack); // stack

alert(err instanceof FormatError); // true
alert(err instanceof SyntaxError);

