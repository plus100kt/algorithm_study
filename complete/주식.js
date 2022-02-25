let input = require('fs').readFileSync('예제.txt').toString().split('\n');
let total_case = Number(input[0]);

for (let i = 0; i < total_case; i++) {
    let total_date = Number(input[i * 2 + 1]);
    let price_by_date = input[i * 2 + 2].split(' ').map(x => Number(x)) // 식탁의 길이 N, 햄버거를 선택할 수 있는 거리 K
    let max = 0;
    let benefit = 0;

    // 파는날짜의 주식 가격을 샀던 당시의 날짜의 주식 가격으로 빼서 더하면 된다.
    // 즉 최고액에 이전 날짜의 주식을 빼주면 된다.
    // 하지만 이전날짜로는 되돌아 갈 수 없으므로 이후에 최고액을 이후날짜로 다시 계산하여 이후에 있으면 다시한번 사고 팔아준다.
    
    const reverse_data = price_by_date.reverse();
    for (let j = 0; j < total_date; j++) {

        if (reverse_data[j] > max) {
            max = reverse_data[j]
        }
        else {
            benefit += max - reverse_data[j];
        }
    }

    console.log(benefit);
}
