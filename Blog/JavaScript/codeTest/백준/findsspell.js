// 첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.

// const fn = (word) => {
//   const AtoZ = "abcdefghijklmnopqrstuvwxyz";
//   for (let i = 0; i < 26; i++) {
//     return word.indexOf(AtoZ[i]);
//   }
// };

// const test = "gankplack";
// console.log(fn(test));

// function findFirstPositions(S) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     const positions = new Array(26).fill(-1); // -1로 초기화된 배열 생성

//     for (let i = 0; i < S.length; i++) {
//       const char = S[i];
//       const index = alphabet.indexOf(char);

//       if (index !== -1 && positions[index] === -1) {
//         // 해당 문자가 알파벳에 속하고, 처음 등장하는 경우에만 위치 저장
//         positions[index] = i;
//       }
//     }

//     return positions;
//   }

//   const input = 'gankplank'; // 대상 문자열을 여기에 입력하세요.
//   const result = findFirstPositions(input);

//   for (let i = 0; i < 26; i++) {
//     console.log(result[i]);
//   }
