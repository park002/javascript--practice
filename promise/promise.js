'use strict';
//promise 는 javascript 내장되어 있는 객체.
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        reject(new Error('no network'));
    }, 2000);
});

promise.then(value => {
    console.log(value);
})
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('성공하든 실패하든 호춯해@!!!');
    })
console.clear();
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})
fetchNumber
    .then(result => result * 5)
    .then(result => result * 12)
    .then(result => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result);
            }, 1000);
        }).then(result => { console.log(result) });
    });

console.clear();

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('암탉');
        }, 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${hen}=> 계란!`)
        }, 1000)
    });
const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${egg}=> 계란!x탄생!`)
        }, 1000)
    })
    
getHen() //
.then(getEgg)
.then(cook)
.then(console.log);

