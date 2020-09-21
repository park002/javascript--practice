//3.Default parameters(added in ES6)
function showMessage(message, form = 'unknown') {
    console.log(`${message} by ${form}`)
}
showMessage(`hello jaeho`);

//4.Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}

printAll('안', '녕', '하', '세', '요');

//5.Local scope
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello1111';
        console.log(childMessage);
    }
    printAnother();
}
printMessage();

//6.Return a value

function sum(arg1, arg2) {
    return arg1 + arg2;
}
const result = sum(2, 3);
console.log(`sum:${result}`);
console.log(`${sum(1, 5)}`);

//7.Early return ,early exit
const userProfile = {
    name: 'jaeho',
    point: 9999
};

function upgradeUserBad(user) {//bad Code
    if (user.point > 10) {
        //long ...user.point가 10보다 클 경우, undefined, -1 등등 일 경우
        //함수를 이어나가는 것은 좋지 않다 조건이 맞지 않을 경우 재빠르게 종료시키자. 
        return;
    }
}
function upgradeUserGood(user) { // good Code
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic!!
}
upgradeUserGood(userProfile);

//8.Callback Function
const math = function () {
    console.log(`math = 90`);
}
const kuk = function () {
    console.log(`kuk = 100`);
}
function avg(name, fun1, fun2) {
    if (name === 'parkjaeho') {
        fun1();
    }
    else {
        fun2();
    }
}
avg('parkjaeho', math, kuk);

//Arrow function
const simplePrint = function () {
    console.log('1');
}
const simplePrint2 = () => console.log(2);
simplePrint2();

const addd = function (a, b) {
    return a + b;
}
const addddd = (a, b) => a + b;

console.log(addddd(5, 5));

const simpleMultiple = (a, b) => {
    return a * b;
}
console.log(simpleMultiple(5, 9));

//quiz
function calculate(command, a, b) {

}




