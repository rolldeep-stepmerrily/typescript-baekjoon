import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((n) => parseInt(n));

const buckets = Array.from({ length: N }, (_, index) => index + 1);

const reverseBuckets = (buckets: number[], start: number, end: number) => {
  while (start < end) {
    [buckets[start], buckets[end]] = [buckets[end], buckets[start]];
    start++;
    end--;
  }
};

for (let i = 0; i < M; i++) {
  const [start, end] = input[i + 1].split(' ').map((n) => parseInt(n));
  reverseBuckets(buckets, start - 1, end - 1);
}

console.log(buckets.join(' '));
