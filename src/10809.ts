import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const array = new Array(26).fill(-1);
for (let i = 0; i < alphabet.length; i++) {
  const index = input.indexOf(alphabet[i]);
  array[i] = index;
}

console.log(array.join(' '));
