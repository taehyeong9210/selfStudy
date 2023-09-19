// 문제
// N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

const fn = (nums) => {
  const arr = [];
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    arr.push(Number(nums[i]));
  }
  result = arr.reduce((acc, cum) => {
    return acc + cum;
  }, 0);
  return result;
};

console.log(fn(4231));
