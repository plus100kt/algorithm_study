let input = require('fs').readFileSync('예제.txt').toString().split('\n');

const count = Number(input.shift());
const numbers = input.map(n => Number(n));
let dp = new Array(11);

const solution = (N) => {
	let total = 0;
    
    dp[1] = 0;

	for (let i = 2; i <= N; i++)
	{
		total = 0;
		
		// dp[1] = 1;
		// dp[2] = dp[1] + 1 = 2;
		// dp[3] = dp[2] + dp[1] + 1 = 4;				// 1이 맨앞일때, 2가 맨앞일때 (자기 자신을 포함안하므로 포함해줌)
		// dp[4] = dp[3] + dp[2] + dp[1] = 7		// 1이 맨앞일때, 2가 맨앞일때, 3이 맨앞일때 (이때부터 자기 자신 포함 X)

		// // 3제한이 없다면
		// for (let j = 1; j < i; j++) {
		// 	total += dp[i - j] + 1
		// }

		dp[1] = 1;
		dp[2] = 2;
		dp[3] = 4;

		for (let i = 4; i <= 11; i++) {
			dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
		}

		dp[i] = total;
	}
 
	return dp[N];
};

solution(11);

console.log(count);

numbers.forEach(num => {
	console.log(dp[num]);
})