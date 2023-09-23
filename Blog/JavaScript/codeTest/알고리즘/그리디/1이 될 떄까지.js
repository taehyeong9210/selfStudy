const fn = (N, K) => {
  let num = N;
  let count = 0;

  while (num !== 1) {
    if (num % K === 0) {
      num = num / K;
      count += 1;
    } else {
      num = num - 1;
      count += 1;
    }
  }
  return count;
};
console.log(fn(25, 3));
