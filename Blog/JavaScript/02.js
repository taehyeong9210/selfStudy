// const A = [3,5,4,2];
// const b = '4632';

// indexOf 이해
// A.forEach((number, Index) => {
//     const text = b.indexOf(String(number));
//     if (text > -1 ) {
//         console.log(` text = ${text}, index = ${Index}`);       
//     } 
// }) 

// forEach 이해
// const array = [1, 3, 5, 7];
// array.forEach((number , index) => {
//     console.log(number, index);
// })
// for ( let i = 0; i < 4; i++) {
//     console.log(array[i], i)
// }

// 피셔-에이츠 셔플 이해
// const candidate = Array(45).fill().map((v, i) => i + 1);
//         const shuffle = [];
//         for ( let i = candidate.length; i >= 0; i--) {
//             const random = Math.floor(Math.random()* candidate.length)
//             const spliceArray = candidate.splice(random, 1);
//             const value = spliceArray[0];
//             shuffle.push(value);
//             console.log(random);
//         }

// setTimeout
// setTimeout(()=>{
//     console.log('hello');
// },3500);

// date
// const one = new Date(2022, 1, 21);
// const two = new Date(2022, 2, 3);
// console.log(two - one); //밀리초 단위로 표시

// 이차원 배열
// const arr = [];
// for ( let i = 1; i <= 5; i++) {
//     const innerArr = [];
//     for (let j = 1; j <= 5; j++) {
//         innerArr.push(1);
//     } arr.push(innerArr);
// }
// console.log(arr);

// every
const arr = [1, 'hello', null, undefined, false];
const everyArr = arr.every(arr.indexOf(null));
console.log(everyArr);