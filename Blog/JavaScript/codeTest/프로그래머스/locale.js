// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로
//  오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의
//  인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

function solution(strings, n) {
  // 문자열 배열을 정렬, 비교 함수를 사용하여 n번째 문자를 기준으로 정렬.
  strings.sort(function (a, b) {
    const charA = a[n];
    const charB = b[n];

    if (charA === charB) {
      // n번째 문자가 같을 경우, 문자열 전체를 비교
      return a.localeCompare(b);
    } else {
      return charA.localeCompare(charB); // charA가 charB 보다 앞에 있으면 음수 값 반환
    }
  });

  return strings;
}
