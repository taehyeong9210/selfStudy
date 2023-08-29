// const str = "134";
// const arrstr = str.split("");
// const arrre = arrstr.reverse();
// console.log(arrre);

// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "l") return arr.slice(0, i);
//     if (arr[i] === "r") return arr.slice(i + 1);
//   }
//   return [];
// }
// const arr = ["u", "u", "l", "r"];

// solution(arr);
const strArr1 = ["AAA", "BBB", "CCC", "DDD"];

function solution(strArr) {
  let Arr = strArr.map((n, index) => {
    index % 2 === 1 ? n.toUpperCase() : n.toLowerCase();
    console.log(Arr);
  });
}
solution(strArr1);
