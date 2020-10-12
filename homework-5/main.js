const form = document.querySelector('form'),
    input = document.querySelector('input'),
    toDoListTitle = document.querySelector('.todo__list'),
    toDoListFinishTitle = document.querySelector('.todo__finish');

const PENDING_KEY = 'PENDING',
    FINISH_KEY = 'FINISH';

let toDoListArray = [];
let toDoFinishArray = [];

function showListItem(items) {
    items.forEach(item => {
        addListItem(item.text);
    });
}
function showFinishItem(items) {
    items.forEach(item => {
        showFinishedItems(item.text);
    });
}
function saveItem() {
    localStorage.setItem(PENDING_KEY, JSON.stringify(toDoListArray));
}
function saveFinishItem() {
    localStorage.setItem(FINISH_KEY, JSON.stringify(toDoFinishArray));
}
function addListItem(text) {
    const delBtn = document.createElement('button');
    const checkBtn = document.createElement('button');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    delBtn.textContent = `❌`;
    checkBtn.textContent = `✅`;
    li.id = toDoListArray.length + 1;
    const toDoListObj = {
        id: toDoListArray.length + 1,
        text
    };
    toDoListArray.push(toDoListObj);
    saveItem();
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    ul.appendChild(li);
    toDoListTitle.appendChild(ul);
    delBtn.addEventListener('click', event => {
        const li = event.target.parentElement;
        li.remove();
        const cleanToDos = toDoListArray.filter(items => {
            return items.id !== parseInt(li.id);
        });
        toDoListArray = cleanToDos;
        saveItem();
    })
    checkBtn.addEventListener('click', checkListItem);
}
function checkListItem(event) {
    const text = event.target.parentElement.firstChild.innerText;
    const li = event.target.parentElement;
    li.remove();
    const cleanToDos = toDoListArray.filter(items => {
        return items.id !== parseInt(li.id);
    });
    toDoListArray = cleanToDos;
    saveItem();
    showFinishedItems(text);
}
function showFinishedItems(text) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const preBtn = document.createElement('button');
    span.textContent = text;
    preBtn.textContent = '⏪';
    li.appendChild(span);
    li.appendChild(preBtn);
    ul.appendChild(li);
    preBtn.addEventListener('click', () => {
        li.remove();
        const cleanToDos = toDoFinishArray.filter(item => {
            return item.id !== parseInt(li.id);
        });
        toDoFinishArray = cleanToDos;
        saveFinishItem();
        addListItem(text);
    });
    toDoListFinishTitle.appendChild(ul);
    li.id = toDoFinishArray.length + 1;
    const finishListItem = {
        id: toDoFinishArray.length + 1,
        text
    };

    toDoFinishArray.push(finishListItem);
    saveFinishItem();
}
function submitHandle() {
    form.addEventListener('submit', event => {
        event.preventDefault();
        const inputValue = input.value;
        input.value = '';
        addListItem(inputValue);
    });
}
function toDoListLocalStorage() {
    if (localStorage.getItem(PENDING_KEY)) {
        const items = localStorage.getItem(PENDING_KEY);
        showListItem(JSON.parse(items));
    }
}
function finishedLocalStorage() {
    if (localStorage.getItem(FINISH_KEY)) {
        const finishItem = localStorage.getItem(FINISH_KEY);
        showFinishItem(JSON.parse(finishItem));
    }
}
function init() {
    submitHandle();
    toDoListLocalStorage();
    finishedLocalStorage();
}
init();