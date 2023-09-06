function decryptMap(n, map1, map2) {
  const decryptedMap = [];

  for (let i = 0; i < n; i++) {
    // 각 줄의 지도를 이진수로 변환하고, 비트 OR 연산을 사용하여 두 지도를 합칩니다.
    const combinedRow = (map1[i] | map2[i]).toString(2);
    // 지도의 크기에 맞게 0을 채워줍니다.
    const paddedRow = combinedRow.padStart(n, "0");
    // 벽(#)과 공백(' ')으로 변환합니다.
    const decodedRow = paddedRow.replace(/0/g, " ").replace(/1/g, "#");
    decryptedMap.push(decodedRow);
  }

  return decryptedMap;
}

const n = 5; // 지도의 한 변의 길이
const map1 = [9, 20, 28, 18, 11]; // 지도 1의 암호화된 배열
const map2 = [30, 1, 21, 17, 28]; // 지도 2의 암호화된 배열

const result = decryptMap(n, map1, map2);
for (const row of result) {
  console.log(row); // 해독된 지도 출력
}
