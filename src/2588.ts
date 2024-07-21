import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

const b3 = b % 10;
const b2 = Math.floor(b / 10) % 10;
const b1 = Math.floor(b / 100);

console.log(a * b3);
console.log(a * b2);
console.log(a * b1);
console.log(a * b);
