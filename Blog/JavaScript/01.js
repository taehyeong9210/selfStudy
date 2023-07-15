// 문자열
// console.log('문자열이 긴 경우에는' + ' 문자열을' + ' 나눈 뒤' + ' 다시 합칩니다.');

// 숫자
// let a = '5';
// console.log(a);
// console.log(typeof(parseInt(a))); // parseInt는 정수형으로만 바뀜
// console.log(parseInt('3.14'));
// console.log(parseFloat('3.14')); // parseFloat은 실수형으로 바뀜
// console.log(5 + 4 * 3 !== 27);

// 변수
// let a = 3;
// let b = 5;
// let c = a;
//  a = b;
//  b = c;
//  console.log(a ,b);

// 조건문
// let value = 'banana';
// let condition = false;
// if (condition) {
//     value = 'apple';
// }else {
//     value = 'grape'
// }
// console.log(value);
// let value = 'ㅊ';
// switch ( value ) {
//     case 'A':
//         console.log('A');
//         break;
//     case 'B' :
//         console.log('B');
//         break;
//     case 'C' :
//         console.log('C');
//         break;
//     default : 
//         console.log("히히");
// }
// 5 > 0 ? console.log('참') : console.log('거짓');
// let condition1 = true;
// let condition2 = false;
// let value = condition1 ? condition2 ? console.log('둘다 참') : console.log('condition1만 참') : console.log('condition1이 거짓')

// 반복문
// let i = 1 
// while (i<100){
//     console.log('hi');
//     i++;
// }
// for ( i=1; i<=100; i++){
//     console.log(i);
// }
// let i = 0;
// while ( i < 10) {
//     i++;
//     if ( i % 2 === 1){
//         continue;
//     }
//     console.log(i);
// }
// for ( let i = 2; i <= 9; i++){
//     for (let j = 1; j <= 9; j++) {
//         let result = i * j;
//         if(result % 2 === 0 ) {
//             continue;
//         }
//         console.log(`${i} 곱하기 ${j}는 ${result}입니다.`)
        
//     }
//     console.log('');
// }

// 객체
// const arr = ['가', '라', '다', '라', '마', '라'];
// let index = arr.indexOf('라');
// while ( index > -1) {
//     arr.splice(index,1);
//     index = arr.indexOf('라');
// }
// console.log(arr);
// console.log(index);

// const arr = ['가', '라', '다', '라', '마', '라'];

// const newArr = [];
// for (let i=0; i<=arr.length-1; i++){
//     if (arr[i] !== '라') {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// every.splice(1, 0,'a', 'v');
// console.log(every);
// console.log(every.indexOf("가"));

// 함수
// const Multi = (x, y, z) => {
//     return z*y*z;
// }
// console.log(Multi(2,3,2));

//객체 리터럴
// const me = {
//     name : {first :'테형',
//             last : '김',},
//     gender : 'M',
// }

// console.log(me.name.last);