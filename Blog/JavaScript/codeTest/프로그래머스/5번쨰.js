function solution(names) {
  const arr = [];
  names.forEach((name, index) => {
    if (index === 0 || index % 5 === 0) {
      arr.push(name);
    }
  });
  return arr;
}
