import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const str = input[0];

const number = parseInt(input[1]);

console.log(str[number - 1]);
