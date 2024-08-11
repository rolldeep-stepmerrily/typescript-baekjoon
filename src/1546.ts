import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = parseInt(input[0]);

const points = input[1].split(' ').map((n) => parseInt(n));

const max = Math.max(...points);

const newPoints = points.map((n) => (n / max) * 100);

const newSum = newPoints.reduce((acc, cur) => acc + cur, 0);

const avg = newSum / count;

console.log(avg);
