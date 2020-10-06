//JSON
//1.Object to JSON  //object를 제이슨으로 변환
let json = JSON.stringify(true);
console.log(json);
//2. JSON to Object
json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    }
};

// json = JSON.stringify(rabbit,['name','birthDate']);
// console.log(json);

json = JSON.stringify(rabbit, (key,value) => {
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

console.clear();