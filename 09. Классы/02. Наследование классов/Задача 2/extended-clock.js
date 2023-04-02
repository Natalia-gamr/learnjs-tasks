
class ExtendedClock extends Clock {
    constructor(name) {
        super(name)
        let { precision = 1000 } = options;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}