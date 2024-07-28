import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = parseInt(input[0]);

let result = '';
for (let i = 1; i <= count; i++) {
  const s = input[i].split(' ');

  const A = parseInt(s[0]);
  const B = parseInt(s[1]);

  result += `Case #${i}: ${A} + ${B} = ${(A + B).toString()}\n`;
}

console.log(result);
