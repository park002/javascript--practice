const country = document.querySelector('#country-select');
const COUNTRY = 'country';
const SELECTED = 'selected';
const CHOOSE_COUNTRY = country[0].value;
function saveItem() {
    country.addEventListener('click', event => {
        const target = event.target.value;
        if (target !== CHOOSE_COUNTRY)
            localStorage.setItem(COUNTRY, target);
    });
}
function getItem() {
    const localValue = localStorage.getItem(COUNTRY);
    for (let i = 0; i < country.length; i++) {
        if (country[i].value === localValue) {
            country[i].setAttribute(SELECTED, true);
            return;
        }
    }
}
function init() {
    if (localStorage.getItem(COUNTRY)) getItem();
    else saveItem();

}
init();