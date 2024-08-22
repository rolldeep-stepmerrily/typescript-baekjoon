import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const [a, b] = input.split(' ').map((number) => Number(number));

const reverse = (number: number) => {
  return Number(number.toString().split('').reverse().join(''));
};

console.log(Math.max(reverse(a), reverse(b)));
