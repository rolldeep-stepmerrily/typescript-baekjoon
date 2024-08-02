import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const firstLine = input[0].split(' ');
const count = parseInt(firstLine[0]);
const target = parseInt(firstLine[1]);

const secondLine = input[1].split(' ');

const reuslt = secondLine.filter((n) => parseInt(n) < target);

console.log(reuslt.join(' '));
