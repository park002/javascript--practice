const menuListItem = document.querySelector('#js-menuListItem'),
    search = menuListItem.querySelector('.menu__list-item__search'),
    form = menuListItem.querySelector('#js-form');
const main = document.querySelector('#main');


function onSearch() {
    menuListItem.addEventListener('click', event => {
        form.classList.toggle('active'); //클릭 했다면 액티브 상태로만들자
        if (form.classList.contains('active')) { //있음
            search.style.visibility = `hidden`;
            form.style.visibility = 'visible';
        }
        else {
            search.style.visibility = `hidden`;
        }
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
