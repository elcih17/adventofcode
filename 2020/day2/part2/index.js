const path = require("path");
const fs = require("fs");

const input = fs.readFileSync(path.join(__dirname, "input.txt"));
const data = input.toString().split("\n");

let count = 0;

for (const line of data) {
  if (!line) continue;

  const [cond, pw] = line.split(":").map((s) => s.trim());
  const [pos, letter] = cond.split(" ");
  const [pos1, pos2] = pos.split("-");
  const pos1contains = pw[pos1 - 1] === letter;
  const pos2contains = pw[pos2 - 1] === letter;
  if (pos1contains && pos2contains) continue
  if (pos1contains || pos2contains) count++
}

console.log('ans', count);
