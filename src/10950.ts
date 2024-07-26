import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const length = parseInt(input[0]);

for (let i = 1; i <= length; i++) {
  const [a, b] = input[i].split(' ').map((el) => parseInt(el));
  console.log(a + b);
}
