const path = require("path");
const fs = require("fs");

const input = fs.readFileSync(path.join(__dirname, "input.txt"));
const data = input
  .toString()
  .split("\n\n")
  .map((s) => s.replace(/\n/g, ""));

// console.log("data", data);

const countYes = (answers) => {
  const questions = new Set();
  for (let i = 0; i < answers.length; i++) {
    if (questions.has(answers[i])) continue;
    questions.add(answers[i]);
  }
  return questions.size;
};

const counts = data.map(questions => {
  return countYes(questions)
})

// console.log('counts', counts);

const ans = counts.reduce((s, c) => s += c)

console.log('ans', ans);
