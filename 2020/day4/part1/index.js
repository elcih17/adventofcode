const path = require("path");
const fs = require("fs");

const input = fs.readFileSync(path.join(__dirname, "input.txt"));
const data = input.toString().split("\n\n");

// console.log('data', data);

const REQUIRED_FIELDS = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

let count = 0

for (const passport of data) {
  const fields = passport.replace(/\s/g, '\n').split("\n");
  const keys = fields.map(f => f.split(':')[0])
  const valid = REQUIRED_FIELDS.every(field => {
    return keys.includes(field)
  })
  if (valid) count++
}

console.log('ans', count);
