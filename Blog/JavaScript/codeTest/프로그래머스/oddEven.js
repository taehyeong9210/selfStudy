// 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ n ≤ 1,000

const input = prompt('숫자 입력');  // 브라우저 환경에서 사용 가능
let n = parseInt(input);
n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
