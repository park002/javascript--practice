//1.Class declarations
class Person {
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} : hello!`);
    }
}
const jaeho = new Person('jaeho', 25);
console.log(jaeho);
jaeho.speak();

//2.getter setter
//getter와 setter를 클래스 내에 정의를 해주면, 생성자 안에 있는 필드는 자동적으로 
//get, set를 호출하고 그렇기에 값은 생성자 안에 있는 field name과는 다른 이름을 사용해야 stackoverflow가 발생하지 않는다
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value > 0 ? value : 0; //사람의 나이가 -1이 되는게 말이되는가 ?
    }
}
const user1 = new User('park', 'jaeho', -1);
console.log(user1.firstName, user1.age);

//상속과 다형성 
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}
const shape = new Shape(25, 32, 'white');
console.log(shape.getArea());

class Rectangle extends Shape {
    draw() {
        console.log('aaaaaaaaaaaaa');
    }
}
class Triangle extends Shape {
    draw() {
        super.draw();
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString() {
        console.log("메소드 오버라이딩 부모클래스에 있는 메소드를 자식클래스 입맛에 맞춰 재정의 한다.");
    }
}
const rectangle = new Rectangle(2, 4, 'blue');
const triangle = new Triangle(1, 2, 'red');
console.log(triangle.getArea());
triangle.draw();


//instanceof 좌항의 타입이 우항의 오브젝트인가?
console.log(shape instanceof Shape); //true
console.log(rectangle instanceof Shape); //true
console.log(triangle instanceof Object); //true
console.log(triangle instanceof Rectangle);
console.log(triangle.toString());
console.log(shape);