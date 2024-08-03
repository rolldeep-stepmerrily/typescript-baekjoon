import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[1].split(' ').map((n) => parseInt(n));

const max = Math.max(...numbers);

const min = Math.min(...numbers);

console.log(min, max);
