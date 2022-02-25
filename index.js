let input = require('fs').readFileSync('예제.txt').toString().split('\n');
let total_case = Number(input[0]);
let police_cost = input[1].split(' ').map(x => Number(x));
let regions = Array.from(Array(total_case), () => Array(total_case).fill(0))

// 지역을 이중배열에 담기
for (let i = 0; i < total_case; i++) {
    regions[i] = input[2 + i].split('').filter(x => x !== '\r').map(x => Number(x)); 
}

// 위의 결과
// [
//   [ 0, 0, 0, 1, 1 ],
//   [ 1, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 1, 0 ],
//   [ 0, 0, 1, 0, 0 ],
//   [ 0, 1, 0, 0, 0 ]
// ]

// 각각의 도시가 자기도시에서 출발해서 지나치는 지역 표시 (이때 출발한 지역은 처음에 0 도착한다면 1)
// 즉 출발한 도시에 1이 찍혀있다면 경찰서를 지나는 조건 충족 그리고 나머지 1이 찍힌 지역은 그 경찰서가 관할할 수 있는 구역

let results = Array.from(Array(total_case), () => Array(total_case).fill(0))

results.map(result =>
    result.map(x => x.)
)
