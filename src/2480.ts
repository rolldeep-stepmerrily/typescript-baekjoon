import * as fs from 'fs';

function sortDesending(arr: number[]) {
  return arr.sort((x, y) => y - x);
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

const AandB = a === b;
const AandC = a === c;
const BandC = b === c;

if (AandB && BandC) {
  console.log(10000 + a * 1000);
} else if (AandB || AandC) {
  console.log(1000 + a * 100);
} else if (BandC) {
  console.log(1000 + b * 100);
} else {
  const sortedArr = sortDesending([a, b, c]);
  console.log(100 * sortedArr[0]);
}
