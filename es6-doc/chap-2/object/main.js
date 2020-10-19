function User(name) { //생성자함수.
    //this = {};
    this.name = name;
    this.isAdmin = false;
    //return this;
}
let user = new User("Jack");
console.log(user);
alert(user.name); // Jack
alert(user.isAdmin); // false
