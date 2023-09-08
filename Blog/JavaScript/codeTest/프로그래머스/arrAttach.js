function solution(num_list, n) {
  const arr1 = num_list.slice(0, n);
  const arr2 = num_list.slice(n, num_list.length);
  console.log(arr1);
  console.log(arr2);
  return arr2.concat(arr1);
}
const num_list = [2, 1, 6];
solution(num_list, 1);
