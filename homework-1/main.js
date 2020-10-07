const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const body = document.querySelector('body');
const title = document.createElement('span');
body.appendChild(title);

const RESIZE_TITLE = 'You just resized!';
const M_IN_TITLE = 'The mouse is here!';
const M_OUT_TITLE = 'The mouse is gone!';
const M_CLICK_TITLE = 'That was a right click';

function fontInit() {
    title.textContent = 'Hello!';
    title.style.fontWeight = '600';
    title.style.fontSize = '23px';
}
const superEventHandler = () => {
    addEventListener('resize', () => {
        title.innerText = RESIZE_TITLE;
        title.style.color = colors[0];
    })
    document.addEventListener('mousedown', event => {
        if (event.button === 2) {
            title.innerText = M_CLICK_TITLE;
            title.style.color = colors[1];
        }
    })
    title.addEventListener('mouseover', () => {
        title.innerText = M_IN_TITLE;
        title.style.color = colors[2];
    })
    title.addEventListener('mouseout', () => {
        title.innerText = M_OUT_TITLE;
        title.style.color = colors[3];
    })
}
function init() {
    fontInit();
    superEventHandler();
}
init();
