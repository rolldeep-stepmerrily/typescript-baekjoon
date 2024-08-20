import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cases = parseInt(input[0]);

for (let i = 1; i <= cases; i++) {
  const [repeat, str] = input[i].split(' ');
  const result = str
    .split('')
    .map((char) => char.repeat(parseInt(repeat)))
    .join('');
  console.log(result);
}
