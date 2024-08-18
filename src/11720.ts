import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[1].split('').map(Number);

const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
