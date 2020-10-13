const menuListItem = document.querySelector('#js-menuListItem'),
    search = menuListItem.querySelector('.menu__list-item__search'),
    form = menuListItem.querySelector('#js-form');
const main = document.querySelector('#main');

function showAndHide() {
    search.style.visibility = `hidden`;
    form.style.visibility = 'visible';
}
function onSearch() {
    //menuListItem.active = false; //객체의 프로퍼티를 동적으로 설정.
    menuListItem.addEventListener('click', function () {
        showAndHide();
    })
}

main.addEventListener('click', () => {
    search.style.visibility = `visible`;
    form.style.visibility = 'hidden';
});
function init() {
    onSearch();
};
init();
