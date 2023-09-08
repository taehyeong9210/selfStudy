// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n) {
  // 숫자를 문자열로 변환
  const nString = n.toString();

  // 문자열을 배열로 분할하고 각 문자열을 정수로 변환하여 합산
  const sum = nString.split("").reduce((acc, curr) => {
    return acc + parseInt(curr, 10);
  }, 0); // 초기값 0을 설정

  return sum;
}
