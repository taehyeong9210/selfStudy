// N이 주어질 때 00시00분00초부터 N시59분59초까지 3이 몇번이나 나오는지

let count = 0;

const time = (N) => {
  let count = 0;
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        if ((i.toString() + j.toString() + k.toString()).includes("3")) {
          count++;
        }
      }
    }
  }
  return console.log(count);
};

time(5);
