// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
  const arr = String(n).split("");
  arr.sort((a, b) => b - a);
  const newArr = arr.map((num) => parseInt(num)).join("");
  return +newArr;
}

// 이렇게 줄일 수도 있음
// function solution(n) {
//     return +String(n).split('').sort().reverse().join('');
//   }
