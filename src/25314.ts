import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const number = parseInt(input);

const repeat = Math.floor(number / 4);

let result = '';
for (let i = 0; i < repeat; i++) {
  result += 'long ';
}

result += 'int';

console.log(result);
