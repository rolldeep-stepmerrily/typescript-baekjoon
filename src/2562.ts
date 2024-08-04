import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input.map((n) => parseInt(n));

const max = Math.max(...numbers);

console.log(max);

const index = numbers.indexOf(max);

console.log(index + 1);
