import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const number = parseInt(input);

let sum = 0;

for (let i = 1; i <= number; i++) {
  sum += i;
}

console.log(sum);

//귀찮아서 let을 썼지만 let을 쓰기싫다면 reduce도 쓸수있긴함!

//const sum = Array(number)
//.fill()
//.reduce((acc, _, i) => acc + i + 1, 0);
