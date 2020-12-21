const fs = require("fs");

const input = fs.readFileSync("./input.txt");
const data = input.toString().split("\n");

// console.log('data', data);

const pair = [];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (Number(data[i]) + Number(data[j]) === 2020) {
      pair.push(...[data[i], data[j]]);
    }
    if (pair.length !== 0) break;
  }
  if (pair.length !== 0) break;
}

console.log('pair', pair);

const ans = pair[0] * pair[1];
console.log(ans);
