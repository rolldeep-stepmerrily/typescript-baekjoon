import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

const result = input.map((str) => {
  return `${str[0]}${str[str.length - 1]}`;
});

console.log(result.join('\n'));
