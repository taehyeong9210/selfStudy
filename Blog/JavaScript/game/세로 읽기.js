// 문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때
// 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.

// function solution(my_string, m, c) {
//     const arr = my_string.split('');
//     let words = [];
//     for (let i = 0; i < arr.length; i++ ) {
//          words.push(arr[m*i+c-1]);

//     }
//     const result = words.join('');
//     return result;
// }

function solution(my_string, m, c) {
  return Array.from(my_string).reduce((word, v, i) => {
    //array.from()은 문자열을 배열로바꿈
    return (i % m) + 1 === c ? word + v : word;
  }, "");
}
