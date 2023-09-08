let Arr = [];
const divided = (arr) => {
  for (i of arr) {
    Arr.push(i % 42);
  }
  const result = [...new Set(Arr)];
  return result.length;
};

const arr = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85];
console.log(divided(arr));
