// const fn = (N, arr) => {
//   let startR = 1;
//   let startC = 1;
//   for (let i = 0; i < arr.length; i++) {
//     switch (arr[i]) {
//       case "R":
//         startR++;
//         break;
//       case "L":
//         startR--;
//         break;
//       case "U":
//         startC--;
//         break;
//       case "D":
//         startC++;
//         break;
//     }

//     // 좌표가 범위를 벗어나면 오류 처리
//     if (startC <= 0 || startR <= 0 || startC > N || startR > N) {
//       continue;
//     }
//   }
//   // 좌표를 문자열로 반환
//   return `(${startC}, ${startR})`;
// };

// const N = 5;
// const arr = ["R", "R", "R", "U", "D", "D"];
// console.log(fn(N, arr)); // 예상 결과: (3, 4)

let num = 5;
let plans = ["R", "R", "R", "U", "D", "D"];
let x = 1,
  y = 1;

let dx = [0, 0, -1, -1];
let dy = [-1, 1, 0, 0];
let move_type = ["L", "R", "U", "D"];

for (let plan of plans) {
  for (let i = 0; i < move_type.length; i++) {
    if (plan === move_type[i]) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 1 || ny < 1 || nx > num || ny > num) {
        continue;
      }

      x = nx;
      y = ny;
    }
  }
}

console.log(`(${x}, ${y})`);
