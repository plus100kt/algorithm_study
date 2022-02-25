let input = require('fs').readFileSync('예제.txt').toString().split('\r\n');

const tast_case = Number(input.shift());
const data = Array.from({ length: tast_case }, (_, index) => [input[index * 2], input[index * 2 + 1]]);

const solution = (Q, sel) => {
    const goal = Q[sel];

    let max = 0;
    let count = 0;
    let loop = true;

    while (loop) {
        max = Q.reduce((pre, cur) => cur > pre ? cur : pre, 0);

        if (Q[0] === max) {
            Q.shift();
            count++;
            if (max === goal && sel === 0) {
                loop = false;
            }
        }
        else {
            Q.push(Q.shift());
        }
        
        if (sel === 0) {
            sel = Q.length;
        }

        sel--;
    }

    return count;
};

data.map(x => {
    const count = x[0].split(' ')[0];
    const select = Number(x[0].split(' ')[1]);
    const Queue = x[1].split(' ').map(x => Number(x));

    console.log(solution(Queue, select));
})
