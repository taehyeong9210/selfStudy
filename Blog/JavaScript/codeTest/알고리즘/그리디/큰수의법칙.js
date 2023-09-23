
const n = 5;
const m = 5;
const k = 3;
const data = [2, 4, 5, 4, 6];

data.sort((a, b) => b - a);
const first = data[0];
const second = data[1];

let count = Math.floor(m / (k + 1)) * k;
count += m % (k + 1);

let result = 0;
result += count * first;
result += (m - count) * second;

console.log(result); // 결과 출력
