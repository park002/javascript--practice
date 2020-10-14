'use strict';
const n = prompt('숫자를 입력하세요 ');
nextPrime:
for (let i = 2; i <= n; i++) { //2 ~ 10까지 1씩 증가
    for (let j = 2; j < i; j++) { //제수 (나눗수 ) 찾기
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}