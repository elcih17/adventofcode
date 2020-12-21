const path = require("path");
const fs = require("fs");

const input = fs.readFileSync(path.join(__dirname, "input.txt"));
const line = input.toString().split("\n");
const data = line.map((l) => l.split(""));

// console.log('data', data);

const TREE = '#'

let encount = 0

for (let i = 1; i < line.length; i++) {
  // the same pattern repeats to the right many times
  const x = (i * 3) % 31
  const y = i * 1

  const l = data[y]
  if (!l) break;

  const t = l[x]

  if (t === TREE) {
    encount++
  }
}

console.log('ans', encount);
