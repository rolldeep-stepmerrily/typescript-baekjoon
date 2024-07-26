import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = parseInt(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
