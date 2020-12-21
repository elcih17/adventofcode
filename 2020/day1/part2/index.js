const fs = require("fs");

const input = fs.readFileSync("./input.txt");
const data = input.toString().split("\n");

let pair = []

for (let i = 0; i < data.length; i++) {
  if (pair.length < 2) {
    pair.push(Number(data[i]))
    continue
  }

  if (pair[0] + pair[1] + pair[2] === 2020) {
    break;
  }

  pair = [pair[0], pair[1], Number(data[i])].sort((a,b) => a - b)
}


console.log('pair', pair);

const ans = pair.reduce((t, n) => t *= n)
console.log(ans);
