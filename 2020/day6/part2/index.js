const path = require("path");
const fs = require("fs");

const input = fs.readFileSync(path.join(__dirname, "input.txt"));
const data = input.toString().split("\n\n");

console.log("data", data);

const countYes = (answers) => {
  const questions = new Set();
  for (let i = 0; i < answers.length; i++) {
    if (questions.has(answers[i])) continue;
    questions.add(answers[i]);
  }
  return questions.size;
};

const counts = data.map((group) => {
  const map = new Map();

  const answers = group.split("\n").filter((v) => v);

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < answers[i].length; j++) {
      const k = answers[i][j];
      if (map.get(k)) {
        const v = map.get(k);
        map.set(k, v + 1);
        continue;
      }
      map.set(k, 1)
    }
  }

  let count = 0

  for (let [k, v] of map) {
    if (v === answers.length) {
      count++
    }
  }

  return count
});

const ans = counts.reduce((s, c) => s += c)

console.log('ans', ans);
