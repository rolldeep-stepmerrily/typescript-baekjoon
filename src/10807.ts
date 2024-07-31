import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = parseInt(input[0]);
const numbers = input[1].split(' ').map((n) => parseInt(n));
const target = parseInt(input[2]);

let result = 0;

for (let i = 0; i < count; i++) {
  if (numbers[i] === target) {
    result++;
  }
}

console.log(result);
