const path = require("path");
const fs = require("fs");

const input = fs.readFileSync(path.join(__dirname, "input.txt"));
const line = input.toString().split("\n");
const data = line.map((l) => l.split(""));

// console.log('data', data);

const TREE = "#";

const traverse = (right, down) => {
  let encount = 0;

  for (let i = 1; i < line.length; i++) {
    // the same pattern repeats to the right many times
    const x = (i * right) % 31;
    const y = i * down;

    const l = data[y];
    if (!l) break;

    const t = l[x];

    if (t === TREE) {
      encount++;
    }
  }

  return encount;
};

const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const ans = slopes
  .map((slope) => {
    const [right, down] = slope;
    return traverse(right, down);
  })
  .reduce((t, n) => (t *= n));

console.log('ans', ans);
