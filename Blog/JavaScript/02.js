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
// const arr = [1, 'hello', null, undefined, false];
// const everyArr = arr.every(arr.indexOf(null));
// console.log(everyArr);

// 깊은 복사
// const a = 'b';
// const c = ['d', true, 1];
// const e = {g: 'h'};
// const i = [{j : 'k', l: 'm'}];

// 얕은 복사, 깊은 복사
// 얕은 복사는 껍데기 배열은 복사, 내부 객체는 참조(하나를 바꾸면 다른 하나도 바뀜)
// 깊은 복사는 모든 참조가 끊기고 복사(하나를 바꿔도 다른 하나에 영향이 없음)
// 원시값은 참조가 없음
// const copy = JSON.parse(JSON.stringify(c));
// copy[0]= 1;
// console.log(copy);
// console.log(c);

// this는 객체안에서는 객체 자신(객체.메서드), 일반적으로는 window
// 화살표 함수 내 this는 의도와 다르게 작동할 수 있다.따라서 화살표 함수 내에서는 this를 지양하자.

// document.addEventListener('click', function() {
//     console.log(this);
// })
// const fn = () =>{
//     return console.log('hi');
// };

// const fn2 = fn();
// fn2();

// let a = [1, 2, 3];
// let c = [4, 5];
// let b = a.concat(c)
// console.log(b);

// function a () {
//     b();
// }
// function b () {
//     console.trace();
// }
// a();

// function aaa () {
//     setTimeout(() => {
//         console.log('d');
//     }, 0);
//     console.log('c');
// }

// setTimeout(() => {
//     console.log('a');
//     aaa();
// }, 0);

// setTimeout(() => {
//     aaa();
//     console.log('b')
// }, 0);

const candidate = Array(45).fill().map((v, i) => i+1);

const shuffle = [];

while (candidate.length > 0) {
const random = Math.floor(Math.random()*candidate.length);
const spliceArray = candidate.splice(random,1);
const value = spliceArray[0];
shuffle.push(value);
};
console.log(shuffle);