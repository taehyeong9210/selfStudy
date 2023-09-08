function solution(num_list, n) {
  const result = [];
  for (let i = 0; i < num_list.length / n; i++) {
    i === 0 ? result.push(num_list[0]) : result.push(num_list[i * n]);
  }
  return result;
}
