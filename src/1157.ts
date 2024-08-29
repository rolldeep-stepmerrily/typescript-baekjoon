import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const count = Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  const index = alphabet.indexOf(input[i].toLowerCase());
  count[index]++;
}

const max = Math.max(...count);

if (count.filter((n) => n === max).length > 1) {
  console.log('?');
} else {
  console.log(alphabet[count.indexOf(max)].toUpperCase());
}
