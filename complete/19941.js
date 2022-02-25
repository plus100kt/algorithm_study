let input = require('fs').readFileSync('예제.txt').toString().split('\n');
let [N, K] = input[0].split(' ').map(x => Number(x)) // 식탁의 길이 N, 햄버거를 선택할 수 있는 거리 K
let table = input[1];
let start, end;
let max = 0;
let limit = 0;

for (let i = 0; i < N; i++) {
    if (table[i] === 'P') {
        start = i - K < limit ? limit : i - K;
        end = i + K >= N ? N - 1 : i + K;

        console.log(start, end, limit);

        for (let j = start; j <= end; j++) {
            if (table[j] === 'H') {
                max++;
                limit = j + 1;
                break;
            }
        }
    }
}

console.log(max);