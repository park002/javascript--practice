let user = {
    name: 'John',
    age: 30
};
const count = userObj => Object.values(userObj).length;

alert(count(user)); // 2