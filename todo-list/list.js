const form = document.querySelector('.shoopping-form');
const input = document.querySelector('.shoopping-form__input');
const icon = document.querySelector('.fa-plus-circle');
const REGEX = /[^\s]/g; //공백을 제외하고 문자하나를 찾는다
const ol = document.querySelector('.shoopping-lists');
const array = [];


function addListItem(value) {
    const span = document.createElement('span');
    span.textContent = '🌻';
    const li = document.createElement('li');
    const listObj = {
        key: array.length + 1,
        value
    }
    array.push(listObj);
    li.textContent = listObj.value;
    li.id = listObj.key;
    li.appendChild(span);
    ol.appendChild(li);
    span.addEventListener('click', (event) => {
        target = event.target;
        ol.removeChild(target.parentElement);
    })

}
function submitHandle() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (input.value.search(REGEX) === -1) {//공백이라면 -1 return
            return;
        }
        else {
            addListItem(input.value);
            input.value = "";
        }
    })
    icon.addEventListener('click', () => {
        if (input.value.search(REGEX) === -1) {//공백이라면 -1 return
            return;
        }
        else {
            addListItem(input.value);
            input.value = "";
        }
    })
}
function init() {
    submitHandle();

}
init();