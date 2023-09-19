// 알파벳 소문자와 대문자로만 이루어진 길이가 N인 단어가 주어진다.

// 한 줄에 10글자씩 끊어서 출력하는 프로그램을 작성하시오.

// function printInChunks(input) {
//   const N = input.length;
//   const chunkSize = 10;

//   for (let i = 0; i < N; i += chunkSize) {
//     const chunk = input.slice(i, i + chunkSize);
//     console.log(chunk);
//   }
// }
// const word = "YourInputWordHere"; // 대문자와 소문자로 이루어진 단어를 입력하세요
// printInChunks(word);

let i = 0; // 초기값
const chunkSize = 10; // 한 번에 처리할 문자열 길이

// 반복문을 사용하여 문자열을 10글자씩 처리
for (i; i < 100; i += chunkSize) {
  console.log(`처리 시작 위치: ${i}`);
  // 여기에서 실제로 10글자씩 문자열을 처리하게 됩니다.
}
