//동기적
//javascript 는 synchronous
function printImmediately(print) {
    print();
}
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
console.log(1); //동기 
setTimeout(() => { //비동기
    console.log(2);
}, 1000);
console.log(3);//동기 

printImmediately(() => console.log('hello'));//동기
printWithDelay(() => {//비동기
    console.log(4);
}, 2000)
//
console.clear();

//콜백 지옥 예제
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if ((id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')) {
                onSuccess(id);
            }
            else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            }
            else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your ID');
const password = prompt('enter your Password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`${userWithRole.name}, you have a  ${userWithRole.role} role`);
            },
            error => console.log(error))
    },
    error => { console.log(error) }
);