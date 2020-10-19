const button = document.getElementsByClassName('btn');

Array.from(button).forEach(button => {
    button.addEventListener('click', () => console.log('click'));
});