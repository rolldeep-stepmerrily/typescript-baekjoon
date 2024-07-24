import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const hour = parseInt(input[0]);
const minute = parseInt(input[1]);

if (minute < 45) {
  const time = hour === 0 ? `${hour + 23} ${60 - 45 + minute}` : `${hour - 1} ${60 - 45 + minute}`;

  console.log(time);
} else {
  console.log(`${hour} ${minute - 45}`);
}
