let n = 1260;
let count = 0;

const coin_type = [500, 100, 50, 10];

for (coin of coin_type) {
  count += Math.floor(n / coin);
  n %= coin;
}

console.log(count);
