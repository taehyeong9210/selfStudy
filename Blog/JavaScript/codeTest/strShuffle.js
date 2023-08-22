// 문제 설명
// 길이가 같은 두 문자열 str1과 str2가 주어집니다.

// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ str1의 길이 = str2의 길이 ≤ 10
// str1과 str2는 알파벳 소문자로 이루어진 문자열입니다.


// const fn = (str1, str2) => {
//     let shuffle = '';
//     let result='';
//     for (let i = 0 ; i < str1.length ; i++) {
//         shuffle = str1[i]+str2[i];
//         result += shuffle;
//     }
//     console.log(result);
// }

// fn('aaacda', 'afsbbb');


// 더 쉽게는 이런식으로도 가능
const str1 = '1423';
const str2 = 'ksoe';

const b = str1.split('').map((i, index) => {
    return i + str2[index]
}).join('');
console.log(b);