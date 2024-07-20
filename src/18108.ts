import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const budda = parseInt(input);

const jesus = budda - 543;

console.log(jesus);
