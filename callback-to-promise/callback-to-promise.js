//콜백 지옥 예제
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')) {
                    resolve(id);
                }
                else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                }
                else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your ID');
const password = prompt('enter your Password');
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`hello ${user.name}, you have a  ${user.role} role`))
    .catch(console.log);

