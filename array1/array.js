'use strict';
//Array

//1.Declaration
const arr1 = new Array();
const arr2 = [1, 2];
//2.Index position
const fruits = ['🍒', '🍉'];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
//3.Looping over an array
//print all fruits
console.clear();
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (let value of fruits) {
    console.log(value);
}
console.clear();
//forEach

fruits.forEach(function (values) {
    console.log(values);
});
console.clear();
//4.Addtion,deletion,copy
fruits.push('🍜', '🍣');
fruits.forEach((values) => console.log(values));
fruits.pop();
console.log(fruits);

//앞에 아이들 넣고 뺴고 하는 방법
fruits.unshift('☆');
console.log(fruits);
fruits.shift();
console.log(fruits);

//splice : remove
fruits.push('🥩', '🍙', '🍘');
console.log(fruits);

console.log(fruits);
const fruit2 = ['a', 'b'];
const newArray = fruits.concat(fruit2);
console.log(newArray);
//Searching
//find the index
console.clear();

console.log(fruits);
fruits.pop();

console.log(fruits.includes("🍙"));
//lastIndexOf
console.clear();
