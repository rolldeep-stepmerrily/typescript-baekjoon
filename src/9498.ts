import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const number = parseInt(input[0]);

if (number >= 90 && number <= 100) {
  console.log('A');
} else if (number >= 80 && number <= 89) {
  console.log('B');
} else if (number >= 70 && number <= 79) {
  console.log('C');
} else if (number >= 60 && number <= 69) {
  console.log('D');
} else {
  console.log('F');
}
