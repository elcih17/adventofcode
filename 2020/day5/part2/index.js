const path = require("path");
const fs = require("fs");

const input = fs.readFileSync(path.join(__dirname, "input.txt"));
const data = input.toString().split("\n");

// console.log("data", data);

const seats = [];

data.forEach((seat) => {
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

  const id = r * 8 + c;

  // console.log('id', row, col, id);

  seats.push(id);
});

const findSeats = (seats) => {
  for (let i = 0; i < seats.length-1; i++) {
    if (seats[i + 1] - seats[i] > 1) {
      return seats[i] + 1
    }
  }
}

const ans = findSeats(seats.sort((a, b) => a - b));

console.log("ans", ans);
