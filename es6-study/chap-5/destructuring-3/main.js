const settings = {
    color: {
        chosen_color: 'dark'
    }
};
let chosenColor = 'sibar';

let ({ color: { chosen_color: chosenColor = 'abc' } } = settings);

console.log(chosenColor);
