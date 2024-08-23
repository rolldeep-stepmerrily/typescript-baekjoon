import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const alphabets = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];

const result = input.split('').reduce((acc, cur) => {
  const dialIndex = alphabets.findIndex((alphabet) => alphabet.includes(cur));
  return acc + dialIndex + 3;
}, 0);

console.log(result);
