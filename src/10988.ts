import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

if (input.split('').reverse().join('') === input) {
  console.log(1);
} else {
  console.log(0);
}
