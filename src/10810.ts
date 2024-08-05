import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const fisrtLine = input[0];
const countBuckets = parseInt(fisrtLine.split(' ')[0]);
const countThrow = parseInt(fisrtLine.split(' ')[1]);

const buckets = Array.from({ length: countBuckets }, () => 0);

for (let i = 0; i < countThrow; i++) {
  const [start, end, value] = input[i + 1].split(' ').map(Number);
  for (let j = start - 1; j < end; j++) {
    buckets[j] = value;
  }
}

console.log(buckets.join(' '));
