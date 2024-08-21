import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = input[0].split(' ').reduce((acc, word) => {
  return word !== '' ? acc + 1 : acc;
}, 0);

console.log(count);
