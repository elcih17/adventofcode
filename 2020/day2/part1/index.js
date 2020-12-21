const path = require('path')
const fs = require("fs");

const input = fs.readFileSync(path.join(__dirname, "input.txt"));
const data = input.toString().split("\n");

let count = 0

for (const line of data) {
  if (!line) continue

  const [cond, pw] = line.split(':').map(s => s.trim())
  // console.log('cond', cond);
  // console.log('pw', pw);
  const [nums, word] = cond.split(' ')
  // console.log('nums', nums);
  // console.log('word', word);
  const [min, max] = nums.split('-')
  // console.log('min', min);
  // console.log('max', max);
  const wc = (pw.match(RegExp(`${word}`, 'g')) || []).length
  if (min <= wc && wc <= max) {
    count++
  }
}

console.log('ans', count);
