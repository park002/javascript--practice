function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) result *= x;
    return result;
}

let x = prompt("곱셈 할 숫자를 입력하세요.", ''),
    n = prompt("몇 회 반복 하실 건가요?", '');

if (n <= 0) {
    alert(`Power ${n} is not supported,
      please enter an integer number greater than zero`);
}
else alert(pow(x, n));