const path = require("path");
const fs = require("fs");

const input = fs.readFileSync(path.join(__dirname, "input.txt"));
const data = input.toString().split("\n");

// console.log("data", data);

const results = [];

data.forEach(seat => {
  if (!seat) return;

  const row = {
    min: 0,
    max: 127,
    last: "",
  };
  const col = {
    min: 0,
    max: 7,
    last: "",
  };

  // console.log('---------- seat ----------');

  seat.split("").forEach((char) => {
    if (char === "F") {
      row.max = row.max - Math.ceil((row.max - row.min) / 2);
      row.last = char;
    }
    if (char === "B") {
      row.min = row.min + Math.ceil((row.max - row.min) / 2);
      row.last = char;
    }
    if (char === "R") {
      col.min = col.min + Math.ceil((col.max - col.min) / 2);
      col.last = char;
    }
    if (char === "L") {
      col.max = col.max - Math.ceil((col.max - col.min) / 2);
      col.last = char;
    }
    // console.log(char, row, col);
  });

  const r = row.last === "F" ? row.min : row.max;
  const c = col.last === "R" ? col.min : col.max;

  const result = r * 8 + c;

  // console.log('result', row, col, result);

  results.push(result);
})

const ans = results.sort((a, b) => b - a)[0];

console.log("ans", ans);
