import * as fs from 'fs';

const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const set = new Set(numbers.map((n) => n % 42));

console.log(set.size);
