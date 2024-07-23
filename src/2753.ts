import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const number = parseInt(input);

if ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
