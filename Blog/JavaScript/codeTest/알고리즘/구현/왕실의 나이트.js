// 왕실 정원은 8 x 8 좌표 평면이다. 왕실 정원의 특정한 한 칸에 나이트가 서있다.
// 나이트는 말을 타고 있기 때문에 이동을 할 때는 L자 형태로만 이동할 수 있으며 정원 밖으로는 나갈 수 없다.
// 나이트는 특정한 위치에서 다음과 같은 2가지 경우로 이동할 수 있다.

// 1. 수평으로 2칸 이동한 뒤에 수직으로 한 칸 이동하기
// 2. 수직으로 두칸 이동한 뒤에 수평으로 한 칸 이동하기

// 좌표 평면 상에 나이트의 위치가 주어 졌을 때 나이트가 이동할 수 있는 경우의 수를 출력 하라
//    a  b  c  d..
//  1
//  2
//  3
//  4

const knight = (position) => {
  const steps = [
    [-2, 1],
    [-2, -1],
    [2, -1],
    [2, 1],
    [1, -2],
    [1, 2],
    [-1, 2],
    [-1, -2],
  ];
  let count = 0;

  const row = parseInt(position[1]);
  const column = position.charCodeAt(0) - "a".charCodeAt(0) + 1;

  for (step of steps) {
    let newRow = step[0] + row;
    let newCol = step[1] + column;
    if (newRow >= 1 && newRow <= 8 && newCol >= 1 && newCol <= 8) {
      count++;
    }
  }
  return console.log(count);
};
knight("a1");
