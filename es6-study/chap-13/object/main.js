let sum = 0;
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}
alert(sumSalaries(salaries)); // 650
