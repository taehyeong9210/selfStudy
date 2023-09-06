// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

function solution(absolutes, signs) {
  const Arr = [];
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      Arr.push(absolutes[i] * 1);
    } else if (signs[i] === false) {
      Arr.push(absolutes[i] * -1);
    }
  }
  return Arr.reduce((acc, cum) => acc + cum);
}

// 삼항 연산자를 활용하면 아래처럼 가능
// function solution(absolutes, signs) {
//     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }
