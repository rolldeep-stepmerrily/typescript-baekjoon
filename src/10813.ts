import * as fs from 'fs';

const input: string[] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const fisrtLine = input[0];
const countBuckets = parseInt(fisrtLine.split(' ')[0]);
const countChange = parseInt(fisrtLine.split(' ')[1]);

const buckets = Array.from({ length: countBuckets }, (_, i) => i + 1);

for (let i = 0; i < countChange; i++) {
  const [start, end] = input[i + 1].split(' ').map(Number);

  [buckets[start - 1], buckets[end - 1]] = [buckets[end - 1], buckets[start - 1]];
}

console.log(buckets.join(' '));
