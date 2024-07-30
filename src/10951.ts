import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.forEach((line) => {
  const split = line.split(' ');
  const a = parseInt(split[0]);
  const b = parseInt(split[1]);

  console.log(a + b);
});
