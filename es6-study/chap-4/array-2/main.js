const friends = [
    'jaeho@gmail.com',
    'sangone@gamil.com',
    'jaehoon@gmail.com',
    'abc@gorea.com'
];
const check = () => friends.findIndex(value => value.includes('gorea.com'));
let target = check();
if (target !== -1) {
    const userName = friends[target].split('@')[0];
    const email = 'korea.com';
    friends[target] = `${userName}@${email}`;
    target = check();

}
console.log(target);




