const path = require("path");
const fs = require("fs");

const input = fs.readFileSync(path.join(__dirname, "input.txt"));
const data = input.toString().split("\n\n");

// console.log('data', data);

const REQUIRED_FIELDS = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const validators = {
  byr: (val) => {
    if (val.length !== 4) return false;
    const v = Number(val);
    if (v < 1920) return false;
    if (v > 2002) return false;
    return true;
  },
  iyr: (val) => {
    if (val.length !== 4) return false;
    const v = Number(val);

    if (v < 2010) return false;
    if (v > 2020) return false;
    return true;
  },
  eyr: (val) => {
    if (val.length !== 4) return false;
    const v = Number(val);

    if (v < 2020) return false;
    if (v > 2030) return false;
    return true;
  },
  hgt: (val) => {
    const num = Number(val.slice(0, -2));
    const unit = val.slice(-2);

    if (!['cm', 'in'].includes(unit)) return false

    if (unit === "cm") {
      if (num < 150) return false;
      if (num > 193) return false;
    }
    if (unit === "in") {
      if (num < 59) return false;
      if (num > 76) return false;
    }
    return true;
  },
  hcl: (val) => {
    return /^#[0-9a-f]{6}$/.test(val);
  },
  ecl: (val) => {
    return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(val);
  },
  pid: (val) => {
    const id = String(val);
    return /^[0-9]{9}$/.test(id);
  },
};

let count = 0;

for (const passport of data) {
  const fields = passport.replace(/\s/g, "\n").split("\n");
  const _fields = fields.map((f) => {
    const [k, v] = f.split(":");
    return { key: k, val: v };
  });

  const valid = REQUIRED_FIELDS.every((requiredField) => {
    const field = _fields.find((f) => f.key === requiredField);
    if (!field) return false;
    return validators[field.key](field.val);
  });
  if (valid) count++;
}

console.log("ans", count);
