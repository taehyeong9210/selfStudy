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
// const strArr1 = ["AAA", "BBB", "CCC", "DDD"];

// function solution(strArr) {
//   let Arr = strArr.map((n, index) => {
//     index % 2 === 1 ? n.toUpperCase() : n.toLowerCase();
//     console.log(Arr);
//   });
// }
// solution(strArr1);
// function solution(nums) {
//   const pick = new Set(nums);
//   return pick.length <= nums.length / 2 ? pick.length : nums.length / 2;
// }

// const nums = [3, 3, 3, 2, 2, 2];
// console.log(new Set(nums));

// const arr = [1, 1, 3, 3, 0, 1, 1];

// console.log(Array.from(new Set(arr)));

// console.log(getNumber());
// const x = 100;
// console.log(getNumber());
// function getNumber() {
//   return x;
// }
// console.log(getNumber());
// const $btn = document.getElementById('btn');
// const $game = document.getElementById('game');
// const $toggle = document.querySelector('.hidden');

// $btn.addEventListener('click', () => {
//     $game.classList.toggle('hidden');
//     $toggle.style.display = 'none';
// })

// const absolutes = [4, 7, -12];
// const absNums = absolutes.map((num, index) => {
//   return Math.abs(num);
// });
// console.log(absNums);

// function solution(numbers) {
//   let Arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let newArr = Arr.filter((n, index) => {
//     numbers.indexOf(n) === -1;
//   });
//   return newArr;
// }

// let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
// solution(numbers);

// function solution(X, Y) {
//   const newX = X.split("");
//   const newY = Y.split("");
//   const double = newX.filter((num) => newY.includes(num));
//   console.log(double);
// }
// const X = "23563";
// const Y = "2345";
// solution(X, Y);

function solution(ingredient) {
  let count = 0;
  const burger = "1231";
  const str = ingredient.join("");
  const startIndex = str.indexOf(burger);

  if (startIndex !== -1) {
    const slicedString = str.substr(startIndex, 4); // 4는 burger 문자열의 길이
    if (slicedString === burger) {
      count++;
    }
  }

  return count;
}

const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
solution(ingredient);
