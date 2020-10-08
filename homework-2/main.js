const body = document.querySelector('body');
const span = document.createElement('span');
const colors = ['#EEBC12', '#914EAD', '#0066ff'];
const MIN = 800;
const MAX = 1500;
function fontInit() {
    span.innerText = 'Hello!';
    span.style.fontSize = '30px';
    span.style.fontWeight = 600;
    body.appendChild(span);
}

const superSexyHandler = {
    windowEvent: () => {
        window.addEventListener('resize', event => {
            span.style.color = 'white';
            let width = `${event.target.innerWidth}`;
            if (width < MIN) {
                body.style.backgroundColor = colors[2];
            }
            else if (width > MIN && width < MAX) {
                body.style.backgroundColor = colors[1];
            }
            else {
                body.style.backgroundColor = colors[0];
            }
        });
    }
}

function init() {
    fontInit();
    superSexyHandler.windowEvent();
}
init();