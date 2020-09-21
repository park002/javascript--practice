const jaeho = {
    name: `parkjaeho`,
    age: 25
};
jaeho['hasJob'] = true;

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(jaeho, 'name');


//3.생성자 함수
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'ho', age: 3 };
const person3 = new Person('하하하', 25);
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    //return this;
};
console.log(person3);
function computer(software, hardware) {
    return {
        software: software,
        hardware: hardware
    };
}
//console.log(computer(1, 2));

//6.for..in vs for..of
//for(key in obj);
for (key in jaeho) {
    console.log(key);
}
//for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (vale of array) {
    console.log(vale);
}

//7.cloning
const user = {
    name: 'jaeho',
    age: 20
};
const user2 = user;
console.log(user2);
user2.name = "zzz";


//Object.assign(dest,[obj1,obj2...])
const copy = Object.assign({ height: 60 }, jaeho);
console.log(copy);

//another example
//color:blue 가 출력된다 이유는 오른쪽에 있는 객체일수록 왼쪽 객체 값을 덮어 씌우기 때문이다.
const fruit = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' }
const mixed = Object.assign({}, fruit, fruit2);
console.log(mixed);
