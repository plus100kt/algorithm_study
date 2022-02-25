let input = require('fs').readFileSync('예제.txt').toString().split('\n');

const number = Number(input);

const solution = (N) => {
    // dp[1][0] = 10;     // 0 ~ 9
    // dp[1][1] = 9;
    // ...
    // dp[1][9] = 1;
    // dp[2][0] = dp[1][0]!;
    // dp[2][1] = dp[1][1]!;
    // dp[2][2] = dp[1][2]!; 

    const dp = Array.from(Array(1001), () => Array(10).fill(0))

    dp[0].fill(1);

    let sum = 0;

	for (let i = 1; i <= N; i++)
	{
        sum = 0
		for (let j = 0; j < 10; j++) {
            for (let k = 0; k <= j; k++) {
                dp[i][j] += dp[i - 1][k]; 
            }
        }
	}
 
	return dp[N][9] % 10007;
};

console.log(solution(number));
