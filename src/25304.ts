import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const totalPrice = parseInt(input[0]);
const totalQuantity = parseInt(input[1]);

let sum = 0;
for (let i = 2; i < totalQuantity + 2; i++) {
  const product = input[i].toString().trim().split(' ');

  const price = parseInt(product[0]);
  const quantity = parseInt(product[1]);

  sum += price * quantity;
}

const isCorrect = totalPrice === sum ? 'Yes' : 'No';

console.log(isCorrect);
