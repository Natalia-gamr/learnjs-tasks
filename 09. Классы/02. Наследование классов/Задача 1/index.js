// Ошибка создания экземпляра класса

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name) // Необходимо вызвать super()
        this.name = name;
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик");
alert(rabbit.name);