// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면
// 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

const solution = (n) => n.reduce((a, v) => (n.length > 10 ? a + v : a * v));
