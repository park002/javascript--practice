class Car {
    constructor(aa) {
        this.aa = aa;
    }
    methodCar() {
        console.log("cccc");
    }
}
class Benz extends Car {
    constructor(aa) {
        super();
        this.aa = aa;
    }
    methodCar() {
        console.log("cccaaaaaaaaaaaaaaaaac");
    }
    aaa() {
        console.log('ssss');
    }
}
class Tico extends Car {
    constructor(aa) {
        super();
        this.aa = aa;
    }
    ttt() {
        console.log('ttt');
    }
    im() {
        console.log('daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad');
    }
}
let car = new Car('aa');

car = new Tico('cc');
car.im();

