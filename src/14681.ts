import * as fs from 'fs';

//아무리 시도해도 안돼서 찾아보니까 readFileSync('/dev/stdin') 으로 입력받으면 안되고 0으로 받아야하는 이상한 문제임..
const input = fs.readFileSync(0).toString().trim().split('\n');

const x = parseInt(input[0]);
const y = parseInt(input[1]);

if (x > 0 && y > 0) {
  console.log(1);
} else if (x < 0 && y > 0) {
  console.log(2);
} else if (x < 0 && y < 0) {
  console.log(3);
} else {
  console.log(4);
}
