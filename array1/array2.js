'use strict';
// const fruits = ['apple', 'banana', 'orange'];
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
}
// Q2. make an array out of a string
// const fruits = '🍕, 🥝, 🍌, 🍒';
// console.log(fruits.split(','));
// console.log(fruits[0]);

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    console.log(array);
}
// Q4. make new array without the first two elements
{
    console.clear();
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{   //find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다.
    console.clear();
    const result = students.find((item) => { return item.score === 90 });
    //return 블럭 한줄일 경우 생략가능.
    console.log(result);
}
// Q6. make an array of enrolled students
{
    console.clear();
    const result = students.filter(student => student.enrolled === true);
    console.log(result);
}
// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    console.clear();
    //map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
    const result = students.map(student => student.score * 2);
    console.log(result);
}
// Q8. check if there is a student with the score lower than 50
{ //some ==> 배열에서 하나라도 조건에 만족되는 것이 있다면 true !
    //every 는 모든 배열요소들이 조건을 만족해야 true를 리턴한다.
    console.clear();
    const result = students.some(value => value.score < 50);

}
// Q9. compute students' average score
{
    console.clear();

}
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    console.clear();
    const result = students.map(value => value.score)
        .filter(score => score >= 50)
        .join();
    console.log(result);
}
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    console.clear();
    const result = students.map(student => student.score).sort().join();
    console.log(result);
}
// 9번하고 보너스 다시보기
// 9번하고 보너스 다시보기
// 9번하고 보너스 다시보기
// 9번하고 보너스 다시보기





