import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);

const add = a + b;
const sub = a - b;
const multi = a * b;
const div = Math.floor(a / b);
const remain = a % b;

console.log(add);
console.log(sub);
console.log(multi);
console.log(div);
console.log(remain);
