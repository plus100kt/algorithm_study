let input = require('fs').readFileSync('예제.txt').toString();

const solution = (form) => {
    const divided_by_minus = form.split('-');
    const sums_divided_by_minus = divided_by_minus.map(plus_form => plus_form.split('+').reduce((acc, cur) => acc + Number(cur), 0));

    console.log(sums_divided_by_minus);

    const first_number = sums_divided_by_minus.shift();

    const sum = sums_divided_by_minus.reduce((acc, cur) => acc - Number(cur), first_number);

    return sum;
};


console.log(solution(input));