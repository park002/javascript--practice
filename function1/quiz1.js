function calculate(command, arg1, arg2) {
    switch (command) {
        case 'add':
            return arg1 + arg2;
            break;
        case '-':
            return arg1 - arg2;
            break;
        case '+':
            return arg1 + arg2;
            break;
        case '/':
            return arg1 + arg2;
            break;
        case '**':
            return arg1 + arg2;
            break;
    }
}
console.log(calculate('add', 2, 4));


