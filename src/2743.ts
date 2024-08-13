import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(input.length);
