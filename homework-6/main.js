const cal = document.querySelector('.cal');
const input = document.querySelector('.cal__input');
const NUMBER_BTN_CLASS = 'number__btn';
const operatorBtn = ['+', '-', '*', '/'];
const RESET = 'C';
const EQUAL_BTN = '=';
let numArray = [];
let OPERATOR;
let getArg = [];

function paintText(text) {
    if (text !== '') input.value = `${text}`;
}
function addOperation() {
    const sum = parseInt(getArg.shift()) + parseInt(getArg.shift());
    paintText(sum);
}
function minusOperation() {
    const minus = parseInt(getArg.shift()) - parseInt(getArg.shift());
    paintText(minus);
}
function multipleOperation() {
    const multiple = parseInt(getArg.shift()) * parseInt(getArg.shift());
    paintText(multiple);
}
function dividedOperation() {
    const divided = parseInt(getArg.shift()) / parseInt(getArg.shift());
    paintText(divided);
}
function mathOperation(currentOperator) {
    switch (currentOperator) {
        case operatorBtn[0]: addOperation();
            break;
        case operatorBtn[1]: minusOperation();
            break;
        case operatorBtn[2]: multipleOperation();
            break;
        case operatorBtn[3]: dividedOperation();
            break;
    }
}
function searchOpeator(text) {
    const mathOperator = operatorBtn.filter(item => text === item);
    return mathOperator.toString();
}
function getValue() {
    cal.addEventListener('click', event => {
        if (event.target.tagName === 'DIV') return;
        const value = event.target.textContent;
        if (event.target.classList.contains(NUMBER_BTN_CLASS)) {
            setArg(value);
            return;
        }
        if (value !== EQUAL_BTN) { //연산자 버튼 클릭 시
            if (value === RESET) {
                initArray();
                paintText(0);
                return;
            }
            getArg.push(input.value);
            initArray();
            OPERATOR = searchOpeator(value);
        }
        else { // 이콜버튼 
            getArg.push(input.value);
            mathOperation(OPERATOR);
        };
    });
}
function setArg(text) {
    const numObj = {
        text
    }
    numArray.push(numObj);
    const arrayElement = numArray.map(item => item.text);
    const joinElement = parseInt(arrayElement.join(''));
    paintText(joinElement);
}
function initArray() {
    numArray.splice(0, numArray.length);
}
function init() {
    paintText(0);
    getValue();
}
init();