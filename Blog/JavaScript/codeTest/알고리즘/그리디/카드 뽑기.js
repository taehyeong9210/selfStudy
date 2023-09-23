const n = 3;
const m = 4;

const data = [
  [2, 4, 1, 3],
  [8, 5, 6, 7],
  [9, 10, 11, 12],
];

let result = 0;

for (let i = 0; i < n; i++) {
  const row = data[i];
  const min_value = Math.min(...row);
  result = Math.max(result, min_value);
}

console.log(result);
