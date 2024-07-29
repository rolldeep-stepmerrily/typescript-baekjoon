import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const count = parseInt(input);

let result = '';
for (let i = 1; i <= count; i++) {
  for (let j = count; j > i; j--) {
    result += ' ';
  }
  for (let j = 1; j <= i; j++) {
    result += '*';
  }

  result += '\n';
}

console.log(result);
