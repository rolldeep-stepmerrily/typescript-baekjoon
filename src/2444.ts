import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const number = parseInt(input);

for (let i = 1; i <= number; i++) {
  const space = ' '.repeat(number - i);
  const star = '*'.repeat(2 * i - 1);
  console.log(space + star);
}

for (let i = number - 1; i >= 1; i--) {
  const space = ' '.repeat(number - i);
  const star = '*'.repeat(2 * i - 1);
  console.log(space + star);
}
